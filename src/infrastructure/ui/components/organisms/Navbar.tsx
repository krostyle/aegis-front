import Logo from "../atoms/Logo";
import NavLink from "../atoms/NavLink";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-neutral p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex">
          {/* Tus NavLink aquí */}
          <NavLink label="Inicio" href="/" />
          <NavLink label="Sobre Nosotros" href="/" />
          <NavLink label="Servicios" href="/" />
          <NavLink label="Contacto" href="/" />
        </div>
        <div className="md:hidden">
          {/* Dropdown menú con DaisyUI */}
          <details className="dropdown dropdown-end">
            {/* <div className="flex-none"> */}
            <summary className="m-1 btn btn-square btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </summary>
            {/* </div> */}
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-neutral rounded-box w-52">
              {/* Tus NavLink para móviles aquí */}
              <li>
                <NavLink label="Inicio" href="/" />
              </li>
              <li>
                <NavLink label="Sobre Nosotros" href="/" />
              </li>
              <li>
                <NavLink label="Servicios" href="/" />
              </li>
              <li>
                <NavLink label="Contacto" href="/" />
              </li>
            </ul>
          </details>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
