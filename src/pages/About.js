import React from 'react'
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import { easeQuadInOut } from "d3-ease";
import ReactLogo from '../assets/iconlogos/react.png'
import NodejsLogo from '../assets/iconlogos/nodejs.png'
import AWSLogo from '../assets/iconlogos/aws.png'
import KubernetesLogo from '../assets/iconlogos/kubernetes.png'
import FirebaseLogo from '../assets/iconlogos/firebase.png'
import MongoDBLogo from '../assets/iconlogos/mongodb.png'
import DockerLogo from '../assets/iconlogos/docker.png'
import PythonLogo from '../assets/iconlogos/python.png'
import LogoCarousel from '../components/LogoCarousel';

const AboutContainer = styled.section`
    height: max(100vh, 800px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 750px) {
        flex-direction: column;
    }
`

const InfoContainer = styled.div`
    border: solid #3C1874 5px;
    height: 600px;
    background-color: white;
    width: 600px;
    color: black;
    font-size: 1.2em;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
    border-radius: 30px;
    margin-left: 1rem;
    margin-right: 1rem;
    overflow-y: hidden;

    @media(max-width: 750px) {
        width: 90%;
    }

    @media (max-width: 500px) {
        font-size: max(0.7em, 3.8vw);
    }
      
`
const Heading = styled.h1`
    font-size: 2.5em;
    text-align: center;
`

const LogoImage = styled(animated.img)`
    width: ${props => props.width || "50px"};
    height: ${props => props.height || "50px"};
`

const LogoGroup = styled.div`
    height: 600px;
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    margin-left: 1rem;
    margin-right: 1rem;

    @media (max-width: 750px) {
        display: none;
    }
`

function About() {

    const LogoSpring = useSpring({
        loop: true,
        to: [
            { transform: 'rotate(-15deg)'},
            { transform: 'rotate(15deg)'},
            { transform: 'rotate(0deg)' }
        ],
        from: {
            transform: 'rotate(0deg)'
        },
        config: {
            duration: 1000,
            easing: easeQuadInOut
        }
    })

    const logos = [
        {
            src: ReactLogo,
            width: "60px",
            height: "50px"
        }, 
        { 
            src: NodejsLogo,
            width: "60px",
            height: "40px"
        }, 
        { 
            src: AWSLogo,
            width: "55px",
            height: "40px"
        }, 
        { 
            src: KubernetesLogo,
            width: "90px",
        },
        {
            src: FirebaseLogo,
            width: "50px",
            height: "60px"
        },  
        { 
            src: MongoDBLogo,
            width: "85px",
            height: "25px"
        }, 
        { 
            src: DockerLogo,
            width: "55px",
            height: "45px"
        },
        {
            src: PythonLogo,
            width: "50px",
        }
    ];

    return (
        <Element name="About">
            <AboutContainer>
                <LogoGroup>
                    <LogoImage style={LogoSpring} width="60px" height="50px" src={ReactLogo} />
                    <LogoImage style={LogoSpring} width="60px" height="40px" src={NodejsLogo} />
                    <LogoImage style={LogoSpring} width="55px" height="40px" src={AWSLogo} />
                    <LogoImage style={LogoSpring} width="90px" src={KubernetesLogo} />
                </LogoGroup>
                <InfoContainer>
                    <Heading>About Me</Heading>
                    <p>
                        Hey everyone! I’m in my final year studying Computer Science at the University of New South Wales, averaging a Distinction WAM in computing courses.
                    </p>
                    <p>
                        I’m mainly interested in web development, having hands-on experience with React, Node.js, MongoDB, AWS, Docker and Kubernetes. 
                    </p>
                    <p>
                        Regarding work experience, I have interned as a Software Developer at Success Tutoring, building a self-serve kiosk to replace administrator roles. As of now, I am working at Streamplate as a Web App Developer, building the next UberEats ordering service!
                    </p>
                    <p>
                        When I’m not coding, I am teaching high school Mathematics on the weekend.
                    </p>
                </InfoContainer>
                <LogoGroup>
                    <LogoImage style={LogoSpring} width="50px" height="60px" src={FirebaseLogo} />
                    <LogoImage style={LogoSpring} width="85px" height="25px" src={MongoDBLogo} />
                    <LogoImage style={LogoSpring} width="55px" height="45px" src={DockerLogo} />
                    <LogoImage style={LogoSpring} width="50px" src={PythonLogo} />
                </LogoGroup>
                <LogoCarousel logoSpring={LogoSpring} logos={logos} />
            </AboutContainer>
        </Element>
    )
}

export default About
