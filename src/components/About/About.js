import React from 'react';
import styled from 'styled-components';
import { FiGlobe, FiHeart, FiZap } from 'react-icons/fi';

import { Card, Container, Eyebrow, GradientText, Section, SectionTitle } from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { about, stats } from '../../constants/constants';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: start;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Text = styled.div`
  p {
    font-size: 17px;
    color: ${(props) => props.theme.colors.muted};
    margin-bottom: 16px;
  }
  strong {
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 32px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 12px;
  }
`;

const Stat = styled(Card)`
  height: 100%;
  padding: 20px;

  strong {
    display: block;
    font-family: ${(props) => props.theme.fonts.title};
    font-size: 34px;
    line-height: 1.1;
    margin-bottom: 6px;
  }
  > span {
    font-size: 14px;
    color: ${(props) => props.theme.colors.muted};
  }
`;

const Side = styled.div`
  display: grid;
  gap: 16px;
`;

const InfoCard = styled(Card)`
  padding: 24px;

  h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    margin-bottom: 16px;
    color: ${(props) => props.theme.colors.text};
  }
  h3 svg {
    color: ${(props) => props.theme.colors.accent2};
  }
`;

const Pills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  li {
    padding: 8px 14px;
    border-radius: 10px;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid ${(props) => props.theme.colors.border};
  }
  li em {
    font-style: normal;
    color: ${(props) => props.theme.colors.muted};
    margin-left: 6px;
  }
`;

const About = () => (
  <Section id="about">
    <Container>
      <Layout>
        <Reveal>
          <Eyebrow>À propos</Eyebrow>
          <SectionTitle>
            J'automatise ce qui <GradientText>peut l'être.</GradientText>
          </SectionTitle>
          <Text>
            <p>
              Ingénieur DevOps chez <strong>Solutec</strong>, après deux ans chez{' '}
              <strong>Orange</strong>, je conçois des pipelines CI/CD, conteneurise et exploite des
              applications sur Linux, et mets en place le monitoring qui permet de dormir tranquille.
            </p>
            <p>
              Issu du développement full-stack, je connais les deux côtés du pipeline : c'est ce qui
              me permet de construire des outils que les équipes ont vraiment envie d'utiliser.
              Le tout appuyé par un <strong>Master en Ingénierie Logicielle</strong> (IPI, Lyon).
            </p>
          </Text>
          <Stats>
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <Stat>
                  <strong><GradientText>{s.value}</GradientText></strong>
                  <span>{s.label}</span>
                </Stat>
              </Reveal>
            ))}
          </Stats>
        </Reveal>

        <Side>
          <Reveal delay={100}>
            <InfoCard>
              <h3><FiGlobe /> Langues</h3>
              <Pills>
                {about.languages.map((l) => (
                  <li key={l.name}>{l.name}<em>{l.level}</em></li>
                ))}
              </Pills>
            </InfoCard>
          </Reveal>
          <Reveal delay={200}>
            <InfoCard>
              <h3><FiZap /> Soft skills</h3>
              <Pills>
                {about.softSkills.map((s) => <li key={s}>{s}</li>)}
              </Pills>
            </InfoCard>
          </Reveal>
          <Reveal delay={300}>
            <InfoCard>
              <h3><FiHeart /> En dehors du code</h3>
              <Pills>
                {about.hobbies.map((h) => <li key={h}>{h}</li>)}
              </Pills>
            </InfoCard>
          </Reveal>
        </Side>
      </Layout>
    </Container>
  </Section>
);

export default About;
