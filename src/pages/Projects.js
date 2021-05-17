import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'

const ProjectsContainer = styled.section`
    height: max(100vh, 800px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Projects() {
    return (
        <Element name="Projects">
            <ProjectsContainer>
                
            </ProjectsContainer>
        </Element>
    )
}

export default Projects
