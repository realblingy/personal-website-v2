import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring'
import { easeQuadInOut } from "d3-ease";
import { Element } from 'react-scroll';
import { Grow, Tooltip } from '@material-ui/core';
import TypeWriterEffect from 'react-typewriter-effect';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import SakuraGif from '../assets/sakura.gif'
import ProfileImage from '../assets/Me.png'

const HomeContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: min(100vh);
    min-height: 700px;
    width: 100%;

    @media(max-width: 500px) {
        height: 650px;
    }
`

const SakuraImage = styled.img`
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    width: 400px;
    position: absolute;
    top: 0;
    left 0;

    @media (max-width: 400px) {
        width: 90%;
    }
`

const ProfileBubble = styled(animated.img)`
    border-radius: 50%;
    height: 350px;
    width: 350px;
    border: solid 6px;

    @media (max-width: 750px) {
        width: 250px;
        height: 250px;
    }
`

const ProfilePhotoGroup = styled.div`
    flex-grow: 1;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 750px) {
        margin-bottom: -4rem;
    }
`

const MainProfileGroup = styled.div`
    height: 600px;
    max-width: 1000px;
    min-width: 800px;
    width: 80%;
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 2;

    @media (max-width: 750px) {
        flex-direction: column-reverse;
        min-width: 300px;
        max-width: 300px;
        margin-top: 1rem;
    }
`

const ProfileInfoGroup = styled(animated.div)`
    height: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;

    @media (max-width: 750px) {
        font-size: 0.6em;
    }

`

const ProfileUniInfo = styled(animated.div)`
    border-radius: 50%;
    background-color: #C30019;
    color: white;
    position: absolute;
    bottom: 20%;
    left: 10%;
    width: 130px;
    height: 130px;
    text-align: center;
    padding-top: 0.7rem;
    box-sizing: border-box;

    @media (max-width: 750px) {
        left: 2%;
        bottom: 15%;
        height: 100px;
        width: 100px;
        font-size: 0.8em;
        padding-top: 0.5rem;
    }
`

const Name = styled(animated.h1)`
    font-size: 6em;
    text-align: center;
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 0.5rem;
    color: white;
`

const Job = styled.h3`
    text-align: center;
    color: black;
    font-size: 1.3em;
    font-weight: 500;

    @media (max-width: 750px) {
        font-size: 1.7em;
    }
`

const LinkedInButton = styled(AiFillLinkedin)`
    color: skyblue;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        transform: scale(1.2);
    }
`

const InstagramButton = styled(AiFillInstagram)`
    color: salmon;
    cursor: pointer; 
    transition: 0.2s;

    &:hover {
        transform: scale(1.2);
    }
`

const GithubButton = styled(AiFillGithub)`
    color: lightgray;
    cursor: pointer; 
    transition: 0.2s;

    &:hover {
        transform: scale(1.2);
    }
`

const ALink = styled.a`
    text-decoration: none;
`

function Home() {

    const ProfileBubbleSpring = useSpring({
        to: [
            { transform: 'translatey(5px)' },
            { transform: 'translatey(0px)' },
        ],
        loop: true,
        from: {
            transform: 'translatey(0px)'
        },
        config: {
            duration: 1000,
            easing: easeQuadInOut
        }
    })

    return (
        <Element name="Home">
            <HomeContainer>
                <SakuraImage src={SakuraGif} />
                <MainProfileGroup>
                    <Grow in timeout={1000}>
                        <ProfileInfoGroup>
                            <Name>
                                James<br/>Dang
                            </Name>
                            <Job>
                                <TypeWriterEffect
                                    textStyle={{ color: 'white', fontWeight: '400' }}
                                    cursorColor="white"
                                    multiText={[
                                        'Mathematics Tutor',
                                        'Software Engineer',
                                    ]}
                                    multiTextDelay={2000}
                                />
                            </Job>
                            <div style={{
                                width: '160px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}>
                                <Tooltip title="LinkedIn: James Dang">
                                    <ALink target="_blank" href="https://www.linkedin.com/in/james-dang-05b8331b0/">
                                        <LinkedInButton size={40} />
                                    </ALink>
                                </Tooltip>
                                <Tooltip title="Instagram: jamespdang">
                                    <ALink target="_blank" href="https://www.instagram.com/jamesdvng/">
                                        <InstagramButton size={40} />
                                    </ALink>
                                </Tooltip>
                                <Tooltip title="Github: realblingy">
                                    <ALink target="_blank" href="https://github.com/realblingy">
                                        <GithubButton size={40} />
                                    </ALink>
                                </Tooltip>
                            </div>
                        </ProfileInfoGroup>
                    </Grow>
                    <Grow in timeout={1500}>
                        <ProfilePhotoGroup>
                            <ProfileBubble style={ProfileBubbleSpring} src={ProfileImage} />
                            <ProfileUniInfo style={ProfileBubbleSpring}>
                                <h3 style={{ marginBottom: 0, fontSize: "1.4em" }}>UNSW</h3>
                                <span>Computer Science</span>
                            </ProfileUniInfo>
                        </ProfilePhotoGroup>
                    </Grow>
                </MainProfileGroup>
            </HomeContainer>
        </Element>
    )
}

export default Home
