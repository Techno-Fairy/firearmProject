'use client';

import { useState } from 'react';
import { CreditCardIcon, BanknotesIcon, PhoneIcon , DocumentIcon } from '@heroicons/react/24/outline';
import FormInfo6 from './FormInfo6';
import LeftPanel from "../../../components/LeftPanel";
import Navbar from "../../../components/Navbar";


export default function Form6() {
  const [formData, setFormData] = useState({
    surname: '',
    otherNames: '',
    postalAddress: '',
    age: '',
    nationality: '',
    passportNo: '',
    occupation: '',
    villageTown: '',
    plotNo: '',
    street: '',
    district: '',
    armsType: '',
    armsCalibre: '',
    armsSerialNo: '',
    armsMakersName: '',
    roundsRequired: '',
    reasonsForArms: '',
    importCountry: '',
    declaration: false,
    clearingStation: '',
    paymentMethod: '',
    paymentDetails: '',
    dataConsent: false,
    selectedReason: '',
    qouNumber: '',
    issuanceNumber: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleReasonChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, selectedReason: value });
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
                APPLICATION FOR TEMPORARY IMPORT PERMIT (NON-RESIDENT)
                </h1>
            </div>

      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="mb-4">
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

        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium">4. Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium">5. Nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mt-2"> Passport No.</label>
          <input
            type="text"
            name="passportNo"
            value={formData.passportNo}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">6. Occupation</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium">7. Village/Town</label>
            <input
              type="text"
              name="villageTown"
              value={formData.villageTown}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium">Plot No.</label>
            <input
              type="text"
              name="plotNo"
              value={formData.plotNo}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>
        </div>

        <div className="flex gap-4 mb-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium">Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
              required
            />
          </div>
        </div>

        {/* Arms Details */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">8. Particulars of arm for which temporary permit is required:</label>
          <div className="flex gap-4 mb-4">
            <div className="w-1/3">
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

            <div className="w-1/3">
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

            <div className="w-1/3">
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
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">Manufacturer's Name</label>
            <input
              type="text"
              name="armsMakersName"
              value={formData.armsMakersName}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="Manufacturer's name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium">No. of Rounds</label>
            <input
              type="number"
              name="roundsRequired"
              value={formData.roundsRequired}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="Number of rounds"
              required
            />
          </div>
        </div>

        {/* Reason for Permit */}
        <div className="mb-4">
          <label className="block text-sm font-medium">9. Reasons for requiring arms:</label>
          <select
            name="selectedReason"
            value={formData.selectedReason}
            onChange={handleReasonChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            <option value="">Select Reason</option>
            <option value="hunt">Hunting</option>
            <option value="other">Other</option>
          </select>
        </div>

        {formData.selectedReason === 'hunt' && (
          <div className="mb-4">
            <label className="block text-sm font-medium">Hunting Details</label>
            <div className="mb-4 flex space-x-4">
              <input
                type="text"
                name="qouNumber"
                value={formData.qouNumber}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="Quote Licence "
              />
              <input
                type="text"
                name="issuanceNumber"
                value={formData.issuanceNumber}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="Place of Issuance"
              />
            </div>
          </div>
        )}

        {formData.selectedReason === 'other' && (
          <div className="mb-4">
            <label className="block text-sm font-medium">Reason</label>
            <textarea
              name="reasonsForArms"
              value={formData.reasonsForArms}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>
)}

        <div className="mb-4">
          <label className="block text-sm font-medium">10. From which country it is intended to import</label>
          <input
            type="text"
            name="importCountry"
            value={formData.importCountry}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">11. Declarations</label>
          {/* Declaration for applying for the permit */}
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="declaration"
              checked={formData.declaration}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <span className="text-sm mt-2">
              I hereby apply for a temporary permit to import the arms specified in paragraph 8, and I declare that the statements made above are true and complete in all respects.
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
        <div className="flex items-center mb-6 mt-4">
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

        <button
          type="submit"
          className="w-full p-2 bg-slate-500 text-white rounded-full hover:bg-blue-600 uppercase"
        >
          Submit
        </button>
      </form>
    </div>
    <FormInfo6/>
    </div>
    </div>
    </div>
  );
}
