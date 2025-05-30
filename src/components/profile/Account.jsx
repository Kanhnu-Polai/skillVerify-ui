import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const Account = () => {
  const countryOptions = useMemo(() => countryList().getData(), []);

  const [formData, setFormData] = useState({
    name: "Kanhu Polai",
    email: "kanhu@example.com",
    phone: "9876543210",
    location: { label: "India", value: "IN" } // default country object
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCountryChange = (selectedOption) => {
    setFormData(prev => ({ ...prev, location: selectedOption }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Profile updated!");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Account Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Select Your Country</label>
          <Select
            options={countryOptions}
            value={formData.location}
            onChange={handleCountryChange}
            className="rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Account;