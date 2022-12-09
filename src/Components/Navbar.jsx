import 'animate.css';
import {Link} from 'react-router-dom'
import { RiMenu3Fill } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className="w-full bg-white flex">
        <div className="max-w-7xl shadow px-5 xl:px-0  py-1 md:py-2 flex items-center justify-between w-full mx-auto">
            <img src="logo.jpeg" className="w-16 lg:w-24 cursor-pointer" alt="FinesseCode" />
            <div className="lg:flex hidden items-center gap-7">
                <Link className=' lg:text-lg text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Home</Link>
                <Link className=' lg:text-lg text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>About Us</Link>
                <Link className=' lg:text-lg text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Services</Link>
                <Link className=' lg:text-lg text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Products</Link>
            </div>
            <button className='text-white lg:inline-flex hidden lg:text-lg px-7 py-3 bg-finesseBlue hover:bg-finesseOrange transition-all duration-300 ease-in-out rounded-md'>Let Us Talk</button>
            {!toggle&&<RiMenu3Fill onClick={()=>setToggle(!toggle)} className='text-2xl lg:hidden font-semibold text-finesseBlue cursor-pointer' />}
        </div>
        {toggle&&(
            <div className='fixed left-0 w-full h-screen flex items-center animate__animated animate__fadeInDown transition-all'>
                <div className='w-9/12 bg-white h-full flex flex-col py-5 px-5 gap-7'>
                    <Link to="/">
                        <img src="logo.jpeg" alt="FinesseCode" className='w-16 h-fit' />
                    </Link>
                    <div className='flex flex-col gap-7'>
                        <Link className='text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Home</Link>
                        <Link className='text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>About Us</Link>
                        <Link className='text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Services</Link>
                        <Link className='text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Products</Link>
                        <button className='w-fit text-white px-5 py-2 bg-finesseBlue hover:bg-finesseOrange transition-all duration-300 ease-in-out rounded-md'>Let Us Talk</button>
                    </div>
                </div>
                <button onClick={()=>setToggle(false)} className='w-3/12 bg-black/20 h-full flex py-5 px-5'>
                    <MdClose className='ml-auto text-3xl' />
                </button>
            </div>
        )}
    </div>
  )
}

export default Navbar