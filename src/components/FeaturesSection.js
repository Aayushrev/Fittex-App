import React from "react";
import "./FeaturesSection.css"; // Import the CSS for this section

const FeaturesSection = () => {
  return (
    <section className="features mega-section section-bg-shade" id="features">
      <div className="section-heading">
        <h1 className="heading12">ENTERPRISE SOLUTIONS OVERVIEW</h1>
        <p className="section-subtitle" data-wow-delay=".5s">
          FITTEX is a web-based software application seamlessly integrated
          across all departments of your company, that can automate your
          Manufacturing and Distribution business in quick time.
        </p>
        <div
          className="line line-solid-main-color wow fadeIn"
          data-wow-delay="1s"
        ></div>
      </div>

      <div className="container12">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-image">
              <img
                src="https://fittex.io/assets/images/features/FITTEX_SCM.png"
                alt="SCM"
              />
            </div>
            <div className="feature-content">
              <div className="text-39">SCM</div>
              <div className="text-40">Supply Chain Management</div>
              <div className="text-41">
                Simplified Warehousing Solution with integrated Distribution and
                Centralised retailing.
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-image">
              <img
                src="https://fittex.io/assets/images/features/FITTEX_FBS.png"
                alt="FBS"
              />
            </div>
            <div className="feature-content">
              <div className="text-39">FBS</div>
              <div className="text-40">Factory Business Suite</div>
              <div className="text-41">
                Integrated Apparel factory management that works on a 4 Point
                Planning System.
              </div>
            </div>
          </div>
        </div>

        <div className="features-container">
          <div className="feature-item">
            <div className="feature-image">
              <img
                src="https://fittex.io/assets/images/features/FITTEX_MMS.png"
                alt="MMS"
              />
            </div>
            <div className="feature-content">
              <div className="text-39">MMS</div>
              <div className="text-40">Merchandising Management</div>
              <div className="text-41">
                Gain total control of your Sourcing & Buying Agency Operations.
              </div>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-image">
              <img
                src="https://fittex.io/assets/images/features/FITTEX_CRM.png"
                alt="CRM"
              />
            </div>
            <div className="feature-content">
              <div className="text-39">CRM</div>
              <div className="text-40">Customer Relation Management</div>
              <div className="text-41">
                Potential leads to Customer conversion with integrated Support &
                Work Flow System.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
