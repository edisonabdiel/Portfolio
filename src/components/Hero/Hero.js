import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Site
      </SectionTitle>
      <SectionText>
        Software Shinobi 忍び striving for a world of awesome-looking apps.
      </SectionText>
      <Button onClick={() => window.location = "https://github.com/edisonabdiel"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;