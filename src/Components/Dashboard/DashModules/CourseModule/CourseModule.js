import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CourseModule.scss';

const CourseModule = props => {
    const [courses, setCourses] = useState([]),
          [courseName, setCourseName] = useState(''),
          [description, setDescription] = useState('');

    return (
        <div className='course-module'>
            {courses.length
            ? null
            : (<>
                <p>You don't have any courses!</p>
                <button>Create one here</button>
               </>)}
        </div>
    )
}


export default CourseModule;