import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({ title, url, icon }) => {
  return (
    <a title={title} href={url} rel='noreferrer' target={'blank'}>
      <FontAwesomeIcon icon={icon} style={{ fontSize: 30 }} />
    </a>
  );
};

export default SocialLink;
