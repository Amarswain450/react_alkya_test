import React, { useState } from 'react'
import "./Auth.css"
import Card from '../../components/shared/Card/Card'
import UserEmail from './UserEmail/UserEmail'
import UserPassword from './UserPassword/UserPassword'

const steps = {
    1: UserEmail,
    2: UserPassword
}

const Auth = () => {

    const [step, setStep] = useState(1);
    const Step = steps[step];

    const onNext = () => {
        setStep(step + 1);
    }

    return (
        <>
            <div className='auth-main-container'>
                <Card>
                    <Step onNext={onNext} />
                </Card>
            </div>
        </>
    )
}

export default Auth