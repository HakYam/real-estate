import React from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 py-4 mt-auto flex justify-between">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <FaHome className='text-white text-4xl mr-2 bg-blue-700 rounded-full p-1' />
        </div>
        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          <Link href="https://alirahbi.com" target='_blank'>Made with ❤️ by Ali HakYam</Link> 
        </div>
        <div>
          <p className="text-sm text-gray-500  md:mt-0">
            © {currentYear} Property Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;