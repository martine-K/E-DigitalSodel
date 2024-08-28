import React from 'react'
import NavLayout from '../components/NavLayout'

function page() {
  return (
    <NavLayout>
    <section className='mt-7 w-full h-auto flex flex-col justify-items-start'>
      <div className='px-10 max-auto'>
      <div className='flex px-7 flex-col items-start mb-5'>
        <h1 className='font-semibold text-[18px] underline mb-3'>Digital Services</h1>
        <ol>
          <li>KRA PIN</li>
          <li>Printing Services</li>
          <li>Laptop Repairs</li>
        </ol>
      </div>
      <div className='flex  flex-col items-end px-7 mb-5 text-left'>
        <h1 className='font-semibold text-left
         text-[18px] underline px-10 mb-3'>Class Assistant</h1>
        <ol className='text-left'>
          <li>Past Papers</li>
          <li>Lab Coat</li>
          <li>Assignement Assistant</li>
        </ol>
      </div>
      <div className='flex  flex-col mb-5 place-items-center'>
        <h1 className='font-semibold text-justify text-[18px] underline mb-3'>Digital Training</h1>
        <ol className='text-justify'>
          <li className='mb-2'>Online Writing Training</li>
          <li className='mb-2'>Transcription</li>
          <li className='mb-2'>Forex Training</li>
        </ol>
      </div>
      <div className='flex flex-col items-center mt-5'>
          <h1 className='font-semibold text-[16px] underline mb-3'>Join Training Classes</h1>
          <a
            href="https://chat.whatsapp.com/F3HJzbqX3IQFCc7mIxk3Kj"
            target="_blank"
            rel="noopener noreferrer"
            className='bg-green-500 text-white font-semibold text-[12px] inline-block py-2 px-3 rounded hover:bg-green-700 transition'
          >
            Join WhatsApp Group
          </a>
        </div>
        </div>
    </section>
    </NavLayout>
  )
}

export default page 