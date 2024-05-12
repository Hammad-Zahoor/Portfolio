import React from 'react'
import Navbar from "../components/navbar"
import "../screens/experience.css"

function experience() {
  return (
    <>
    <Navbar></Navbar>
    <div className="experience-box">
    <h1 style={{color:'rgb(137, 241, 146)'}}>Experience</h1>
        <div className='experience-about'>
            <h5>1. Upwork : Data Scrapping using Selenium</h5>
        </div>
        <div className='experience-about'>
            <h5>2. Currently doing a remote Internship on Web Development</h5>
        </div>
    </div>
    </>
  )
}

export default experience