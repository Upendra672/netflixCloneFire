

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className=" px-4 py-2 mx-1 text-white hover:bg-black/50">Sign In</button>
            <button className="bg-red-600 px-4 py-2 rounded cursor-pointer text-white">Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar;