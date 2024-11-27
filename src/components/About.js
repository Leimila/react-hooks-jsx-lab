import React from "react";
import { image } from "../data/data"; // Import variable from user.js

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I'm a web developer passionate about creating interactive applications and experiences on the web.</p>
      <img src={image} alt="I made this" /> {/* Use imported variable */}
    </div>
  );
}

export default About;

