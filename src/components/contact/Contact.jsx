import React from "react";
import "./contact.scss";
import square from "../../img/square.svg";
import snake from "../../img/snake2.svg";
import person from "../../img/person.svg";
import plus from "../../img/plus1.svg";
import mail from "../../img/mail.svg";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact me</h1>
      <img src={snake} alt="" className="snake" />
      <img src={plus} alt="" className="plus" />
      <img src={plus} alt="" className="plus1" />
      <img src={plus} alt="" className="plus2" />
      <div className="common">
        <img src={square} alt="" className="square" />
        <img src={square} alt="" className="square1" />
        <div className="one">
          <h3>HIRE ME</h3>
          <p>
            I live in Helsinki and I have Finnish citizenship, therefore I can
            be legally employed in Finland or other EU country.
          </p>
        </div>
        <div className="two">
          <h3>
            <img src={mail} alt="" />
            <span>sten.scheifel@gmail.com</span>
          </h3>
          <div className="links">
            <h3>
              <a
                href="https://linkedin.com/in/sten-scheifel-2b4697168/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </h3>
            <h3>
              <a
                href="https://github.com/Stenbyte"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </h3>
          </div>
        </div>
        <div className="three">
          <p>
            {" "}
            Designed & created by <span>Sten Scheifel</span>
            <img src={person} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="c">
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
      </div> */
}
