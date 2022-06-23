import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/material';
import { Button, Col, H2, Para, Section } from 'ui/ux';

import { BankAccountDetails } from '../BankAccountDetails';

export const HelpSection = () => {
  return (
    <Section>
      <Col.Container>
        <Col.Item sm={12} md={6} vAlign="center" order={{ xs: 1, md: 2 }}>
          <H2 mb={8}>Help where it’s needed most</H2>
          <Para>
            Financial contributions in any amount are vital for humanitarian
            aid, including equipment, medication, and more for Ukrainians
            impacted by the war, as well as for refugee relief and assistance.
          </Para>
          <Para>
            Your individual or company contribution can help us continue
            providing this much-needed assistance to Ukraine and its citizens
            and miltary.
          </Para>
          <Box my={5}>
            <Button type="accent">
              <Box mr={4}>Procurement report</Box>
              <ChevronRightIcon />
            </Button>
          </Box>
        </Col.Item>
        <Col.Item sm={12} md={6} vAlign="center" order={{ xs: 2, md: 1 }}>
          <BankAccountDetails />
        </Col.Item>
      </Col.Container>
    </Section>
  );
};
