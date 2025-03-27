'use client';

import { useState } from 'react';
import { DocumentIcon} from '@heroicons/react/24/outline';
import FormInfo1 from "./FormInfo1";
import LeftPanel from "../../../components/LeftPanel";
import Navbar from "../../../components/Navbar";

export default function Form1() {
  const [formData, setFormData] = useState({
    surname: '',
    idNumber: '',
    otherNames: '',
    residentialAddress: '',
    postalAddress: '',
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
    armsType: '',
    armsCalibre: '',
    makersName: '',
    identificationNumber: '',
    regCertNumber: '',
    reasonsForArms: '',
    armsDealerName: '',
    armsDealerAddress: '',
    armsPossessed: '',
    armsDetails: [],
    selectedReason: '', // Holds the selected reason option
    stockNumber: '',
    ranchesNumber: '',
    boreholesNumber: '',
    clearingStation: '',
    declaration: false,
    dataConsent: false,
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArmsDetailsChange = (e, index) => {
    const { name, value } = e.target;
    const newArmsDetails = [...formData.armsDetails];
    newArmsDetails[index] = { ...newArmsDetails[index], [name]: value };
    setFormData({ ...formData, armsDetails: newArmsDetails });
  };

  const handleReasonChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, selectedReason: value });
  };

  const addArmsDetail = () => {
    setFormData({ ...formData, armsDetails: [...formData.armsDetails, { armsCertNo: '', type: '', calibre: '', idNo: '' }] });
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
          APPLICATION FOR PERMIT TO ACQUIRE FIREARM
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
    <label className="block text-sm font-medium">ID Number</label>
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
          <label className="block text-sm font-medium mb-2">3. Address:</label>
          <div className="mb-4 flex space-x-4">
  <div className="w-1/2">
    <label className="block text-sm font-medium">Residential</label>
    <input
      type="text"
      name="residentialAddress"
      value={formData.residentialAddress}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
      required
    />
  </div>

  <div className="w-1/2">
    <label className="block text-sm font-medium">Postal</label>
    <input
      type="text"
      name="postalAddress"
      value={formData.postalAddress}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
      required
    />
  </div>
</div>
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


        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">8. Arms for which permit is required:</label>
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
    className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    placeholder="Enter maker's name"
  />
</div>

<div className="mb-4">
  <label className="block text-sm font-medium">Identification Number (if known)</label>
  <input
    type="text"
    name="identificationNumber"
    value={formData.identificationNumber}
    onChange={handleChange}
    className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    placeholder="Enter identification number"
  />
</div>


<div className="mb-4">
  <label className="block text-sm font-medium">Registration Certificate Number(if already registered)</label>
  <input
    type="text"
    name="regCertNumber"
    value={formData.regCertNumber}
    onChange={handleChange}
    className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
    placeholder="Registration Certificate Number"
  />
</div>

        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">9. Reasons for requiring arms:</label>
          <select
            name="selectedReason"
            value={formData.selectedReason}
            onChange={handleReasonChange}
            className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            <option value="">Select Reason</option>
            <option value="stockProtection">Stock Protection</option>
            <option value="other">Other</option>
          </select>
        </div>

        {formData.selectedReason === 'stockProtection' && (
          <div className="mb-4">
            <label className="block text-sm font-medium">Stock Protection Details</label>
            <div className="mb-4 flex space-x-4">
              <input
                type="number"
                name="stockNumber"
                value={formData.stockNumber}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="Number of Stock"
              />
              <input
                type="number"
                name="ranchesNumber"
                value={formData.ranchesNumber}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="Number of Ranches"
              />
              <input
                type="number"
                name="boreholesNumber"
                value={formData.boreholesNumber}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder="Number of Boreholes"
              />
            </div>
          </div>
        )}

        {formData.selectedReason === 'other' && (
          <div className="mb-4">
            <label className="block text-sm font-medium">Other Reason</label>
            <textarea
              name="reasonsForArms"
              value={formData.reasonsForArms}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
              placeholder="Enter your reason"
            />
          </div>
)}

<div className="mb-4">
  <label className="block text-sm font-medium mb-2">10. Arms Dealer from whom it is intended to acquire the arms: </label>
  
  <div className="mb-2">
    <label className="block text-sm font-medium">Person/Dealer Name</label>
    <input
      type="text"
      name="armsDealerName"
      value={formData.armsDealerName}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
      placeholder="Arms Dealer Name"
    />
  </div>

  <div>
    <label className="block text-sm font-medium">Person/Dealer Address</label>
    <input
      type="text"
      name="armsDealerAddress"
      value={formData.armsDealerAddress}
      onChange={handleChange}
      className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
      placeholder="Arms Dealer Address"
    />
  </div>
</div>


<div className="mb-4">
  <label className="block text-sm font-medium">11. Arms possessed at date of application</label>
  
  {/* Table for displaying arms details */}
  <table className="min-w-full table-auto border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border border-gray-300 p-2">Arms Certificate No.</th>
        <th className="border border-gray-300 p-2">Type</th>
        <th className="border border-gray-300 p-2">Calibre</th>
        <th className="border border-gray-300 p-2">Identification No.</th>
      </tr>
    </thead>
    <tbody>
      {formData.armsDetails.map((detail, index) => (
        <tr key={index}>
          <td className="border border-gray-300 p-2">
            <input
              type="text"
              name="armsCertNo"
              value={detail.armsCertNo}
              onChange={(e) => handleArmsDetailsChange(e, index)}
              className="w-full p-2 border rounded"
              placeholder="Arms Certificate No."
            />
          </td>
          <td className="border border-gray-300 p-2">
            <input
              type="text"
              name="type"
              value={detail.type}
              onChange={(e) => handleArmsDetailsChange(e, index)}
              className="w-full p-2 border rounded"
              placeholder="Type"
            />
          </td>
          <td className="border border-gray-300 p-2">
            <input
              type="text"
              name="calibre"
              value={detail.calibre}
              onChange={(e) => handleArmsDetailsChange(e, index)}
              className="w-full p-2 border rounded"
              placeholder="Calibre"
            />
          </td>
          <td className="border border-gray-300 p-2">
            <input
              type="text"
              name="idNo"
              value={detail.idNo}
              onChange={(e) => handleArmsDetailsChange(e, index)}
              className="w-full p-2 border rounded"
              placeholder="Identification No."
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>

  {/* Button to add more rows */}
  <button type="button" onClick={addArmsDetail} className="text-blue-700 mt-2">
    + Add another arms detail
  </button>
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

  <div className="mb-5">
  <label className="block text-sm font-medium mb-2">Clearing Station/Place</label>
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
    <FormInfo1/>
    </div>
    </div>
    </div>
  );
}


