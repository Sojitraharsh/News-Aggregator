import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import SignUpForm from './SignUpForm' ;
import SignInForm from './SignInForm' ;
import toast from 'react-hot-toast';

const Auth = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='wrapper'>
            <div className={`container2 ${isActive ? 'active' : ''} `} id="container2">
            <div className="form-container2 sign-up">
                <SignUpForm />
            </div>
            <div className="form-container2 sign-in">
                <SignInForm />
            </div>
            <div className="toggle-container2">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1 className='font-bold text-3xl'>Welcome Back!</h1>
                        <p>Enter your personal details to use all of site features</p>
                        <button className="" id="login" onClick={() => setIsActive(false)}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1 className='font-bold text-3xl'>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        <button className="" id="register" onClick={() => setIsActive(true)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Auth;