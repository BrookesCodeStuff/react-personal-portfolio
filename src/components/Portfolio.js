import React, { useState } from "react";
import Project from "./Project";

function Portfolio() {
  const [projects, setProjects] = useState([
    {
      name: "treker",
      link: "https://brookescodestuff.github.io/treker/",
      repo: "https://github.com/BrookesCodeStuff/treker",
      image: "",
    },
    {
      name: "quizinator",
      link: "https://brookescodestuff.github.io/quizinator/",
      repo: "https://github.com/BrookesCodeStuff/quizinator",
      image: "",
    },
    {
      name: "vintek",
      link: "",
      repo: "",
      image: "",
    },
  ]);

  return (
    <div>
      {projects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </div>
  );
}

export default Portfolio;
