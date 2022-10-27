import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SocialLink.module.scss';

const SocialLink = ({ title, url, icon, iconStyle }) => {
  return (
    <a
      className={styles.SocialLink}
      title={title}
      href={url}
      rel='noreferrer'
      target={'blank'}
    >
      <FontAwesomeIcon icon={icon} style={iconStyle} />
    </a>
  );
};

export default SocialLink;
