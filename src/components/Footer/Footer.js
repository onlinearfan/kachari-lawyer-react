import React from 'react'

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
                                    <a className="footer-logo" href="index.html"><img src="img/logo/logo-footer.png" alt=""/></a>
		                            <p>Lawyer boluptatum atque corrupe uas molestias cepturi sint  eca itate non nt in culpa modi tempora incidunt</p>
		                            <h4 className="newslatter-title">Newsletter</h4>
		                            <form action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="footer-subscribe-form validate" target="_blank" novalidate="">
                                       <div id="mc_embed_signup_scroll">
                                          <div id="mc-form" className="mc-form subscribe-form">
                                            <input id="mc-email" type="email" autocomplete="off" placeholder="Enter your email here"/>
                                            <button id="mc-submit"><i className="fa fa-paper-plane-o"></i></button>
                                          </div>
                                       </div>
                                   </form>
		                        </div>
		                        {/* <!--Single Footer Widget End--> */}
		                    </div>
		                    {/* <!--Single Footer Widget Start--> */}
		                    <div className="col-md-6 col-lg-3 footer-menu">
		                        <div className="single-footer-widget mb-30">
		                            <h3 className="footer-title">Quick Links</h3>
		                            <ul>
		                                <li><a href="about.html">About us</a></li>
		                                <li><a href="service.html">Practice Area</a></li>
		                                <li><a href="appointment.html">Appointment</a></li>
		                                <li><a href="#">Terms &amp; Conditions</a></li>
		                                <li><a href="#">FAQ</a></li>
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
		                                    <p><a href="#">@James</a>, luptatum deleniti atque pti  molestias cepturi sint simple </p>
		                                    <span className="time"><a href="#">10 Mins ago</a></span>
		                                </li>
		                                <li>
		                                    <p><a href="#">@James</a>, luptatum deleniti atque pti  molestias cepturi sint simple </p>
		                                    <span className="time"><a href="#">12 Mins ago</a></span>
		                                </li>
		                            </ul>
		                        </div>
		                    </div>
		                    {/* <!--Single Footer Widget End--> */}
		                    {/* <!--Single Footer Widget Start--> */}
		                    <div className="col-md-6 col-lg-3">
		                        <div className="single-footer-widget mb-30">
		                            <h3 className="footer-title">Contact Info</h3>
		                            <p>129 Street Avenue, Alex Complex Central Street, New York</p>
		                            <p className="contact-info">
		                                <a href="#">+12546 658 987</a>
		                                <a href="#">+12548 789 987</a>
		                            </p>
		                            <p className="contact-info">
		                                <a href="#">info@yoursite.com</a>
		                                <a href="#">www.yoursite.com</a>
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
		               <p><span>©</span> Copyright, 2018 All right reserved by <a href="#">Kachari</a></p>
		            </div>
		        </div>
		        {/* <!--Footer Bottom Area End--> */}
		    </div>
		</footer>
    )
}

export default Footer
