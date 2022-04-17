import React,{useState} from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [passwordConfirmation, setPasswordConfirmation] = useState({
        value: "",
        error: "",
      });

    console.log('email',email,'password',password,'confirm',passwordConfirmation);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    //google auth sign up handling
    const googleAuth = ()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
        const user = result.user;
        // ...
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        console.error(error);
      });
    }

    //Email Input Handling
    const handleEmail = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
          setEmail({ value: emailInput, error: "" });
        } else {
          setEmail({ value: "", error: "Please Provide a valid Email" });
        }
      };

      //Password Input Handling
      const handlePassword = (event) => {
        const passwordInput = event.target.value;
    
        if (passwordInput.length < 7) {
          setPassword({ value: "", error: "Password too short" });
        } else if (!/(?=.*[A-Z])/.test(passwordInput)) {
          setPassword({
            value: "",
            error: "Password must contain a capital letter",
          });
        } else {
          setPassword({ value: passwordInput, error: "" });
        }
      };

      //Confirm Pass Handling
      const handleConfirmPassword = (event) => {
        const confirmationInput = event.target.value;
    
        if (confirmationInput !== password.value) {
          setPasswordConfirmation({ value: "", error: "Password Mismatched" });
        } else {
          setPasswordConfirmation({ value: confirmationInput, error: "" });
        }
      };


    //handle singup form
    const handleSignUp = (e) => {
        e.preventDefault();
        //handing SignUp empty submit
        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
          }
          if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
          }
          if (passwordConfirmation.value === "") {
            setPasswordConfirmation({
              value: "",
              error: "Password confirmation is required",
            });
          }
          if (email.value && password.value === passwordConfirmation.value) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
              .then((userCredential) => {
                const user = userCredential.user;
                // toast.success("Account created", { id: "created" });
                //after sign up redirect to home page 
                navigate("/");
              })
              .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage.includes("already-in-use")) {
                //   toast.error("Email already in use", { id: "error" });
                } else {
                //   toast.error(errorMessage, { id: "error" });
                }
              });
          }


        
    };

     //github auth sign up

     const githubAuth = ()=>{
         
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
		                                <div className="col-12">
		                                    <div className="request-quate-form-style mb-30">
		                                        <input onBlur={handleConfirmPassword} name="confirmPassword" id='confirmPassword' placeholder="Confirm Password" type="password"/>
                                                {passwordConfirmation.error && (<span className="error">{passwordConfirmation.error}</span>)}
		                                    </div>
		                                </div>
		                                <div className="col-md-12 col-lg-12">
		                                    <div className="request-quate-form-style">
                                            <button type="submit" className="btn">Sign up</button>
		                                    </div>
		                                </div>
		                            </div>
		                        </form>
                                <div className="third-party-auth">
                                <div className="col-md-12 col-lg-12">
                                    <p>Already have an account? <button className='new-account' onClick={()=>navigate('/login')}>Login</button></p>
                                            <div className="or text-center">
                                                <span>or</span>
                                            </div>
                                            <div className='third-party-auth'>
                                                <button onClick={googleAuth} className='google btn-block'><i className="fa fa-google" aria-hidden="true"></i> Continue With Google</button>
                                                <button onClick={githubAuth} className='github btn-block'><i className="fa fa-github" aria-hidden="true"></i> Continue With Github</button>
                                            </div>
		                            </div>
                                </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
    );
};

export default SignUpPage;
