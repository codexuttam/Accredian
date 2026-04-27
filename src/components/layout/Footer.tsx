"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const Footer = () => {
  const { openModal } = useModal();

  return (
    <footer id="contact" className="bg-white text-gray-800 pt-16 pb-8 border-t border-gray-100">
      <div className="container-custom px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div className="flex flex-col">
            <Link href="/" className="mb-6 block relative w-48 h-12">
              <Image 
                src="/logos/accredian.png" 
                alt="Accredian" 
                fill 
                className="object-contain object-left"
              />
            </Link>
            <div className="flex gap-5 text-gray-600">
              <Link href="#" className="hover:text-brand-blue transition-colors">
                <Facebook size={20} fill="currentColor" stroke="none" />
              </Link>
              <Link href="#" className="hover:text-brand-blue transition-colors">
                <Linkedin size={20} fill="currentColor" stroke="none" />
              </Link>
              <Link href="#" className="hover:text-brand-blue transition-colors">
                <Twitter size={20} fill="currentColor" stroke="none" />
              </Link>
              <Link href="#" className="hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-brand-blue transition-colors">
                <Youtube size={20} fill="currentColor" stroke="none" />
              </Link>
            </div>
          </div>

          <div className="text-right">
            <button 
              onClick={openModal}
              className="bg-brand-blue text-white px-10 py-3 rounded-lg font-bold hover:bg-blue-700 transition-all mb-2"
            >
              Enquire Now
            </button>
            <p className="text-sm text-gray-500 font-medium">Speak with our Advisor</p>
          </div>
        </div>

        <div className="h-px bg-gray-100 w-full mb-12" />

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Accredian Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Accredian</h3>
            <ul className="space-y-4 text-gray-700 text-[17px] font-semibold">
              <li><Link href="/about" className="hover:text-brand-blue transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Why Accredian</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-700 text-[17px] font-semibold">
              <li>
                Email us: <Link href="mailto:enterprise@accredian.com" className="text-brand-blue hover:underline">enterprise@accredian.com</Link>
              </li>
              <li>
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gray-100 text-center text-gray-600 text-base font-semibold">
          <p>© 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
