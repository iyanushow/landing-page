/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Grid } from 'theme-ui';
import TeamCard from 'components/team-card';
import SectionHeader from 'components/section-header';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const data = [
  {
    id: 1,
    src: 'assets/team/member-1.png',
    alt: 'Jadon Alto',
    title: 'Jadon Alto',
    designation: 'CEO|CTO',
    social: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    src: 'assets/team/member-2.png',
    alt: 'Aaron McGivney',
    title: 'Aaron McGivney',
    designation: 'Tech Lead',
    social: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    src: 'assets/team/member-3.png',
    alt: 'Aaron McGivney',
    title: 'Aaron McGivney',
    designation: 'Web Designer',
    social: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    src: 'assets/team/member-4.png',
    alt: 'Marshall Mathers',
    title: 'Marshall Mathers',
    designation: 'Web Developer',
    social: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    src: 'assets/team/member-5.png',
    alt: 'Jadon Alto',
    title: 'Jadon Alto',
    designation: 'CEO|CTO',
    social: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    src: 'assets/team/member-6.png',
    alt: 'Aaron McGivney',
    title: 'Aaron McGivney',
    designation: 'Web Designer',
    social: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section sx={styles.section} id='team-members'>
      <SectionHeader slogan={'meet the team'} title='Our amazing team members' />
      <Grid sx={styles.grid}>
        {data.map((item) => (
          <TeamCard key={item.id} {...item} />
        ))}
      </Grid>
    </section>
  );
}

const styles = {
  section: { margin: '50px 0;' },
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: ['repeat(2,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)'],
  },
};
