import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-nav md:px-12">
      <span className="font-display text-2xl font-bold tracking-wider text-white">
        <img src={logo} alt="EliteSport Logo" className="h-16 w-auto" />
      </span>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-foreground font-body text-sm tracking-wide hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden text-foreground"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-nav flex flex-col items-center gap-4 py-6 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground text-lg hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
