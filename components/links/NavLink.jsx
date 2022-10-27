import Link from 'next/link';

const NavLink = ({ text, url }) => {
  return <Link href={url}>{text}</Link>;
};

export default NavLink;
