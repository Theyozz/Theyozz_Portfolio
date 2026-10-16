import React from 'react';
import styled, { css } from 'styled-components';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

import { Card, Container, Eyebrow, Section, SectionText, SectionTitle, Tag } from '../../styles/GlobalComponents';
import Reveal from '../Reveal/Reveal';
import { projects } from '../../constants/constants';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
`;

const Item = styled(Reveal)`
  grid-column: ${(props) => (props.$featured ? '1 / -1' : 'auto')};
`;

const ProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
  }
  &:hover img {
    transform: scale(1.04);
  }

  ${(props) =>
    props.$featured &&
    css`
      @media (min-width: 861px) {
        flex-direction: row;

        > div:first-child {
          flex: 1.3;
          aspect-ratio: auto;
          min-height: 340px;
          border-bottom: 0;
          border-right: 1px solid ${props.theme.colors.border};
        }
        > div:last-child {
          flex: 1;
          justify-content: center;
          padding: 36px;
        }
        h3 {
          font-size: 30px;
        }
        p {
          flex: 0;
        }
      }
    `}
`;

const Featured = styled.span`
  align-self: flex-start;
  font-family: ${(props) => props.theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent2};
`;

const Media = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  background: #11121a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
  }
`;

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 25% 30%, rgba(139, 123, 255, 0.45), transparent 55%),
    radial-gradient(circle at 75% 75%, rgba(61, 214, 245, 0.35), transparent 55%),
    #11121a;
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.9);
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;

  h3 {
    font-size: 22px;
  }
  p {
    flex: 1;
    color: ${(props) => props.theme.colors.muted};
    font-size: 15px;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Links = styled.div`
  display: flex;
  gap: 18px;
  padding-top: 6px;

  a, span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
  }
  a {
    transition: color 0.2s ease;
  }
  a:hover {
    color: ${(props) => props.theme.colors.accent2};
  }
  span {
    color: ${(props) => props.theme.colors.muted};
    font-weight: 500;
  }
`;

const Projects = () => (
  <Section id="projects">
    <Container>
      <Reveal>
        <Eyebrow>Portfolio</Eyebrow>
        <SectionTitle>Projets sélectionnés</SectionTitle>
        <SectionText>
          Du SaaS cloud au cluster Kubernetes, en passant par mes premiers sites web : ce que je
          construis à côté du travail.
        </SectionText>
      </Reveal>
      <Grid>
        {projects.map((p, i) => (
          <Item key={p.id} delay={(i % 2) * 120} $featured={p.featured}>
            <ProjectCard as="article" $featured={p.featured}>
              <Media>
                {p.image ? (
                  <img src={p.image} alt={`Aperçu du projet ${p.title}`} loading="lazy" />
                ) : (
                  <Placeholder>{p.title}</Placeholder>
                )}
              </Media>
              <Body>
                {p.featured && <Featured>★ Projet phare</Featured>}
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <Tags>
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </Tags>
                <Links>
                  {p.visit && (
                    <a href={p.visit} target="_blank" rel="noopener noreferrer">
                      Voir le site <FiArrowUpRight />
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noopener noreferrer">
                      <FiGithub /> Code source
                    </a>
                  )}
                  {!p.visit && !p.code && <span>Projet privé</span>}
                </Links>
              </Body>
            </ProjectCard>
          </Item>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Projects;
