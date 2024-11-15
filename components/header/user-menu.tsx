'use client';

import React, { useState } from "react";
import { FiUser, FiHeart, FiMenu, FiPlusCircle } from "react-icons/fi"; // React Icons for profile and favorites
import { usePathname } from "next/navigation"; // Import usePathname for checking the current pathname
import Link from "next/link";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  // Toggle dropdown visibility
  const toggleMenu = () => setIsOpen(prev => !prev);

  // Helper function to check if the current pathname matches the link
  const isActive = (link: string) => pathname === link;

  return (
    <div className="relative">
      {/* Menu Icon */}
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
      >
        <FiMenu size={24} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="p-4">
            <div className={`flex items-center mb-2 ${isActive('/dashboard') ? 'text-blue-600' : 'text-gray-700'}`}>
              <FiUser className="mr-2" size={20} />
              <Link href="/dashboard" className={`text-sm font-semibold ${isActive('/dashboard') ? 'text-blue-600' : 'text-gray-700'}`}>
                Profile
              </Link>
            </div>
            <div className={`flex items-center mb-2 ${isActive('/dashboard/favorites') ? 'text-blue-600' : 'text-gray-700'}`}>
              <FiHeart className="mr-2" size={20} />
              <Link href="/dashboard/favorites" className={`text-sm font-semibold ${isActive('/dashboard/favorites') ? 'text-blue-600' : 'text-gray-700'}`}>
                Favorites
              </Link>
            </div>
            {/* New Link to /dashboard/new */}
            <div className={`flex items-center mb-2 ${isActive('/dashboard/new') ? 'text-blue-600' : 'text-gray-700'}`}>
              <FiPlusCircle className="mr-2" size={20} />
              <Link href="/dashboard/new" className={`text-sm font-semibold ${isActive('/dashboard/new') ? 'text-blue-600' : 'text-gray-700'}`}>
                New Post
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
