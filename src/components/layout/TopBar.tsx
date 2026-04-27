"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const pathname = usePathname();
  const isBusiness = pathname === "/";
  const isIndividual = pathname === "/why-accredian";

  return (
    <div className="bg-gray-50 border-b border-gray-100 py-2 hidden md:block relative z-[60]">
      <div className="container-custom px-4 flex justify-between items-center text-sm font-medium">
        <div className="flex space-x-8">
          <Link 
            href="/why-accredian" 
            className={`${isIndividual ? "text-brand-blue border-b-2 border-brand-blue" : "text-gray-500 hover:text-brand-blue"} transition-all`}
          >
            For Learners
          </Link>
          <Link 
            href="/" 
            className={`${isBusiness ? "text-brand-blue border-b-2 border-brand-blue" : "text-gray-500 hover:text-brand-blue"} transition-all`}
          >
            For Business
          </Link>
          <Link href="#" className="text-gray-500 hover:text-brand-blue transition-colors">For Schools</Link>
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-brand-blue">Refer & Earn</Link>
          <Link href="#" className="text-gray-600 hover:text-brand-blue">Advisors</Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
