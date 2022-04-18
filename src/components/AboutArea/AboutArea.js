import React from 'react'
import { NavLink } from 'react-router-dom'

const AboutArea = () => {
    return (
        <div className="about-area">
		    <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-wrapper black-bg pt-100 pb-100">
                            <div className="row align-items-center">
                                {/* <!--About Image Area Start--> */}
                                <div className="col-md-5">
                                    <div className="about-img">
                                        <img src="img/about/about.jpg" alt=""/>
                                    </div>
                                </div>
                                {/* <!--About Image Area End--> */}
                                {/* <!--About Content Area Start--> */}
                                <div className="col-md-7">
                                    <div className="about-content">
                                        <span>2 years of experience</span>
                                        <h1>Hay! Here is Md Arfan Khan</h1>
                                        <h5>Professional &amp; Experienced Web Developer</h5>
                                        <p>Hello everyone! I m Md Arfan Khan.Currently I'm Studying Management Information Systems on BBA .But I have a soft corner for modern technologies.I want to build my career as a web developer. My Goal is to be a good full-stack developer. I am working hard with my course and doing my projects for the experience. I hope i can make it by the blessing of Almighty and through my hardwork</p>
                                    </div>
                                </div>
                                {/* <!--About Content Area End--> */}
                            </div>
                        </div>
                    </div>
                </div>
		    </div>
		</div>
    )
}

export default AboutArea
