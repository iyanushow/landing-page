/** @jsx jsx */
import { jsx, Container, Flex, Button, Styled } from 'theme-ui';
import { styles } from './header.styles';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    <header sx={styles.header} className={className} id='header'>
      <Container sx={styles.container}>
        <MobileDrawer />
        <Logo src={LogoDark} />
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
