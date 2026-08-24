import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "HTML",
    "CSS",
    "JavaScript"
];

const labelsSecond = [
    "C",
    "C++ (Learning)"
];

const labelsThird = [
    "DBMS"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>

                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x"/>
                        <h3>Web Development</h3>
                        <p>
                            I have learned the fundamentals of web development
                            and can build responsive web pages using HTML, CSS,
                            and JavaScript.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                        <h3>Programming & Problem Solving</h3>
                        <p>
                            I have learned C programming and am currently
                            learning C++ to strengthen my programming,
                            data structures, and problem-solving skills.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Languages:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>


                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x"/>
                        <h3>Database Management</h3>
                        <p>
                            I have learned the fundamentals of Database
                            Management Systems and understand core concepts
                            related to organizing and managing data.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Knowledge:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;