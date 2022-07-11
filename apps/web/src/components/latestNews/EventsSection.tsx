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

import Kids from '../../../public/photo/kids.jpg';
import MomWithKid from '../../../public/photo/mom-with-kid.jpg';
import TwoGirls from '../../../public/photo/two-girls.jpg';

const tabs = ['All', 'News', 'Events', 'Press'];

export const EventsSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Section bgColor="lightGrey">
      <FilterTabs value={value} handleChange={handleChange} tabs={tabs}>
        <TabPanel value={value} index={0}>
          <Col.Container columnSpacing={{ sm: 10 }} hAlign="flex-start">
            <Col.Item sm={6} md={4}>
              <CardItem image={MomWithKid.src}>
                <Para2 mb={5}>11 April 2022</Para2>
                <Subtitle mb={3}>
                  #UKRAINIANFREEDOMSTAGE НА ГОЛОВНІЙ ПЛОЩІ АМСТЕРДАМУ
                </Subtitle>
                <Para>
                  Ukraine is an integral part of Europe culturally,
                  geographically, and historically. However, our country was not
                  part of the European...
                </Para>
              </CardItem>
            </Col.Item>
            <Col.Item sm={6} md={4}>
              <CardItem image={MomWithKid.src}>
                <Para2 mb={5}>11 April 2022</Para2>
                <Subtitle mb={3}>
                  #UKRAINIANFREEDOMSTAGE НА ГОЛОВНІЙ ПЛОЩІ АМСТЕРДАМУ
                </Subtitle>
                <Para>
                  Ukraine is an integral part of Europe culturally,
                  geographically, and historically. However, our country was not
                  part of the European...
                </Para>
              </CardItem>
            </Col.Item>
            <Col.Item sm={6} md={4}>
              <CardItem image={MomWithKid.src}>
                <Para2 mb={5}>11 April 2022</Para2>
                <Subtitle mb={3}>
                  #UKRAINIANFREEDOMSTAGE НА ГОЛОВНІЙ ПЛОЩІ АМСТЕРДАМУ
                </Subtitle>
                <Para>
                  Ukraine is an integral part of Europe culturally,
                  geographically, and historically. However, our country was not
                  part of the European...
                </Para>
              </CardItem>
            </Col.Item>
            <Col.Item sm={6} md={4}>
              <CardItem image={TwoGirls.src}>
                <Para2 mb={5}>11 April 2022</Para2>
                <Subtitle mb={3}>
                  #UKRAINIANFREEDOMSTAGE НА ГОЛОВНІЙ ПЛОЩІ АМСТЕРДАМУ
                </Subtitle>
                <Para>
                  Ukraine is an integral part of Europe culturally,
                  geographically, and historically. However, our country was not
                  part of the European...
                </Para>
              </CardItem>
            </Col.Item>
          </Col.Container>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Col.Container columnSpacing={{ sm: 3, md: 5 }} hAlign="flex-start">
            <Col.Item sm={6} md={4}>
              <CardItem image={Kids.src}>
                <Para2 mb={5}>11 April 2022</Para2>
                <Subtitle mb={3}>
                  #UKRAINIANFREEDOMSTAGE НА ГОЛОВНІЙ ПЛОЩІ АМСТЕРДАМУ
                </Subtitle>
                <Para>
                  Ukraine is an integral part of Europe culturally,
                  geographically, and historically. However, our country was not
                  part of the European...
                </Para>
              </CardItem>
            </Col.Item>
          </Col.Container>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Col.Container columnSpacing={{ sm: 3, md: 5 }} hAlign="flex-start">
            <Col.Item sm={6} md={4}>
              <CardItem image={MomWithKid.src}>
                <Para2 mb={5}>11 April 2022</Para2>
                <Subtitle mb={3}>
                  #UKRAINIANFREEDOMSTAGE НА ГОЛОВНІЙ ПЛОЩІ АМСТЕРДАМУ
                </Subtitle>
                <Para>
                  Ukraine is an integral part of Europe culturally,
                  geographically, and historically. However, our country was not
                  part of the European...
                </Para>
              </CardItem>
            </Col.Item>
          </Col.Container>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Col.Container columnSpacing={{ sm: 3, md: 5 }} hAlign="flex-start">
            <Col.Item sm={6} md={4}>
              <CardItem image={Kids.src}>
                <Para2 mb={5}>11 April 2022</Para2>
                <Subtitle mb={3}>
                  #UKRAINIANFREEDOMSTAGE НА ГОЛОВНІЙ ПЛОЩІ АМСТЕРДАМУ
                </Subtitle>
                <Para>
                  Ukraine is an integral part of Europe culturally,
                  geographically, and historically. However, our country was not
                  part of the European...
                </Para>
              </CardItem>
            </Col.Item>
          </Col.Container>
        </TabPanel>
      </FilterTabs>
    </Section>
  );
};
