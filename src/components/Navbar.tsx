
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-cream/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-inter text-navy text-xl font-bold">No Bad K-9 Training</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-gold transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="font-dmSans text-textGray hover:text-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gold text-white px-6 py-2 rounded-full font-dmSans hover:bg-gold/90 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 rounded-md text-textGray hover:text-gold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-2 text-center bg-gold text-white rounded-full hover:bg-gold/90 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
