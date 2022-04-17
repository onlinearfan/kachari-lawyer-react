import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <header>
		    <div className="header-container">
		        {/* <!--Header Top Area Start--> */}
		        <div className="header-top-area default-bg">
		            <div className="container">
		                <div className="row row-75">
                            <div className="header-top-wrap col-12">
                                <div className="row">
                                    {/* <!--Header Top Left Area Start--> */}
                                    <div className="col-md-4 col-xl-3">
                                        <div className="header-top-left">
                                            <p>CALL US :<NavLink to='/'>+008 12548 658 658</NavLink></p>
                                        </div>
                                    </div>
                                    {/* <!--Header Top Left Area End--> */}
                                    {/* <!--Header Top Middle Area Start--> */}
                                    <div className="col-md-4 col-xl-6">
                                        <div className="header-top-middle text-center">
                                            <ul className="social-link">
                                                <li><NavLink to="/"><i className="fa fa-facebook"></i></NavLink></li>
                                                <li><NavLink to="/"><i className="fa fa-twitter"></i></NavLink></li>
                                                <li><NavLink to="/"><i className="fa fa-instagram"></i></NavLink></li>
                                                <li><NavLink to="/"><i className="fa fa-google-plus"></i></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <!--Header Top Middle Area End--> */}
                                    {/* <!--Header Top Right Area Start--> */}
                                    <div className="col-md-4 col-xl-3">
                                        <div className="header-top-right">
                                            <p>MAIL US :<NavLink to="/">info@example.com</NavLink></p>
                                        </div>
                                    </div>
                                    {/* <!--Header Top Right Area End--> */}
                                </div>
                            </div>
		                </div>
		            </div>
		        </div>
		        {/* <!--Header Top Area End--> */}
		        {/* <!--Header Bottom Area Start--> */}
		        <div className="header-bottom-area header-sticky">
		            <div className="container">
		                <div className="row align-items-center">
                            {/* <!--Header Logo Start--> */}
		                    <div className="col-md-3">
		                        <div className="header-logo">
		                            <NavLink to="/"><img src="img/logo/logo.png" alt=""/></NavLink>
		                        </div>
		                    </div>
		                    {/* <!--Header Logo End--> */}
		                    {/* <!--Header Menu Start--> */}
		                    <div className="col-md-9">
		                        <div className="header-menu-area text-right">
		                            <Navbar/>
		                        </div>
		                    </div>
		                    {/* <!--Header Menu End--> */}
		                </div>
		                <div className="row">
                            <div className="col-12">  
                            {/* <!--Mobile Menu Area Start--> */}
                            <div className="mobile-menu d-lg-none d-xl-none"></div>
                            {/* <!--Mobile Menu Area End--> */}
                            </div>
                        </div>
		            </div>
		        </div>
		        {/* <!--Header Bottom Area End--> */}
		    </div>
		</header>
    )
}

export default Header
