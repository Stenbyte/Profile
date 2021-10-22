import React from "react";
import "./about.scss";
export default function About({ num }) {
  // const scrollHandle = (e) => {
  //   let target = document.querySelector(".parallax");
  //   let scrolled = e.target.scrollTop;
  //   let rate = scrolled * 0.2;
  //   target.style.transform = `translate3d(0px,${rate}px,0px)`;
  //   let target2 = document.querySelector(".container");
  //   target2.style.transform = `translate3d(0px,${-rate}px,0px)`;
  // };
  const style = {
    transform: `translateY(${num >= 220 ? 1 : 10}rem)`,
  };
  const style1 = {
    transform: `translateY(${num >= 220 ? 1 : -3}rem)`,
  };

  return (
    <div className="about" id="about">
      <div className="parallax" style={style}></div>
      <div className="container" style={style1}>
        <p>
          Hi there, I'm young 34 years old aspiring Frontend developer. I came
          into this industry because of my big interest and passion for it. And
          I'm extremely happy that I lost my previous job due to Covid-19 and
          was kind of forced to change my career and finally study something I
          have been always dreaming of before. I have completed Full Stack Web
          Development Programm(React and Nodejs majors) at Business College
          Helsinki. It is a full-time 17-months intensive program, which covers
          Front and Back End. When I just started my studies I was a complete
          beginner. My toughest challenge was to digest all the information and
          now when I look at my spare-time projects, broad and serious tasks
          that are being delegated to me during my internship, I have become
          indeed confident of my skills and proud of my achievements. Currently,
          I'm focusing on building full-stack projects using React, Firebase,
          Nodejs, MongoDb, express, Sass, MUI, styled components, and others.
          Please take a look at my projects below.
        </p>
      </div>
    </div>
  );
}
