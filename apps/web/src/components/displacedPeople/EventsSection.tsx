import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/material';
import Image from 'next/image';
import { Button, Col, H1, Para, Section } from 'ui/ux';

import AtTheTruckImg from '../../../public/photo/at-the-truck.jpg';
import StoragehouseImg from '../../../public/photo/storehouse.jpg';
import TwoGirlsImg from '../../../public/photo/two-girls.jpg';

export const EventsSection = () => {
  return (
    <Section breadcrumbs>
      <Col.Container>
        <Col.Item sm={6}>
          <H1>Events</H1>
          <Para mb={8}>General text</Para>
          <Para>
            <strong>
              All up-to-date events you can find on official fb page.
            </strong>
          </Para>
          <Box my={8}>
            <Button type="accent">
              <Box mr={4}>Facebook</Box>
              <ChevronRightIcon />
            </Button>
          </Box>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <Image src={TwoGirlsImg} alt="People with the flag" width={500} />
          <Image src={StoragehouseImg} alt="People with the flag" width={500} />
          <Image src={AtTheTruckImg} alt="At the truck" width={500} />
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
