import React from 'react';
import './about.css'; // Make sure to import your CSS file

const AboutSection = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <div className="profile-cards">
        <div className="card">
          <div className="profile-image">
            <img src="https://placekitten.com/300/300" alt="Profile Image" />
          </div>
          <div className="profile-details">
            <h2>John Doe</h2>
            <p>Web Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ipsum quis justo pharetra iaculis.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="profile-image">
            <img src="https://placekitten.com/300/300" alt="Profile Image" />
          </div>
          <div className="profile-details">
            <h2>John Doe</h2>
            <p>Web Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ipsum quis justo pharetra iaculis.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="profile-image">
            <img src="https://placekitten.com/300/300" alt="Profile Image" />
          </div>
          <div className="profile-details">
            <h2>John Doe</h2>
            <p>Web Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ipsum quis justo pharetra iaculis.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="profile-image">
            <img src="https://placekitten.com/300/300" alt="Profile Image" />
          </div>
          <div className="profile-details">
            <h2>John Doe</h2>
            <p>Web Developer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ipsum quis justo pharetra iaculis.
            </p>
          </div>
        </div>
        {/* Repeat the above card structure for other profiles */}
      </div>
      <div className="aboutus" name="About">
        <p>We are a company that provides students with the resources they need to succeed. We offer a wide variety of products and services, including textbooks, stationery, and tutoring.</p>
        <p>We are committed to helping students achieve their academic goals. We believe that everyone has the potential to succeed, and we are here to help you reach your full potential.</p>
        <div className="copyright">
          © 2023 LMS. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
