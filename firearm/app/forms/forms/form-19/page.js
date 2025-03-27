'use client';

import { DocumentIcon} from '@heroicons/react/24/outline';
import { useState } from 'react';
import FormInfo19 from './FormInfo19';
import LeftPanel from "../../../components/LeftPanel";
import Navbar from "../../../components/Navbar";

export default function Form19() {
  const [formData, setFormData] = useState({
    surname: '',
    idNumber: '',
    otherNames: '',
    residentialAddress: '',
    age: '',
    nationality: '',
    armsType: '',
    armsCalibre: '',
    armsSerialNo: '',
    manufacturersName: '',
    registrationCertificateNo: '',
    declaration: false,
    dataConsent: false,
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    }
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

            <div className="flex flex-col items-center mb-9 ">
              {/* Adding Icon above the heading */}
                <DocumentIcon className="w-8 h-8 text-slate-400 mb-4 transition-transform duration-200 ease-in-out transform hover:scale-110" />
                <h1 className="text-2xl font-semibold text-black text-center tracking-tight leading-tight">
                APPLICATION FOR A CERTIFICATE OR EXEMPTION
                </h1>
            </div>


      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium">1. Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium">ID/Passport No.</label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4 flex justify-between">
          <div className="w-1/2 pr-2">
            <label className="block text-sm font-medium">4. Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="w-1/2 pl-2">
            <label className="block text-sm font-medium">5. Nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">6. Arms for which certificate is required:</label>
          <div className="flex justify-between">
            <div className="w-1/3 pr-2">
              <label className="block text-sm font-medium">Type</label>
              <input
                type="text"
                name="armsType"
                value={formData.armsType}
                onChange={handleChange}
                placeholder="Type"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="w-1/3 px-2">
              <label className="block text-sm font-medium">Calibre</label>
              <input
                type="text"
                name="armsCalibre"
                value={formData.armsCalibre}
                onChange={handleChange}
                placeholder="Calibre"
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="w-1/3 pl-2">
              <label className="block text-sm font-medium">Serial No.</label>
              <input
                type="text"
                name="armsSerialNo"
                value={formData.armsSerialNo}
                onChange={handleChange}
                placeholder="Serial Number "
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Manufacturer's Name</label>
          <input
            type="text"
            name="manufacturersName"
            value={formData.manufacturersName}
            onChange={handleChange}
            placeholder="Manufacturer's Name"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Registration Certificate No.</label>
          <input
            type="text"
            name="registrationCertificateNo"
            value={formData.registrationCertificateNo}
            onChange={handleChange}
            placeholder="Registration Certificate Number"
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

      
{/* Attach Document */}
<div className="mb-4">
  <label className="block text-sm font-medium">Attachment:Registration Certificate</label>
  
  {/* File Input */}
  <div className="flex items-center space-x-4">
    <label
      htmlFor="file-upload"
      className="flex items-center space-x-2 cursor-pointer border-2 border-gray-300 p-3 rounded-md hover:border-blue-500 transition"
    >
      <DocumentIcon className="h-6 w-6 text-gray-600" />
      <span className="text-sm text-gray-600">Click to upload</span>
    </label>
    <input
      type="file"
      name="attachment"
      id="file-upload"
      onChange={handleChange}
      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"  // Limiting file types (customize as needed)
      className="hidden"
      required
    />
  </div>

  {/* File Name Display */}
  {formData.attachment && (
    <div className="mt-2 text-sm text-gray-600 flex items-center">
      <DocumentIcon className="h-5 w-5 text-gray-500 mr-2" />
      <span>{formData.attachment.name}</span>

      {/* Clear Button */}
      <button
        type="button"
        onClick={() => setFormData({ ...formData, attachment: null })}
        className="ml-2 text-red-500 hover:text-red-700"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  )}

  {/* File Size Warning */}
  {formData.attachment && formData.attachment.size > 5000000 && ( // Limit to 5MB (5000000 bytes)
    <div className="mt-2 text-sm text-red-500">
      File size exceeds the 5MB limit. Please upload a smaller file.
    </div>
  )}

  {/* Drag and Drop Area (Optional) */}
  <div className="mt-4 text-sm text-gray-500 border-2 border-dashed p-4 rounded-md hover:border-blue-500 cursor-pointer">
    <p>Drag and drop your file here, or click to browse.</p>
  </div>
</div>

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
          <span className="text-sm mt-4">
            I hereby declare that the arm(s) to which this application relates is, through reason of age/wear and tear, incapable of being fired without substantial repair and apply for a certificate of exemption in respect of such arms accordingly.
          </span>
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
          <span className="text-sm mt-4">
            I consent to the collection and processing of my application data for the purpose of this permit application.
          </span>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full p-2 bg-slate-500 text-white rounded-full hover:bg-blue-600 uppercase">Submit</button>
      </form>
    </div>
    <FormInfo19/>
    </div>
    </div>
    </div>
  );
}
