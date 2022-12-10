import 'animate.css';
import {Link} from 'react-router-dom'
import { RiMenu3Fill } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className="w-full bg-white flex border-b">
        <div className="max-w-6xl px-5 xl:px-0 py-5 flex items-center justify-between w-full mx-auto">
            <Link to='/'className='text-2xl md:text-3xl font-medium text-finesseBlue'>FinesseCode</Link>
            <div className="lg:flex hidden items-center gap-7">
                <Link className='text-light text-sm text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Home</Link>
                <Link className='text-light text-sm text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/about'>About Us</Link>
                <Link className='text-light text-sm text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/service'>Services</Link>
                <Link className='text-light text-sm text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Products</Link>
                <Link className='text-light text-sm text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Contact Us</Link>
            </div>
            {!toggle&&<RiMenu3Fill onClick={()=>setToggle(!toggle)} className='text-2xl lg:hidden font-medium text-finesseBlue cursor-pointer' />}
        </div>
        {toggle&&(
            <div className='fixed left-0 w-full h-screen flex items-center animate__animated animate__fadeInDown transition-all'>
                <div className='w-9/12 bg-white h-full flex flex-col py-5 px-5 gap-7'>
                    <Link to='/'className='text-2xl font-medium text-finesseBlue'>FinesseCode</Link>
                    <div className='flex flex-col gap-7'>
                        <Link className='text-light text-sm text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Home</Link>
                        <Link className='text-light text-sm text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/about'>About Us</Link>
                        <Link className='text-light text-sm text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/service'>Services</Link>
                        <Link className='text-light text-sm text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Products</Link>
                        <Link className='text-light text-sm text-finesseBlue hover:text-finesseOrange transition-all duration-300 ease-in-out' to='/'>Contact Us</Link>
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