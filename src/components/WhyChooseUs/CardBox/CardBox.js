import React from "react";

const CardBox = ({cardData}) => {
    return (
        <div className="col-md-6">
            {/* <!--Single Feature Start--> */}
            <div className="single-feature">
                <h2>{cardData.title}</h2>
                <p>
                   {cardData.cardDesc}
                </p>
            </div>
            {/* <!--Single Feature End--> */}
        </div>
    );
};

export default CardBox;
