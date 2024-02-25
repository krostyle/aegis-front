interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label, ...props }) => {
  return (
    <a
      {...props}
      className="link link-hover text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
    >
      {label}
    </a>
  );
};

export default NavLink;
