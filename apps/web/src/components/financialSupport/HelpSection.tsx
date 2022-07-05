import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box } from '@mui/material';
import { PageContent } from 'ui/types';
import { Button, Col, H2, Para, Section } from 'ui/ux';

import { BankAccountDetails } from '../BankAccountDetails';

export const HelpSection = ({
  title,
  description,
}: Pick<PageContent, 'title' | 'description'>) => {
  return (
    <Section>
      <Col.Container>
        <Col.Item sm={12} md={6} vAlign="center" order={{ xs: 1, md: 2 }}>
          <H2 mb={8}>{title}</H2>
          <Para>{description}</Para>

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
