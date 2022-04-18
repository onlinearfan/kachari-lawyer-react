import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
		    <div className="footer-container">
		        {/* <!--Footer Top Area Start--> */}
		        <div className="footer-top-area black-bg pt-100 pb-65">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-6 col-lg-3">
                                {/* <!--Single Footer Widget Start--> */}
		                        <div className="single-footer-widget mb-30">
                                    <NavLink className="footer-logo" to="/"><img src="img/logo/logo-footer.png" alt=""/></NavLink>
		                            <p>I solve your problems during times of hardship and pain that require some great pleasure. In order to come to the least, any one of us undertakes any physical exercise</p>
		                        </div>
		                        {/* <!--Single Footer Widget End--> */}
		                    </div>
		                    {/* <!--Single Footer Widget Start--> */}
		                    <div className="col-md-6 col-lg-3 footer-menu">
		                        <div className="single-footer-widget mb-30">
		                            <h3 className="footer-title">Quick Links</h3>
		                            <ul>
		                                <li><NavLink to="/about">About</NavLink></li>
		                                <li><NavLink to="/blog">Blog</NavLink></li>
		                                <li><NavLink to="/services">Services</NavLink></li>
		                                <li><NavLink to="/">Terms &amp; Conditions</NavLink></li>
		                            </ul>
		                        </div>
		                    </div>
		                    {/* <!--Single Footer Widget End--> */}
		                    {/* <!--Single Footer Widget Start--> */}
		                    <div className="col-md-6 col-lg-3">
		                        <div className="single-footer-widget mb-30">
		                            <h3 className="footer-title">Latest Tweets</h3>
		                            <ul className="footer-tweet">
		                                <li>
		                                    <p> luptatum deleniti atque pti  molestias cepturi sint simple </p>
		                                    <span className="time">10 Mins ago</span>
		                                </li>
		                                <li>
		                                    <p> luptatum deleniti atque pti  molestias cepturi sint simple </p>
		                                    <span className="time"></span>
		                                </li>
		                            </ul>
		                        </div>
		                    </div>
		                    {/* <!--Single Footer Widget End--> */}
		                    {/* <!--Single Footer Widget Start--> */}
		                    <div className="col-md-6 col-lg-3">
		                        <div className="single-footer-widget mb-30">
		                            <h3 className="footer-title">Contact Info</h3>
		                            <p>72/1 sk das road, gandaria, sutrapur Dhaka-1204,Bangladesh</p>
		                            <p className="contact-info">
		                                <NavLink to="/">+12546 658 987</NavLink>
		                                <NavLink to="/">+12548 789 987</NavLink>
		                            </p>
		                            <p className="contact-info">
		                                <NavLink to="/">info@khan188993.com</NavLink>
		                                <NavLink to="/">www.arfankhan.com</NavLink>
		                            </p>
		                        </div>
		                    </div>
		                    {/* <!--Single Footer Widget End--> */}
		                </div>
		            </div>
		        </div>
		        {/* <!--Footer Top Area End--> */}
		        {/* <!--Footer Bottom Area Start--> */}
		        <div className="footer-bottom-area pt-20 pb-20">
		            <div className="container text-center">
		               <p><span>©</span> Copyright, 2022 All right reserved by <NavLink to="/">Kachari</NavLink></p>
		            </div>
		        </div>
		        {/* <!--Footer Bottom Area End--> */}
		    </div>
		</footer>
    )
}

export default Footer
