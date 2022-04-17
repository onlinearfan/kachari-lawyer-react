import React from 'react'

const Blogs = () => {
    return (
        <div className="latest-blog-area bg-img pt-100 pb-65">
		    <div className="container">
		        <div className="row">
		            <div className="col-md-12">
		                {/* <!--Section Title Start--> */}
                        <div className="section-title text-center mb-70">
                           <img src="img/icon/icon1.png" alt=""/>
                            <h4>blog</h4>
                            <h2>Latest Blog</h2>
                            <p>Lawyer boluptatum deleniti atque corrupti quos dolores et quas molestias cepturi sint  eca itate non provident, similique sunt in culpa modi tempora incidunt ut labore et dolor am aerat</p>
                        </div>
                        {/* <!--Section Title End--> */}
		            </div>
		        </div>
		        <div className="row">
		            {/* <!--Single Blog Start--> */}
		            <div className="col-md-6 col-lg-4">
                        <div className="single-blog mb-30">
                            <div className="blog-img">
                                <a href="single-blog.html"><img src="img/blog/blog1.jpg" alt=""/></a>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                   <li>February 10</li> 
                                   <li><a href="#"> jeshon smith.</a></li>
                                   <li><a href="#">12 comments</a></li>
                                </ul>
                                <h3><a href="single-blog.html">Seminer on Corporate Law for Smooth Business</a></h3>
                                <p>Lawyer boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt</p>
                                <a href="single-blog.html"><span>Continue Reading</span> <i className="icofont icofont-long-arrow-right"></i></a>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End--> */}
		            {/* <!--Single Blog Start--> */}
		            <div className="col-md-6 col-lg-4">
                        <div className="single-blog mb-30">
                            <div className="blog-img">
                                <a href="single-blog.html"><img src="img/blog/blog2.jpg" alt=""/></a>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                   <li>February 10</li> 
                                   <li><a href="#"> jeshon smith.</a></li>
                                   <li><a href="#">12 comments</a></li>
                                </ul>
                                <h3><a href="single-blog.html">Divorce is not the only way for happy Life</a></h3>
                                <p>Lawyer boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt</p>
                                <a href="single-blog.html"><span>Continue Reading</span> <i className="icofont icofont-long-arrow-right"></i></a>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End--> */}
		            {/* <!--Single Blog Start--> */}
		            <div className="col-md-6 col-lg-4">
                        <div className="single-blog mb-30">
                            <div className="blog-img">
                                <a href="single-blog.html"><img src="img/blog/blog3.jpg" alt=""/></a>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                   <li>February 10</li> 
                                   <li><a href="#"> jeshon smith.</a></li>
                                   <li><a href="#">12 comments</a></li>
                                </ul>
                                <h3><a href="single-blog.html">Learn about Investment Law to make it simple</a></h3>
                                <p>Lawyer boluptatum deleniti atque corrupti sdolores et quas molestias cepturi sint  eca itate non similique sunt in culpa modi tempora incidunt</p>
                                <a href="single-blog.html"><span>Continue Reading</span> <i className="icofont icofont-long-arrow-right"></i></a>
                            </div>
                        </div>
		            </div>
		            {/* <!--Single Blog End--> */}
		        </div>
		    </div>
		</div>
    )
}

export default Blogs
