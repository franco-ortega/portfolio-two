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
  return (
    <nav className={styles.SocialNav} data-testid='social-nav'>
      <ul>
        <li>
          <SocialLink
            title={'GitHub'}
            url={'https://github.com/franco-ortega'}
            icon={faGithub}
          />
        </li>
        <li>
          <SocialLink
            title={'LinkedIn'}
            url={'https://www.linkedin.com/in/francoortega/'}
            icon={faLinkedin}
          />
        </li>
        <li>
          <SocialLink
            title={'Twitter'}
            url={'https://twitter.com/FrancoOrtegaDev'}
            icon={faTwitter}
          />
        </li>
        <li>
          <SocialLink
            title={'Instagram'}
            url={'https://www.instagram.com/reefwoodcartography/'}
            icon={faInstagram}
          />
        </li>
      </ul>
    </nav>
  );
};

export default SocialNav;
