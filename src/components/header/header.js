/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';

import { Link } from 'react-scroll';
import Logo from 'components/logo';
import menuItems from './header.data';
import { styles } from './header.styles';
import MobileDrawer from './mobile-drawer';

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id='header'>
      <Container sx={styles.container}>
        <MobileDrawer />
        <Logo src='../../assets/logo.svg' />
        <Flex as='nav' sx={styles.nav}>
          {menuItems?.map(({ path, label }, i) => (
            <Link
              key={i}
              activeClass='active'
              to={path}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              {label}
            </Link>
          ))}
        </Flex>
        <Button className='donate__btn' variant='secondary' aria-label='Get Started'>
          Get started
        </Button>
      </Container>
    </header>
  );
}
