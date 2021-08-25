/** @jsx jsx */
import { Link } from 'components/link';
import { jsx, Box, Container, Image, Text } from 'theme-ui';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path='/'>
            <Image src='/assets/logo.svg' alt='Logo' />
          </Link>

          <Text sx={styles.footer.copyright}>Copyright {new Date().getFullYear()} Shady-Dev </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      p: 2,
      textAlign: 'center',
      flexDirection: 'column',
    },

    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
      fontWeight: 700,
    },
  },
};
