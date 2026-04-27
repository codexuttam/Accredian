"use client";

import Link from "next/link";
import Image from "next/image";
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
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4 border-b border-gray-50"
      }`}
    >
      <div className="container-custom px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative w-40 h-10 md:w-48 md:h-12 overflow-hidden">
          <Image 
            src="/logos/accredian.png" 
            alt="Accredian" 
            fill 
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-[13px] font-bold text-gray-700 hover:text-brand-blue transition-colors whitespace-nowrap">
              {item.name}
            </Link>
          ))}
          <button 
            onClick={openModal}
            className="bg-brand-blue text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
          >
            Enquire Now
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
          <div className="container-custom py-6 flex flex-col space-y-4 px-4 font-bold">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-blue text-lg"
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
              className="bg-brand-blue text-white px-6 py-4 rounded-xl text-lg font-bold w-full mt-4"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
