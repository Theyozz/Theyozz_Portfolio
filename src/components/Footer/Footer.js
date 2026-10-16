import React from 'react';
import styled from 'styled-components';
import { FiArrowUp, FiMail, FiPhone } from 'react-icons/fi';

import { Button, Container, Eyebrow, GradientText } from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import SocialLinks from '../SocialLinks/SocialLinks';
import { profile } from '../../constants/constants';

const Wrapper = styled.footer`
  position: relative;
  padding: 112px 0 40px;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: -260px;
    width: 720px;
    height: 520px;
    transform: translateX(-50%);
    background: radial-gradient(ellipse, rgba(139, 123, 255, 0.25), transparent 65%);
    pointer-events: none;
  }
`;

const Cta = styled.div`
  position: relative;
  text-align: center;
  max-width: 680px;
  margin: 0 auto 96px;

  h2 {
    font-size: clamp(36px, 6vw, 60px);
    margin-bottom: 20px;
  }
  p {
    color: ${(props) => props.theme.colors.muted};
    font-size: 18px;
    margin-bottom: 36px;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 32px;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  font-size: 14px;
  color: ${(props) => props.theme.colors.muted};

  em {
    font-style: italic;
  }
`;

const TopLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.text};
  }
`;

const Footer = () => (
  <Wrapper id="contact">
    <Container>
      <Reveal>
        <Cta>
          <Eyebrow>Contact</Eyebrow>
          <h2>
            Construisons quelque chose <GradientText>ensemble.</GradientText>
          </h2>
          <p>
            Une question, un échange autour du DevOps ou un projet d'automatisation ? Ma boîte mail
            est toujours ouverte.
          </p>
          <Actions>
            <Button href={`mailto:${profile.email}`}>
              <FiMail /> {profile.email}
            </Button>
            <Button $variant="ghost" href={profile.phoneHref}>
              <FiPhone /> {profile.phone}
            </Button>
          </Actions>
        </Cta>
      </Reveal>
      <Bottom>
        <span>
          © {new Date().getFullYear()} {profile.firstName} {profile.lastName} —{' '}
          <em>« Apprendre toujours, c'est aimer la vie »</em>
        </span>
        <SocialLinks size={38} />
        <TopLink href="#top">
          Retour en haut <FiArrowUp />
        </TopLink>
      </Bottom>
    </Container>
  </Wrapper>
);

export default Footer;
