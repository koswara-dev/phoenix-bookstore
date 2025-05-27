"use client";

import Image from 'next/image';
import { useState } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { settings } from '../settings';

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100" style={{ backgroundImage: `url('/static/bg_login.jpg')`, backgroundSize: 'cover' }}>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <Image
          src={settings.logo}
          alt="Bookstore Logo"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
          className="mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <span
              className="text-gray-500 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "Hide" : "Show"}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Register
            <FaUserPlus className="inline-block ml-2" />
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
}
