
'use client';

import { useState } from 'react';
import { CreditCardIcon, BanknotesIcon, PhoneIcon, DocumentIcon } from '@heroicons/react/24/outline';
import FormInfo17 from './FormInfo17';
import LeftPanel from "../../../components/LeftPanel";
import Navbar from "../../../components/Navbar";

export default function Form17() {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    postalAddress: '',
    registrationCertificateNo: '',
    calibre: '',
    serialNo: '',
    year: '',
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

    <div className="max-w-2xl mx-auto p-6 bg-slate-100 rounded-lg shadow-md ml-64">
      
      <div className="flex flex-col items-center mb-9">
              {/* Adding Icon above the heading */}
                <DocumentIcon className="h-8 w-8 text-slate-400 mb-4 transition-transform duration-200 ease-in-out transform hover:scale-110" />
                <h1 className="text-2xl font-semibold text-black text-center tracking-tight leading-tight">
                APPLICATION FOR ARMS LICENCE
                </h1>
            </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}

        
        <div className="mb-4">
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
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

        <div className="mb-4">
          <label className="block text-sm font-medium">Postal Address</label>
          <input
            type="text"
            name="postalAddress"
            value={formData.postalAddress}
            onChange={handleChange}
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
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Registration Certificate Number"
            required
          />
        </div>

        <div className="mb-4 flex space-x-4">
  <div className="flex-1">
    <label className="block text-sm font-medium">Calibre</label>
    <input
      type="text"
      name="calibre"
      value={formData.calibre}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Calibre"
      required
    />
  </div>

  <div className="flex-1">
    <label className="block text-sm font-medium">Serial No.</label>
    <input
      type="text"
      name="serialNo"
      value={formData.serialNo}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Serial Number"
      required
    />
  </div>
</div>


        {/* Year of Licence */}
<div className="mb-4">
  <label className="block text-sm font-medium">Year of Arms Licence/Renewal </label>
  <select
    name="year"
    value={formData.year}
    onChange={handleChange}
    className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  >
    <option value="">Select Year</option>
    {[...Array(20)].map((_, index) => {
      const year = 2025 + index; // Start from 2025
      return (
        <option key={year} value={year}>
          {year}
        </option>
      );
    })}
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
        
        {/* Declaration for consent to capture application data */}
        <div className="flex items-center mt-3">
          <input
            type="checkbox"
            name="dataConsent"
            checked={formData.dataConsent}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <span className="text-sm mt-4 mb-4">
            I consent to the collection and processing of my application data for the purpose of this permit application.
          </span>
        </div>

          

        {/* Submit Button */}
        <button type="submit" className="w-full p-2 bg-slate-500 text-white rounded-full hover:bg-blue-600 uppercase">Submit</button>
      </form>
    </div>
    <FormInfo17/>
    </div>
    </div>
    </div>
  );
}
