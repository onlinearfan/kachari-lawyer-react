import React from "react";

const TimelineBox = ({singleTimeline}) => {
    const {day,desc,month,year,title,imgURL} = singleTimeline;
    console.log(title);
    return (
        <div className="col-md-6 col-lg-4">
            {/* <!--Single Timeline Strat--> */}
            <div className="single-timeline mb-50 d-flex align-items-center">
                <div className="timeline-frame" style={{
                        backgroundImage:`url(${imgURL})`,                    
                    }}>
                    <h3>
                        {year}<span>{day} {month}</span>
                    </h3>
                </div>
                <div className="timeline-content">
                    <h4>{title}</h4>
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
            {/* <!--Single Timeline End--> */}
        </div>
    );
};

export default TimelineBox;
