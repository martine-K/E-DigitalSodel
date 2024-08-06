import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function NavLayout({children}) {
  return (


      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow mt-20">{children}</div>
        <Footer />
      </div>
    );
  }
  
export default NavLayout