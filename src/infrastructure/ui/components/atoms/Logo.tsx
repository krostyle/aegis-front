interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
const Logo: React.FC<LogoProps> = () => {
  return (
    <div className="text-lg font-bold">
      <a href="/" className="text-white hover:text-gray-300">
        Themis Tracker
      </a>
    </div>
  );
};

export default Logo;
