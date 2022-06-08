import Image from 'next/image';
import { H2, Section } from 'ui/ux';

import partners from '../../../public/img/partners.png';

export const PartnersSection = () => {
  return (
    <Section thin bgColor="gray">
      <H2 center mb={8}>
        Our partners &amp; sponsors
      </H2>
      <Image src={partners} />
    </Section>
  );
};
