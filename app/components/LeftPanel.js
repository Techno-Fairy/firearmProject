'use client';
import { useState } from 'react';
import { BanknotesIcon, DocumentIcon, ArrowPathIcon, TruckIcon, BriefcaseIcon, ShieldExclamationIcon, ChevronDownIcon, QuestionMarkCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const firearmSubsystems = [
  {
    title: "Firearm Acquisition",
    icon: <BanknotesIcon className="h-5 w-5 inline-block mr-2" />,
    options: [
      { name: "Application For Permit to Acquire Firearm", link: "/forms/forms/form-1", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Raffle Process For Firearm Allocation",  link: "/forms/forms/form-1", icon: <ArrowPathIcon className="h-5 w-5 inline-block mr-2" /> },
    ],
  },
  {
    title: "Firearm Registration",
    icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" />,
    options: [
      { name: "Registration Certificate Application", link: "/forms/forms/form-11", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Arms License Application", link: "/forms/forms/form-17", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
    ],
  },
  {
    title: "Firearm Transfer",
    icon: <ArrowPathIcon className="h-5 w-5 inline-block mr-2" />,
    options: [
      { name: "Temporary Transfers",link: "/forms/forms/form-5" , icon: <ArrowPathIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Inheritance to Spouse", icon: <ArrowPathIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Inheritance to Siblings/Relatives", icon: <ArrowPathIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Swapping", link: "/forms/forms/form-1", icon: <ArrowPathIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Surrender Process", icon: <ArrowPathIcon className="h-5 w-5 inline-block mr-2" /> },
    ],
  },
  {
    title: "Import/Export",
    icon: <TruckIcon className="h-5 w-5 inline-block mr-2" />,
    options: [
      { name: "Import Permits For Residents",link: "/forms/forms/form-2", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Temporary Import Permits For Non-Residents",link: "/forms/forms/form-6", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Export Permits", link: "/forms/forms/form-9", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
    ],
  },
  {
    title: "Commercial Business",
    icon: <BriefcaseIcon className="h-5 w-5 inline-block mr-2" />,
    options: [
      { name: "Arms/Ammunition Dealers' Licensing",link: "/forms/forms/form-13", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Gunsmith Licensing",link: "/forms/forms/form-21", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Manufacturers Licensing",link: "/forms/forms/form-23", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
      { name: "Brokers Permitting",link: "/forms/forms/form-25", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
    ],
  },
  {
    title: "Special Status",
    icon: <ShieldExclamationIcon className="h-5 w-5 inline-block mr-2" />,
    options: [
      { name: "Exemption Certificates For Historic/Antique Firearms",link: "/forms/forms/form-19", icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" /> },
    ],
  },
  {
    title: "Application History",
    icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" />,
    options: [
      {
        name: "View my applications",
        icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" />,
        link: "/applications",
      },
    ],
  },
  {
    title: "Issued Documents",
    icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" />,
    options: [
      {
        name: "Permit",
        icon: <DocumentIcon className="h-5 w-5 inline-block mr-2" />,
        link: "/issued-documents",
      },
    ],
  },
];

export default function LeftPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <div 
        className={`md:block w-64 bg-blue-100 text-black fixed top-0 left-0 h-screen p-4 transition-all ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 z-10`}
      >
        <div className="flex flex-col space-y-4 mt-20 overflow-y-auto">
          {firearmSubsystems.map((subsystem, index) => (
            <div key={index} className="space-y-2">
              <p 
                className="font-normal text-lg cursor-pointer flex items-center"
                onClick={() => toggleDropdown(index)}
              >
                {subsystem.icon}
                {subsystem.title}
                <ChevronDownIcon className={`h-5 w-5 ml-2 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
              </p>
              {activeDropdown === index && (
                <ul className="list-disc pl-5 space-y-1">
                  {subsystem.options.map((option, idx) => (
                    <li key={idx} className="text-blue-600 hover:text-green-600 cursor-pointer flex items-center">
                      {option.icon}
                      <Link href={option.link || "#"}>{option.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="flex space-x-4 mt-6">
          <Link href="/logout">
            <button className="flex items-center space-x-2 p-2 w-full md:w-auto h-10 bg-red-500 text-white rounded-md">
              <ArrowLeftOnRectangleIcon className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </Link>
        </div>
      </div>

      <button className="md:hidden absolute top-5 left-5 text-white z-20" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </button>
    </>
  );
}