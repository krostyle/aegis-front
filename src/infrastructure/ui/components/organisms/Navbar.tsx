import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div>
            <NavLink href="/" label="Inicio" />
            <NavLink href="/about" label="Acerca de" />
            <NavLink href="/login" label="Iniciar Sesión" />
            <NavLink href="/register" label="Registrarse" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
