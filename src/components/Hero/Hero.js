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
        Actuellement en formation de développeur web (BAC+2), <br/> je recherche une entreprise pour effectuer un stage  du 17 Juillet au 13 Septembre 2023.<br/><br/> Ce stage pourrait être le début d'une collaboration plus longue puisque je serai disponible pour une embauche dès le 25/09/2023.
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