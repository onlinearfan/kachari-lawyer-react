import React from 'react'
import WhyChooseMeData from '../../fakeData/whyChooseMe-data'
import CardBox from './CardBox/CardBox'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
	const {desc,title,cardData} = WhyChooseMeData;

    return (
        <div className="feature-area pt-80 pb-70">
		    <div className="container">
		        <div className="row  align-items-center">
		            <div className="col-md-4">
                        {/* <!--Section Title Start--> */}
		                <div className="section-title feature-section-title">
                            <h2>Why you <br/> <span>Choose</span> me?</h2>
                            <p>{desc}</p>
		                </div>
		                {/* <!--Section Title End--> */}
		            </div>
		            <div className="col-md-8">
		                <div className="row">
		                    {
								cardData.map((data,index)=><CardBox cardData={data} key={index}/>)
							}
		                   
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
    )
}

export default WhyChooseUs
