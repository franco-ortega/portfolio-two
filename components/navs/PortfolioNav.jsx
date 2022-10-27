import NavLink from '../links/NavLink';
import styles from './PortfolioNav.module.scss';

const PortfolioNav = () => {
  return (
    <nav className={styles.PortfolioNav} data-testid='portfolio-nav'>
      <ul>
        <li>
          <NavLink text={'Home'} url={'/'} />
        </li>
        <li>
          <NavLink text={'Projects'} url={'/projects'} />
        </li>
        <li>
          <NavLink text={'About'} url={'/about'} />
        </li>
        <li>
          <a href='/Resume_Franco_Ortega.pdf' rel='noreferrer' target='_blank'>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PortfolioNav;
