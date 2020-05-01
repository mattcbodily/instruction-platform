import React from 'react';
import {connect} from 'react-redux';
import './ProfileModule.scss';

const ProfileModule = props => (
    <div className='profile-module'>
        <h3>{props.user.first_name} {props.user.last_name}</h3>
    </div>
)

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(ProfileModule);