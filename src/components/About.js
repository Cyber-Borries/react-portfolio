import React from "react";
import "./aboutCSS.css";
import adriaanImg from "../images/adriaan.jfif";
import html from "../images/html-5.svg";
import css from "../images/css-3.svg";
import js from "../images/javascript.svg";
import react from "../images/react.svg";
import node from "../images/nodejs.svg";
import mongo from "../images/mongodb.svg";

export default function () {
  return (
    <>
      <div className="about-container">
        <div className="about-container-header">
          <h2> Who is Adriaan</h2>
        </div>
        <div className="about-container-body">
          <p>
            I am a full-stack web developer with a passion for creating
            innovative and user-friendly web applications. I have a certificate
            in full-stack web development from HyperionDev and have also gained
            valuable experience in my previous roles as a car salesman and
            English teacher. <br />
            My goal is to transition into a full-time web development role where
            I can continue to develop my skills and contribute to the creation
            of meaningful and impactful projects. <br /> I am passionate about
            mtorcycles, PC gaming and anything tech related <br />
            <h2>My skills include</h2>
            <div className="skills-container">
              <div className="skills">
                <img src={html} className="skills-image" />
                <img src={css} className="skills-image" />
                <img src={js} className="skills-image" />
                <img src={react} className="skills-image" />
                <img src={mongo} className="skills-image" />
                <img src={node} className="skills-image" />
              </div>
              My technical skills include, Agile development methodologies, and
              API calls. I am always eager to learn new technologies and expand
              my skillset.
            </div>
            <br />
            Thank you for visiting my portfolio and please feel free to contact
            me if you have any questions or would like to discuss a potential
            project.
          </p>
        </div>
      </div>
    </>
  );
}
