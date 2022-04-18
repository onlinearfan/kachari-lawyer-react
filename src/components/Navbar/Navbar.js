import React,{useState,useLayoutEffect} from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from '../../Firebase/Firebase.init';
import { NavLink,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();
    console.log(currentUser);
    //current user set up
    useLayoutEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setCurrentUser(user);
          } else {
            setCurrentUser({});
          }
        });
    
        return () => unsubscribe;
      }, []);

      //Log Out User
      const handleLogout = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            toast.success("Sign Out Successfully", { id: "signOut" });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <nav>
		    <ul className="main-menu">
		        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">HOME</NavLink></li>
		        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="about">About</NavLink></li>
		        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="services">Services</NavLink></li>
		        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="blog">Blog</NavLink></li>
                {currentUser?.uid ? (
          <button onClick={handleLogout} className='my-btn'>
            Logout
          </button>
        ) : (
            <button onClick={()=>navigate('/login')} className='my-btn'>
            Login
          </button> 
        )}
		    </ul>
		</nav>
    )
}

export default Navbar
