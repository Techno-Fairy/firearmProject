'use client';

import { useState } from 'react';
import { DocumentIcon} from '@heroicons/react/24/outline';
import FormInfo2 from './FormInfo2';
import LeftPanel from "../../../components/LeftPanel";
import Navbar from "../../../components/Navbar";

export default function Form2() {
  const [formData, setFormData] = useState({
    surname: '',
    idNumber: '',
    otherNames: '',
    residentialAddress: '',
    armsType: '',
    armsCalibre: '',
    regCertNumber: '',
    quantity: '',
    dealerName: '',
    dealerAddress: '',
    date: '',
    signature: '',
    declaration: false,
    clearingStation: '',
    dataConsent: false,
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

    <div className="max-w-2xl mx-auto p-6 bg-slate-100 rounded-lg shadow-md ml-64">
      
      <div className="flex flex-col items-center mb-9">
              {/* Adding Icon above the heading */}
                <DocumentIcon className="h-8 w-8 text-slate-400 mb-4 transition-transform duration-200 ease-in-out transform hover:scale-110" />
                <h1 className="text-2xl font-semibold text-black text-center tracking-tight leading-tight">
                APPLICATION FOR PERMIT TO IMPORT AMMUNITION (RESIDENT)
                </h1>
            </div>

      <form onSubmit={handleSubmit}>
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
    <label className="block text-sm font-medium">ID Number/Passport No.</label>
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
          <label className="block text-sm font-medium">3. Residential Address</label>
          <input
            type="text"
            name="residentialAddress"
            value={formData.residentialAddress}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
        </div>

        <div className="mb-4">
  <label className="block text-sm font-medium mb-2">4. Arms for which ammunition is required:</label>
  
  <div className="flex space-x-4">
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
        name="calibre"
        value={formData.armsCalibre}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        placeholder="Calibre"
        required
      />
    </div>
  </div>

  <div className="mt-2">
    <label className="block text-sm font-medium">
      Registration Certificate No / Arms Dealer License No.
    </label>
    <input
      type="text"
      name="regCertNumber"
      value={formData.regCertNumber}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
      placeholder="Registration Certificate or License No."
      required
    />
  </div>
</div>



        <div className="mb-4">
          <label className="block text-sm font-medium">5. Quantity of ammunition required</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Quantity (rounds)"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">6. Name and address of person/dealer from whom ammunition is to be import the ammunition:</label>
          <div className="mt-2">
    <label className="block text-sm font-medium">
    Person/Dealer Name
    </label>
          <input
            type="text"
            name="dealerName"
            value={formData.dealerName}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Arms Dealer's Name"
            required
          />
          </div>
          <div className="mt-2">
    <label className="block text-sm font-medium">
    Person/Dealer Address
    </label>
          <textarea
            name="dealerAddress"
            value={formData.dealerAddress}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Arms Dealer's Address"
            required
          />
        </div>
        </div>

        <div className="mb-4">
  <label className="block text-sm font-medium mb-2">7. Declarations</label>
  
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
    I hereby apply for a permit to import the ammunition specified in paragraphs 4 and 5 and I declare that the statements made are true and correct in all respects.
    </span>
  </div>

  <div className="mb-4">
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
    <span className="text-sm">
      I consent to the collection and processing of my application data for the purpose of this permit application.
    </span>
  </div>
</div>


        <button type="submit" className="w-full p-2 bg-slate-500 text-white rounded-full hover:bg-blue-600 uppercase">Submit</button>
      </form>
    </div>
    <FormInfo2/>
    </div>
    </div>
    </div>

  );
}
