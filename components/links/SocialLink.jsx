import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({ title, url, icon, iconStyle }) => {
  return (
    <a title={title} href={url} rel='noreferrer' target={'blank'}>
      <FontAwesomeIcon icon={icon} style={iconStyle} />
    </a>
  );
};

export default SocialLink;
