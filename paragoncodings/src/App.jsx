import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home/home';
import WhatsAppButton from './Component/Pages/Home/WhatsAppButton';
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from 'react-icons/fa'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

  {/* ScrollToTop button */}
      <ScrollToTop
        smooth
        component={<FaArrowUp />} 
        style={{
          backgroundColor: "#C32735",
          color: "white",
          borderRadius: "50%",
          padding: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
          border: "2px solid white",
          transition: "transform 0.3s ease",
        }}
        className="hover:scale-110" 
      />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;
