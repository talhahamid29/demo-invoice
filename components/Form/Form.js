import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      country: "",
      language: "",
      birthDate: "",
      phone: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
      const newErrors = {};

      if (!formData.username.trim()) {
        newErrors.username = "Username is required";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      }

      if (!formData.password.trim()) {
        newErrors.password = "Password is required";
      }

      if (formData.password.trim() !== formData.confirmPassword.trim()) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      if (!formData.firstName.trim()) {
        newErrors.firstName = "First Name is required";
      }

      if (!formData.lastName.trim()) {
        newErrors.firstName = "Last Name is required";
      }
      
      if (!formData.birthDate.trim()) {
        newErrors.firstName = "Birth Date is required";
      }

      if (!formData.phone.trim()) {
        newErrors.firstName = "Phone  is required";
      }

      setErrors(newErrors);

      
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
        console.log("Form submitted:", formData);
      } else {
        console.log("Form validation failed");
      }
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100"
      style={{ marginTop: 10 }}
    >
      <div
        className="bg-white p-8 rounded shadow-md w-full md:max-w-5xl"
        style={{ marginTop: 50 }}
      >
        <form
          className="max-w-md grid grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-3" style={{ width: 400 }}>
            <p style={{ fontFamily: "sans-serif" }}>1.Account Details</p>
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="talhahamid"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-3" style={{ width: 400, marginLeft: 200 }}>
            <br />
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="talha.syed@oxcytech.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-3" style={{ width: 400 }}>
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-3" style={{ width: 400, marginLeft: 200 }}>
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-3" style={{ width: 400 }}>
            <hr />
            <p style={{ fontFamily: "sans-serif" }}>2.Personal Info</p>
            <label
              htmlFor="firstname"
              className="block text-gray-700 font-semibold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Talha"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-3" style={{ width: 400, marginLeft: 200 }}>
            <hr />
            <br />
            <label
              htmlFor="lastname"
              className="block text-gray-700 font-semibold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Syed"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-3" style={{ width: 400 }}>
            <label
              htmlFor="country"
              className="block text-gray-700 font-semibold mb-2"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-3" style={{ width: 400, marginLeft: 200 }}>
            <label
              htmlFor="language"
              className="block text-gray-700 font-semibold mb-2"
            >
              Language
            </label>
            <input
              type="text"
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-3" style={{ width: 400 }}>
            <label
              htmlFor="birthdate"
              className="block text-gray-700 font-semibold mb-2"
            >
              Birth Date
            </label>
            <input
              type="text"
              id="birthDate"
              name="birthDate"
              placeholder="MM-DD-YYYY"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-3" style={{ width: 400, marginLeft: 200 }}>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="123-456-7890"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex justify-between col-span-2">
            <button
              type="submit"
              style={{ width: "calc(50% - 0.5rem)" }}
              className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
            <button
              type="reset"
              style={{ width: "calc(50% - 0.5rem)" }}
              className="bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
