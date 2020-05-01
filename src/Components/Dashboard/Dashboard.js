import React from 'react';
import {connect} from 'react-redux';
import './Dashboard.scss';

const Dashboard = props => {
    console.log(props);
    return (
        <div className='dashboard'>
            I am dashboard, hear me roar
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);