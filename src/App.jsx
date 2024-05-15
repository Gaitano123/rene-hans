import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Appointment from "./components/Appointment";
import GetInTouch from "./components/Get-InTouch";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Reviews from "./components/Reviews";
import Service from "./components/Service";
import ReviewForm from "./components/ReviewForm";
import Menu from "./components/Menu";
import Data from "./components/Data";

function App() {
  return (
    <div className="app">
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="/" element={<WithNavbarAndFooter><Home /></WithNavbarAndFooter>} />
        <Route path="/about" element={<WithNavbarAndFooter><About /></WithNavbarAndFooter>} />
        <Route path="/appointment" element={<WithNavbarAndFooter><Appointment /></WithNavbarAndFooter>} />
        <Route path="/get-in-touch" element={<WithNavbarAndFooter><GetInTouch /></WithNavbarAndFooter>} />
        <Route path="/gallery" element={<WithNavbarAndFooter><Gallery /></WithNavbarAndFooter>} />
        <Route path="/blog" element={<WithNavbarAndFooter><Blog /></WithNavbarAndFooter>} />
        <Route path="/reviews" element={<WithNavbarAndFooter><Reviews /></WithNavbarAndFooter>} />
        <Route path="/service" element={<WithNavbarAndFooter><Service /></WithNavbarAndFooter>} />
        <Route path="/review-form" element={<WithNavbarAndFooter><ReviewForm /></WithNavbarAndFooter>} />
        <Route path="/data" element={<WithNavbarAndFooter><Data /></WithNavbarAndFooter>} />
        {/* Route without Navbar and Footer */}
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

// Higher-order component to wrap routes with Navbar and Footer
const WithNavbarAndFooter = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default App;
