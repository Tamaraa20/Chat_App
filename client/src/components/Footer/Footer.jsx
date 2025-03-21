import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='footer'>
            <div className='nav'>
                <Link to="/" className='link' >HOME</Link>
                <Link to="/about" className='link'>ABOUT</Link>
                <div className='icons'>
                    <FaInstagram />
                    <FaFacebook />
                    <FaLinkedin />
                    <FaTwitter />
                </div>
            </div>
            <div className='rights'>
                <i> ©2024 Chatly | All rights reserved </i>
            </div>
        </section>
    )
}

export default Footer