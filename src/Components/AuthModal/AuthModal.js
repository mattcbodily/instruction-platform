import React, {useState} from 'react';
import './AuthModal.scss';

export default props => {
    const [firstName, setFirstName] = useState(''),
          [lastName, setLastName] = useState(''),
          [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [verPassword, setVerPassword] = useState('');

    return (
        <div className='auth-modal-backdrop'>
            <section className='auth-modal'>
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
                <button>Next</button>
            </section>
        </div>
    )

}