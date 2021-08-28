import React, { useRef } from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import Flickity from 'react-flickity-component'
import AstroLearningImg from '../assets/projectimages/AstroLearningProj.png'
import StreamplateImg from '../assets/projectimages/StreamplateProj.png'
import CustidImg from '../assets/projectimages/CustidProj.png'
import PTPImg from '../assets/projectimages/PTP.jpg'
import BigBrainImg from '../assets/projectimages/BigBrainProj.jpg'
import EggyImg from '../assets/projectimages/EggyProj.png'

const ProjectsContainer = styled.section`
    height: max(100vh, 800px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProjectTile = styled.div`
    width: 33.33%;
    height: 480px;
    // margin-left: 3rem;
    margin-right: 1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    // box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.25);

    @media (max-width: 750px) {
        width: 100%;
        height: 380px;
        padding-top: 0.5rem;
    }
`

const ProjectTileImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
`

const ProjectTileBody = styled.p`
    padding-left: 2rem;
    padding-right: 2rem;
    color: black;
    font-size: 0.9em;

    @media (max-width: 750px) {
        font-size: 0.8em;
    }
`

const ProjectHeading = styled.h3`
    font-size: 1.6em;
    color: #283747;
    font-weight: 500;

    @media (max-width: 750px) {
        margin-top: 0rem;
        margin-bottom: 0rem;
    }
`

const ProjectsCarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;

    @media (max-width: 900px) {
        width: 100%;
    }
`

const ProjectTitle = styled.h1`
    color: #3C1874;
    font-size: 3em;
    font-weight: 500;

    @media (max-width: 750px) {
        margin-top: -1rem;
    }
`

const ProjectLink = styled.a`
    position: absolute;
    bottom: 20px;
`

const ButtonGroup = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    width: 150px;
    justify-content: space-evenly;
`

const PlayButton = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    outline: none;
    background-color: #646568;
    border-radius: 50%;
    cursor: pointer;
    transform: ${props => props.flipped && 'scaleX(-1)'};
    font-size: 1.2em;
    color: white;

    &:hover {
        filter: opacity(0.8);
    }

    &:active {
        filter: opacity(0.7);
    }
`

const flickityOptions = {
    wrapAround: true,
    contain: true,
    initialIndex: 2,
    pageDots: false,
}

const projects = [
    {
        title: 'PTP Protocol',
        body: "A networking protocol that simulates TCP, built on top of UDP, without congestion control.",
        image: PTPImg,
        linkType: 'Github Link',
        link: 'https://github.com/realblingy/COMP3331'
    },
    {
        title: 'Streamplate',
        body: "A responsive landing website for a startup I interned at, Streamplate.",
        image: StreamplateImg,
        link: "https://main.djq2nwguiye6h.amplifyapp.com/",
        linkType: 'Website Link',
    },
    {
        title: 'Custid Apps',
        body: 'React application that lets customers preview their personalised gifts, deployed with AWS. This was built for a local popular business Custid.',
        image: CustidImg,
        link: 'https://master.dbbwtr4hix4m3.amplifyapp.com/',
        linkType: 'Website Link',
    },
    {
        title: 'Eggy',
        body: "Web application so users can find the lowest price of any retail item. They can also save any good prices they've found onto their wishlist, hooked to an SQL database.",
        link: 'https://www.youtube.com/watch?v=8xZknpC2YQs&ab_channel=JamesDang',
        image: EggyImg,
        linkType: 'Youtube Link',
    }
    
]

class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            flkty: null,
        }
        this.nextItem = this.nextItem.bind(this);
        this.prevItem = this.prevItem.bind(this);
    }

    nextItem = () => {
        this.flkty.next();
    }

    prevItem = () => {
        this.flkty.previous();
    }

    render() {
        return (
            <Element name="Projects">
                <ProjectsContainer>
                    <ProjectTitle>Projects</ProjectTitle>
                    <ProjectsCarouselContainer>
                        <Flickity
                            className={"projects-carousel"}
                            options={flickityOptions}
                            flickityRef={ref => this.flkty = ref}
                        >
                            {
                                projects.map(({ title, body, link, image, linkType }) => (
                                    <ProjectTile>
                                        <ProjectTileImage src={image}/>
                                        <ProjectHeading>{title}</ProjectHeading>
                                        <ProjectTileBody>
                                            {body}
                                        </ProjectTileBody>
                                        <ProjectLink href={link} target="_blank">{linkType}</ProjectLink>
                                    </ProjectTile>
                                ))
                            }
                        </Flickity>
                        <ButtonGroup>
                            <PlayButton onClick={this.prevItem}>
                            ᐸ
                            </PlayButton>
                            <PlayButton flipped={true} onClick={this.nextItem}>
                            ᐸ
                            </PlayButton>
                        </ButtonGroup>
                    </ProjectsCarouselContainer>
                </ProjectsContainer>
            </Element>
        )
    }
}

export default Projects
