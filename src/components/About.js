import React from "react";

function About() {
  return (
    <div>
      <img
        src={require("../assets/img/me.png")}
        alt="memoji avatar sitting at computer"
        className="w-1/3 float-left mt-3 mx-2 sm:w-40"
      />
      <p>
        Hello, I'm a full-stack web developer in Florida ☀️. I'm currently a
        Solutions Developer at Orlando Health and attending a coding bootcamp at
        UCF. Creating responsive web applications and sites is one of my
        favorite things to do and I'm hoping to make a career out of it!
      </p>

      <p>
        When I'm not coding, I like to play video games, binge Netflix, take my
        dog Zeus for walks, and play D&D with my friends. Some of my favorite
        things are Pokemon, Marvel (sorry, DC), loose leaf tea, coffee, owls,
        and Halloween.
      </p>
    </div>
  );
}

export default About;
