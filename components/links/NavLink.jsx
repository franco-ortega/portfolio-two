import Link from 'next/link';

const NavLink = ({ title, url }) => {
  return <Link href={url}>{title}</Link>;
};

export default NavLink;
