"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLayout from "./components/NavLayout";
import { IoIosArrowBack } from 'react-icons/io';
import { FcGoogle } from "react-icons/fc";
import Image from "next/image"; // Import Image from next/image

// Import required icons from react-icons
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Home() {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <NavLayout>
      <main className="py-10 judtify-center items-center mt-5">
        <div className=" h=screen flex flex-col justify-center items-center">
          <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
            <h1 className="text-center text-black font-semibold text-5xl rounded-t-xl m-0 py-4">Sign In</h1>
            <form className="p-6">
              
              {/* Username Label and Input */}
              <label htmlFor="username" className="block text-black text-lg font-medium mb-2">
                UserName
              </label>
              <input 
                type="text"
                id="username"
                name="username"
                placeholder="UserName"
                className="py-2 px-3 w-full text-black text-lg font-light outline-none"
              />
              
              {/* Password Label and Input */}
              <label htmlFor="password" className="block text-black text-lg font-medium mt-5 mb-2">
                Password
              </label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="py-2 px-3 w-full text-black text-lg font-light outline-none"
                />
                <button 
                  type="button" 
                  onClick={togglePasswordVisibility} 
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              
              <div className="flex mt-5 justify-between items-center">
                <Link href="/SignUp" // Corrected href to match your directory structure
                  className="text-black cursor-pointer transition hover:text-black"
                >
                  Not Yet Registered?
                </Link>
                <button type="submit" className="bg-black text-white font-medium py-2 px-8 transition hover:text-blue">
                  <Link href="/services">
                  Sign In
                  </Link>
                </button>
              </div>
            </form>
          </aside>
        </div>
      </main>
    </NavLayout>
  );
}
