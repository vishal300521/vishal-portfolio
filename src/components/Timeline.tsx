import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Education & Learning</h1>

        <VerticalTimeline>

          {/* BTech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2025 - 2029"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              BTech - Computer Science & Engineering
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Lovely Professional University
            </h4>

            <p>
              Currently in 2nd Year / 3rd Semester. Building a strong
              foundation in computer science, programming, web development,
              databases, and problem solving.
            </p>
          </VerticalTimelineElement>


          {/* Class 12 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Class 12th
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Urmila Devi Inter College
            </h4>

            <p>
              State Board • Percentage: 63%
            </p>
          </VerticalTimelineElement>


          {/* Class 10 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Class 10th
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Government Inter College
            </h4>

            <p>
              State Board • Percentage: 82.67%
            </p>
          </VerticalTimelineElement>


          {/* Cyber Security */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Completed"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faShieldHalved} />}
          >
            <h3 className="vertical-timeline-element-title">
              Cyber Security Course
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Infosys Springboard
            </h4>

            <p>
              Completed a Cyber Security course and developed an
              understanding of fundamental cybersecurity concepts.
            </p>
          </VerticalTimelineElement>


          {/* Full Stack */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Currently Learning"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Web Development
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Udemy
            </h4>

            <p>
              Currently learning full stack web development and expanding
              my skills in modern web technologies and application development.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;