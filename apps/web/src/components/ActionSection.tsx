import {
  IconCoatOfArms,
  IconHandWithHeart,
  IconHouse,
  IconUkraineInHands,
} from 'ui/assets';
import { Button, IconCard, Para } from 'ui/ux';

export const ActionCards = () => (
  <IconCard.Container>
    <IconCard.Item Icon={IconHandWithHeart} title="Humanitarian aid">
      <Para>
        We coordinate and supply priority assistance for those impacted by the
        war, whether within Ukraine or beyond its borders
      </Para>
      <Button>Read more</Button>
    </IconCard.Item>

    <IconCard.Item
      Icon={IconHouse}
      title="Support of temporary displaced Ukrainians "
    >
      <Para>
        We help thousands of displaced Ukrainians by coordinating and providing
        accommodation, mental-health support, translation, and humanitarian aid.
      </Para>
      <Button>Read more</Button>
    </IconCard.Item>

    <IconCard.Item Icon={IconCoatOfArms} title="Community services">
      <Para>
        We coordinate and supply priority assistance for those impacted by the
        war, whether within Ukraine or beyond its borders
      </Para>
      <Button>Read more</Button>
    </IconCard.Item>

    <IconCard.Item Icon={IconUkraineInHands} title="Events and activism">
      <Para>
        We organize initiatives about Ukraine, from informational and cultural
        events to peaceful demonstrations
      </Para>
      <Button>Read more</Button>
    </IconCard.Item>
  </IconCard.Container>
);
