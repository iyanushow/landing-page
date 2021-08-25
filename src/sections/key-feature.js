/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';

const data = [
  {
    id: 1,
    src: '/assets/key-feature/performance.svg',
    alt: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat consequatur reprehenderit dignissimos ut nobis!',
  },
  {
    id: 2,
    src: '/assets/key-feature/partnership.svg',
    alt: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat consequatur reprehenderit dignissimos ut nobis!',
  },
  {
    id: 3,
    src: '/assets/key-feature/subscription.svg',
    alt: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat consequatur reprehenderit dignissimos ut nobis!',
  },
  {
    id: 4,
    src: '/assets/key-feature/support.svg',
    alt: 'Customer Support',
    title: 'Customer Support',
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quaerat consequatur reprehenderit dignissimos ut nobis!',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }}>
      <Container>
        <SectionHeader slogan='What do we do?' title='Digital Products at its Finest' />
      </Container>
      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn key={item.id} {...item} />
        ))}
      </Grid>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    // gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, null, 'repeat(4,1fr)'],
    margin: '100px auto',
    maxWidth: '80%',
    rowGap: ['auto', null, '20%'],
    columnGap: ['auto', null, '10%'],
  },
};
