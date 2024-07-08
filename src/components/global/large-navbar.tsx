import { navbarLinks } from '@/lib/nav-links';
import React from 'react';



const Navbar: React.FC = () => {


    return (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
            {/* Left side: Logo */}
            <div className="flex items-center">
                <h1 className="text-2xl font-bold">Your Logo</h1>
            </div>

            {/* Right side: Navbar links */}
            <ul className="flex space-x-4">
                {navbarLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} className="hover:text-gray-300">{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
