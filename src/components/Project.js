import React from "react";

function Project(props) {
  const { name, link, repo } = props.project;
  return (
    <a href={link} key={name} target="_blank" rel="noreferrer">
      <div>{name}</div>
    </a>
  );
}

export default Project;
