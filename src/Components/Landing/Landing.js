import React from 'react';
import toggle from '../../HOCs/toggle';
import AuthModal from '../AuthModal/AuthModal';
import './Landing.scss';

const Landing = props => {
    return (
        <div className='landing'>
            <section>
                <h1>Welcome to Preceptive</h1>
                <h3>The all-in-one platform for tutors and private instructors</h3>
                <button onClick={props.toggleObj.toggleFn}>Get Started</button>
                {props.toggleObj.value ? <AuthModal /> : null}
            </section>
            <section>
                This section will explain what we do
            </section>
        </div>
    )
}

export default toggle(Landing);