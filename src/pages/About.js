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
    date: "Jul 2023 - Present",
    job: "Software Engineer - Vamp",
    description: `
      TBA - Just started the role :)
      `,
    image:
      "https://play-lh.googleusercontent.com/nRBcVwE6UJXFMwWtgBvSI2DRMzTTMTL2eT671vjkbM6T3ESkYcXkayda7f9776yd8Pk"
  },
  {
    date: "Aug 2022 - Jul 2023",
    job: "Software Developer - nib Health Group (ASX:200 Company)",
    description: `
      Full-stack role working in a TypeScript and .NET environment.
      Built self-service software so customers could view and change their personal data.
      `,
    image:
      "https://hunterheadline.com.au/wp-content/uploads/2016/10/NIB.jpg"
  },
  {
    date: "Aug 2021 - Aug 2022",
    job: "Junior Software Engineer - Workflow86 (Y-Combinator)",
    description: `Maintained and implemented new features to the existing software.
         Followed agile methodologies and worked with microservices architecture, CI/CD and
         AWS cloud technologies.
        `,
    image:
      "https://www.workflow86.com/wp-content/uploads/2021/06/logo-rounded.jpg",
  },
  {
    date: "Jun 2020 - Oct 2020",
    job: "Software Developer Intern - Success Tutoring",
    description:
      "Built the frontend and backend for a self-serve kiosk to automate adminsitrative tasks.",
    image:
      "https://static.wixstatic.com/media/c6cedf_152aa6dc87cb420292dddb27ce9cfc79~mv2.png/v1/fill/w_228,h_170,al_c,q_85,usm_0.66_1.00_0.01/Logo%20-%20Success%20Tutoring.webp",
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
                Hey everyone! I’m a Computer Science graduate of the University
                of New South Wales, currently working as a Software Developer at Vamp.
              </p>
              <p>
                I have a keen interest in anything with web development. I have industrial
                experience with React, Node.js, TypeScript, AWS, and many other technologies.
              </p>
              <p>
                In my spare time, I'm always looking out to learn new technologies. As of now
                my learning has been focused on static site generation and headless CMS. I plan to use this information to hopefully
                open my own web development agency and develop websites for small to medium businesses. I'm also learning
                system design on the side, mainly with AWS cloud infrastructure.
              </p>
              <p>
                If you want to know my hobbies, I'm quite a plain person. I mainly just go gym,
                eat out with mates and watch Netflix.
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
              <h3>Skills</h3>
              <SkillIcons />
            </div>
          </Grow>
        </InfoContainer>
      </AboutContainer>
    </Element>
  );
}

export default About;
