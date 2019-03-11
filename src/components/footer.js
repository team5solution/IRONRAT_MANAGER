import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="bg-dark">
      <div className="text-center">
        <p className="display-4">
          <a href="https://d.facebook.com/ironratcustoms/">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="https://www.instagram.com/iron_rat_customs/">
            <i className="fab fa-instagram" />
          </a>
          <a href="mailto:carlsabourin@gmail.com">
            <i className="fas fa-envelope" />
          </a>
          <a href="tel:+16138623030">
            <i className="fas fa-phone" />
          </a>
        </p>
      </div>

      <div className="text-center text-primary">
        <p>2018 Copyright</p>
      </div>
    </div>
  );
};
export default Footer;
