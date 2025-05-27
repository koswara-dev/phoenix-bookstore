'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { settings } from '@/app/settings';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#D32F2F] shadow">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src={settings.logo} alt="Logo" className="h-10 w-auto mr-2" />
          <span className="font-bold text-xl text-gray-300">{settings.name}</span>
        </Link>

        {/* Menu */}
        <div className="md:hidden">
          {/* Hamburger menu icon */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} space-x-4 text-white`}>
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/categories" className="hover:text-gray-200">Categories</Link>
          <Link href="/login" className="hover:text-gray-200">Login</Link>
          <Link href="/register" className="hover:text-gray-200">Register</Link>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-4 text-white">
          <Link href="/" className="hover:text-gray-200">Home</Link>
          <Link href="/categories" className="hover:text-gray-200">Categories</Link>
          {/* Add more menu items here */}
        </div>

        {/* Login/Register */}
        <div className="hidden md:flex space-x-4 text-white">
          <Link href="/login" className="hover:text-gray-200">Login</Link>
          <Link href="/register" className="hover:text-gray-200">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
