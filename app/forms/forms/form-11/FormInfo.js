"use client";

import { useState } from "react";

export default function FormInfo() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative">
      {/* Info Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-5 right-10 p-3 bg-slate-500 text-white rounded-full shadow-md hover:bg-blue-200 transition-all animate-pulse"
      >
        ℹ️
      </button>

      {/* Info Panel */}
      {isVisible && (
        <div className="fixed top-20 right-10 w-96 p-4 bg-blue-100 border-l-4 border-blue-500 shadow-lg rounded-md">
          <h2 className="font-semibold text-lg">NOTE:</h2>
          <ul className="list-disc pl-5 text-sm text-black">
            <li>(1)	A separate completed application form is required in respect of each of the arms for which a Registration Certificate is required.</li><br></br>
            <li>(2)If the arms have been purchased or acquired from a person who has already registered the arms, the previous owner's Registration Certificate must be attached to this application.</li><br></br>
            <li>(3)The Licensing Officer will forward the completed application form to the Officer-in-charge, Central Arms Registry, Police Headquarters Private Bag 0012, Gaborone.</li><br></br>
            <li>(4)Type of arms, state whether rifle, S/B or DB/shotgun, revolver, automatic or semi-automatic pistol, etc.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
