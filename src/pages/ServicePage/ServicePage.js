import React from 'react'
// import SectionTitle from '../../components/SectionTitle/SectionTitle'
import BreadCumBanner from '../../components/BreadCumBanner/BreadCumBanner'
import Services from '../../components/Services/Services'

const ServicePage = () => {
    const serviceBreadcumData = {title:'My Services',desc:'kachari is the best Law Firm. We solve your problems tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam'}
    return (
        <>
            <BreadCumBanner BreadcumData={serviceBreadcumData}/>
            <Services/>
        </>
    )
}

export default ServicePage
