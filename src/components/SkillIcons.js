import styled, { css } from "styled-components";
import {
  SiSpring,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodeDotJs,
  SiPython,
  SiRedux,
  SiFlask,
  SiGit,
  SiJava,
  SiJira,
  SiAmazonaws,
  SiDotNet,
} from "react-icons/si";
import { Tooltip } from "@material-ui/core";
import { CgPokemon } from "react-icons/cg";

const SkillsIconGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100px;
`;

const IconCss = css`
  transition: 0.2s;
  color: gray;
  height: 100%;
  width: 100%;
`;

const JSIcon = styled(SiJavascript)`
  ${IconCss};
  color: yellow;
`;

const TSIcon = styled(SiTypescript)`
  ${IconCss};
  color: #037acc;
`;

const ReactIcon = styled(SiReact)`
  ${IconCss};
  color: #00d9ff;
`;

const NodeIcon = styled(SiNodeDotJs)`
  ${IconCss};
  color: green;
`;

const DotNetICcon = styled(SiDotNet)`
  ${IconCss};
  color: gray;
`;

const AWSIcon = styled(SiAmazonaws)`
  ${IconCss};
    color: orange;
`;

const GitIcon = styled(SiGit)`
  ${IconCss};
  color: #ff7f7f;
`;

const JavaIcon = styled(SiJava)`
  ${IconCss};
  color: #fa8072;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillIcons = () => {
  return (
    <SkillsIconGroup>
      <Tooltip title="JavaScript">
        <IconContainer>
          <JSIcon size={40} />
        </IconContainer>
      </Tooltip>
      <Tooltip title="TypeScript <3">
        <IconContainer>
          <TSIcon size={40} />
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
      <Tooltip title="Java">
        <IconContainer>
          <JavaIcon size={40} />
        </IconContainer>
      </Tooltip>
      <Tooltip title=".NET">
        <IconContainer>
          <DotNetICcon size={40} />
        </IconContainer>
      </Tooltip>
      <Tooltip title="AWS">
        <IconContainer>
          <AWSIcon size={40} />
        </IconContainer>
      </Tooltip>
      <Tooltip title="Git">
        <IconContainer>
          <GitIcon size={40} />
        </IconContainer>
      </Tooltip>
    </SkillsIconGroup>
  );
};

export default SkillIcons;
