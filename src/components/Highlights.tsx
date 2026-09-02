import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import DescriptionIcon from "@mui/icons-material/Description";
import "../assets/styles/Highlights.scss";

const githubUrl = "https://github.com/vishal300521";
const linkedInUrl = "https://www.linkedin.com/in/vishal-kumar11/";

function Highlights() {
  return (
    <section className="highlights-container" id="highlights" aria-labelledby="highlights-title">
      <div className="section-heading">
        <p className="eyebrow">Beyond the classroom</p>
        <h1 id="highlights-title">Highlights</h1>
      </div>

      <div className="highlights-grid">
        <article className="highlight-card" id="certifications">
          <WorkspacePremiumIcon className="highlight-icon" />
          <h2>Certifications</h2>
          <div className="detail-list">
            <div>
              <h3>Cyber Security Course</h3>
              <p>Infosys Springboard · Completed</p>
            </div>
          </div>
        </article>

        <article className="highlight-card" id="hackathons">
          <EmojiEventsIcon className="highlight-icon" />
          <h2>Hackathons</h2>
          <p className="empty-state">
            I’m preparing to participate in hackathons. New projects, team roles,
            and achievements will be featured here.
          </p>
        </article>

        <article className="highlight-card" id="profiles">
          <GitHubIcon className="highlight-icon" />
          <h2>Find me online</h2>
          <div className="profile-links">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub profile
            </a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn profile
            </a>
          </div>
        </article>

        <article className="highlight-card resume-card" id="resume">
          <DescriptionIcon className="highlight-icon" />
          <h2>Resume</h2>
          <p>View a printer-friendly version of my portfolio and save it as a PDF.</p>
          <button className="resume-button" type="button" onClick={() => window.print()}>
            <DescriptionIcon /> Print / Save resume
          </button>
        </article>
      </div>
    </section>
  );
}

export default Highlights;
