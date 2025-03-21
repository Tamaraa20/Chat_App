import React from 'react'
import Navbar from '../NavBar/Navbar'
import picture5 from '../../assets/p1.png'
import picture2 from '../../assets/photo-1515529706504-b440b49fb63b.avif'
import picture1 from '../../assets/img1.jpg'
import picture3 from '../../assets/p2.PNG'
import picture4 from '../../assets/design.png'
import './Home.css'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='section1'>
        <div className='about'>
          <h1>Welcome to Chatly, where communities thrive and connections flourish!</h1>
          <br />
          <br />
          <p> Our platform is designed to bring people together, empower communication,
            and foster collaboration in a fun and inclusive environment.
            Join friends, family, or colleagues and start building your community today!</p>
          <br />
        </div>
        <div className='imgPhone'>
          <img src={picture5} alt="" />
        </div>
      </section>

      <section className='section2'>
        <div className="imgLaptop">
          <img src={picture3} alt="" />
        </div>
        <div className='about'>
          <h1>Create an invite-only place where you belong</h1>
          <br />
          <br />
          <p>Chatly servers are organized into topic-based channels where you can collaborate,
            share, and just talk about your day without clogging up a group chat.</p>
        </div>

      </section>

      <section className='section3'>
        <div className='about'>
          <h1>Texts, calls and more</h1>
          <br />
          <br />
          <p> Enjoy free texting, calling, video chatting, and voice messaging. 
            Stay connected with friends and communities no matter where you are, 
            and make your conversations more meaningful with fun features like GIFs and reactions.</p>
        </div>
        <div className='imgPhone'>
          <img src={picture2} alt="" />
        </div>
      </section>

      <section className='section4'>
        <div className='SignUp'>
          <h1>Start your group journey</h1>
          <br />
         
          <div className='effect'>
          <p>It's simple and totally free.</p>
          </div>
       
          <br />
          <button >
            <Link to="/auth" className="nav-link"> Sign Up For Free</Link>
          </button>
        </div>
      </section>

      <Footer />
    </>

  )
}

export default Home