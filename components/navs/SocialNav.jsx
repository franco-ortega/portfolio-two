import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import SocialLink from '../links/SocialLink';
import styles from './SocialNav.module.scss';

const SocialNav = () => {
  const iconStyle = { fontSize: 30 };

  return (
    <nav className={styles.SocialNav} data-testid='social-nav'>
      <ul>
        <li>
          <SocialLink
            title={'GitHub'}
            url={'https://github.com/franco-ortega'}
            icon={faGithub}
            iconStyle={iconStyle}
          />
        </li>
        <li>
          <SocialLink
            title={'LinkedIn'}
            url={'https://www.linkedin.com/in/francoortega/'}
            icon={faLinkedin}
            iconStyle={iconStyle}
          />
        </li>
        <li>
          <SocialLink
            title={'Twitter'}
            url={'https://twitter.com/FrancoOrtegaDev'}
            icon={faTwitter}
            iconStyle={iconStyle}
          />
        </li>
        <li>
          <SocialLink
            title={'Instagram'}
            url={'https://www.instagram.com/reefwoodcartography/'}
            icon={faInstagram}
            iconStyle={iconStyle}
          />
        </li>
      </ul>
    </nav>
  );
};

export default SocialNav;
