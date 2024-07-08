import { navbarLinks } from '@/lib/nav-links';
import Image from 'next/image';
import React from 'react';
import ayncore from '../../../public/ayncore.png';
import logo from '../../../public/Yash harale.jpg';
import { ShoppingCart } from 'lucide-react';

const Navbar: React.FC = () => {
  const currentuser = true;

  return (
    <nav className='flex justify-between items-center bg-[#0f172a] text-white p-4 px-20'>
      {/* Left side: Logo */}
      <div className='flex items-center'>
        <h1 className='text-2xl font-bold'>
          <Image
            src={ayncore}
            height={200}
            width={200}
            alt='AYNcore'
            className=''
          />
        </h1>
      </div>

      {/* Right side: Navbar links */}
      {/* <ul className="flex space-x-4">
                {navbarLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} className="hover:text-gray-300">{link.text}</a>
                    </li>
                ))}
            </ul> */}

      <div className='flex items-center space-x-8'>
        <div className='cursor-pointer'>
          <ShoppingCart />
        </div>
        {!currentuser ? (
          <button className='bg-white text-black px-4 py-2 rounded-md'>
            Login
          </button>
        ) : (
          <Image
            src={logo}
            alt=''
            height={40}
            width={40}
            className='object-cover rounded-full cursor-pointer'
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
