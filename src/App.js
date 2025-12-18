import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./comoncomponents/Footer";
import Header from "./comoncomponents/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/Contactus";
import Projects from "./pages/Projects";

function App() {
  const location = useLocation();

  // 🔽 Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // 🔽 Initialize AOS once
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Only animate once
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main style={{ flex: 1,overflowX:'hidden' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
