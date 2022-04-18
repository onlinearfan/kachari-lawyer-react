import React from 'react'
import { NavLink } from 'react-router-dom'
import TimelineBox from './TimelineBox/TimelineBox'
import timelineData from '../../fakeData/timeline-data'

const TimelineArea = () => {
	console.log(timelineData);
    return (
        <div className="timeline-area bg-img" style={{
			backgroundImage:`url(img/bg/bg.jpg})`,                    
		}}>
		    <div className="container">
		        <div className="row">
					{
						timelineData.length> 0 && timelineData.map((singleTimeline,index)=><TimelineBox key={index} singleTimeline={singleTimeline}/>)
					}
					
		        </div>
		        <div className="row">
		            <div className="col-12">
		                <div className="view-all-history">
		                    <NavLink to="/about">View All History</NavLink>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
        // backgournd thik time area
    )
}

export default TimelineArea
