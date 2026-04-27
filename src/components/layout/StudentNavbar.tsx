"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const StudentNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Banner */}
      <div className="bg-blue-50 py-2 hidden md:block">
        <div className="container-custom px-4 flex justify-between items-center text-[13px]">
          <p className="text-gray-600 mx-auto">
            Navigate your ideal career path with tailored expert advice
            <span className="text-brand-blue font-bold ml-2 cursor-pointer hover:underline">Contact Expert</span>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container-custom px-4 flex justify-between items-center">
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <Link href="/" className="relative w-40 h-10">
              <Image 
                src="/logos/accredian.png" 
                alt="Accredian" 
                fill 
                className="object-contain"
              />
            </Link>

            {/* Courses Dropdown */}
            <button className="bg-brand-blue text-white px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition-all">
              Courses
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Right Links */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-gray-800 font-medium hover:text-brand-blue transition-colors">
              Refer & Earn
            </Link>
            <Link href="/" className="text-gray-800 font-medium hover:text-brand-blue transition-colors">
              Resources
              <ChevronDown size={14} className="inline ml-1" />
            </Link>
            <Link href="/" className="text-gray-800 font-medium hover:text-brand-blue transition-colors">
              About Us
              <ChevronDown size={14} className="inline ml-1" />
            </Link>
            
            {/* THE FOR BUSINESS BUTTON */}
            <Link href="/" className="text-gray-800 font-bold hover:text-brand-blue transition-colors border-b-2 border-transparent hover:border-brand-blue py-1">
              For Business
            </Link>

            <button className="bg-brand-blue text-white px-8 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StudentNavbar;
