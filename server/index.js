require('dotenv').config();
const express = require('express'),
      authCtrl = require('./controllers/authCtrl'),
      {SERVER_PORT} = process.env,
      app = express();

app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))