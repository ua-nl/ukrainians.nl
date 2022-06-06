import { Bread, H1, Page, Section } from 'ui/ux';
import { useUIContext } from '../lib/uiContext';
import { ActionCards } from '../components/ActionSection';

export default function Index() {
  const ctx = useUIContext();

  return (
    <Page ctx={ctx}>
      <Bread
        history={[
          { label: 'Home', href: '/' },
          { label: 'Protest', href: '/protest' },
        ]}
        current="Current"
      />
      <Section first>
        <H1>About us</H1>
      </Section>
      <ActionCards />
    </Page>
  );
}
