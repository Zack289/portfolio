import { useState } from "react";
import ThemeSelector from "./ThemeSelector";

const navLinks = [
  { id: "hero", title: "Hero" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-base-300 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-16">

        {/* LOGO / BRAND */}
        <a href="/'" className="flex items-center gap-2  btn btn-ghost btn-lg bold ">
                <span>Laxman Bhandari</span>
            </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-6 list-none">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="
                btn btn-ghost relative btn-md
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0 after:bg-primary
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          <ThemeSelector />

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden p-2 rounded hover:bg-base-200 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
     {menuOpen && (
        <ul className="flex flex-col md:hidden gap-2 px-4 pb-4 list-none">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="
                relative px-3 py-1.5 rounded-lg
                hover:bg-primary/10 hover:text-primary
                transition-colors duration-200
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0 after:bg-primary
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
