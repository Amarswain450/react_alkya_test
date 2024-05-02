import React from 'react'
import "./Card.css"
import logoIcon from "../../../assets/Logo.png"

const Card = ({children}) => {
    return (
        <>
            <div className='card-main-container'>
                <div className='logo-img-div'>
                    <img src={logoIcon} alt={logoIcon} />
                </div>
                {children}
            </div>
        </>
    )
}

export default Card