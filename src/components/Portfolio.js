import React, { useState } from "react";
import Project from "./Project";

function Portfolio() {
  const [projects, setProjects] = useState([
    {
      name: "treker",
      link: "https://brookescodestuff.github.io/treker/",
      repo: "https://github.com/BrookesCodeStuff/treker",
      image: "treker.png",
    },
    {
      name: "quizinator",
      link: "https://brookescodestuff.github.io/quizinator/",
      repo: "https://github.com/BrookesCodeStuff/quizinator",
      image: "quizinator.png",
    },
    {
      name: "vintek",
      link: "https://floating-chamber-49203.herokuapp.com/",
      repo: "https://github.com/BrookesCodeStuff/VinTek",
      image: "vintek.png",
    },
    {
      name: "rock, Paper, Scissors",
      repo: "https://github.com/BrookesCodeStuff/rps-gui",
      link: "https://brookescodestuff.github.io/rps-gui/",
      image: "rps.png",
    },
    {
      name: "Etch-A-Sketch",
      repo: "https://github.com/BrookesCodeStuff/etch-a-sketch",
      link: "https://brookescodestuff.github.io/etch-a-sketch/",
      image: "etchasketch.png",
    },
    {
      name: "workday Scheduler",
      link: "https://brookescodestuff.github.io/workday-scheduler/",
      repo: "https://github.com/BrookesCodeStuff/workday-scheduler",
      image: "workday.png",
    },
    {
      name: "BookSpace",
      link: "https://github.com/BrookesCodeStuff/BookSpace",
      repo: "https://book-space-app.herokuapp.com/",
      link: "bookspace.png",
    },
  ]);

  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </div>
  );
}

export default Portfolio;
