import React from "react";
import NavLayout from "./components/NavLayout";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image"; // Import Image from next/image

const Homepage = () => {
  return (
    <div className='min-h-screen overflow-y-scroll overflow-hidden flex justify-center items-center'>
    <img src={LightBulb} className='absolute top-0 left-0 right-0 w-full h-full object-cover' />
    <div className='w-[80%] h-[80%] rounded p-5 bg-white border shadow flex justify-center items-center z-10'>
        <div className='w-full md:w-1/2 pl-3 sm:pl-14 justify-center flex flex-col p-5 sm:p-10'>
            <a href="/" className='flex items-center hover:text-[#2dabb1]'><IoIosArrowBack /> Back Home</a>
            <form onSubmit={onSubmit}>
                <h1 className='text-xl font-bold'>Sign In</h1>
                <div className='flex flex-col pt-3'>
                    <label>Email</label>
                    <input className='p-1 border max-w-[300px] outline-none' value={email} onChange={onChange} id='email' name='email' type='email' placeholder='cusip@gmail.com' />
                    {/* Display error message for email */}
                    {errors.email && <p className='text-red-500'>{errors.email}</p>}
                </div>
                <div className='flex flex-col pt-4'>
                    <label>Password</label>
                    <input className='outline-none max-w-[300px] border p-1' value={password} type='password' onChange={onChange} name='password' id='password' />
                    {/* Display error message for password */}
                    {errors.password && <p className='text-red-500'>{errors.password}</p>}
                </div>
                <div className='flex justify-between mt-4 max-w-[300px]'>
                    <div className='flex sm:gap-2 items-center'>
                        <input type='checkbox' />
                        <h4>Remember me</h4>
                    </div>
                    <a href="/forgotpassword" className='underline'>Forgot Password?</a>
                </div>
                <button className='max-w-[300px] w-full rounded mt-4 p-1 text-white bg-black' type='submit'>SignIn</button>
            </form>
            <div className='mt-3'>
                <a className='flex justify-start hover:text-black items-center gap-1 text-[#2dabb1]' href="/pages/register">No Account? <span><FaArrowRight /></span></a>
            </div>

        </div>
        <div className='w-1/2 hidden md:block shadow rounded-md h-full'>
            <img src={Laptop} className='w-full h-full object-cover transition-transform transform hover:scale-105' />
        </div>
    </div>
</div>
  );
};

export default Homepage;
