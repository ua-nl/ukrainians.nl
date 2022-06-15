import { Box } from '@mui/material';
import Image from 'next/image';
import { Col, H2, Para, Section } from 'ui/ux';

import GroupPhoto from '../../../public/photo/group-photo.jpg';

export const OurStorySection = () => {
  return (
    <Section bgColor="gray" maxWidth="lg">
      <Col.Container columns={{ sm: 12 }}>
        <Col.Item sm={6} vAlign="center">
          <Box mt={{ xs: 8, sm: 6 }}>
            <Image src={GroupPhoto} />
          </Box>
          <Box mt={{ xs: 8, sm: 6 }}>
            <Image src={GroupPhoto} />
          </Box>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <H2>Our story</H2>
          <Para>
            Ukrainians in the Netherlands Foundation is a non-profit
            organization established during the Euromaidan Uprising in 2014.
            Since then, our foundation has become a point of reference and
            connection for the Ukrainian-Dutch diaspora, and has also been
            providing support for and humanitarian aid to Ukraine. We actively
            collaborate with the Ukrainian Embassy in the Kingdom of the
            Netherlands, sponsoring and supporting local Ukrainian weekend
            schools and churches and organising numerous cultural and
            educational events.
          </Para>
          <Para>
            From the moment the Russian Federation unjustly invaded Ukraine on
            24 February 2022, our foundation has been at forefront of urgent
            humanitarian assistance for Ukrainian civilians and the Armed Forces
            of Ukraine, as well as support for refugees and displaced persons in
            the Netherlands. Consequently, we collaborate with numerous partners
            both in Ukraine and in the Netherlands, including accredited
            volunteer organisations, public-sector organisations and
            foundations, as well as commercial enterprises.
          </Para>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
