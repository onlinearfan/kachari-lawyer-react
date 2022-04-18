import React from "react";
import './BreadCumBanner.css'

const BreadCumBanner = ({ BreadcumData }) => {
    return (
        <div className="page-banner-area bg-img-3 pt-95 pb-90">
            <div className="container">
                <div className="row">
                    <div className="page-banner-content col-12 text-center">
                        <h2>{BreadcumData?.title}</h2>
                        <p>{BreadcumData?.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCumBanner;
