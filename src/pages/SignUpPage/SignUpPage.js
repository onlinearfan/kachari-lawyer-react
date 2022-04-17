import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
    const navigate = useNavigate();
    const handleSignUp = (e) =>{
        e.preventDefault();
    }

    return (
        <div className="testimonial-and-quote-area pt-100 pb-80">
		    <div className="container">
		        <div className="row align-items-center">
		            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
		                <div className="request-quate-area">
		                    <div className="request-quate-title mb-55 text-center">
		                        <h2>Create New Account</h2>
		                    </div>
		                    <div className="request-quate-form">
		                        <form action="#" onSubmit={handleSignUp}>
		                            <div className="row">
		                                <div className="col-12">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input name="name" placeholder="Name" type="text"/>
		                                    </div>
		                                </div>
		                                <div className="col-12">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input name="email" placeholder="Email" type="email"/>
		                                    </div>
		                                </div>
		                                <div className="col-12">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input name="password" placeholder="Password" type="password"/>
		                                    </div>
		                                </div>
		                                <div className="col-md-12 col-lg-12">
		                                    <div className="request-quate-form-style">
                                            <button type="submit" className="btn">Sign up</button>
                                            <p>Already have an account? <button className='new-account' onClick={()=>navigate('/login')}>Login</button></p>
                                            <div className="or text-center">
                                                <span>or</span>
                                            </div>
                                            <div className='third-party-auth'>
                                                <button className='google btn-block'><i className="fa fa-google" aria-hidden="true"></i> Continue With Google</button>
                                                <button className='github btn-block'><i className="fa fa-github" aria-hidden="true"></i> Continue With Github</button>
                                            </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </form>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
    )
}

export default SignUpPage