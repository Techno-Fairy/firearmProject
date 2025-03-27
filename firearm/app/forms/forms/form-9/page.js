'use client';

import { useState } from 'react';
import { DocumentIcon} from '@heroicons/react/24/outline';
import FormInfo9 from './FormInfo9';
import LeftPanel from "../../../components/LeftPanel";
import Navbar from "../../../components/Navbar";

export default function Form9() {
  const [formData, setFormData] = useState({
    surname: '',
    idNumber: '',
    otherNames: '',
    postalAddress: '',
    armsType: '',
    armsCalibre: '',
    armsSerialNo: '',
    armsRegCertNo: '',
    makersName: '',
    ammoType: '',
    ammoCalibre: '',
    ammoQuantity: '',
    reasonsForExport: '',
    exportTown: '',
    exportCountry: '',
    declaration: false,
    dataConsent: false,
    clearingStation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="flex flex-col h-screen">
                <Navbar />
              
              <div className="flex flex-1">
                    <LeftPanel />

    <div className="flex justify-center items-start p-6">
    <div className="max-w-2xl mx-auto p-6 bg-slate-100 rounded-lg shadow-md ml-2">
      
      <div className="flex flex-col items-center mb-9">
              {/* Adding Icon above the heading */}
                <DocumentIcon className="h-8 w-8 text-slate-400 mb-4 transition-transform duration-200 ease-in-out transform hover:scale-110" />
                <h1 className="text-2xl font-semibold text-black text-center tracking-tight leading-tight">
                APPLICATION FOR EXPORT PERMIT
                </h1>
            </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="mb-4 flex space-x-4">
  <div className="w-1/2">
    <label className="block text-sm font-medium">1. Surname</label>
    <input
      type="text"
      name="surname"
      value={formData.surname}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
      required
    />
  </div>

  <div className="w-1/2">
    <label className="block text-sm font-medium">ID/Resident Permit No.</label>
    <input
      type="text"
      name="idNumber"
      value={formData.idNumber}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
      required
    />
  </div>
</div>

        <div className="mb-4">
          <label className="block text-sm font-medium">2. Other Names</label>
          <input
            type="text"
            name="otherNames"
            value={formData.otherNames}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">3. Postal Address</label>
          <input
            type="text"
            name="postalAddress"
            value={formData.postalAddress}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
        </div>

       {/* Arm/Ammunition Information */}
<div className="mb-4">
  <label className="block text-sm font-medium">4. Arm/Ammunition for which export permit is required:</label>
  
  {/* Arm and Calibre side by side */}
  <div className="mb-4">
  <label className="block text-sm font-medium mt-4">Arm:</label>
  </div>
  <div className="flex gap-4 mb-4">
    <div className="w-1/2">
      <label className="block text-sm font-medium">Type</label>
      <input
        type="text"
        name="armsType"
        value={formData.armsType}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        placeholder="Type"
        required
      />
    </div>

    <div className="w-1/2">
      <label className="block text-sm font-medium">Calibre</label>
      <input
        type="text"
        name="armsCalibre"
        value={formData.armsCalibre}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        placeholder="Calibre"
        required
      />
    </div>
  </div>

  {/* Serial No. and Reg. Cert. No. side by side */}
  <div className="flex gap-4 mb-4">
    <div className="w-1/2">
      <label className="block text-sm font-medium">Serial No.</label>
      <input
        type="text"
        name="armsSerialNo"
        value={formData.armsSerialNo}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        placeholder="Serial number"
        required
      />
    </div>

    <div className="w-1/2">
      <label className="block text-sm font-medium">Reg. Cert. No.</label>
      <input
        type="text"
        name="armsRegCertNo"
        value={formData.armsRegCertNo}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        placeholder="Registration Certificate Number"
        required
      />
    </div>
  </div>

  {/* Maker's Name */}
  <div className="mb-4">
    <label className="block text-sm font-medium">Maker's Name</label>
    <input
      type="text"
      name="makersName"
      value={formData.makersName}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
      placeholder="Maker's name"
      required
    />
  </div>

  {/* Ammunition Details: Ammunition Type, Calibre, Quantity side by side */}
  <div className="mb-4">
  <label className="block text-sm font-medium">Ammunition:</label>
  </div>
  <div className="flex gap-4 mb-4">
 
    <div className="w-1/3">
      <label className="block text-sm font-medium">Type</label>
      <input
        type="text"
        name="ammoType"
        value={formData.ammoType}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        placeholder="Type"
        required
      />
    </div>

    <div className="w-1/3">
      <label className="block text-sm font-medium">Calibre</label>
      <input
        type="text"
        name="ammoCalibre"
        value={formData.ammoCalibre}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        placeholder="Calibre"
        required
      />
    </div>

    <div className="w-1/3">
      <label className="block text-sm font-medium">Quantity</label>
      <input
        type="number"
        name="ammoQuantity"
        value={formData.ammoQuantity}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        placeholder="Quantity"
        required
      />
    </div>
  </div>
</div>


        {/* Reasons for Export */}
        <div className="mb-4">
          <label className="block text-sm font-medium">5. Reasons for requiring the exportation of arm/ammunition</label>
          <textarea
            name="reasonsForExport"
            value={formData.reasonsForExport}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Enter reasons for export"
            required
          />
        </div>

        {/* Export Destination */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">6. Town and Country to which exported</label>
          <div className="mb-4">
          <label className="block text-sm font-medium">Town</label>
          <input
            type="text"
            name="exportTown"
            value={formData.exportTown}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Country</label>
          <input
            type="text"
            name="exportCountry"
            value={formData.exportCountry}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
        </div>
        </div>

        <div className="mb-4">
  <label className="block text-sm font-medium">7. Declarations</label>
  
  {/* Declaration for applying for the permit */}
  <div className="flex items-center mb-2">
    <input
      type="checkbox"
      name="declaration"
      checked={formData.declaration}
      onChange={(e) => setFormData({ ...formData, declaration: e.target.checked })}
      className="mr-2"
      required
    />
    <span className="text-sm">
    I hereby apply for a permit to export arm/ammunition specified at paragraph 5 and I declare that the statements made above are true and complete in all respects.
    </span>
  </div>

  <div className="mb-4 mt-2">
  <label className="block text-sm font-medium">Clearing Station/Place</label>
  <select
    name="clearingStation"
    value={formData.clearingStation}
    onChange={handleChange}
    className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    required
  >
    <option value="">Select Clearing Station</option>
    <option value="station1">Clearing Station 1</option>
    <option value="station2">Clearing Station 2</option>
    <option value="station3">Clearing Station 3</option>
    {/* Add more stations as needed */}
  </select>
</div>

  {/* Declaration for consent to capture application data */}
  <div className="flex items-center">
    <input
      type="checkbox"
      name="dataConsent"
      checked={formData.dataConsent}
      onChange={(e) => setFormData({ ...formData, dataConsent: e.target.checked })}
      className="mr-2"
      required
    />
    <span className="text-sm mt-2">
      I consent to the collection and processing of my application data for the purpose of this permit application.
    </span>
  </div>
</div>

        {/* Submit Button */}
        <button type="submit" className="w-full p-2 bg-slate-500 text-white rounded-full hover:bg-blue-600 uppercase">
          Submit
        </button>
      </form>
    </div>
    <FormInfo9/>
    </div>
    </div>
    </div>
  );
}
