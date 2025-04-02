'use client';

import React, { useState, useEffect } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, MagnifyingGlassIcon, QuestionMarkCircleIcon, DocumentIcon, CheckCircleIcon, ClockIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showHelpCard, setShowHelpCard] = useState(false); // State to toggle the help card visibility

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleHelpCard = () => {
    setShowHelpCard(!showHelpCard);
  };

  // Permit expiry date (Example: set to 30 days from now)
  const permitExpiryDate = new Date();
  permitExpiryDate.setDate(permitExpiryDate.getDate() + 30); // Expire in 30 days

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(permitExpiryDate));

  // Function to calculate time remaining
  function calculateTimeRemaining(expiryDate) {
    const now = new Date();
    const distance = expiryDate - now;

    if (distance <= 0) return null; // If the expiry date has passed

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    return { days, hours, minutes };
  }

  // Update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining(permitExpiryDate);
      setTimeRemaining(newTimeRemaining);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center uppercase">WELCOME</h1>
      <p className="mb-6 text-center">Welcome to your dashboard! Here you can navigate to various forms and check application statuses.</p>

      {/* Search Bar */}
      <div className="mt-4 mb-6 relative">
        <input
          type="text"
          placeholder="Search for forms..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-3 pl-10 w-full rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-50 text-sm transition duration-300 ease-in-out hover:ring-blue-400"
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      {/* Stats Section with Cool Icons and Animations */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md transform transition duration-500 ease-in-out hover:scale-105 hover:bg-blue-600">
          <div className="flex items-center justify-between">
            <DocumentIcon className="h-8 w-8 text-white" />
            <ClockIcon className="h-6 w-6 text-white opacity-50" />
          </div>
          <h3 className="text-lg font-semibold mt-4">Active Applications</h3>
          <p className="text-3xl font-bold animate-pulse">5</p>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md transform transition duration-500 ease-in-out hover:scale-105 hover:bg-green-600">
          <div className="flex items-center justify-between">
            <CheckCircleIcon className="h-8 w-8 text-white" />
            <ClipboardDocumentListIcon className="h-6 w-6 text-white opacity-50" />
          </div>
          <h3 className="text-lg font-semibold mt-4">Past Applications</h3>
          <p className="text-3xl font-bold animate-pulse">12</p>
        </div>

        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md transform transition duration-500 ease-in-out hover:scale-105 hover:bg-yellow-600">
          <div className="flex items-center justify-between">
            <ClockIcon className="h-8 w-8 text-white" />
            <DocumentIcon className="h-6 w-6 text-white opacity-50" />
          </div>
          <h3 className="text-lg font-semibold mt-4">Pending Applications</h3>
          <p className="text-3xl font-bold animate-pulse">2</p>
        </div>

        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-md transform transition duration-500 ease-in-out hover:scale-105 hover:bg-gray-600">
          <div className="flex items-center justify-between">
            <CheckCircleIcon className="h-8 w-8 text-white" />
            <ClockIcon className="h-6 w-6 text-white opacity-50" />
          </div>
          <h3 className="text-lg font-semibold mt-4">Approved Applications</h3>
          <p className="text-3xl font-bold animate-pulse">3</p>
        </div>
      </div>

      {/* Permit Expiry Countdown */}
      {timeRemaining ? (
        <div className="bg-gradient-to-r from-red-700 via-red-500 to-red-200 text-white p-8 rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center space-x-4">
            <ClockIcon className="h-8 w-8 text-white animate-pulse" />
            <h3 className="text-lg font-semibold">Your Permit is About to Expire</h3>
          </div>
          <p className="text-4xl font-bold mt-4 animate-pulse">
            {timeRemaining.days} <span className="text-2xl">Days</span>, {timeRemaining.hours} <span className="text-2xl">Hours</span>, {timeRemaining.minutes} <span className="text-2xl">Minutes</span>
          </p>
          <div className="mt-4 text-sm text-white opacity-80">Stay updated with your permit status and renew on time!</div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-red-500 to-yellow-500 text-white p-8 rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
          <div className="flex items-center space-x-4">
            <ClockIcon className="h-8 w-8 text-white opacity-70" />
            <h3 className="text-lg font-semibold">Your Permit Has Expired</h3>
          </div>
          <p className="text-4xl font-bold mt-4">Expired</p>
          <div className="mt-4 text-sm text-white opacity-80">Please contact support to renew your permit.</div>
        </div>
      )}

      {/* Help Button */}
      <div className="fixed bottom-10 right-10 z-10">
        <button
          onClick={toggleHelpCard}
          className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          <QuestionMarkCircleIcon className="h-6 w-6" />
        </button>

        {/* Help Card Pop-up */}
        {showHelpCard && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-20">
            <div className="bg-slate-500 p-6 rounded-md shadow-lg w-80">
              <h2 className="text-xl font-semibold mb-2 text-center text-blue-300">Support & Help Center</h2>
              <p className="text-white">If you need assistance, contact us:</p>
              <ul className="mt-2 text-white">
                <li className="flex items-center gap-2"><EnvelopeIcon className="h-4 w-4" /> crb@gov.bw</li>
                <li className="flex items-center gap-2"><PhoneIcon className="h-4 w-4" /> +362 8769</li>
                <li className="flex items-center gap-2"><MapPinIcon className="h-4 w-4" /> Mandela Drive</li>
              </ul>
              <button
                onClick={toggleHelpCard}
                className="mt-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
