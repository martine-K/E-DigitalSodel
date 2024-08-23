
const SignUp = () => {
  return (

      <main className="mt-5">
        <div className="w-1/2 h=screen flex flex-col justify-center items-center">
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
            className="py-2 px-3 w-full text-black text-lg font-light outline-none"
            />
            <input 
            type="text"
            name=""
            placeholder="Confirm Password"
            className="py-2 px-3 w-full text-black text-lg font-light outline-none mt-5"
            />
            <div className="flex mt-5 justify-between items-center">
              <Link href="\"
              className="text-white cursor-pointer transition hover:text-black">
                Already Registered?</Link>
              <button type="submit" className="bg-black text-yellow font-medium py-2 px-8 transition hover:text-white">
                Sign Up</button>
            </div>
          </form>
          </aside>
        </div>
      </main>
      
  
  )
}

export default SignUp
