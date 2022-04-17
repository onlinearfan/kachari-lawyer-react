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
                                        <p>Lawyer boluptatum deleniti atque corrupti quos dolores et quas molestias  epturi sint  eca iditate non provident, similique sunt in culpa modi tempora incidunt ut labore et dolor am aerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam poris suscipit modi tempora incidunt </p>
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
