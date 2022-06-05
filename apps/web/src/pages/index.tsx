import { Typography, Box } from '@mui/material';
import { Bread, Button, Page, Spacer } from 'ui/ux';
import { useUIContext } from '../lib/uiContext';
import {
  IconBird,
  IconCalendar,
  IconCoatOfArms,
  IconHandWithHeart,
  IconHouse,
  IconProtest,
  IconProtestHand,
  IconUkraineInHands,
  IconUkraineOnHand,
} from 'ui/assets';

export default function Index() {
  const ctx = useUIContext();
  if (ctx === undefined) {
    return <>N/A</>;
  }
  return (
    <Page ctx={ctx}>
      <Bread
        history={[
          { label: 'Home', href: '/' },
          { label: 'Protest', href: '/protest' },
        ]}
        current="Current"
      />
      <Typography variant="h2" gutterBottom>
        Icons &nbsp;
        <IconBird /> &nbsp;
        <IconCalendar /> &nbsp;
        <IconCoatOfArms /> &nbsp;
        <IconHandWithHeart /> &nbsp;
        <IconHouse /> &nbsp;
        <IconProtest /> &nbsp;
        <IconProtestHand /> &nbsp;
        <IconUkraineInHands /> &nbsp;
        <IconUkraineOnHand /> &nbsp;
      </Typography>
      <Box sx={{ fontSize: '60px' }}>
        <IconCalendar />
      </Box>
      <p>
        123abc &nbsp;
        <IconBird /> &nbsp;
        <IconCalendar /> &nbsp;
        <IconCoatOfArms /> &nbsp;
        <IconHandWithHeart /> &nbsp;
        <IconHouse /> &nbsp;
        <IconProtest /> &nbsp;
        <IconProtestHand /> &nbsp;
        <IconUkraineInHands /> &nbsp;
        <IconUkraineOnHand /> &nbsp; abc312
      </p>


      <Typography variant="h2" gutterBottom>
        Typografy
      </Typography>
      <Typography variant="h2" gutterBottom>
        Typografy
      </Typography>
      <p>
        <Typography variant="h1" gutterBottom>
          Header 1
        </Typography>
        <Typography variant="h2" gutterBottom>
          Header 2
        </Typography>
        <Typography variant="h3" gutterBottom>
          Header 3
        </Typography>
        <Typography variant="h4" gutterBottom>
          Header 4
        </Typography>
        <Typography variant="body1" gutterBottom>
          Body 1: We help thousands of displaced Ukrainians by coordinating and
          providing accommodation, mental-health support, translation, and
          humanitarian aid.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Body 2: Ukraine is an integral part of Europe culturally,
          geographically, and historically. However, our country was not part of
          the European...
        </Typography>
        <Typography variant="caption">
          Caption: We coordinate and supply priority assistance for those
          impacted by the war, whether within Ukraine or beyond its borders{' '}
        </Typography>
        <Spacer />
      </p>

      <Typography variant="h2">Buttons</Typography>

      <p>
        <Typography variant="h3" gutterBottom>
          Normal size
        </Typography>
        <Button type="primary" onClick={() => alert('primary')}>
          Primary
        </Button>
        &nbsp;
        <Button type="accent" onClick={() => alert('accent')}>
          Accent
        </Button>
        &nbsp;
        <Button type="secondary" onClick={() => alert('secondary')}>
          Secondary
        </Button>
        &nbsp;
        <Button onClick={() => alert('outline')}>Outline</Button>
      </p>

      <Typography variant="h3" gutterBottom>
        Small size
      </Typography>
      <p>
        <Button type="primary" size="small" onClick={() => alert('primary')}>
          Primary
        </Button>
        &nbsp;
        <Button type="accent" size="small" onClick={() => alert('accent')}>
          Accent
        </Button>
        &nbsp;
        <Button
          type="secondary"
          size="small"
          onClick={() => alert('secondary')}
        >
          Secondary
        </Button>
        &nbsp;
        <Button type="outline" size="small" onClick={() => alert('outline')}>
          Outline
        </Button>
      </p>
      <Spacer />
    </Page>
  );
}
