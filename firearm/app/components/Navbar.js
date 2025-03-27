"use client";

import { useState, useRef, useEffect } from "react";
import { UserCircleIcon, ArrowRightOnRectangleIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [signOutDropdownOpen, setSignOutDropdownOpen] = useState(false);
  const profileDropdownRef = useRef(null);
  const signOutDropdownRef = useRef(null);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
    setSignOutDropdownOpen(false);
  };

  const toggleSignOutDropdown = () => {
    setSignOutDropdownOpen(!signOutDropdownOpen);
    setProfileDropdownOpen(false);
  };

  const handleProfile = () => {
    console.log("Profile clicked");
    setProfileDropdownOpen(false);
  };

  const handleSignOut = () => {
    console.log("Sign out clicked");
    setSignOutDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
      if (signOutDropdownRef.current && !signOutDropdownRef.current.contains(event.target)) {
        setSignOutDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-slate-500 p-4 shadow-md w-full">
      <nav className="flex justify-between items-center">
        <div>
          <ShieldCheckIcon className="w-12 h-12 text-white" />
        </div>
        <div className="flex space-x-4">
          <div className="relative" ref={profileDropdownRef}>
            <UserCircleIcon
              className="w-10 h-10 text-white cursor-pointer"
              onClick={toggleProfileDropdown}
            />
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg">
                <button
                  onClick={handleProfile}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  Profile
                </button>
              </div>
            )}
          </div>
          <div className="relative" ref={signOutDropdownRef}>
            <ArrowRightOnRectangleIcon
              className="w-10 h-10 text-white cursor-pointer"
              onClick={toggleSignOutDropdown}
            />
            {signOutDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg">
                <button
                  onClick={handleSignOut}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
