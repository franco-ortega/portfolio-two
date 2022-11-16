const ExternalLink = ({ title, url }) => {
  return (
    <a title={title} href={url} rel='noreferrer' target={'blank'}>
      {title}
    </a>
  );
};

export default ExternalLink;
