/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

const data = [
  {
    id: 1,
    src: 'assets/feature/performance.svg',
    alt: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet recusandae explicabo voluptas ipsum architecto et praesentium incidunt facilis aliquam tenetur neque, nobis ducimus voluptate corrupti consequatur natus repellat odio dolores!',
  },
  {
    id: 2,
    src: 'assets/feature/partnership.svg',
    alt: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet recusandae explicabo voluptas ipsum architecto et praesentium incidunt facilis aliquam tenetur neque, nobis ducimus voluptate corrupti consequatur natus repellat odio dolores!',
  },
  {
    id: 3,
    src: 'assets/feature/subscription.svg',
    alt: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet recusandae explicabo voluptas ipsum architecto et praesentium incidunt facilis aliquam tenetur neque, nobis ducimus voluptate corrupti consequatur natus repellat odio dolores!',
  },
  {
    id: 4,
    src: 'assets/feature/support.svg',
    alt: 'Customer Support',
    title: 'Customer Support',
    text:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet recusandae explicabo voluptas ipsum architecto et praesentium incidunt facilis aliquam tenetur neque, nobis ducimus voluptate corrupti consequatur natus repellat odio dolores!',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <SectionHeader slogan='Quality features' title='Our Features' />
      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </Grid>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    maxWidth: '80%',
    margin: '0 auto',
    rowGap: ['auto', null, '20%'],
    columnGap: ['auto', null, '10%'],
    // gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
