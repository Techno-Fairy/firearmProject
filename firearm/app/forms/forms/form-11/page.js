'use client';

import { useState } from 'react';
import { CreditCardIcon, BanknotesIcon, PhoneIcon, DocumentIcon } from '@heroicons/react/24/outline';
import FormInfo from "./FormInfo";
import LeftPanel from "../../../components/LeftPanel";
import Navbar from "../../../components/Navbar";

export default function Form11() {
  const [formData, setFormData] = useState({
    surname: '',
    idNumber: '',
    otherNames: '',
    residentialAddress: '',
    armsType: '',
    armsCalibre: '',
    armsSerialNo: '',
    makersName: '',
    acquisitionPermitNo: '',
    registrationCertNo: '',
    declaration: false,
    clearingStation: '',
    paymentMethod: '',
    paymentDetails: '',
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
    <div className="max-w-2xl mx-auto p-6 bg-slate-100 rounded-lg shadow-md ml-2">
      
    <div className="flex flex-col items-center mb-9">
              {/* Adding Icon above the heading */}
                <DocumentIcon className="h-8 w-8 text-slate-400 mb-4 transition-transform duration-200 ease-in-out transform hover:scale-110" />
                <h1 className="text-2xl font-semibold text-black text-center tracking-tight leading-tight">
                APPLICATION FOR REGISTRATION CERTIFICATE
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
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>

  <div className="w-1/2">
    <label className="block text-sm font-medium">ID Number</label>
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

        {/* Arms Information */}
        <div className="mb-4">
          <label className="block text-sm font-medium">4. Arms for which Certificate is required:</label>
          <div className="mb-4">
  <label className="block text-sm font-medium">Type</label>
  <input
    type="text"
    name="armsType"
    value={formData.armsType}
    onChange={handleChange}
    className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Type"
    required
  />
</div>

        </div>

        <div className="flex gap-4 mb-4">
  {/* Calibre Field */}
  <div className="w-1/2">
    <label className="block text-sm font-medium">Calibre</label>
    <input
      type="text"
      name="armsCalibre"
      value={formData.armsCalibre}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Calibre"
      required
    />
  </div>

  {/* Serial No. Field */}
  <div className="w-1/2">
    <label className="block text-sm font-medium">Serial No</label>
    <input
      type="text"
      name="serialNo"
      value={formData.armsSerialNo}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Serial number"
      required
    />
  </div>
</div>


        <div className="mb-4">
          <label className="block text-sm font-medium">Maker's Name</label>
          <input
            type="text"
            name="makersName"
            value={formData.makersName}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Maker's name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Acquisition Permit No.</label>
          <input
            type="text"
            name="acquisitionPermitNo"
            value={formData.acquisitionPermitNo}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Acquisition Permit Number"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Registration Certificate No. (if already registered)</label>
          <input
            type="text"
            name="registrationCertNo"
            value={formData.registrationCertNo}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Registration Certificate Number"
            required
          />
        </div>

        <div className="mb-4">
  <label className="block text-sm font-medium">5. Declarations</label>
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
    I hereby apply for a Registration Certificate in respect of the arms specified in paragraph 4 above, and I declare that the statements made above are true and complete in all respects.
    </span>
  </div>
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

 {/* Payment and Payment Details */}
 <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">Payment Options</h2>
          {/* Payment Method Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add Payment Option Code Here */}
            <div
              onClick={() => setFormData({ ...formData, paymentMethod: "creditCard" })}
              className="cursor-pointer p-4 text-center bg-white rounded-lg hover:bg-gray-200"
            >
              <CreditCardIcon className="h-6 w-6 mx-auto mb-3" />
              <span>Credit Card</span>
            </div>
            <div
              onClick={() => setFormData({ ...formData, paymentMethod: "bankTransfer" })}
              className="cursor-pointer p-4 text-center bg-white rounded-lg hover:bg-gray-200"
            >
              <BanknotesIcon className="h-6 w-6 mx-auto mb-3" />
              <span>Bank Transfer</span>
            </div>
            <div
              onClick={() => setFormData({ ...formData, paymentMethod: "mobilePayment" })}
              className="cursor-pointer p-4 text-center bg-white rounded-lg hover:bg-gray-200"
            >
              <PhoneIcon className="h-6 w-6 mx-auto mb-3" />
              <span>Mobile Payment</span>
            </div>
          </div>

          {/* Conditional Payment Details for Credit Card, Bank Transfer, or Mobile Payment */}
          {formData.paymentMethod && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {formData.paymentMethod === "creditCard"
                  ? "Credit Card Number"
                  : formData.paymentMethod === "bankTransfer"
                  ? "Bank Account Number"
                  : "Mobile Payment Number"}
              </label>
              <input
                type="text"
                name="paymentDetails"
                value={formData.paymentDetails}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={`Enter your ${
                  formData.paymentMethod === "creditCard"
                    ? "credit card"
                    : formData.paymentMethod === "bankTransfer"
                    ? "bank account"
                    : "mobile payment"
                } number`}
                required
              />
            </div>
          )}
        </div>

        {/* Consent for Data Processing */}
        <div className="flex items-center mt-7 mb-5">
          <input
            type="checkbox"
            name="dataConsent"
            checked={formData.dataConsent}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <span className="text-sm">
            I consent to the processing of my data for the purposes of this application.
          </span>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full p-2 bg-slate-500 text-white rounded-full hover:bg-blue-600 uppercase">
          Submit
        </button>
      </form>
    </div>

    {/* Info Component (on the right side) */}
    <FormInfo />
    </div>
</div>
</div>

  );
}
