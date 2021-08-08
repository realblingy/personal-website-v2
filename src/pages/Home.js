import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SakuraGif from '../assets/sakura.gif'
import ProfileImage from '../assets/Me.png';
import { useSpring, animated } from 'react-spring'
import { easeQuadInOut } from "d3-ease";
import { Element } from 'react-scroll';

const LoadingSquare = styled(animated.div)`
    height: 80px;
    width: 80px;
    background-color: #3C1874;
    border-radius: 10px;
`

const HomeContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: max(100vh, 800px);
    width: 100%;
    font-family: Arial;
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
    border: solid #3C1874 7px;

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
        height: 100%;
        min-height: 600px;
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
        left: 5%;
        bottom: 20%;
        height: 100px;
        width: 100px;
        font-size: 0.8em;
        padding-top: 0.5rem;
    }
`

const Name = styled(animated.h1)`
    font-size: 6em;
    text-align: center;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 0.5rem;
`

const Job = styled.h3`
    text-align: center;
    color: black;
    font-size: 1.3em;

    @media (max-width: 750px) {
        font-size: 1.7em;
    }
`

function Home() {

    const [imagesReady, setImagesReady] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setImagesReady(true);
        }
        img.src = ProfileImage;
        // img.src = SakuraGif;
    }, [])

    useEffect(() => {
        const profileImage = new Image();
        const sakuraImage = new Image();
        profileImage.onload = () => {
            setImagesReady(true);
        }
        sakuraImage.onload = () => {
            setImagesReady(true);
        }
        profileImage.src = ProfileImage;
        sakuraImage.src = SakuraGif;
    }, [])

    const LoadingSquareSpring = useSpring({
        to: {
            transform: 'rotate(360deg)',
            opacity: 1
        },
        loop: true,
        from: {
            transform: 'rotate(0deg)',
            opacity: 0
        },
        config: {
            duration: 1000,
        }
    })

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

    const ProfileInfoSpring = useSpring({
        to: {
            opacity: 1,
        },
        from: {
            opacity: 0,
        },
        config: {
            duration: 1000,
            easing: easeQuadInOut
        }
    })

    return (
        <Element name="Home">
            <HomeContainer>
                {
                    !imagesReady ? 
                        <LoadingSquare style={LoadingSquareSpring} />
                    : (
                    <>
                        <SakuraImage src={SakuraGif} />
                        <MainProfileGroup>
                            <ProfileInfoGroup style={ProfileInfoSpring}>
                                <Name>
                                    James<br/>Dang
                                </Name>
                                <Job>
                                    Junior Software Engineer @ <br/> Workflow86
                                </Job>
                            </ProfileInfoGroup>
                            <ProfilePhotoGroup>
                                <ProfileBubble style={ProfileBubbleSpring} src={ProfileImage}/>
                                <ProfileUniInfo style={ProfileBubbleSpring}>
                                    <h3 style={{ marginBottom: 0, fontSize: "1.4em" }}>UNSW</h3>
                                    <span>Computer Science</span>
                                </ProfileUniInfo>
                                </ProfilePhotoGroup>
                        </MainProfileGroup>
                    </>
                    )

                }
            </HomeContainer>
        </Element>
    )
}

export default Home
