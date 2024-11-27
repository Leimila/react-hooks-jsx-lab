import React from "react";
import { name, city } from "../data/data"; 

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>{name} is a Web Developer from {city}</h1> {/* Use imported variables */}
    </div>
  );
}

export default Home;

