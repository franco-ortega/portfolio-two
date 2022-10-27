import Link from 'next/link';
import styles from 'NavLink.module.scss';

const NavLink = ({ text, url }) => {
  return (
    <Link className={styles.NavLink} href={url}>
      {text}
    </Link>
  );
};

export default NavLink;
