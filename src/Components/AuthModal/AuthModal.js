import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './AuthModal.scss';

export default props => {
    const [step, setStep] = useState(1),
          [firstName, setFirstName] = useState(''),
          [lastName, setLastName] = useState(''),
          [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [verPassword, setVerPassword] = useState(''),
          [subPlans, setSubPlans] = useState([]),
          [selectedPlan, setSelectedPlan] = useState(null);

    useEffect(() => {
        axios.get('/api/plans')
        .then(res => setSubPlans(res.data))
        .catch(err => console.log(err))
    }, [])

    const handleRegister = () => {
        if(!password || password !== verPassword){
            return alert("Passwords don't match")
        }
        axios.post('/api/register', {firstName, lastName, email, password, planId: selectedPlan})
        .then(res => {
            console.log(res.data)
            //do something with user data
        })
        .catch(err => console.log(err))
    }

    const registerSteps = () => {
        switch(step){
            case 1:
                return (
                    <section className='auth-modal'>
                        <svg id='close-icon' onClick={props.toggleFn} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
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
                        <svg id='close-icon' onClick={props.toggleFn} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                        <h3>Choose Your Plan</h3>
                        {subPlans.map((plan, i) => (
                            <div key={i} className='subscription-box' onClick={() => setSelectedPlan(plan.plan_id)}>
                                <span className='price'>${plan.price}/month</span>
                            </div>
                        ))}
                        <button onClick={() => setStep(1)}>Previous</button>
                        <button onClick={() => setStep(3)}>Next</button>
                        <div className='dot-flex'>
                            <div className='dot active'></div>
                            <div className='dot active'></div>
                            <div className='dot'></div>
                        </div>
                    </section>
                )
            case 3:
                return (
                    <section className='auth-modal'>
                        <svg id='close-icon' onClick={props.toggleFn} xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>
                        </svg>
                        <h3>Review Your Info</h3>
                        <p>{firstName} {lastName}</p>
                        <p>{email}</p>
                        <p>${subPlans[selectedPlan - 1].price}/month Plan</p>
                        <button onClick={() => setStep(2)}>Previous</button>
                        <button onClick={handleRegister}>Complete</button>
                        <div className='dot-flex'>
                            <div className='dot active'></div>
                            <div className='dot active'></div>
                            <div className='dot active'></div>
                        </div>
                    </section>
                )
                //add a step for stripe payment collection when applicable
            default:
                return;
        }
    }

    //consider switching this to conditional rendering instead of switch statement
    return (
        <div className='auth-modal-backdrop'>
            {registerSteps()}
        </div>
    )

}