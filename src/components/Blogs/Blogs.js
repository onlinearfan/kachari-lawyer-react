import React from 'react'
import SingleBlogDetails from './SingleBlogDetails/SingleBlogDetails'
import blogsData from '../../fakeData/blogs-data'
import './Blogs.css'

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
                    {blogsData.map((singleData)=><SingleBlogDetails key={singleData.id} blogData={singleData}/>)}
		           
	
		        </div>
		    </div>
		</div>
    )
}

export default Blogs
