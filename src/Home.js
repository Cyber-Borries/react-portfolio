import React, { useState, useEffect } from "react";
import "./homeCSS.css";
import adriaanImg from "../images/adriaan.jfif";
import AnimatedCursor from "react-animated-cursor";
import { BarLoader } from "react-spinners";
import { TypeAnimation } from "react-type-animation";

//100vh height as the "landing page" a picture of me or code maybe that has cool animations

export default function Home() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isChange, setIsChange] = useState(false);
  const [cursorStyle, setCursorStyle] = useState();
  const arrOfNames = [
    "Adriaan.",
    "a full-stack developer.",
    "a problem-solver.",
  ];
  const [displayName, setDisplayName] = useState(arrOfNames[0]);

  const MINUTE_MS = 3000;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let chooseNameIdx = Math.floor(Math.random() * arrOfNames.length);
  //     let prevIdx = chooseNameIdx;
  //     console.log("chooseNameIdx", chooseNameIdx);
  //     setDisplayName(arrOfNames[chooseNameIdx]);
  //   }, MINUTE_MS);
  //   console.log("displayName", displayName);
  //   // setIndex(index => index + 1),
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChange((prevState) => !prevState);
    }, MINUTE_MS);
    // setIndex(index => index + 1),
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setCoords({
      x: e.clientX,
      y: e.clientY,
    });
  };
  let cursorColor = `rgb(${coords.x}, ${coords.y}, ${
    coords.x - coords.y
  }, 0.9)`;
  let cursorColor2 = `rgb(${coords.y}, ${coords.x}, ${
    coords.y - coords.x
  }, 0.6)`;
  console.log("cursorColor", cursorColor);

  console.log("coordsX", coords.x);

  // color:  transparent;
  // background-color: `rgb(${coords.x}, ${coords.y}, ${
  //   coords.x - coords.y
  // }, 0.8)` // Use alpha transparency
  // text-shadow: 0 0 40px #fff; // Blurry white shadow
  // font: bolder 320pt/320pt monospace;
  // mix-blend-mode: multiply;

  return (
    <>
      <AnimatedCursor
        color="255,255,255"
        innerSize={18}
        outerSize={35}
        innerScale={1}
        outerScale={1}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: cursorColor2,
          textShadow: "0 0 40px #000",
          font: "bolder 320pt/320pt monospace",
          mixBlendMode: "multiply",
        }}
      />
      <div className="landing-page">
        <div className="welcome" onMouseMove={handleMouseMove}>
          <div className="hex-container">
            <div className="hex-row">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>
            <div className="hex-row">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>{" "}
            <div className="hex-row">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>{" "}
            <div className="hex-row">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>{" "}
            <div className="hex-row">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>{" "}
            <div className="hex-row">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>{" "}
            <div className="hex-row">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>{" "}
            <div className="hex-row">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>
            <div className="hex-row">
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
              <div className="hexagon"></div>
            </div>
          </div>
          <div className="left">
            <img src={adriaanImg} className="adriaan" />
            <span>{isChange}</span>
          </div>
          <div className="right">
            <h3 className="welcome-text">
              Hey there! 👋 I'm <br />
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={[
                  "Adriaan.",
                  2000,
                  "a full-stack developer.",
                  2000,
                  "a problem solver.",
                  2000,
                ]}
                speed={20} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "1em" }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
              <br />
              <span className="welcome-text-bottom">Come hang out</span>
            </h3>
          </div>
          <div className="scroll-arrows">
            <div className="down-arrow"></div>
          </div>
        </div>
      </div>
    </>
  );
}
