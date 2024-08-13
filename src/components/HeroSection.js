import React from "react";
import "./HeroSection.css"; // Import your CSS for styling
import heroImage from "../assets/images/part-1.png";

const HeroSection = () => {
  return (
    <section
      className="d-flex align-items-center page-hero HomePagePageHero"
      id="page-hero"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1628818880575-be0aba78fdf2?q=80&w=1927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="overlay-shape-image-bg"></div>
      <div className="overlay-color"></div>
      <div className="container">
        <div className="hero-text-area">
          <div>
            <h1 className="hero-title words chars splitting">
              Integrated Apparel Management Solution
            </h1>
            <p className="hero-subtitle words chars splitting">
              A ready to deploy suite for Apparel & Textile Business that
              provides total control and insight of your Orders, Planning,
              Inventory, Production & Shipments.
            </p>
            <div className="cta-links-area">
              <button
                className="ma-btn-primary cta-link wow fadeInUp"
                onClick={() => ShowRequestCallBack()}
                data-wow-delay="0.8s"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className="hero-image-area">
          <img
            className="illustration-part part-1 wow fadeInRight"
            src={heroImage}
            alt="Hero Illustration"
          />
        </div>
      </div>
    </section>
  );
};

const ShowRequestCallBack = () => {
  // Implement the callback function logic here
  console.log("Contact us clicked");
};

export default HeroSection;
