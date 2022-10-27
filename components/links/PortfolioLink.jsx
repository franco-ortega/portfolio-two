import Link from 'next/link';
import styles from 'PortfolioLink.module.scss';

const PortfolioLink = ({ text, url }) => {
  return (
    <Link className={styles.PortfolioLink} href={url}>
      {text}
    </Link>
  );
};

export default PortfolioLink;
