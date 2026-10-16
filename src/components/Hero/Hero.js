import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';

import { Button, Container, GradientText } from '../../styles/GlobalComponents';
import SocialLinks from '../SocialLinks/SocialLinks';
import { profile } from '../../constants/constants';

const float = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -30px) scale(1.08); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.6); }
  100% { box-shadow: 0 0 0 10px rgba(52, 211, 153, 0); }
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;

  /* subtle grid fading out towards the edges */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse at 50% 40%, #000 20%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 40%, #000 20%, transparent 70%);
  }
`;

const Blob = styled.div`
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.35;
  pointer-events: none;
  animation: ${float} 14s ease-in-out infinite;
  background: ${(props) => props.$color};
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};
  animation-delay: ${(props) => props.$delay || '0s'};
`;

const Grid = styled(Container)`
  position: relative;
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  align-items: center;
  gap: 56px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 10px;
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
  font-size: 14px;
  color: ${(props) => props.theme.colors.muted};
  margin-bottom: 28px;

  i {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.success};
    animation: ${pulse} 1.8s ease-out infinite;
  }
`;

const Title = styled.h1`
  font-size: clamp(38px, 5vw, 62px);
  font-weight: 700;
  letter-spacing: -0.035em;
  margin-bottom: 20px;
`;

const Role = styled.p`
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: clamp(17px, 2.4vw, 22px);
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 24px;
  min-height: 1.6em;

  span:last-child {
    display: inline-block;
    width: 2px;
    height: 1.1em;
    margin-left: 4px;
    vertical-align: -0.15em;
    background: ${(props) => props.theme.colors.accent2};
    animation: ${blink} 1s steps(1) infinite;
  }
`;

const Intro = styled.p`
  max-width: 560px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.muted};
  margin-bottom: 36px;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  color: ${(props) => props.theme.colors.muted};
  font-size: 14px;

  > span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
`;

const CodeCard = styled.div`
  position: relative;
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background: rgba(16, 17, 26, 0.75);
  backdrop-filter: blur(12px);
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  transform: perspective(1200px) rotateY(-6deg) rotateX(3deg);
  transition: transform 0.5s ease;

  &:hover {
    transform: perspective(1200px) rotateY(0) rotateX(0);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    transform: none;
    max-width: 560px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

const CodeBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 12px;
  color: ${(props) => props.theme.colors.muted};

  i {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #3a3d4a;
  }
  i:nth-child(1) { background: #ff5f57; }
  i:nth-child(2) { background: #febc2e; }
  i:nth-child(3) { background: #28c840; }
  span { margin-left: 8px; }
`;

const Code = styled.pre`
  padding: 22px 24px 26px;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 14px;
  line-height: 1.8;
  color: #c9cede;
  overflow-x: auto;

  .k { color: #c792ea; }
  .p { color: #82aaff; }
  .s { color: #c3e88d; }
  .b { color: #f78c6c; }
  .c { color: #5c6370; }
`;

const useTypewriter = (words) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 40 : 80;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === '') delay = 300;

    const timeout = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true);
      else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
};

const Hero = () => {
  const role = useTypewriter(profile.roles);

  return (
    <Wrapper id="top">
      <Blob $color="#6d5dfc" $top="-10%" $left="-10%" />
      <Blob $color="#22c3e6" $top="40%" $left="60%" $delay="-7s" />

      <Grid>
        <div>
          <Badge>
            <i />
            {profile.availability}
          </Badge>
          <Title>
            {profile.firstName}
            <br />
            <GradientText>{profile.lastName}</GradientText>
          </Title>
          <Role aria-label={profile.roles.join(', ')}>
            <span aria-hidden="true">&gt; {role}</span>
            <span aria-hidden="true" />
          </Role>
          <Intro>
            J'automatise, déploie et surveille des applications : pipelines CI/CD, conteneurs,
            Infrastructure as Code et monitoring. Actuellement ingénieur DevOps chez Solutec, après
            deux ans chez Orange.
          </Intro>
          <Actions>
            <Button href="#projects">
              Voir mes projets <FiArrowRight />
            </Button>
            <Button $variant="ghost" href={profile.cv} target="_blank" rel="noopener noreferrer">
              <FiDownload /> Télécharger le CV
            </Button>
          </Actions>
          <Meta>
            <SocialLinks size={40} />
            <span>
              <FiMapPin /> {profile.location}
            </span>
          </Meta>
        </div>

        <CodeCard aria-hidden="true">
          <CodeBar>
            <i /><i /><i />
            <span>theo.ts</span>
          </CodeBar>
          <Code>
            <span className="k">const</span> theo = {'{\n'}
            {'  '}<span className="p">role</span>: <span className="s">'Ingénieur DevOps'</span>,{'\n'}
            {'  '}<span className="p">company</span>: <span className="s">'Solutec'</span>,{'\n'}
            {'  '}<span className="p">basedIn</span>: <span className="s">'Lyon 🇫🇷'</span>,{'\n'}
            {'  '}<span className="p">ci</span>: <span className="s">'GitLab CI'</span>,{'\n'}
            {'  '}<span className="p">iac</span>: [<span className="s">'Terraform'</span>, <span className="s">'Ansible'</span>],{'\n'}
            {'  '}<span className="p">run</span>: [<span className="s">'Docker'</span>, <span className="s">'Kubernetes'</span>, <span className="s">'Helm'</span>],{'\n'}
            {'  '}<span className="p">observe</span>: [<span className="s">'Prometheus'</span>, <span className="s">'Grafana'</span>],{'\n'}
            {'  '}<span className="p">alwaysLearning</span>: <span className="b">true</span>,{'\n'}
            {'};\n\n'}
            <span className="c">{'// Apprendre toujours, c\'est aimer la vie'}</span>
          </Code>
        </CodeCard>
      </Grid>
    </Wrapper>
  );
};

export default Hero;
