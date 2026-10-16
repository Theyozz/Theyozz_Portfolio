import React from 'react';
import styled from 'styled-components';
import { FiArrowUpRight, FiAward } from 'react-icons/fi';

import { Card, Container, Eyebrow, Section } from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { certifications } from '../../constants/constants';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Wrapper = styled(Section)`
  padding-top: 0;
`;

const CertCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  overflow: hidden;
  background:
    linear-gradient(120deg, rgba(139, 123, 255, 0.1), rgba(61, 214, 245, 0.06)),
    ${(props) => props.theme.colors.surface};
`;

const Icon = styled.span`
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  color: #0b0b12;
  background: ${(props) => props.theme.gradient};
`;

const Info = styled.div`
  flex: 1;
  min-width: 0;

  small {
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.accent2};
  }
  h3 {
    font-size: 18px;
    margin: 4px 0 2px;
  }
  p {
    font-size: 14px;
    color: ${(props) => props.theme.colors.muted};
  }
  a {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 600;
  }
  a:hover {
    color: ${(props) => props.theme.colors.accent2};
  }
`;

const Certifications = () => (
  <Wrapper id="certifications">
    <Container>
      <Reveal>
        <Eyebrow>Certifications</Eyebrow>
      </Reveal>
      <Grid>
      {certifications.map((cert, i) => (
        <Reveal key={cert.title} delay={i * 100}>
          <CertCard>
            <Icon><FiAward size={26} /></Icon>
            <Info>
              <small>Certification</small>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  Voir le certificat <FiArrowUpRight />
                </a>
              )}
            </Info>
          </CertCard>
        </Reveal>
      ))}
      </Grid>
    </Container>
  </Wrapper>
);

export default Certifications;
