import React from 'react'
import Navbar from "../components/navbar"
import "../screens/skills.css"

function skills() {
  return (
    <>
    <Navbar></Navbar>
    <div className="skills-box">
    <h1 style={{color:'rgb(137, 241, 146)'}}>Skills</h1>
        <h5 style={{color:'rgb(137, 241, 146)'}}>Frameworks</h5>
        <div className='skills-about'>
            <h5>MERN , MEAN </h5>
        </div>
        <h5 style={{color:'rgb(137, 241, 146)'}}>Languages</h5>
        <div className='skills-about'>
            <h5>JavaScript , TypeScript , C++ , Python , MySQL , HTML , CSS(Bootstrap , Tailwind)</h5>
        </div>
        <h5 style={{color:'rgb(137, 241, 146)'}}>Tools</h5>
        <div className='skills-about'>
            <h5>Visual Studio , Figma , Github , Postman , Poweshell</h5>
        </div>
    </div>
    </>
  )
}

export default skills