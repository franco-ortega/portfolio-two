import PortfolioLink from '../links/PortfolioLink';
import styles from './PortfolioNav.module.scss';

const PortfolioNav = () => {
  return (
    <nav className={styles.PortfolioNav} data-testid='portfolio-nav'>
      <ul>
        <li>
          <PortfolioLink text={'Home'} url={'/'} />
        </li>
        <li>
          <PortfolioLink text={'Projects'} url={'/projects'} />
        </li>
        <li>
          <PortfolioLink text={'About'} url={'/about'} />
        </li>
        <li>
          <a href='/Resume _Franco_Ortega.pdf' rel='noreferrer' target='_blank'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PortfolioNav;
