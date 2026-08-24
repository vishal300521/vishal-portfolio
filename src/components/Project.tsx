import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMicrochip } from "@fortawesome/free-solid-svg-icons";

import "../assets/styles/Project.scss";

import instituteWebsite from "../assets/images/institute-website.png";
import medicineDispenser from "../assets/images/medicine-dispenser.png";

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>

            <div className="projects-grid">

                {/* Project 1 */}
                <div className="project-card">

                    <div className="project-image">
                        <img
                            src={instituteWebsite}
                            alt="Institute Website"
                        />
                    </div>

                    <div className="project-info">
                        <FontAwesomeIcon icon={faCode} size="2x" />

                        <h2>Institute Website</h2>

                        <p>
                            A sample website designed for an educational
                            institute with a modern interface, navigation,
                            course information, and responsive layout.
                        </p>

                        <div className="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                    </div>

                </div>


                {/* Project 2 */}
                <div className="project-card">

                    <div className="project-image">
                        <img
                            src={medicineDispenser}
                            alt="Automatic Medicine Dispenser"
                        />
                    </div>

                    <div className="project-info">
                        <FontAwesomeIcon icon={faMicrochip} size="2x" />

                        <h2>Automatic Medicine Dispenser</h2>

                        <p>
                            An embedded systems project designed to assist
                            users with scheduled medicine dispensing and
                            reminders using a microcontroller and electronic
                            components.
                        </p>

                        <div className="project-tech">
                            <span>ESP32</span>
                            <span>OLED</span>
                            <span>Sensors</span>
                            <span>Buzzer</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Project;