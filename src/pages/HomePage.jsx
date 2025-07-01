import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";


const HomePage = () => 
  
{

  return (
    <div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="logo">Vivekanand College</div>
          <nav className="nav-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/course">Courses</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admission" className="apply-btn">Apply Now!</Link>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="main-section">
        <div className="info-box">
          <img
            src="/Images/college-banner.png"
            alt="Vivekanand College Campus"
            className="campus-img"
          />
          <h1>Welcome to Vivekanand College!</h1>
          <p className="subtitle">Your journey to excellence starts here.</p>
          <Link to="/admission" className="green-btn">Apply Now!</Link>
          <p className="description">
            <strong>Vivekanand College</strong> blends rich tradition with modern innovation,
            offering a wide range of courses, expert faculty, and top-tier facilities to help students thrive.
          </p>

          {/* Campus Life Section */}
          <div className="campus-section">
            <h2>Campus Life & Facilities</h2>
            <div className="campus-images">
              <img src="/Images/students-studying.jpeg" alt="Campus Info" />
              <img src="/Images/VC_Banner_2.jpg" alt="Campus Building" />
            </div>
            <p>
              Explore our vibrant campus and state-of-the-art facilities designed
              to enhance your learning experience and personal growth.
            </p>
            <p className="explore-msg">Ready to explore our courses?</p>
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default HomePage;
