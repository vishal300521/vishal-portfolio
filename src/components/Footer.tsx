import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/vishal300521"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/vishal-kumar11/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>

      <p>
        A portfolio designed &amp; built by{" "}
        <span>Vishal Kumar</span> with 💜
      </p>
    </footer>
  );
}

export default Footer;