import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./globalCSS.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar";
import BlogLayout from "./BlogLayout";
import "./globalCSS.css";
import "./LayoutCSS.css";
import ReactSnapScroll from "react-snap-scroll";

export default function Layout() {
  return (
    <div className="layout-body">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
