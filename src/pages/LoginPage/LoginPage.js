import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

const LoginPage = () => {
        const navigate = useNavigate();
        const [email, setEmail] = useState({ value: "", error: "" });
        const [password, setPassword] = useState({ value: "", error: "" });

        
        //Google Auth 
        const googleAuth = () => {
        const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
              .then((result) => {
                const user = result.user;
                // ...
                console.log(user);
                toast.success("Sign In Successfully", { id: "signInGoogle" });
                navigate("/");
              })
              .catch((error) => {
                // Handle Errors here.
                console.error(error);
              });
          };

          //handle email 
          const handleEmail = (event) => {
            const emailInput = event.target.value;
        
            if (/\S+@\S+\.\S+/.test(emailInput)) {
              setEmail({ value: emailInput, error: "" });
            } else {
              setEmail({ value: "", error: "Please Provide a valid Email" });
            }
          };
        
        //handle password
          const handlePassword = (event) => {
            const passwordInput = event.target.value;
        
            setPassword({ value: passwordInput, error: "" });
          };

        //handle login form with custom email and password
        const handleLogin = (event) => {
            event.preventDefault();
        
            if (email.value === "") {
              setEmail({ value: "", error: "Email is required" });
            }
        
            if (password.value === "") {
              setPassword({ value: "", error: "Password is required" });
            }
        
            if (email.value && password.value) {
              signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                  const user = userCredential.user;
                  console.log(user);
                  toast.success("Sign In Successfully", { id: "signIn" });
                  navigate("/");
                })
                .catch((error) => {
                  const errorMessage = error.message;
        
                  if (errorMessage.includes("wrong-password")) {
                    toast.error("Wrong Password", { id: "error" });
                  } else {
                    toast.error(errorMessage, { id: "error" });
                  }
                });
            }
          };
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
		                                        <input onBlur={handleEmail} name="email" id="email" placeholder="Email" type="email"/>
                                                {email.error && (<span className="error">{email.error}</span>)}
		                                    </div>
		                                </div>
		                                <div className="col-12">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input onBlur={handlePassword} name="password" id="password" placeholder="Password" type="password"/>
                                                {password.error && (<span className="error">{password.error}</span>)}
		                                    </div>
		                                </div>
		                                <div className="col-md-12 col-lg-12">
		                                    <div className="request-quate-form-style">
                                            <button onClick={handleLogin} type="submit" className="btn">Log In</button>
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
                                                <button onClick={googleAuth} className='google btn-block'><i class="fa fa-google" aria-hidden="true"></i> Continue With Google</button>
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