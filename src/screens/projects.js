import React from 'react'
import Navbar from "../components/navbar"
import "../screens/projects.css"

function projects() {
    return (
        <>
            <Navbar />
            <div className='projects-box'>
                <h1 style={{color:'rgb(137, 241, 146)'}}>Click to See Project Details</h1>
                <div className='projects-about'>
                    <p class="d-inline-flex gap-1">
                        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                            RentIt - FYP
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample1">
                        <div class="card card-body">
                            <p>It is a consumer-to-consumer online platform where you may rent things that you own and renters make informed decisions through insightful reviews from previous renters.</p>
                            <p>It uses Express and Node JS for backend and integrated with a dynamic React JS frontend and MySQL for database.</p>
                            <p>It uses machine learning techniques in Python to craft a recommendation engine for enhancing user experience.</p>
                            <p>Safety Measures like encryption, decryption, filters are applied according to Industry Standards.</p>
                        </div>
                    </div>
                </div>
                <div className='projects-about'>
                    <p class="d-inline-flex gap-1">
                        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                            Task Genie
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample2">
                        <div class="card card-body">
                            <p>Developed an angular website in which user can track his daily tasks and updates himself.</p>
                            <p>Objectives included implementing a responsive website and have different features like register, sign-in, add tasks, remove
                                tasks, save tasks, set timer and generate reports.</p>
                        </div>
                    </div>
                </div>
                <div className='projects-about'>
                    <p class="d-inline-flex gap-1">
                        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                            Musica
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample3">
                        <div class="card card-body">
                            <p>Developed an interactive music recommendation platform using the MERN stack for web development.</p>
                            <p>Utilized Python, Kaggle datasets, and Scikit-learn, cosine similarity for machine learning to suggest personalized tracks
                                based on user preferences.</p>
                            <p>Integrated Matplotlib and Seaborn for effective data visualization.</p>
                        </div>
                    </div>
                </div>
                <div className='projects-about'>
                    <p class="d-inline-flex gap-1">
                        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                            Nuroms
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample4">
                        <div class="card card-body">
                            <p>Established an online mentoring platform specifically tailored for FAST NUCES Lahore, connecting experienced
                                instructors and seasoned students with younger one's for mentorship opportunities.</p>
                            <p>Developed the platform using the MERN stack and Firebase for storing Images. We have also implemented different
                                payment methods like stripe for tutoring fees.</p>
                        </div>
                    </div>
                </div>
                <div className='projects-about'>
                    <p class="d-inline-flex gap-1">
                        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
                            Real Time Object Speed Detection
                        </button>
                    </p>
                    <div class="collapse" id="collapseExample5">
                        <div class="card card-body">
                            <p>Developed a real-time object speed detection system using Python and OpenCV, capable of tracking the speed of moving
                            objects in a live video feed.</p>
                            <p>Objectives included implementing computer vision algorithms and calculations for integrating real-time processing for
                            seamless performance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default projects