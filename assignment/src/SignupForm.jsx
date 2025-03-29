import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    confirmPassword: "",
    name: "",
    country: "India",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Signup Successful!\nUser ID: ${formData.userId}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">User ID</label>
          <input
            type="text"
            name="userId"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country</label>
          <select
            name="country"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-green-400"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
  