import React from 'react'
import { useLocation } from 'react-router-dom';

const Checkout = () => {
    //Checkout Product Id will be here;
    const {state} = useLocation();
    return (
        <div className="testimonial-and-quote-area pt-100 pb-80">
		    <div className="container">
		        <div className="row align-items-center">
		            <div className="col-md-6">
		                <div className="request-quate-area">
		                    <div className="request-quate-title mb-55 text-center">
                                <img src="img/icon/icon1.png" alt=""/>
		                        <h2>Checkout</h2>
		                    </div>
		                    <div className="request-quate-form">
		                        <form action="#">
		                            <div className="row">
		                                <div className="col-md-12 col-lg-6">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input name="first-name" placeholder="First Name" type="text"/>
		                                    </div>
		                                </div>
		                                <div className="col-md-12 col-lg-6">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input name="last-name" placeholder="Last Name" type="text"/>
		                                    </div>
		                                </div>
		                                <div className="col-md-12 col-lg-6">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input name="phone" placeholder="Phone" type="text"/>
		                                    </div>
		                                </div>
		                                <div className="col-md-12 col-lg-6">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input name="email" placeholder="Email" type="email"/>
		                                    </div>
		                                </div>
		                                <div className="col-md-12 col-lg-12">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input name="subject" placeholder="Subject" type="text"/>
		                                    </div>
		                                </div>
		                                <div className="col-md-12 col-lg-12">
		                                    <div className="request-quate-form-style">
		                                        <textarea name="message" placeholder="Massage"></textarea>
		                                        <button type="submi/t" className="default-btn">Send Now <i className="icofont icofont-long-arrow-right"></i></button>
		                                    </div>
		                                </div>
		                            </div>
		                        </form>
		                    </div>
		                </div>
		            </div>
		            <div className="col-md-6">
		                <div className="testimonial-area">
		                    <div className="row">
		                        <div className="col-12">
		                            {/* <!--Section Title Start--> */}
                                    <div className="section-title mb-40">
                                       <img src="img/icon/icon1.png" alt=""/>
                                        <h4>Service Details</h4>
                                        <h2>Clinets Review</h2>
                                        <p>Lawyer boluptatum deleniti atque corrupti quos dolores et quas iaspturi sint  eca itate non provident, similique sunt in culpa modi tempora </p>
                                    </div>
                                    {/* <!--Section Title End-->  */}
		                        </div>
		                    </div>
		                    <div className="row">
		                        <div className="col-12">
                                    {/* <!--Single Testimonial Start--> */}
		                            <div className="single-testimonial mb-50">
		                                <div className="testimonial-content">
                                            <i className="icofont icofont-quote-right"></i>
		                                    <p>deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, milique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolor</p>
		                                </div>
		                                <div className="testimonial-author">
		                                    <h5>James Franklin, <span>Business man</span></h5>
		                                </div>
		                            </div>
		                            {/* <!--Single Testimonial End--> */}
                                    {/* <!--Single Testimonial Start--> */}
		                            <div className="single-testimonial">
		                                <div className="testimonial-content">
                                            <i className="icofont icofont-quote-right"></i>
		                                    <p>deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, milique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolor</p>
		                                </div>
		                                <div className="testimonial-author">
		                                    <h5>James Franklin, <span>Business man</span></h5>
		                                </div>
		                            </div>
		                            {/* <!--Single Testimonial End--> */}
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
    )
}

export default Checkout