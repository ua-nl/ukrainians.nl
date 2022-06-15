import Image from 'next/image';
import { H1, Section } from 'ui/ux';

import partners from '../../../public/img/partners.png';

export const PartnersSection = () => {
  return (
    <Section bgColor="gray" maxWidth="md">
      <H1 center mb={8}>
        Our partners &amp; sponsors
      </H1>
      <Image src={partners} />
    </Section>
  );
};
