import React from 'react'
import Link from "next/link";
import NavLayout from '../components/NavLayout';


 function page() {
  return (
    <NavLayout>

      <main className="mt-5 item-center justify-center py-10 ">
        <div className="h=screen flex flex-col justify-center items-center">
          <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
          <h1 className="text-center text-black font-semibold text-5xl rounded-t-xl m-0 py-4">Sign Up</h1>
          <form className="p-6">
            <input 
            type="text"
            name=""
            placeholder="UserName"
            className="py-2 px-3 w-full text-black text-lg font-light outline-none"
            />
            <input 
            type="text"
            name=""
            placeholder="Email address"
            className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-5"
            />
            <input 
            type="text"
            name=""
            placeholder="Password"
            className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-5"
            />
            <input 
            type="text"
            name=""
            placeholder="Confirm Password"
            className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-5"
            />
            <div className="flex mt-5 justify-between items-center">
              <Link href="/"
              className="text-black cursor-pointer transition hover:text-black">
                Already Registered?</Link>
              <button type="submit" className="bg-black text-white font-medium py-2 px-8 transition hover:text-white">
              <Link href="/">Sign Up</Link></button>
            </div>
          </form>
          </aside>
        </div>
      </main>
      </NavLayout>
      
  )
}

export default page
