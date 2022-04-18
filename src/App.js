import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Checkout from "./pages/Checkout/Checkout";
import BlogPage from "./pages/BlogPage/BlogPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import RequiredAuth from "./RequiredAuth";

import "./App.css";
import ServicePage from "./pages/ServicePage/ServicePage";
// import './css/responsive.css'

const App = () => {
    return (
        <>
            <Header />
            <Toaster />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="blog" element={<BlogPage />} />
                <Route path="services" element={<ServicePage />} />

                <Route
                    path="checkout/:serviceID"
                    element={
                        <RequiredAuth>
                            <Checkout/>
                        </RequiredAuth>
                    }
                />
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignUpPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
