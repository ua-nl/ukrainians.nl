import { SyntheticEvent, useEffect, useState } from 'react';
import { CardItem, Col, FilterTabs, Section, TabPanel } from 'ui/ux';

import { News } from '../../types/strapi-data';
import { Category } from '../../types/strapi-response';

const tabs = ['All', 'News', 'Events', 'Press'];

type EventsSectionProps = {
  cards: News[];
};

export const EventsSection = ({ cards }: EventsSectionProps) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [filtered, setFiltered] = useState<News[]>([]);

  useEffect(() => {
    if (currentTab === 0) {
      setFiltered(cards);
      return;
    }

    if (currentTab === 1) {
      const news = cards.filter((card) => card.category === Category.NEWS);
      setFiltered(news);
      return;
    }

    if (currentTab === 2) {
      const events = cards.filter((card) => card.category === Category.EVENTS);
      setFiltered(events);
      return;
    }

    if (currentTab === 3) {
      const press = cards.filter((card) => card.category === Category.PRESS);
      setFiltered(press);
      return;
    }
  }, [cards, currentTab]);

  const handleChange = (_: SyntheticEvent, currentTab: number) => {
    setCurrentTab(currentTab);
  };

  return (
    <Section bgColor="lightGrey">
      <FilterTabs value={currentTab} handleChange={handleChange} tabs={tabs}>
        {tabs.map((_, index) => (
          <TabPanel key={index} value={currentTab} index={index}>
            <Col.Container columnSpacing={{ sm: 10 }} hAlign="flex-start">
              {filtered &&
                filtered.map((card, index) => (
                  <Col.Item key={index} sm={6} md={4}>
                    <CardItem
                      image={card.pictures?.[0]}
                      date={card.createdAt}
                      title={card.title}
                      description={card.description}
                    />
                  </Col.Item>
                ))}
            </Col.Container>
          </TabPanel>
        ))}
      </FilterTabs>
    </Section>
  );
};
