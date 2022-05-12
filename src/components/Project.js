import React from "react";
import { capitalize } from "../utils/helpers";

function Project(props) {
  const { name, link, repo, image } = props.project;
  return (
    <a href={link} key={name} target="_blank" rel="noreferrer">
      <div
        className="w-96 h-64 m-2 shadow-md shadow-black rounded-md"
        style={{
          backgroundImage: `url(/assets/images/${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "gray",
          backgroundBlendMode: "multiply",
        }}>
        <span className="text-green-800 font-2xl relative top-5 left-5">
          <a href={link}>{capitalize(name)}</a>
        </span>
      </div>
    </a>
  );
}

export default Project;
