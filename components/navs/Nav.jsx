import PortfolioNav from './PortfolioNav';
import SocialNav from './SocialNav';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={styles.Nav} data-testid='nav'>
      <PortfolioNav />
      <SocialNav />
    </div>
  );
};

export default Nav;
