import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./pages/AboutUs"; // Import AboutPage
import ContactUs from "./pages/ContactUs"; // Import AboutPage
import PartnershipPage from "./pages/PartnershipPage"; // Import the page
import SignUp from "./pages/SignUp"; // Import SignUp component
// import NotFound from "./pages/NotFound"; // Optional: Import a NotFound component for invalid routes

//create your first component
const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<LandingPage />} path="/" /> {/* Set LandingPage as the default */}
                        <Route path="/about-us" element={<AboutUs />} /> {/* About Us Page */}
                        <Route path="/partnership" element={<PartnershipPage />} />; // Add route
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/contact-us" element={<ContactUs/>} />
                        <Route element={<Home />} path="/home" /> {/* Move Home to its own path */}
                        <Route element={<LandingPage />} path="/landing-page" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        {/* <Route element={<h1>Not found!</h1>} /> */}


                        {/* Optional: Fallback for invalid routes */}
                        {/* <Route path="*" element={<NotFound />} /> */}

                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
