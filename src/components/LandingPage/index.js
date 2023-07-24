import React from 'react'
import './styles.css'
// import SampleImage from '../../assets/leRrq4O9hZvjfg9stckiu.jpg'
import SampleImage from '../../assets/new2.png'
import { Tooltip } from '@mui/material';

function LandingPage() {
    return (
        <>
            <div className='home'>
                <div className='home-content'>
                    <h1>Hi, I'm Shubham Jindal</h1>
                    <h3>Frontend Developer</h3>
                    <p>Hello, myself Shubham Jindal and currently i am learning full stack web developing course. In this course i learnied HTML, CSS, Javascript and React. I made several projects during the course and made some projects by myself also.</p>
                    <div className='btn-box'>
                        <a href='#'>Hire Me</a>
                        <a href='#'>Let's Talk</a>
                    </div>
                </div>
                <div className='sample-div'>
                    <img className='sample-image' src={SampleImage} />
                </div>
            </div>
            <div class="home-sci">
                <Tooltip placement='bottom' title='Github'>
                    <a to="https://github.com/Shubhamjindal0801" target="_blank"><i class='bx bxl-github'></i></a>
                </Tooltip>
                <Tooltip placement='bottom' title='Email'>
                    <a to="mailto:shubhamjindal61999@gmail.com/" target="_blank"><span class="material-symbols-outlined">
                        mail
                    </span></a>
                </Tooltip>
                <Tooltip placement='bottom' title='Linkedin'>
                    <a to="https://www.linkedin.com/in/shubham-jindal-0801" target="_blank"><i class='bx bxl-linkedin' ></i></a>
                </Tooltip>
            </div>
        </>
    )
}

export default LandingPage
