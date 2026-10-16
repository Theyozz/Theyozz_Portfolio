import React from 'react';
import styled from 'styled-components';

import { Container, Eyebrow, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { TimeLineData } from '../../constants/constants';

const typeColors = {
  Formation: '#8b7bff',
  Certification: '#3dd6f5',
  Projet: '#34d399',
};

const List = styled.ol`
  position: relative;
  list-style: none;
  max-width: 760px;

  /* vertical rail */
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 7px;
    width: 2px;
    background: linear-gradient(to bottom, #8b7bff, #3dd6f5 60%, transparent);
    opacity: 0.5;
  }

  > li:last-child > div {
    padding-bottom: 0;
  }
`;

const Item = styled.div`
  position: relative;
  padding: 0 0 36px 44px;

  /* node on the rail */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.background};
    border: 2px solid ${(props) => props.$color};
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.background}, 0 0 16px ${(props) => props.$color};
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 6px;

  time {
    font-family: ${(props) => props.theme.fonts.mono};
    font-size: 14px;
    color: ${(props) => props.theme.colors.muted};
  }
  span {
    font-size: 12px;
    font-weight: 600;
    padding: 2px 10px;
    border-radius: 999px;
    color: ${(props) => props.$color};
    background: ${(props) => props.$color}1f;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 4px;
`;

const Place = styled.p`
  color: ${(props) => props.theme.colors.muted};
  font-size: 15px;
`;

const Timeline = () => (
  <Section id="journey">
    <Container>
      <Reveal>
        <Eyebrow>Formation</Eyebrow>
        <SectionTitle>Parcours académique</SectionTitle>
        <SectionText>
          Un parcours en alternance, du titre de développeur web jusqu'au Master en ingénierie
          logicielle.
        </SectionText>
      </Reveal>
      <List>
        {TimeLineData.map((item, i) => {
          const color = typeColors[item.type] || '#8b7bff';
          return (
            <Reveal as="li" key={`${item.year}-${item.title}`} delay={i * 80}>
              <Item $color={color}>
                <Head $color={color}>
                  <time>{item.year}</time>
                  <span>{item.type}</span>
                </Head>
                <Title>{item.title}</Title>
                <Place>{item.place}</Place>
              </Item>
            </Reveal>
          );
        })}
      </List>
    </Container>
  </Section>
);

export default Timeline;
