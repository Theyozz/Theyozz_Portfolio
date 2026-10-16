import React from 'react';
import { DiAngularSimple, DiBootstrap, DiFirebase, DiJavascript, DiPhotoshop, DiPhp, DiReact, DiPython, DiSymfony, DiDocker, DiGithubBadge, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      J'ai travaillé avec quelques techno durant ma formation mais aussi en auto-didacte, lié au développement web, allant du Back-end au Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiPhp size="3rem" />
          <DiSymfony size="3rem" />
          <DiPython size="3rem" />
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            PHP, Symfony, Python et Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAngularSimple size="3rem" />
          <DiBootstrap size="3rem" />
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Angular, Vue.js et Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGithubBadge size="3rem" />
          <DiDocker size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Git, Docker
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
