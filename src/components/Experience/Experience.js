import React from 'react';
import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';

import { Card, Container, Eyebrow, Section, SectionText, SectionTitle, Tag } from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { experiences } from '../../constants/constants';

const List = styled.div`
  display: grid;
  gap: 24px;
`;

const ExpCard = styled(Card)`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  padding: 32px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 24px;
  }
`;

const Meta = styled.div`
  h3 {
    font-size: 26px;
    margin-bottom: 4px;
  }
  p {
    color: ${(props) => props.theme.colors.muted};
    font-size: 15px;
    margin-bottom: 12px;
  }
  time {
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 13px;
    color: ${(props) => props.theme.colors.muted};
  }
`;

const Current = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.success};

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
  }
`;

const Highlights = styled.ul`
  display: grid;
  gap: 10px;
  margin-bottom: 20px;

  li {
    display: flex;
    gap: 12px;
    font-size: 15px;
    color: ${(props) => props.theme.colors.muted};
  }
  li svg {
    flex-shrink: 0;
    margin-top: 4px;
    color: ${(props) => props.theme.colors.accent2};
  }
`;

const Placeholder = styled.p`
  color: ${(props) => props.theme.colors.muted};
  font-style: italic;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Experience = () => (
  <Section id="experience">
    <Container>
      <Reveal>
        <Eyebrow>Expérience</Eyebrow>
        <SectionTitle>Où j'ai travaillé</SectionTitle>
        <SectionText>
          Du développement full-stack à l'industrialisation : construire, livrer et faire tourner
          des applications en production.
        </SectionText>
      </Reveal>
      <List>
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 100}>
            <ExpCard as="article">
              <Meta>
                <h3>{exp.company}</h3>
                <p>{exp.role}</p>
                <time>{exp.period}</time>
                {exp.current && <Current>En poste</Current>}
              </Meta>
              <div>
                {exp.highlights.length > 0 ? (
                  <Highlights>
                    {exp.highlights.map((h) => (
                      <li key={h}>
                        <FiCheck size={16} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </Highlights>
                ) : (
                  <Placeholder>Nouvelle aventure en cours — à suivre.</Placeholder>
                )}
                <Tags>
                  {exp.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </Tags>
              </div>
            </ExpCard>
          </Reveal>
        ))}
      </List>
    </Container>
  </Section>
);

export default Experience;
