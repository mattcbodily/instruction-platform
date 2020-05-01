import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ProfileModule from './DashModules/ProfileModule/ProfileModule';
import CourseModule from './DashModules/CourseModule/CourseModule';
import AnalyticsModule from './DashModules/AnalyticsModule/AnalyticsModule';
import ScheduleModule from './DashModules/ScheduleModule/ScheduleModule';
import './Dashboard.scss';

const Dashboard = props => {
    useEffect(() => {
        if(!props.user.email){
            props.history.push('/')
        }
    }, [])
    
    return (
        <div className='dashboard'>
            <ProfileModule />
            <CourseModule />
            <AnalyticsModule />
            <ScheduleModule />
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);