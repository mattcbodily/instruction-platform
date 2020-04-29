import React, {useState} from 'react';
import './AuthModal.scss';

export default props => {
    const [step, setStep] = useState(1),
          [firstName, setFirstName] = useState(''),
          [lastName, setLastName] = useState(''),
          [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [verPassword, setVerPassword] = useState('');

    const registerSteps = () => {
        switch(step){
            case 1:
                return (
                    <section className='auth-modal'>
                        <svg id='close-icon' onClick={props.toggleFn} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                        <h3>Create Your Account</h3>
                        <input 
                            value={firstName}
                            placeholder='First Name'
                            onChange={(e) => setFirstName(e.target.value)}/>
                        <input 
                            value={lastName}
                            placeholder='Last Name'
                            onChange={(e) => setLastName(e.target.value)}/>
                        <input 
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}/>
                        <input 
                            type='password'
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}/>
                        <input
                            type='password' 
                            value={verPassword}
                            placeholder='Verify Password'
                            onChange={(e) => setVerPassword(e.target.value)}/>
                        <button onClick={() => setStep(2)}>Next</button>
                        <div className='dot-flex'>
                            <div className='dot active'></div>
                            <div className='dot'></div>
                            <div className='dot'></div>
                        </div>
                    </section>
                )
            case 2:
                return (
                    <section className='auth-modal'>
                        <div className='dot-flex'>
                            <div className='dot active'></div>
                            <div className='dot active'></div>
                            <div className='dot'></div>
                        </div>
                    </section>
                )
            default:
                return;
        }
    }

    return (
        <div className='auth-modal-backdrop'>
            {registerSteps()}
        </div>
    )

}