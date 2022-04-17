import React from 'react'
import AboutArea from '../../components/AboutArea/AboutArea'
import Banner from '../../components/Banner/Banner'
import Blogs from '../../components/Blogs/Blogs'
import Footer from '../../components/Footer/Footer'
import Services from '../../components/Services/Services'
import TimelineArea from '../../components/TimelineArea/TimelineArea'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import WorkExperience from '../../components/WorkExperience/WorkExperience'
import WorkingWay from '../../components/WorkingWay/WorkingWay'


const Home = () => {
    return (
        <>
            <Banner/>
            <WhyChooseUs/>
            <AboutArea/>
            <TimelineArea/>
            <Services/>
            <WorkExperience/>
            <WorkingWay/>
            <Blogs/>
        </>
    )
}

export default Home
