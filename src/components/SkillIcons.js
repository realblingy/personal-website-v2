import styled, { css } from "styled-components";
import { SiSpring, SiJavascript, SiTypescript, SiReact, SiNodeDotJs, SiPython, SiRedux, SiFlask, SiGit } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { Grow, Icon, Tooltip } from "@material-ui/core";

const SkillsIconGroup = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 100px;
    overflow: hidden;
`

const IconCss = css`
    transition: 0.2s;
    margin-right: 2rem;
    margin-bottom: 1rem;
`

const JSIcon = styled(SiJavascript)`
    ${IconCss};
    color: yellow;
`

const TSIcon = styled(SiTypescript)`
    ${IconCss};
    color: #037acc;
`

const ReactIcon = styled(SiReact)`
    ${IconCss};
    color: #00d9ff;
`

const NodeIcon = styled(SiNodeDotJs)`
    ${IconCss};
    color: green;
`

const SpringIcon = styled(SiSpring)`
    ${IconCss};
    color: lightgreen;
`

const PythonIcon = styled(SiPython)`
    ${IconCss};
    color: #037acc;
`

const ReduxIcon = styled(SiRedux)`
    ${IconCss};
    color: purple;
`

const FlaskIcon = styled(SiFlask)`
    ${IconCss};
    color: darkpurple;
`

const GitIcon = styled(SiGit)`
    ${IconCss};
    color: #FF7F7F;
`

const SkillIcons = () => {
    return (
        <SkillsIconGroup>
            <JSIcon size={40}/>
            <TSIcon size={40}/>
            <ReactIcon size={40} />
            <NodeIcon size={40} />
            <ReduxIcon size={40} />
            <SpringIcon size={40} />
            <PythonIcon size={40} />
            <FlaskIcon size={40} />
            <GitIcon size={40} />
        </SkillsIconGroup>
    )
}

export default SkillIcons;
