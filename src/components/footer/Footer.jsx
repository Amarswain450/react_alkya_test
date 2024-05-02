import React from 'react';
import "./Footer.css";
import { LuFacebook } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs";
import { LuTwitter } from "react-icons/lu";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <>
            <div className="footer-main-container">
                <div className="footer-component">
                    <div className='icon-div'>
                        <LuFacebook size={30} color='#FFFFFF' />
                        <BsInstagram size={30} color='#FFFFFF' />
                        <LuTwitter size={30} color='#FFFFFF' />
                        <MdChatBubbleOutline size={30} color='#FFFFFF' />
                        <FiYoutube size={30} color='#FFFFFF' />
                    </div>
                    <div className='footer-content'>
                        <div className="footer-content-left">
                            <div className="footer-content-left-one">
                                <div>
                                    Privacy Policy
                                </div>
                                <div>
                                    Privacy Policy
                                </div>
                            </div>
                            <div className="footer-content-left-two">
                                <div>
                                    Contact Us
                                </div>
                                <div>
                                    Contact Us
                                </div>
                            </div>
                        </div>
                        <div className="footer-content-right">
                            <div className="footer-content-right-one">
                                <div>
                                    Cookie preferences
                                </div>
                                <div>
                                    Cookie preferences
                                </div>
                            </div>
                            <div className="footer-content-right-two">
                                <div>
                                    Corporate Information
                                </div>
                                <div>
                                    Corporate Information
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='copy-div'>
                        © Alkye Test
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer