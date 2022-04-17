import React,{useState,useEffect} from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import auth from '../../Firebase/Firebase.init';
import { NavLink,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();
    console.log(currentUser);
    //current user set up
    useEffect(() => {
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
		        <li><NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="blog">Blog</NavLink></li>
                {currentUser?.email ? (
          <button onClick={handleLogout} className='logout-button'>
            Logout
          </button>
        ) : (
            <button onClick={()=>navigate('/login')} className='logout-button'>
            Login
          </button> 
        )}
		    </ul>
		</nav>
    )
}

export default Navbar
