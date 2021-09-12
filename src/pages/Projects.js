import React, { useState } from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import AstroLearningImg from '../assets/projectimages/spaceman.jpg'
import CustidImg from '../assets/projectimages/custid.jpg'
import EggyImg from '../assets/projectimages/eggy.jpg'
import { Card, Grow } from '@material-ui/core'
import ReactVisibilitySensor from 'react-visibility-sensor'
import PTPImg from '../assets/projectimages/ptp.jpg'

const ProjectsContainer = styled.section`
    height: min(100%, 700px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 400px;
    padding-top: 80px;
`

const ProjectTile = styled(Card)`
    width: 300px;
    height: 400px;
    cursor: pointer;
    margin-right: 1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    margin-bottom: 1rem;
   

    && {
        background-color: transparent;
        border: solid 1px gray;
        &:hover {
            
            background-color: #7854AF;
        }
    }

`

const ProjectTileImage = styled.img`
    width: 200px;
    height: 200px;
`

const ProjectTileBody = styled.p`
    padding-left: 2rem;
    padding-right: 2rem;
    color: white;
    font-size: 0.9em;

`

const ProjectHeading = styled.h3`
    font-size: 1.6em;
    color: white;
    font-weight: 500;

    @media (max-width: 750px) {
        margin-top: 0rem;
        margin-bottom: 0rem;
    }
`

const ProjectsCarouselContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
    width: 100%;

    @media (max-width: 900px) {
        width: 100%;
    }
    
`

const ProjectTitle = styled.h1`
    color: white;
    font-size: 3em;
    font-weight: 500;

    @media (max-width: 750px) {
        margin-top: -1rem;
    }
`

const projects = [
    {
        title: 'Astro Learning',
        body: "An education management system where students can access learning resources, check their homework grades and contact their tutors/teachers after learning hours. WIP",
        image: AstroLearningImg,
        link: 'https://www.astrolearning.com.au/'
    },
    {
        title: 'Custid Apps',
        body: 'React application that lets customers preview their personalised gifts, deployed with AWS. This was built for a local popular business Custid.',
        image: CustidImg,
        link: 'https://master.dbbwtr4hix4m3.amplifyapp.com/',
    },
    {
        title: 'Eggy',
        body: "Web application so users can find the lowest price of any retail item. They can also save any good prices they've found onto their wishlist, hooked to an SQL database.",
        link: 'https://www.youtube.com/watch?v=8xZknpC2YQs&ab_channel=JamesDang',
        image: EggyImg,
    },
    {
        title: 'PTP Network',
        body: "A network protocol that implements a subset of TCP's featured. It includes triple duplicate ACK fast retransmit, packet loss simulation and sequence numbers.",
        link: "https://github.com/realblingy/COMP3331",
        image: PTPImg
    }
    
]

const Projects = () => {

    const [loaded, setLoaded] = useState(false);
    
    return (
        <Element name="Projects">
            <ProjectsContainer>
                <ReactVisibilitySensor onChange={isVisible => !loaded && setLoaded(isVisible)}>
                    <Grow in={loaded} timeout={1000}>
                        <ProjectTitle>Projects</ProjectTitle>
                    </Grow>
                </ReactVisibilitySensor>
                <ProjectsCarouselContainer>
                    {
                        projects.map(({ title, body, link, image, linkType }, idx) => (
                            <Grow in={loaded} timeout={1000 + idx * 300}>
                                <ProjectTile>
                                    <a target="_blank" href={link} style={{ textAlign: 'center', textDecoration: 'none' }}>
                                        <ProjectTileImage src={image}/>
                                        <ProjectHeading>{title}</ProjectHeading>
                                        <ProjectTileBody>
                                            {body}
                                        </ProjectTileBody>
                                    </a>
                                </ProjectTile>
                            </Grow>
                        ))
                    }
                </ProjectsCarouselContainer>
            </ProjectsContainer>
        </Element>
    )
}

export default Projects
