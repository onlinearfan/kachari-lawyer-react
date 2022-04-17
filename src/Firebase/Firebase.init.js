// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB85BQcgOilhaPN0VZhcZKaNsBB4v9zzGs",
  authDomain: "kachari-lawyer.firebaseapp.com",
  projectId: "kachari-lawyer",
  storageBucket: "kachari-lawyer.appspot.com",
  messagingSenderId: "630735069709",
  appId: "1:630735069709:web:5c9da36d128f7b29bf2b44"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;