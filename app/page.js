import React from "react";
import NavLayout from "./components/NavLayout";
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image'; // Import Image from next/image

const Homepage = () => {
  return (
    <NavLayout>
      <div className="flex flex-col items-center min-h-screen py-2bg-gray-300 justify-center ">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-1.5"><p>Sign In</p></div>
          <div className="w-2/5 bg-green-300 text-white rounded-tr-2xl rounded-br-2xl"><p>Sign Up into your account</p></div>

          </div>

        </main>
        
      </div>
    </NavLayout>
  );
};

export default Homepage;