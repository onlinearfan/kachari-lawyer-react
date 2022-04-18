import React from 'react'
import { NavLink } from 'react-router-dom'
import bannerData from '../../fakeData/banner-data'
import './Banner.css'

const Banner = () => {

    const {name,subTitle,desc,imgURL} = bannerData;

    return (
        // backgournd img repair
        <div className="slider-area">
            {/* background-image: url(img/slider/slider-bg.jpg); */}
		    <div className="single-slider" style={{
                        backgroundImage:`url(${imgURL})`,                    
                    }}>
		        <div className="container">
		            <div className="row align-items-center">
		                <div className="col-md-8 col-xl-6">
		                    <div className="hero-content">
		                        <div className="title">
		                            <h1>{name}</h1>
		                            <h2>{subTitle}</h2>
		                        </div>
		                        <div className="description">
		                           <p>{desc}</p> 
		                        </div> 
		                        <NavLink to="/">Make an appointment</NavLink>
		                    </div>
		                </div>
		                <div className="col-md-4 col-xl-6">
		                    <div className="hero-img img-full mt-30 animated fadeInUp" data-wow-duration="1.5s">
		                        <img src="img/slider/slider-img.png" alt=""/>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
    )
}

export default Banner
