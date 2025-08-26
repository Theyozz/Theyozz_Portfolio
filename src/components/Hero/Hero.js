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
          VIEILLEDENT-MAURIN Théoo
        </SectionTitle>
        <SectionText>
          Actuellement en cours de validation de mon Mastère en Ingénierie Logicielle, je suis ouvert à toute opportunité de collaboration professionnelle afin de mettre mes compétences en pratique et contribuer à des projets innovants.<br /><br />
        </SectionText>
        <Link href={"images/CV_ThéoVM.pdf"} legacyBehavior>
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