import React from 'react';
import Navbar from "../components/navbar";
import "../screens/contact.css";
import { Link } from 'react-router-dom';
import linkedInImage from '../images/linkedIn.png';
import githubImage from '../images/github.png';

const githubLink = "https://github.com/Hammad-Zahoor";
const linkedInLink = "https://www.linkedin.com/in/Hammad-Zahoor"; // Correct LinkedIn link

function contact() {
    return (
        <>
            <Navbar />
            <div className='contact-box'>
                <h1 style={{color:'rgb(137, 241, 146)'}}>Contacts</h1>
                <h4>Email: zahoorhammad921@gmail.com</h4>
                <Link className='link' to={linkedInLink} target="_blank">
                    <img className="png img-fluid" src={linkedInImage} alt="LinkedIn" />
                    <p style={{ marginLeft: '10px' }}> Hammad-Zahoor</p>
                </Link>
                <Link className='link' to={githubLink} target="_blank">
                    <img className="png img-fluid" src={githubImage} alt="GitHub" />
                    <p style={{ marginLeft: '10px' }}> Hammad-Zahoor</p>
                </Link>
            </div>
        </>
    );
}

export default contact;
