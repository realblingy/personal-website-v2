import React, { useState } from 'react'
import styled from 'styled-components';
import { Element } from 'react-scroll';
import PikachuGif from '../assets/pikachu.gif'
import { Fade, Grow, Slide, Typography } from '@material-ui/core';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@material-ui/lab';
import SkillIcons from '../components/SkillIcons';
import ReactVisibilitySensor from 'react-visibility-sensor';

const AboutContainer = styled.section`
    padding-top: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-bottom: 100px;

    @media(max-width: 750px) {
        flex-direction: column;
        font-size: 0.9em;
    }
`

const InfoContainer = styled.div`
    width: 1000px;
    font-size: 1.2em;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
    border-radius: 30px;
    margin-left: 1rem;
    margin-right: 1rem;
    overflow-y: hidden;
    color: white;
    text-align: left;

    @media(max-width: 750px) {
        width: 90%;
    }
      
`
const Heading = styled.h1`
    font-size: 2.5em;
    text-align: center;
    font-weight: 500;
    text-align: left;
    margin: 20px 3px;
`

const LogoImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
    border: solid 2px white;
    margin-top: 0.2rem;
    background-color: white;
`


const renderTimelineContent = (date, job, description, image) => {

    return  (
        <TimelineItem
        >
            <TimelineOppositeContent
                style={{
                    flex: 'none',
                    paddingLeft: 0
                }}
            >
                <Typography
                    style={{
                        width: '80px',
                        textAlign: 'left'
                    }}
                >
                    { date }
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <LogoImage
                    src={image}
                />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h6">
                    { job }
                </Typography>
                <Typography style={{ marginTop: '0.5rem', marginBottom: '2rem'}} >
                    { description }
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

const jobs = [
    {
        date: 'Aug 2021 - Present',
        job: 'Junior Software Engineer - Workflow86',
        description: `Maintained and implemented new features to the existing software.
         Followed agile methodologies and worked with microservices architecture, CI/CD and
         AWS cloud technologies.
        `,
        image: "https://www.workflow86.com/wp-content/uploads/2021/06/logo-rounded.jpg"
    },
    {
        date: 'Jan 2019 - Present',
        job: 'Mathematics Tutor - Coaching First College',
        description: 'Planned lessons, tracked homework records and taught high school Mathematics.',
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAUVBMVEVjo/INTqNmp/YASJ4ARp0KTKIESqBhofAVVKhGgtIPUKVoqfg5dMVVlOMqZbdenu0eW649eclOi9sybr9UkuEjX7Iwa71JhdUnYrUxbb4AP5iRgCObAAAELElEQVR4nO3c23ajIBgFYP05qaioMZrO+z/omKTt9ABKTGcEZn+rN73oWuyCnASzDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+MrrKTHNj1O33o8v0Y5YsZuhP50Jyxl5/ZNW19TwqHX9M0k3Z5pxJIfLPhJSMF1PZxFyZRGNdWcJ9ysnyaVb66KLuQqYv2Eq495BC8kupoqtKbV6Y3I73pyqnMaqKJDNxj+r7FJIV89HFfkDt0zy/YTKSlqrHyr99fqrGKY6EVPNd+ZY6HI4uuxdT7KvAa3cTQxVSI/c8gfeEdQQJaWB78y2NtDm6+Nto2PsIXhXhD4jPBZR9+I20eaKJ5jk3R5d/k9rdx1yJLvhGSt1TCWV5dIAtVHuMg+Iut/wvmDo6wQZqNnqZZfkginY61aep7XLGvoybog29n6FiNR6Tp9lkmu40qbF8qT6mDH7GRv1KGxW8Hb4vcEmb8szf/kweUepHqJWAvDWObnIJ2Ve3hZY4Bd5IV7oZUQ1rwwDR0C0Z2Rh4QuUc69ll84/12PEq8IDuKmS1xzhOeg5+xuZaMnkFjMHsaKRySiSgvtirUHShtz1fxjGdiWC14Km09zOyTKUKqbU30tBHgAfYq5DFtIW9bnT0pMlUoWPSHcO2iyearI9hOh1ppitrGy2SqULHrDuKDWxP9u0LGfqa/QGDtaNh6TyGjhlNFO+R/DjWhslMupeEJ1vC8DcH/dmHw+B3lh5gn3enNFiQdfkrU0p4tiZMZ1bqSJh+K/0PepqXhBLaR4tzQglr6/IwocWTY4nP00nomHnzCI7/+LIfg5Lp7LQ5TtGk1Jlm9s3EhPaDtf2MQgzn8Dw5dhMTmtWQ48WMSCahY7MtoVdPGble4qeT0PF2LaE14uyoxHTmNcrxllsUR5fsp7iaaTpnMRxT0wU7+UWkJvDzs+QI6BmRspoHflB/5eylPKuNHpWozGXO/01Jd1s5fCny9bOJWXm7B8aGsIeW1UPe7Oy6PEnUnF7vYYY/eK5e9uXnOft6SHj5ffxwjTb4rSsqV2+TCCnbflT0zgx9K/nHig/+haPeum0hJOOiO7dTe+kq9u2sfgQTION1Jej1voVF+EuRjXa6nT38d6p62nt59FXwCbPsuYtP4T+Iy7hfPRMxih1W80zEOLaunooY+OT7jtTuu+rRHKOiafegEctROF0++s2PN9G8+yfT7fruR56HfxP4jS7lnqdR/Dq64P5I1Q98fuceT/I2giH/jyWjfOALGYKJ2nUNM1iUzR33CimYnCy3aGOgTb8Rclk0sq4esyjj3RCpoe4Yl18/aSaun2tjVdsPSsdZfR+Qzpq5n86FvH5u7/bNPVFcpn4eTWKfFtQ6U+ZKZVqnlA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4If8BtRjJuGDr6/CAAAAAElFTkSuQmCC"
    },
    {
        date: 'Apr 2021 - Jul 2021',
        job: 'Web Application Developer Intern - Streamplate',
        description: 'Developed a web app that replicated the company\'s phone app and set up the CI/CD for it.',
        image: 'https://streamplate.com/images/Union.svg'
    },
    {
        date: 'Jun 2020 - Oct 2020',
        job: 'Software Developer Intern - Success Tutoring',
        description: 'Built the frontend and backend for a self-serve kiosk to automate adminsitrative tasks.',
        image: 'https://static.wixstatic.com/media/c6cedf_152aa6dc87cb420292dddb27ce9cfc79~mv2.png/v1/fill/w_228,h_170,al_c,q_85,usm_0.66_1.00_0.01/Logo%20-%20Success%20Tutoring.webp'
    }
]

function About({ ref }) {

    const [loaded, setLoaded] = useState(false);

    return (
        <Element name="About" ref={ref}>
            
            <AboutContainer>
          
                <InfoContainer className="infoContainer">
                    <ReactVisibilitySensor onChange={isVisible => !loaded && setLoaded(isVisible)}>
                        <Fade in={loaded} timeout={1000}>
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                <Heading>About Me</Heading>
                                <img style={{ width: '80px', height: '60px' }} src={PikachuGif} />
                            </div>
                        </Fade>
                    </ReactVisibilitySensor>
                    <Grow in={loaded} timeout={1500}>
                        <hr/>
                    </Grow>
                    <Grow in={loaded} timeout={2000}>
                        <div>
                            <h3>Bio</h3>
                            <p>
                                Hey everyone! I’m in my final year studying
                                Computer Science at the
                                University of New South Wales,
                                averaging a Distinction WAM across computing courses.
                            </p>
                            <p>
                                I’m mainly interested in web development, having industrial experience with
                                React, Node.js, Spring Boot, MongoDB, PostgreSQL, and many other technologies.
                                
                            </p>
                            <p>
                                As for hobbies, I like to play League of Legends (although I'm not that good) and watch Netflix (if that counts).
                            </p>
                            <p>
                                I also teach Mathematics to high school students! So if you're looking for help
                                with your studies, feel free to send me a message.
                            </p>
                            <h3>Work Experience</h3>
                        </div>
                    </Grow>
                    <Timeline
                        style={{
                            paddingLeft: 0
                        }}
                    >

                        {jobs.map( ({ date, description, job, image }, idx) => (
                            <Slide direction="left" in={loaded} timeout={500 + idx * 500}>
                                {renderTimelineContent(date, job, description, image)}
                            </Slide>
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
    )
}

export default About
