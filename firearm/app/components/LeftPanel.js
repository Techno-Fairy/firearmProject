"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, Cog6ToothIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

function SidebarDropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);

  // Mapping of options to their corresponding form paths
  const formPathMap = {
    // Firearm Acquisition
    "Application for permit to acquire firearm": "/forms/forms/form-1",
    "Raffle process for firearm allocation": "/forms/forms/form-1",
    "Acquisition permit issuance": "/forms/forms/permit-issuance",

    // Firearm Registration
    "Registration certificate application": "/forms/forms/form-11",
    "Arms license application": "/forms/forms/form-17",

    // Firearm Transfer
    "Temporary transfers": "/forms/forms/temporary-transfer",
    "Inheritance": "/forms/forms/inheritance-transfer",
    "Transfer to spouses": "/forms/forms/spouse-transfer",
    "Transfer to siblings/relatives": "/forms/forms/relative-transfer",
    "Swapping": "/forms/forms/firearm-swap",
    "Surrender process": "/forms/forms/firearm-surrender",

    // Import/Export
    "Import permits for residents": "/forms/forms/form-2",
    "Temporary import permits for non-residents": "/forms/forms/form-6",
    "Export permits": "/forms/forms/form-9",

    // Commercial Firearms Business
    "Arms/Ammunition Dealers' licensing": "/forms/forms/form-13",
    "Gunsmith licensing": "/forms/forms/form-21",
    "Manufacturers licensing": "/forms/forms/form-23",
    "Brokers permitting": "/forms/forms/form-25",

    // Special Status Firearms
    "Exemption certificates for historic/antique firearms": "/forms/forms/form-19"
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center p-3 cursor-pointer border-b border-gray-300 bg-gray-100 hover:bg-gray-200"
        onClick={toggleDropdown}
      >
        {title}
        <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </div>
      {isOpen && (
        <ul className="bg-white shadow-md">
          {options.map((option) => (
            <li key={option} className="p-3 hover:bg-gray-200">
              <Link href={formPathMap[option] || "#"}>
                {option}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function LeftPanel() {
  const firearmSubsystems = [
    {
      title: "Firearm Acquisition",
      options: [
        "Application for permit to acquire firearm",
        "Raffle process for firearm allocation",
        
      ],
    },
    {
      title: "Firearm Registration",
      options: ["Registration certificate application", "Arms license application"],
    },
    {
      title: "Firearm Transfer",
      options: [
        "Temporary transfers",
        "Inheritance",
        "Transfer to spouses",
        "Transfer to siblings/relatives",
        "Swapping",
        "Surrender process",
      ],
    },
    {
      title: "Import/Export",
      options: ["Import permits for residents", "Temporary import permits for non-residents", "Export permits"],
    },
    {
      title: "Commercial Firearms Business",
      options: [
        "Arms/Ammunition Dealers' licensing",
        "Gunsmith licensing",
        "Manufacturers licensing",
        "Brokers permitting",
      ],
    },
    {
      title: "Special Status Firearms",
      options: ["Exemption certificates for historic/antique firearms"],
    },
  ];

  return (
    <div className="w-64 h-screen bg-gray-200 flex flex-col p-5">
      {firearmSubsystems.map((subsystem) => (
        <SidebarDropdown key={subsystem.title} title={subsystem.title} options={subsystem.options} />
      ))}

      <div className="mt-auto flex space-x-4 p-3">
        <Cog6ToothIcon className="w-8 h-8 cursor-pointer text-gray-700" />
        <QuestionMarkCircleIcon className="w-8 h-8 cursor-pointer text-gray-700" />
      </div>
    </div>
  );
}