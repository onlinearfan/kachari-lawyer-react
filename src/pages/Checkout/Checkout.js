import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import serviceData from '../../fakeData/service-data';
import toast from 'react-hot-toast';

const Checkout = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [error,setError] = useState(false);
    //Checkout Product Id will be here;
    const {state} = useLocation();
	const navigate = useNavigate();

	const checkoutProduct = serviceData.find((v)=>v.id===state.id);
	const handleCheckout = (e)=>{
		e.preventDefault();
		if(email && phone && name){
			setError(false)
			toast.success("Thanks for ordering our service", { id: "order" });
        	navigate("/");
		}else{
			setError(true)
		}
		
	}

	console.log(name,phone,email);
    return (
        <div className="testimonial-and-quote-area pt-100 pb-80">
		    <div className="container">
		        <div className="row align-items-center">
		            <div className="col-md-6">
		                <div className="request-quate-area">
		                    <div className="request-quate-title mb-55 text-center">
		                        <h2>Checkout</h2>
		                    </div>
		                    <div className="request-quate-form">
		                        <form action="#">
		                            <div className="row">
		                                <div className="col-12">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input required onBlur={(e)=>setName(e.target.value)} name="name" placeholder="Name" type="text"/>
		                                    </div>
		                                </div>
		                                <div className="col-12">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input required onBlur={(e)=>setPhone(e.target.value)} name="phone" placeholder="Phone" type="text"/>
		                                    </div>
		                                </div>
		                                <div className="col-12">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input required onBlur={(e)=>setEmail(e.target.value)} name="email" placeholder="Email" type="email"/>
		                                    </div>
		                                </div>
		                                <div className="col-md-12 col-lg-12">
		                                    <div className="request-quate-form-style">
		                                        <button onClick={handleCheckout} type="submit" className="default-btn">Order<i className="icofont icofont-long-arrow-right"></i></button>
		                                    </div>
											{error && <span>Please Give your details properly for a successful order.</span>}
		                                </div>
		                            </div>
		                        </form>
		                    </div>
		                </div>
		            </div>
		            <div className="col-md-6">
		                <div className="testimonial-area">
		                    <div className="row">
		                        <div className="col-12">
		                            {/* <!--Section Title Start--> */}
                                    <div className="section-title mb-40">
                                       <img src="img/icon/icon1.png" alt=""/>
                                        <h4>Buying Product Details</h4>
                                        <h2>{checkoutProduct?.title}</h2>
										<span>Price: {checkoutProduct?.price}</span>
                                        <p>{checkoutProduct?.desc}</p>
                                    </div>
                                    {/* <!--Section Title End-->  */}
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
    )
}

export default Checkout