import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mt-5'>
      <div className="bg-[#ad6a6ac0] items-center w-full p-3 md:p-5 flex flex-col md:flex-row md:justify-center md:gap-12">
        <div className='flex flex-col items-center md:flex-row md:items-start md:gap-12 w-full'>
          <div className='flex flex-col items-center md:items-start p-5'>
            <h1 className='text-[#FE8900] text-[18px] font-bold'>Digital Services</h1>
            <div className='flex flex-col text-[#000000]'>
              <Link href='/services' className='hover:text-[#2dabb1]'>KRA PIN & Nil Return</Link>
              <Link href='/services' className='hover:text-[#2dabb1]'>Project Proposal</Link>
              <Link href='/services' className='hover:text-[#2dabb1]'>Printing Services</Link>
              <Link href='/services' className='hover:text-[#2dabb1]'>Laptop Repairs</Link>
            </div>
          </div>
          <div className='flex flex-col items-center md:items-start p-5'>
            <h1 className='text-[#FE8900] text-[18px] font-bold'>Exam Services</h1>
            <div className='flex flex-col text-[#000000]'>
              <Link href='/services' className='hover:text-[#2dabb1]'>Exams and Assignments</Link>
              <Link href='/services' className='hover:text-[#2dabb1]'>Past Papers</Link>
              <Link href='/services' className='hover:text-[#2dabb1]'>Lab Coat</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;