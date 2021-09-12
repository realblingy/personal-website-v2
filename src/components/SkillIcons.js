import styled, { css } from "styled-components";
import { SiSpring, SiJavascript, SiTypescript, SiReact, SiNodeDotJs, SiPython, SiRedux, SiFlask, SiGit, SiJava, SiJira } from 'react-icons/si'
import { Tooltip } from "@material-ui/core";
import { CgPokemon } from 'react-icons/cg' 

const SkillsIconGroup = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 100px;
    overflow: hidden;
`

const IconCss = css`
    transition: 0.2s;
    color: gray;
    height: 100%;
    width: 100%;
`

const JSIcon = styled(SiJavascript)`
    ${IconCss};
    &:hover {
        color: yellow;
    }
`

const TSIcon = styled(SiTypescript)`
    ${IconCss};
    &:hover {
        color: #037acc;
    }
`

const ReactIcon = styled(SiReact)`
    ${IconCss};
    &:hover {
        color: #00d9ff;
    }
`

const NodeIcon = styled(SiNodeDotJs)`
    ${IconCss};
    &:hover {
        color: green;
    }
`

const SpringIcon = styled(SiSpring)`
    ${IconCss};
    &:hover {
        color: lightgreen;
    }
`

const PythonIcon = styled(SiPython)`
    ${IconCss};
    &:hover {
        color: #037acc;
    }
`

const ReduxIcon = styled(SiRedux)`
    ${IconCss};
    &:hover {
        color: purple;
    }
`

const FlaskIcon = styled(SiFlask)`
    ${IconCss};
    &:hover {
        color: white;
    }
`

const GitIcon = styled(SiGit)`
    ${IconCss};
    &:hover {
        color: #FF7F7F;
    }
`

const JavaIcon = styled(SiJava)`
    ${IconCss};
    &:hover {
        color: orange;
    }
`

const JiraIcon = styled(SiJira)`
    ${IconCss};
    &:hover {
        color: #0096FF;
    }
`

const PokemonIcon = styled(CgPokemon)`
    ${IconCss};
    &:hover {
        color: yellow;
    }
`

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 2rem;
    margin-bottom: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SkillIcons = () => {
    return (
        <SkillsIconGroup>
            <Tooltip title="JavaScript">
                <IconContainer>
                    <JSIcon size={40}/>
                </IconContainer>
            </Tooltip>
            <Tooltip title="TypeScript <3">
                <IconContainer>
                    <TSIcon size={40}/>
                </IconContainer>
            </Tooltip>
            <Tooltip title="ReactJS <#">
                <IconContainer>
                    <ReactIcon size={40} />
                </IconContainer>
            </Tooltip>
            <Tooltip title="NodeJS">
                <IconContainer>
                    <NodeIcon size={40} />
                </IconContainer>
            </Tooltip>
            <Tooltip title="NodeJS">
                <IconContainer>
                    <ReduxIcon size={40} />
                </IconContainer>
            </Tooltip>
            <Tooltip title="Java">
                <IconContainer>
                    <JavaIcon size={40} />
                </IconContainer>
            </Tooltip>
            <Tooltip title="Spring Boot">
                <IconContainer>
                    <SpringIcon size={40} />
                </IconContainer>
            </Tooltip>
            <Tooltip title="Python">
                <IconContainer>
                    <PythonIcon size={40} />
                </IconContainer>
            </Tooltip>
            <Tooltip title="Flask">
                <IconContainer>
                    <FlaskIcon size={40} />
                </IconContainer>
            </Tooltip>
            <Tooltip title="Git">
                <IconContainer>
                    <GitIcon size={40} />
                </IconContainer>
            </Tooltip>
            <Tooltip title="Jira">
                <IconContainer>
                    <JiraIcon size={40} />
                </IconContainer>
            </Tooltip>
            <Tooltip title="Pokemon??">
                <IconContainer>
                    <PokemonIcon size={40} />
                </IconContainer>
            </Tooltip>
        </SkillsIconGroup>
    )
}

export default SkillIcons;
