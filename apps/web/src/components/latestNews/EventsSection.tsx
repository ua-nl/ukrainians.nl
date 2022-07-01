import { styled } from '@mui/system';
import { SyntheticEvent, useState } from 'react';
import {
  CardItem,
  Col,
  FilterTabs,
  Para,
  Para2,
  Section,
  Subtitle,
  TabPanel,
} from 'ui/ux';

import { PageContent } from '../../types/strapi-data';

const Description = styled(Para)({
  display: '-webkit-box',
  textOverflow: 'ellipsis',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 4,
  lineClamp: 4,
  alignSelf: 'baseline',
  height: 100,
});

const tabs = ['All', 'News', 'Events', 'Press'];

export const EventsSection = ({ cards }: Partial<PageContent>) => {
  const [currentTab, setCurrentTab] = useState(0);

  console.log(cards);

  const handleChange = (_: SyntheticEvent, currentTab: number) => {
    setCurrentTab(currentTab);
  };

  return (
    <Section bgColor="lightGrey">
      <FilterTabs value={currentTab} handleChange={handleChange} tabs={tabs}>
        {tabs.map((_, index) => (
          <TabPanel key={index} value={currentTab} index={index}>
            <Col.Container columnSpacing={{ sm: 10 }} hAlign="flex-start">
              {cards &&
                cards.map((card) => (
                  <Col.Item key={card.id} sm={6} md={4}>
                    <CardItem image={card.pictures?.[0].url}>
                      <Para2 mb={5}>11 April 2022</Para2>
                      <Subtitle mb={3}>{card.title}</Subtitle>
                      <Description>{card.description}</Description>
                    </CardItem>
                  </Col.Item>
                ))}
            </Col.Container>
          </TabPanel>
        ))}
      </FilterTabs>
    </Section>
  );
};
