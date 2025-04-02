'use client';

import { useState } from 'react';
import { CreditCardIcon, BanknotesIcon, PhoneIcon , DocumentIcon } from '@heroicons/react/24/outline';
import FormInfo5 from './FormInfo5';
import LeftPanel from "../../../components/LeftPanel";
import Navbar from "../../../components/Navbar";


export default function Form5() {
  const [formData, setFormData] = useState({
    surname: '',
    idNumber: '',
    otherNames: '',
    residentialAddress: '',
    age: '',
    nationality: '',
    occupation: '',
    employerName: '',
    employerAddress: '',
    village: '',
    ward: '',
    headman: '',
    district: '',
    town: '',
    street: '',
    plotNumber: '',
    residencePermitNumber: '',
    armsOwner: '',
    armsType: '',
    armsCalibre: '',
    armsMakersName: '',
    armsMakersIdNumber: '',
    armsRegCertNo: '',
    roundsRequired: '',
    ammoCalibre: '',
    reasonsForPossession: '',
    periodRequired: '',
    declaration: false,
    dataConsent: false,
    paymentMethod: '',
    paymentDetails: ''
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
                APPLICATION FOR TEMPORARY PERMIT TO POSSESS ARMS OR AMMUNITION (RESIDENT)
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
      name="residentPermitNo"
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

        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* Age Field */}
  <div>
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

  {/* Nationality Field */}
  <div>
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

        {/* Employer Details */}
        <div className="mb-4">
        <label className="block text-sm font-medium mb-2">7.	Other personal information where appropriate:</label>
        <div className="mb-4 flex space-x-4">
  <div className="w-1/2">
    <label className="block text-sm font-medium">Employer's Name</label>
    <input
      type="text"
      name="employerName"
      value={formData.employerName}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  </div>

  <div className="w-1/2">
    <label className="block text-sm font-medium">Employer's Address</label>
    <input
      name="employerAddress"
      value={formData.employerAddress}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  </div>
</div>
<div className="mb-4 grid grid-cols-2 gap-4">
  <div>
    <label className="block text-sm font-medium">Village</label>
    <input
      type="text"
      name="village"
      value={formData.village}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">Ward</label>
    <input
      type="text"
      name="ward"
      value={formData.ward}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">Headman</label>
    <input
      type="text"
      name="headman"
      value={formData.headman}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">District</label>
    <input
      type="text"
      name="district"
      value={formData.district}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">Town</label>
    <input
      type="text"
      name="town"
      value={formData.town}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">Street</label>
    <input
      type="text"
      name="street"
      value={formData.street}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">Plot No.</label>
    <input
      type="text"
      name="plotNumber"
      value={formData.plotNumber}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">Residence Permit No.</label>
    <input
      type="text"
      name="residencePermitNumber"
      value={formData.residencePermitNumber}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    />
  </div>
</div>
</div>
        {/* Arms Details */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">8. Arms for which permit is required:</label>
          <div className="mb-4">
    <label className="block text-sm font-medium">Registered owner of arms</label>
          <input
            type="text"
            name="armsOwner"
            value={formData.armsOwner}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
        </div>
        

        <div className="mb-4 flex space-x-4">
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


        <div className="mb-4">
          <label className="block text-sm font-medium">Maker's Name</label>
          <input
            type="text"
            name="armsMakersName"
            value={formData.armsMakersName}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Maker's name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Maker's ID No.</label>
          <input
            type="text"
            name="armsMakersName"
            value={formData.armsMakersIdNumber}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Maker's identification number"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Registration Certificate No.</label>
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

        {/* Ammunition Details */}
        <div className="mb-4">
  <label className="block text-sm font-medium mb-2">9. Ammunition Required</label>
  <div className="flex space-x-4">
    <div className="w-1/2">
      <label className="block text-sm font-medium">No. of Rounds</label>
      <input
        type="text"
        name="roundsRequired"
        value={formData.roundsRequired}
        onChange={handleChange}
        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        placeholder="Number of rounds"
        required
      />
    </div>

    <div className="w-1/2">
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
  </div>
</div>



        {/* Reasons for Possession */}
        <div className="mb-4">
          <label className="block text-sm font-medium">10. Reasons for requiring temporary possession of arms</label>
          <textarea
            name="reasonsForPossession"
            value={formData.reasonsForPossession}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            required
          />
        </div>

        {/* Period Required */}
        <div className="mb-4">
          <label className="block text-sm font-medium">11. Period for which arms are required</label>
          <input
            type="text"
            name="periodRequired"
            value={formData.periodRequired}
            onChange={handleChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
            placeholder="Period for possession"
            required
          />
        </div>

        <div className="mb-4">
  <label className="block text-sm font-medium">12. Declarations</label>
  
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
      I hereby apply for a permit to acquire the arms specified in paragraph 8 and I declare that the statements made above are true and complete in all respects.
    </span>
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

         {/* Declaration for consent to capture application data */}
  <div className="flex items-center mt-5 mb-5">
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

        {/* Submit Button */}
        <button type="submit" className="w-full p-2 bg-slate-500 text-white rounded-full hover:bg-blue-600 uppercase">
          Submit
        </button>
      </form>
    </div>
    <FormInfo5/>
    </div>
    </div>
    </div>
    
  );
}
