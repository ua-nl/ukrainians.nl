import {
  Box,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { useState } from 'react';
import { UASysColors } from 'ui/lib';
import { Button, Col, H1, Section, Subtitle, TextInput } from 'ui/ux';

import HandsRisedImg from '../../../public/photo/hands-rised.jpg';

const ActionsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(4),
}));

const EuroAdornment = styled('div')(() => ({
  color: UASysColors.blue100,
  fontSize: '20px',
  fontWeight: 700,
  paddingRight: '8px',
}));

export const ContributionSection = () => {
  const [alignment, setAlignment] = useState('left');

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Section first>
      <Col.Container columns={{ sm: 12 }}>
        <Col.Item sm={6}>
          <H1 mb={12}>Your contribution can save lives</H1>
          <Subtitle>
            Whether you are an individual or an organization , we invite you to
            stand with Ukraine and support its people in these trying times.
          </Subtitle>
          <ActionsContainer>
            <ToggleButtonGroup
              exclusive
              value={alignment}
              onChange={handleAlignment}
            >
              <ToggleButton value="5">5 €</ToggleButton>
              <ToggleButton value="10">10 €</ToggleButton>
              <ToggleButton value="20">20 €</ToggleButton>
            </ToggleButtonGroup>

            <TextInput
              placeholder="Other amount"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EuroAdornment>€</EuroAdornment>
                  </InputAdornment>
                ),
              }}
            />
          </ActionsContainer>
          <Button type="primary">Donate Now</Button>
        </Col.Item>

        <Col.Item sm={6} vAlign="center">
          <Box mt={{ xs: 8, sm: 0 }}>
            <Image src={HandsRisedImg} alt="Hands rised" />
          </Box>
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
