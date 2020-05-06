import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './CourseModule.scss';

const CourseModule = props => {
    const [courses, setCourses] = useState(['hello']),
          [courseName, setCourseName] = useState(''),
          [description, setDescription] = useState('');

    useEffect(() => {
        axios.get(`/api/courses/${props.user.user_id}`)
        .then(res => setCourses(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
        <div className='course-module'>
            {courses.length
            ? courses.map((course, i) => (
                <section key={i}>I am course, hear me roar</section>
            ))
            : (<>
                <p>You don't have any courses!</p>
                <button>Create one here</button>
               </>)}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(CourseModule);