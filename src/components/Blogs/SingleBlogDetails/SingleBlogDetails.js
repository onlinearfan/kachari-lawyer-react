import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const SingleBlogDetails = ({blogData}) => {
    const navigate = useNavigate();
    const {date,comment,desc,imgURL,id,title,writer,} = blogData;
    console.log(id);
    return (
        <div className="col-md-6 col-lg-4">
        <div className="single-blog mb-30">
            <div className="blog-img">
                <NavLink to="/blog"><img src={imgURL} alt=""/></NavLink>
            </div>
            <div className="blog-content">
                <ul className="blog-meta">
                   <li>{date}</li> 
                   <li><NavLink to="/">{writer}</NavLink></li>
                   <li><NavLink to="/">{comment} comments</NavLink></li>
                </ul>
                <h3><NavLink to="/blog">{title}</NavLink></h3>
                <p>{desc}</p>
            </div>
        </div>
    </div>
    )
}

export default SingleBlogDetails
