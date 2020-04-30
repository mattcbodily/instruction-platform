const bcrypt = require('bcryptjs'),
      nodemailer = require('nodemailer'),
      {EMAIL, EMAIL_PASSWORD} = process.env;

module.exports = {
    register: async(req, res) => {
        const {firstName, lastName, email, password, instructor, planId} = req.body,
              db = req.app.get('db');

        const foundUser = await db.auth.check_user({email});
        if(foundUser[0]){
            return res.status(400).send('Email already in use')
        }

        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);

        const newUser = await db.auth.register_instructor({firstName, lastName, email, hash, instructor});
        db.subscriptions.add_user_subscription({userId: newUser[0].user_id, planId});

        let transporter = nodemailer.createTransport({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            service: 'yahoo',
            secure: false,
            auth: {
                user: EMAIL,
                pass: EMAIL_PASSWORD
            }
        });

        let info = await transporter.sendMail({
            from: `Preceptive <${EMAIL}>`,
            to: newUser[0].email,
            subject: 'Welcome!',
            text: 'Welcome to Preceptive. Get started!',
            html: `<div>Welcome to Preceptive. Get started!</div>`,
            attachments: []
        }, (err) => {
            if(err){
                console.log(err)
            }
        });

        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },
    login: async(req, res) => {
        const {email, password} = req.body,
              db = req.app.get('db');

        const foundUser = await db.auth.check_user({email});
        if(!foundUser[0]){
            return res.status(400).send('Email not found')
        }

        const authenticated = bcrypt.compareSync(password, foundUser[0].password);
        if(!authenticated){
            return res.status(401).send('Password is incorrect');
        }

        delete foundUser[0].password;
        req.session.user = foundUser[0];
        res.status(202).send(req.session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
};