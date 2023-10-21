import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/dist/client/link';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          VIEILLEDENT-MAURIN Théo
        </SectionTitle>
        <SectionText>
        Actuellement en formation de développeur web (BAC+2), je suis à la recherche d'une opportunité d'alternance dans le but de combiner ma formation théorique avec une expérience pratique au sein d'une entreprise.<br/><br/>
        </SectionText>
        <Link href={"images/CV_Vieilledent-Maurin.pdf"}>
          <a target='blank'>
            <Button onClick={props.handleClick}>
            Telecharger CV
            </Button>
          </a>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;