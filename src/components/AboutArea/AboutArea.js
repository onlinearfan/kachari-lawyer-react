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
                                        <span>20 years of experience</span>
                                        <h1>Hay! Here is Robert Jackson</h1>
                                        <h5>Professional &amp; Experienced Lawyer</h5>
                                        <p>Lawyer soothes and soothes those who are corrupted by the pains and annoyances which they will enjoy, and in the same manner they do not foresee what pains they will enjoy; For the slightest excuse that any one of us undertakes any exercise such as fall times</p>
                                        <div className="author-signeture">
                                            <img src="img/about/signeture.png" alt=""/>
                                        </div>
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
