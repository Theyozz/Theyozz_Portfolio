import React from 'react';
import styled from 'styled-components';
import { FiActivity, FiBox, FiCode, FiGitBranch, FiRepeat, FiServer } from 'react-icons/fi';
import {
  SiAngular, SiAnsible, SiApache, SiDocker, SiGit, SiGithub, SiGitlab, SiGnubash, SiGrafana, SiHelm, SiJavascript,
  SiKubernetes, SiLinux, SiNginx, SiPrometheus, SiPython, SiRedhat, SiSymfony, SiTerraform, SiVuedotjs, SiYaml,
} from 'react-icons/si';
import { BsDatabase } from 'react-icons/bs';

import { Card, Container, Eyebrow, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { skills } from '../../constants/constants';

const categoryIcons = [FiRepeat, FiBox, FiServer, FiActivity, FiCode, FiGitBranch];

const techIcons = {
  'GitLab CI': SiGitlab,
  Ansible: SiAnsible,
  Terraform: SiTerraform,
  Docker: SiDocker,
  'Docker Compose': SiDocker,
  Kubernetes: SiKubernetes,
  Helm: SiHelm,
  Linux: SiLinux,
  'Red Hat': SiRedhat,
  Nginx: SiNginx,
  Apache: SiApache,
  Prometheus: SiPrometheus,
  Grafana: SiGrafana,
  Python: SiPython,
  Bash: SiGnubash,
  SQL: BsDatabase,
  JavaScript: SiJavascript,
  YAML: SiYaml,
  Git: SiGit,
  GitLab: SiGitlab,
  GitHub: SiGithub,
  Symfony: SiSymfony,
  'Vue.js': SiVuedotjs,
  Angular: SiAngular,
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(Card)`
  height: 100%;
  padding: 28px;
  overflow: hidden;

  /* glow that follows the top edge on hover */
  &::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 1px;
    background: ${(props) => props.theme.gradient};
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:hover::before {
    opacity: 1;
  }
`;

const CardHead = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  > span {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    color: ${(props) => props.theme.colors.accent2};
    background: rgba(61, 214, 245, 0.08);
    border: 1px solid rgba(61, 214, 245, 0.2);
  }
  h3 {
    font-size: 20px;
    margin-bottom: 2px;
  }
  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.muted};
  }
`;

const Chips = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Chip = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: border-color 0.2s ease, transform 0.2s ease;

  svg {
    color: ${(props) => props.theme.colors.muted};
    transition: color 0.2s ease;
  }
  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) => props.theme.colors.borderHover};
  }
  &:hover svg {
    color: ${(props) => props.theme.colors.text};
  }
`;

const Skills = () => (
  <Section id="skills">
    <Container>
      <Reveal>
        <Eyebrow>Compétences</Eyebrow>
        <SectionTitle>Ma boîte à outils</SectionTitle>
        <SectionText>
          Les outils que j'utilise au quotidien pour automatiser, déployer et surveiller des
          applications — du pipeline CI/CD jusqu'au cluster Kubernetes.
        </SectionText>
      </Reveal>
      <Grid>
        {skills.map((group, i) => {
          const CategoryIcon = categoryIcons[i % categoryIcons.length];
          return (
            <Reveal key={group.title} delay={(i % 3) * 100}>
              <SkillCard>
                <CardHead>
                  <span><CategoryIcon size={20} /></span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </CardHead>
                <Chips>
                  {group.items.map((item) => {
                    const Icon = techIcons[item];
                    return (
                      <Chip key={item}>
                        {Icon && <Icon size={16} aria-hidden="true" />}
                        {item}
                      </Chip>
                    );
                  })}
                </Chips>
              </SkillCard>
            </Reveal>
          );
        })}
      </Grid>
    </Container>
  </Section>
);

export default Skills;
