import React, { useState } from 'react';
import "./UserEmail.css";
import useStore from '../../../store';

const UserEmail = ({ onNext }) => {

    const { setEmailData } = useStore((state) => state);

    const [email, setEmail] = useState("");

    const emailInputHandler = (e) => {
        setEmail(e.target.value)
    }

    const emilBtnHandler = () => {
        if (!email) {
            return;
        }
        setEmailData(email);
        onNext();
    }

    return (
        <>
            <div className='user-email-container'>
                <div className='user-email-left-side'>
                    <div className='step-1'>step 1</div>
                    <div className='heading-div'>
                        Enter your email <br />
                        address to continue
                    </div>
                    <div className='para-heading'>
                        Log in to your account.If you don't have <br />
                        one,you will be promoted to create one.
                    </div>
                </div>
                <div className='user-email-right-side'>
                    <div className='user-email-div'>
                        <input
                            type="text"
                            className='email-input'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={emailInputHandler}
                        />
                    </div>
                    <div className='email-btn-div'>
                        <button className='email-btn-style' onClick={emilBtnHandler}>Continue</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserEmail