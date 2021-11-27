import React from "react";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>CONTACT ME</h1>
      <div className="common">
        <div className="c">
          <h3>HIRE ME</h3>
          <p>
            I live in Helsinki and I have Finnish citizenship, therefore I can
            be legally employed in Finland or other EU country.
          </p>
          <h3>
            EMAIL : <span>sten.scheifel@gmail.com</span>
          </h3>
          <h3>
            LINKEDIN :{" "}
            <a
              href="https://linkedin.com/in/sten-scheifel-2b4697168/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </h3>
          <h3>
            GITHUB :{" "}
            <a
              href="https://github.com/Stenbyte"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </h3>
        </div>
        <div className="c1">
          <h3>Codewars stats :</h3>
          <img
            src="https://www.codewars.com/users/Stenbyte/badges/large"
            alt=""
          />
        </div>
      </div>
      <div className="footer">
        Made By <span>Sten Scheifel</span>
      </div>
    </div>
  );
}
