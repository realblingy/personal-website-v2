import React, { useState } from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import PikachuGif from "../assets/pikachu.gif";
import { Fade, Grow, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import SkillIcons from "../components/SkillIcons";
import ReactVisibilitySensor from "react-visibility-sensor";

const AboutContainer = styled.section`
  padding-top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 100px;

  @media (max-width: 750px) {
    margin-top: 100px;
    flex-direction: column;
    font-size: 0.9em;
  }
`;

const InfoContainer = styled.div`
  width: 1000px;
  font-size: 1.2em;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  border-radius: 30px;
  margin-left: 1rem;
  margin-right: 1rem;
  color: white;
  text-align: left;

  @media (max-width: 750px) {
    width: 90%;
  }
`;
const Heading = styled.h1`
  font-size: 2.5em;
  text-align: center;
  font-weight: 500;
  text-align: left;
  margin: 20px 3px;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  border: solid 2px white;
  margin-top: 0.2rem;
  background-color: white;
`;

const renderTimelineContent = (date, job, description, image) => {
  return (
    <TimelineItem key="job">
      <TimelineOppositeContent
        style={{
          flex: "none",
          paddingLeft: 0,
        }}
      >
        <Typography
          style={{
            width: "80px",
            textAlign: "left",
          }}
        >
          {date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <LogoImage src={image} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6">{job}</Typography>
        <Typography style={{ marginTop: "0.5rem", marginBottom: "2rem" }}>
          {description}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const jobs = [
  {
    date: "Jul 2023 - Dec 2023",
    job: "Software Engineer - Vamp",
    description: `
      Participated in sprint planning, daily stand-ups, and retrospectives to drive continuous improvement. Expanded internal tools to better support non-technical stakeholders and developed comprehensive tests integrated into the CI/CD pipeline for enhanced code quality. Also, engineered new enhancements for both the company's website and mobile app.
      `,
    image:
      "https://play-lh.googleusercontent.com/nRBcVwE6UJXFMwWtgBvSI2DRMzTTMTL2eT671vjkbM6T3ESkYcXkayda7f9776yd8Pk"
  },
  {
    date: "Aug 2022 - Jul 2023",
    job: "Software Developer - nib Health Group (ASX:200 Company)",
    description: `
      Played a pivotal role in engineering product-focused software serving over a million Australian customers. Led the migration of multiple services from legacy .NET/Angular code to a modern NodeJS tech stack, developed and published npm packages for consumption by Nib's services, and troubleshooted bugs reported by the support team, deploying hotfixes as necessary.
      `,
    image:
      "https://hunterheadline.com.au/wp-content/uploads/2016/10/NIB.jpg"
  },
  {
    date: "Aug 2021 - Aug 2022",
    job: "Junior Software Engineer - Workflow86 (Y-Combinator)",
    description: `
    During my tenure at Workflow86 (YC W22) as a Software Engineer, I worked in a full-stack environment utilizing React.js, Spring Boot, MongoDB, PostgreSQL, and AWS. I contributed to the development and design of new features for integration into the company's product line and conducted refactoring of legacy code to ensure implementation of high-quality code and standards.
        `,
    image:
      "https://www.workflow86.com/wp-content/uploads/2021/06/logo-rounded.jpg",
  },
  ];

function About({ ref }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Element name="About" ref={ref}>
      <AboutContainer>
        <InfoContainer className="infoContainer">
          <ReactVisibilitySensor
            onChange={(isVisible) => !loaded && setLoaded(isVisible)}
          >
            <Fade in={loaded} timeout={1000}>
              <div
                style={{ width: "100%", display: "flex", alignItems: "center" }}
              >
                <Heading>About Me</Heading>
                <img
                  alt="Pikachu Gif"
                  style={{ width: "80px", height: "60px" }}
                  src={PikachuGif}
                />
              </div>
            </Fade>
          </ReactVisibilitySensor>
          <Grow in={loaded} timeout={1500}>
            <hr />
          </Grow>
          <Grow in={loaded} timeout={2000}>
            <div>
              <h3>Bio</h3>
              <p>
                Hello! I'm James, a Software Engineer and Computer Science graduate from the University of New South Wales. Specializing in web development, I excel in technologies like React for frontend and Node.js for backend, along with TypeScript and Git.
              </p>
              <p>
                With a passion for innovation and a drive for continuous learning, I've honed my skills in crafting scalable and responsive full-stack applications. From building sleek user interfaces with React to architecting robust backend systems with Node.js, I thrive on tackling complex challenges and delivering high-quality solutions.
              </p>
              <p>
              Outside of work, I enjoy staying active, exploring new cuisines, and relaxing while watching Netflix. As a dedicated professional with a collaborative mindset, I'm committed to pushing the boundaries of what's possible in software engineering and making meaningful contributions to the field.
              </p>
              <h3>Work Experience</h3>
            </div>
          </Grow>
          <Timeline
            style={{
              paddingLeft: 0,
            }}
          >
            {jobs.map(({ date, description, job, image }, idx) => (
              <Grow key={job} in={loaded} timeout={500 + idx * 500}>
                {renderTimelineContent(date, job, description, image)}
              </Grow>
            ))}
          </Timeline>
          <Grow in={loaded} timeout={1500}>
            <div>
              <h3>A few technologies I know</h3>
              <SkillIcons />
            </div>
          </Grow>
        </InfoContainer>
      </AboutContainer>
    </Element>
  );
}

export default About;
