import { Box } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { useUIContext } from 'ui/lib';
import { Button, Col, H1, Para, Section } from 'ui/ux';

import StorehouseImg from '../../../public/photo/Storehouse.jpeg';

const ImgBox = styled('div')(() => ({
  width: 139,
  height: 107,
  backgroundColor: '#fff',
  opacity: 0.3,
  borderRadius: '8px',
}));

const Img = styled(Image)(() => ({
  borderRadius: '8px',
}));

export const WhatDoWeNeedSection = () => {
  const ctx = useUIContext();

  return (
    <Section bgColor="gray" maxWidth="lg">
      <Col.Container columns={{ sm: 12 }}>
        <Col.Item sm={6} vAlign="center" order={{ xs: 2, sm: 1 }}>
          <Box mb={{ xs: 8, sm: 0 }} display="flex" justifyContent="center">
            <ImgBox />
          </Box>
          <Box mt={{ xs: 0, sm: 6 }} borderRadius="8px">
            <Img src={StorehouseImg} />
          </Box>
          <Box mt={{ xs: 8, sm: 6 }} display="flex" justifyContent="center">
            <ImgBox />
          </Box>
        </Col.Item>

        <Col.Item sm={6} vAlign="center" order={{ xs: 1, sm: 2 }}>
          <H1>What do we need</H1>
          <Para>
            Relief efforts encompass the procurement, collection and transport
            of urgently needed medical supplies, protective equipment, and
            humanitarian aid. Follow us for regular updates on goods accepted.
          </Para>
          <Para>The current priorities can be found here:</Para>
          <Box mt={8} mb={14}>
            <Button type="primary">
              {' '}
              {ctx.l10n[ctx.texts.humanitarianAid]}
            </Button>
          </Box>
          <H1>Where to drop off</H1>
          <Para>
            We have more than 20 collection points throughout the Netherlands
            where goods can be donated, also in bulk. For very large quantities,
            please contact our helpline for possible pickup.
          </Para>
          <Para>The current priorities can be found here:</Para>
          <Box mt={8}>
            <Button type="accent">
              {ctx.l10n[ctx.texts.collectionPoints]}
            </Button>
          </Box>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
