import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
        const navigate = useNavigate();
        const handleLogin = (e) =>{
            e.preventDefault();
        }
    return (
        <div className="testimonial-and-quote-area pt-100 pb-80">
		    <div className="container">
		        <div className="row align-items-center">
		            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
		                <div className="request-quate-area">
		                    <div className="request-quate-title mb-55 text-center">
		                        <h2>Login Form</h2>
		                    </div>
		                    <div className="request-quate-form">
		                        <form action="#" onSubmit={handleLogin}>
		                            <div className="row">
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
                                            <button type="submit" className="btn">Log In</button>
		                                    </div>
		                                </div>
		                            </div>
		                        </form>
                                <div className="third-party-auth">
                                <div className="col-md-12 col-lg-12">
                                <p>New To Kachari? <button className='new-account' onClick={()=>navigate('/signup')}>Create New Account</button></p>
                                            <div className="or text-center">
                                                <span>or</span>
                                            </div>
                                            <div className='third-party-auth'>
                                                <button className='google btn-block'><i class="fa fa-google" aria-hidden="true"></i> Continue With Google</button>
                                                <button className='github btn-block'><i class="fa fa-github" aria-hidden="true"></i> Continue With Github</button>
                                            </div>
		                            </div>
                                </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
    )
}

export default LoginPage