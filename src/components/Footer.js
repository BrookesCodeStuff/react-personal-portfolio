import React from "react";
import { ReactComponent as GithubLogo } from "../assets/icons/github-octocat.svg";
import { ReactComponent as LinkedInLogo } from "../assets/icons/linkedin-icon.svg";
import { ReactComponent as TwitterLogo } from "../assets/icons/twitter.svg";

function Footer() {
  return (
    <footer className="flex justify-around">
      <a
        href="https://github.com/brookescodestuff"
        target="_blank"
        rel="noreferrer">
        <GithubLogo width="auto" height="55px" />
      </a>
      <a
        href="https://linkedin.com/brookepaglia"
        target="_blank"
        rel="noreferrer">
        <LinkedInLogo width="auto" height="50px" />
      </a>
      <a
        href="https://twitter.com/brookelikesowls"
        target="_blank"
        rel="noreferrer">
        <TwitterLogo width="auto" height="50px" />
      </a>
    </footer>
  );
}

export default Footer;
