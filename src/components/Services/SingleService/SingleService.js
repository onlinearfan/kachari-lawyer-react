import React from "react";
import { useNavigate } from "react-router-dom";

const SingleService = ({singleServiceData}) => {
    const {desc,imgURL,title,id} = singleServiceData;
    const navigate = useNavigate();
    const BuyNow = ()=>{
        console.log('buy',id);
        navigate('/checkout',{ state: { id: id} })

    }
    return (
        <div className="col-md-6">
            <div className="single-service mb-60 d-flex flex-nowrap">
                <div className="service-icon">
                    <img src={imgURL} alt="" />
                </div>
                <div className="service-content">
                    
                    <h4>
                        <a href="single-service.html">{title}</a>
                    </h4>
                    <p>
                        {desc}
                    </p>
                    <span>100$</span><br></br>
                    <button onClick={()=>{BuyNow(id)}}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;
