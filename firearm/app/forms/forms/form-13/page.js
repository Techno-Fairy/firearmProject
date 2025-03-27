"use client";
import { useState } from "react";
import { CreditCardIcon, BanknotesIcon, PhoneIcon, DocumentIcon } from "@heroicons/react/24/outline";
import FormInfo13 from './FormInfo13';
import LeftPanel from "../../../components/LeftPanel";
import Navbar from "../../../components/Navbar";

export default function Form13() {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    businessEnityName: '',
    age: '',
    townCity: '',
    businessAddress: '',
    businessName: '',
    businessType: '',
    district: '',
    businessOwnership: false,
    paymentMethod: '',
    paymentDetails: '',
    dataConsent: false,
  });

  const [isRenewal, setIsRenewal] = useState(false); // To toggle between Renewal and New Registration

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Submitted:", formData);
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
                APPLICATION FOR ARMS/AMMUNITION DEALER'S LICENCE OR ITS RENEWAL
                </h1>
            </div>

      {/* Toggle between Renewal and New Registration with a cool toggle effect */}
      <div className="mb-6 flex justify-center">
        <div
          className={`flex items-center space-x-10 p-4 bg-slate-100 rounded-full border-2 border-gray-300 shadow-md transition-all duration-300 ${
            isRenewal ? "justify-end" : "justify-start"
          }`}
          style={{ maxWidth: "3000px" }}
        >
          <button
            onClick={() => setIsRenewal(false)}
            className={`p-2 px-4 rounded-full text-sm font-medium ${
              !isRenewal ? "bg-slate-500 text-white" : "bg-white text-blue-500"
            } transition-colors duration-300`}
          >
            New Registration
          </button>
          <button
            onClick={() => setIsRenewal(true)}
            className={`p-2 px-4 rounded-full text-sm font-medium ${
              isRenewal ? "bg-slate-500 text-white" : "bg-white text-blue-500"
            } transition-colors duration-300`}
          >
            Renewal
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="mb-4">
          <label className="block text-sm font-medium">1. Full Name</label>
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

        {/* Conditional Field: Business/Entity Name for New Registration only */}

          <div className="mb-4">
            <label className="block text-sm font-medium">Business/Entity Name</label>
            <input
              type="text"
              name="businessEntityName"
              value={formData.businessEnityName}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

<div className="mb-4">
          <label className="block text-sm font-medium">Age </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/*
  Conditional Field: OR Number for Renewal only
  {isRenewal && (
    <div className="mb-4">
      <label className="block text-sm font-medium">Official Receipt (OR) Number</label>
      <input
        type="text"
        name="orNumber"
        value={formData.orNumber}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="OR Number"
        required
      />
    </div>
  )}
*/}

        {/* Business/Entity Information */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Town/City</label>
          <input
            type="text"
            name="townCity"
            value={formData.townCity}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* District */}
        <div className="mb-4">
          <label className="block text-sm font-medium">District</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium">2.</label>
          <input
            type="checkbox"
            name="businessOwnership"
            checked={formData.businessOwnership}
            onChange={(e) => setFormData({ ...formData, businessOwnership: e.target.checked })}
            className="mr-2"
            required
          />
          <span className="text-sm">
            I am the sole owner/agent of the business.
          </span>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">3.Name and address of business </label>

          <div className="mb-4">
            <label className="block text-sm font-medium">Name of business </label>
          </div>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter business address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Address of business </label>
          <input
            type="text"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter business address"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Business Type (Wholesale or Retail)</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Business Type</option>
            <option value="wholesale">Wholesale</option>
            <option value="retail">Retail</option>
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
        <div className="flex items-center mt-7">
          <input
            type="checkbox"
            name="dataConsent"
            checked={formData.dataConsent}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <span className="text-sm mb-4 mt-4">
            I consent to the collection and processing of my application data for the purpose of this permit application.
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-slate-500 text-white rounded-full hover:bg-blue-600 uppercase"
        >
          Submit
        </button>
      </form>
    </div>
    <FormInfo13/>
    </div>
    </div></div>
  );
}
