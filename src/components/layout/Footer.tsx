"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const Footer = () => {
  const { openModal } = useModal();

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="container-custom px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-3xl font-bold text-white leading-none">accredian</span>
              <span className="text-[10px] text-gray-400 tracking-wider">credentials that matter</span>
            </Link>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Empowering enterprises with next-gen expertise through tailored learning solutions and expert guidance.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-brand-blue transition-all">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-brand-blue transition-all">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-brand-blue transition-all">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-brand-blue transition-all">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Accredian Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Accredian</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-brand-blue transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Career</Link></li>
              <li><button onClick={openModal} className="hover:text-brand-blue transition-colors text-left uppercase">Contact Us</button></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Why Accredian</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-brand-blue transition-colors">Terms of Service</Link></li>
              <li><Link href="#faqs" className="hover:text-brand-blue transition-colors">FAQs</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors">Admission Policy</Link></li>
              <li><button onClick={openModal} className="hover:text-brand-blue transition-colors text-left">Enquire Now</button></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-brand-blue shrink-0" size={20} />
                <span>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-brand-blue shrink-0" size={20} />
                <span>+91 999 000 1122</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-brand-blue shrink-0" size={20} />
                <span>enterprise@accredian.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Accredian. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
