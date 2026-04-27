"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "Stats", href: "/#stats" },
  { name: "Clients", href: "/#clients" },
  { name: "Accredian Edge", href: "/#edge" },
  { name: "CAT", href: "/#cat" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "FAQs", href: "/#faqs" },
  { name: "Testimonials", href: "/#testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container-custom px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col text-brand-blue">
          <span className="text-2xl font-bold leading-none">accredian</span>
          <span className="text-[10px] text-gray-500 tracking-wider">credentials that matter</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link text-sm uppercase font-semibold">
              {item.name}
            </Link>
          ))}
          <button 
            onClick={openModal}
            className="bg-brand-blue text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-brand-blue/90 transition-all uppercase"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-600" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t animate-in slide-in-from-top duration-300">
          <div className="container-custom py-6 flex flex-col space-y-4 px-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-blue text-lg font-medium uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                openModal();
              }}
              className="btn-primary w-full mt-4 uppercase"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
