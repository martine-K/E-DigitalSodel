import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex flex-col w-full items-end p-4 justify-between">
        <div className="fixed flex w-full h-[59px] top-0 left-0 bg-[#26688e]"></div>
        <div className="fixed flex flex-col w-full h-[48px] items-end top-[59px] left-0 bg-sky-500">
          <h6 className='text-right p-5'>
            You are not logged in?
          </h6>
        </div>
      </nav>
    </>
  )
}

export default Navbar;