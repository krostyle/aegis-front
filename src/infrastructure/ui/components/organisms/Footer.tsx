import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-neutral text-primary-content">
      <aside>
        <p className="font-bold">
          Themis Tracker. <br />
          Since 2024
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/krostyle" target="_blank">
            <FaGithub className="w-6 h-6 fill-current" />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-bustamantea/"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6 fill-current" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
