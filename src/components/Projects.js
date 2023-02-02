import React, { useState } from "react";
// import placeholderImg from "../images/placeholder.jpg";
import placeholderImg from "../images/placeholder.jpg";
import Route from "react-router-dom";
import "./projectsCSS.css";

export default function Projects() {
  //create dummy array of objects of projects
  const [projects, setProjects] = useState([
    {
      title: "Full stack inventory management system",
      description:
        "This basic inventory management system can be scaled to whatever your needs are. It has admin and end user privileges which uses JWT authentication. It allows an admin user to add, remove and change stock items, whereas the normal end user can only see available stock. Ways this app can be scaled: Stock location can be added for ease of finding something. An end user could be allowed to make changes from stock, ie when an item is sold or broken. Automatic ordering system could be implemented",
      technologies:
        "This app was built using React as the frontend. The serverside was made with Express and Node. The database has been made with Mongo and Mongoose",
      preview: placeholderImg,
      url: "https://www.facebook.com",
    },
    {
      title: "Weather App",
      description:
        "This weather app allows you to search for any city on the planet to see the current weather forecast for that given city.",
      technologies:
        "This app was built with React as the frontend. And no backend was made",
      preview: placeholderImg,
      url: "https://nothing",
    },
    {
      title: "Car app",
      description:
        "This MERN stack app allows a user to add, edit, update and delete information about a certain car. This app is connected to a database so all information will be saved for future reference",
      technologies:
        "This app was built using React as the frontend. The serverside was made with Express and Node. The database has been made with Mongo and Mongoose",
      preview: placeholderImg,
      url: "https://nothing",
    },
  ]);
  return (
    <>
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card card">
            <div className="project-card-header">
              <h2>{project.title}</h2>
            </div>
            <div className="project-card-body">
              {/* image */}{" "}
              <img src={project.preview} className="project-image" />
              <caption>{project.title}</caption>
              <div>{project.description}</div>
            </div>
            <div className="project-card-footer">{project.technologies}</div>
            <div className="project-card-footer">
              <a href={project.url} target="_blank">
                Link to project
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
