import Link from 'next/link';

const PortfolioLink = ({ text, url }) => {
  return <Link href={url}>{text}</Link>;
};

export default PortfolioLink;
