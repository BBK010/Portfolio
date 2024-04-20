import React from 'react'
import './About.css'
import profile_img from '../../assets/about_profile.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <div className="about-section">
                    <div className="about-left">
                        <img src={profile_img} alt="profile_img" />
                    </div>
                    <div className="about-right">
                        <div className="about-para">
                            <p>I'm a Full Stack Developer passionate about creating amazing web applications and solving real-world problems using technology.</p>
                            <p>I'm a Full Stack Developer passionate about creating amazing web applications and solving real-world problems using technology.</p>
                        </div>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
                            <div className="about-skill"><p>Wordpress</p><hr style={{ width: "60%" }} /></div>
                            <div className="about-skill"><p>MYSQL</p><hr style={{ width: "50%" }} /></div>
                        </div>
                    </div>
                </div>
                <div className="about-achievements">
                    <div className="about-achievement">
                        <h1>1+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>5+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                        <h1>5+</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About