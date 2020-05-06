module.exports = {
    getInstructorCourses: (req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.courses.get_instructor_courses({id})
        .then(courses => res.status(200).send(courses))
        .catch(err => console.log(err));
    },
    createCourse: (req, res) => {
        const {courseName, description, id} = req.body,
              db = req.app.get('db');

        db.courses.create_course({courseName, description, id})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}