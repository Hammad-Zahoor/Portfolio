import React from 'react';
import Navbar from "../components/navbar"
import linkedInImage from '../images/linkedIn.png';
import githubImage from '../images/github.png';
import profileImage from '../images/hammad.JPG';
import "../screens/home.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="title">
                <img className="profile-pic img-fluid" src={profileImage} alt="Profile" />
                <div className='home-about'>
                    <h1>Full Stack Web Developer</h1>
                    <h3>About Me</h3>
                    <p>
                        I am a passionate and dedicated web developer currently pursuing a Bachelor's degree in Computer Science at FAST NUCES.
                        I have a strong interest in modern web technologies, including the MERN and MEAN stacks, MySQL, and JavaScript.
                    </p>
                    <div className="social-icons">
                        <Link to="https://www.linkedin.com/in/hammad-zahoor-5a251a230/">
                            <img className="png img-fluid" src={linkedInImage} alt="LinkedIn" />
                        </Link>
                        <Link to="https://github.com/Hammad-Zahoor">
                            <img className="png img-fluid" src={githubImage} alt="GitHub" />
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
