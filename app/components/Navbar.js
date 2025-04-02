'use client';

import { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, Cog6ToothIcon, UserCircleIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'; // Import Link from next
import LeftPanel from './LeftPanel'; // Import your LeftPanel component

export default function Navbar() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [LeftPanelOpen, setLeftPanelOpen] = useState(false); // State for controlling the LeftPanel visibility

  return (
    <div>
      <nav className="p-4 flex justify-between items-center bg-gradient-to-r from-slate-50 via-blue-300 to-slate-50 text-white drop-shadow-lg relative shadow-lg z-20">
        {/* BPS PORTAL Title wrapped with Link for navigation to the home page */}
        <Link href="/" passHref>
          <div className="text-xl font-semibold text-gray-300 cursor-pointer">
            BPS PORTAL
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setLeftPanelOpen(!LeftPanelOpen)}>
          {LeftPanelOpen ? (
            <XMarkIcon className="h-6 w-6 text-black" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-black" />
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* Notifications */}
          <Menu as="div" className="relative">
            <Menu.Button className="relative focus:outline-none">
              <BellIcon className="h-6 w-6 text-black hover:text-gray-700 transition-all duration-200 ease-in-out transform hover:scale-110" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 bg-white text-gray-900 rounded-md shadow-lg overflow-hidden">
                <Menu.Item>
                  {({ active }) => (
                    <div className={`block px-4 py-2 ${active ? 'bg-gray-200' : ''}`}>No new notifications</div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Profile Dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="focus:outline-none">
              <UserCircleIcon className="h-6 w-6 text-black hover:text-gray-700 transition-all duration-200 ease-in-out transform hover:scale-110" />
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-md shadow-lg overflow-hidden">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/account"
                      className={`block px-4 py-2 ${active ? 'bg-gray-200' : ''}`}
                    >
                      My Account
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>

      {/* LeftPanel Component */}
      <LeftPanel isOpen={LeftPanelOpen} setIsOpen={setLeftPanelOpen} />
    </div>
  );
}
