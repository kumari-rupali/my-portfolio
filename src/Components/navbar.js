import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import "../styles/navbar.css";

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Skills', '/skills'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="navbar-brand" href="/" aria-label="Kumari Rupali home">Rupali<span>.</span></a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="navbarNav"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`navbar-menu ${open ? 'is-open' : ''}`} id="navbarNav">
          {links.map(([label, href]) => (
            <a key={href} className="nav-link" href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Let’s Connect</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
