import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='mt-5 h-auto py-7'>
      <div className="absolute h-[4px] w-full bg-blue-300"></div>
      <div className="bg-white items-center w-full p-3 md:p-5 flex flex-col md:flex-row md:justify-center md:gap-12">
        <div className='flex flex-col md:flex-row justify-between items-center w-3/4 md:items-start md:gap-12'>
          
          <div className='flex flex-col items-center md:items-center justify-between md:justify-start'>
            <h1 className='text-[#272e5f] text-[18px] font-bold text-center md:text-left mb-5'>Sodella</h1>
          </div>
          <div className='flex flex-col items-center md:items-center justify-between md:justify-start'>
            <h1 className='text-[#272e5f] text-[18px] font-bold text-center md:text-left mb-5'>Digital Services</h1>
            <div className='flex flex-col text-[#000000]'>
              <Link href='/sales' className='hover:text-[#2dabb1] text-center md:text-left'>KRA PIN</Link>
              <Link href='/sales' className='hover:text-[#2dabb1] text-center md:text-left'>Printing Services</Link>
              <Link href='/sales' className='hover:text-[#2dabb1] text-center md:text-left mb-5'>Laptop Repairs</Link>
            </div>
          </div>
          
          <div className='flex flex-col items-center md:items-center justify-between md:justify-start'>
            <h1 className='text-[#272e5f] text-[18px] font-bold text-center md:text-left mb-5'>Online Training</h1>
            <div className='flex flex-col text-[#000000]'>
              <Link href='/sales' className='hover:text-[#2dabb1] text-center md:text-left'>Online Writing</Link>
              <Link href='/sales' className='hover:text-[#2dabb1] text-center md:text-left'>Transcription</Link>
              <Link href='/sales' className='hover:text-[#2dabb1] text-center md:text-left mb-5'>Forex Training</Link>
            </div>
          </div>
          
          <div className='flex flex-col items-center md:items-center justify-between md:justify-start'>
            <h1 className='text-[#272e5f] text-[18px] font-bold text-center md:text-left mb-5'>Exam Services</h1>
            <div className='flex flex-col text-[#000000]'>
              <Link href='/sales' className='hover:text-[#2dabb1] text-center md:text-left'>Exams and Assignments</Link>
              <Link href='/sales' className='hover:text-[#2dabb1] text-center md:text-left'>Past Papers</Link>
              <Link href='/sales' className='hover:text-[#2dabb1] text-center md:text-left'>Lab Coat</Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;