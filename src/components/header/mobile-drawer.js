import React, { useState } from 'react';
import { Box } from 'theme-ui';
import { Link } from 'react-scroll';
import menuItems from './header.data';
import Drawer from 'components/drawer';
import { Scrollbars } from 'react-custom-scrollbars';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FaTwitter, FaGithubAlt, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socials = [
  {
    path: '/',
    icon: <FaInstagram />,
  },
  {
    path: '/',
    icon: <FaTwitter />,
  },
  {
    path: '/',
    icon: <FaGithubAlt />,
  },
  {
    path: '/',
    icon: <FaLinkedinIn />,
  },
];

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Drawer
      width='300px'
      drawerHandler={
        <Box Box sx={styles.handler}>
          <IoMdMenu size='26px' />
        </Box>
      }
      open={isOpen}
      closeButton={<IoMdClose size='24px' color='#000' />}
      toggleHandler={() => setIsOpen((prev) => !prev)}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide autoHideDuration={300}>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
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
          </Box>
          <Box sx={styles.menufooter}>
            <Box sx={styles.social}>
              {socials.map(({ path, icon }, i) => {
                return (
                  <Box as='span' key={i} sx={styles.social.icon}>
                    <Link to={path}>{icon}</Link>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
}

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'text',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'secondary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};
