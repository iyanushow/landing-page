/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

const linkStyles = {
  variant: 'links.logo',
  display: 'flex',
  cursor: 'pointer',
  flexBasis:'50%'
};

export default function Logo({ src, ...rest }) {
  return (
    <Link path='/' sx={linkStyles} {...rest}>
      <Image src={src} alt='landing-page' />
    </Link>
  );
}
