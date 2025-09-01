import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/LOGO-removebg-preview.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center  justify-between p-4 bg-white border-b sticky top-0 z-10">
      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-800"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Full-screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0  bg-white flex flex-col items-center justify-center gap-6 text-lg font-semibold z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <X size={32} />
          </button>
          <Link to="/" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/winners" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Winners List</Link>
          <Link to="/prize-claim" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Prize Claim</Link>
          <Link to="/contact" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-800 font-medium">
        <Link to="/" className="hover:text-purple-600">Home</Link>
        <Link to="/about" className="hover:text-purple-600">About Us</Link>
        <Link to="/winners" className="hover:text-purple-600">Winners List</Link>
        <Link to="/prize-claim" className="hover:text-purple-600">Prize Claim</Link>
        <Link to="/contact" className="hover:text-purple-600">Contact Us</Link>
      </nav>

      {/* Logo on the right */}
      <Link to={'/'}><div className="text-xl font-bold text-purple-700"><img src={logo} width={100} /></div>
  
      </Link>
        </header>
  );
};

export default Header;
