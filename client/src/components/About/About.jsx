import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import imgAbout1 from '../../assets/about1.jpg'
import imgAbout2 from '../../assets/about2.jpg'
import './About.css'

const About = () => {
    return (
        <>
            <Navbar />
            <section className='AboutSection1'>
                <div className='text1'>
                    <h1>At Chatly, we believe in the power of connection.</h1>
                    <br />
                    <p>
                        Our platform was born out of a simple idea: to create a space where people from
                        all walks of life can come together, share experiences, and build lasting relationships.
                    </p>
                    <br />
                    <p> Whether you're a passionate gamer, a dedicated student, or a hobbyist looking
                        to connect with others who share your interests, ChatNest is your home on the web.</p>
                </div>
                <div className='image'>
                    <img src={imgAbout1} alt="" />
                </div>
            </section>
            
            <section className='AboutSection2'>

                <div className='image'>
                    <img src={imgAbout2} alt="" />
                </div>
                <div className='text2'>
                    <h1> What Sets Us Apart</h1>
                    <br></br>
                    <li>
                        Seamless Communication: Our intuitive interface and robust features make it easy
                        to communicate with others in real-time. From text chat to voice channels, we offer a
                        variety of tools to suit your preferred method of communication.
                    </li>
                    <li>
                        Customizable Experience: Tailor your experience to suit your needs with our extensive
                        customization options. From unique server settings to personalized profiles, you have
                        the freedom to create a space that reflects your identity and interests.
                    </li>
                    <li>Safe and Secure: Your safety is our top priority. We employ industry-leading security
                        measures to ensure that your data remains protected and your privacy is respected
                        at all times.</li>
                    <li>
                        Dedicated Support: Have a question or need assistance? Our dedicated support team is
                        here to help. Whether you're experiencing technical difficulties or simply need guidance,
                        we're always just a click away.
                    </li>
                </div>

            </section>

            <Footer />
        </>

    )
}

export default About