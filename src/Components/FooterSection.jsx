import { BsFacebook, BsLinkedin,BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="max-w-full bg-finesseBlue text-[#ADB5BD] font-sans text-[16px]">
      <div className="max-w-6xl mx-auto py-16 flex flex-col md:flex-row justify-between px-4 md:px-4 gap-8">
        <div className="flex flex-col w-[17rem] md:w-80 gap-5">
          <h5 className="text-white text-xl">FinesseCode</h5>
          <p className="tracking-normal leading-8 md:max-w-xl text-[15px] md:text-[16px]">Since 2019, we have been steadily expanding with the goal of seeing Organizations achieve and raise the bar on the international stage.</p>
          <div className="flex gap-1">
            <a href="https://www.linkedin.com/company/finessecodes/" className='border border-gray-500 rounded-md px-2 py-1 w-10 h-fit hover:bg-blue-800 cursor-pointer transition-all ease-in duration-500' rel="noreferrer" target="_blank"> <BsLinkedin className='text-gray-300 text-xl' /> </a>
            <button className="border border-gray-500 rounded-md px-2 py-1 w-10 h-fit hover:bg-blue-800 cursor-pointer transition-all ease-in duration-500">
              <BsFacebook className='text-gray-300 text-xl' />
            </button>
            <button className="border border-gray-500 rounded-md px-2 py-1 w-10 h-fit hover:bg-blue-800 cursor-pointer transition-all ease-in duration-500">
              <BsTwitter className='text-gray-300 text-xl' />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-xl text-white">Company</h5>
          <ul className="flex flex-col gap-4 list-none">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/service'>Services</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
          </ul>
        </div>
        <div className="flex flex-col w-full md:w-64 gap-5">
          <h5 className="text-white text-xl">NewsLetter</h5>
          <p className="tracking-normal leading-7 max-w-xl">Sign up and receive the latest tips via email.</p>
          <label for="" className="font-semibold text-[14px]">Write your email <span className="text-[#E43F52]">*</span></label>
          <input type="email" className="outline-none px-3 py-2 bg-[#27314f] border border-[#27314f] text-[#dee2e6e5] text-[14px] rounded placeholder:text-[#dee2e6e5]" placeholder="Your Email:" />
          <button className="bg-[#27314f] py-2 rounded text-[#2f55d4] font-semibold shadow-md transition-all ease-in duration-500 hover:bg-finesseBlue hover:text-white">Subscribe</button>
        </div>
      </div>
      <div className="border-t border-[#283453] py-6">
        <div className="text-center w-80 md:w-full leading-8 text-[15px] md:text-[16px] flex items-center gap-1 justify-center">
          <p>© 2022 FinesseCode. Design with</p>
          <img src="/assets/love.png" alt="" className="w-5 h-fit" />by
          <p className="hidden md:flex">FinesseCode.</p>
        </div>
        <p className="block md:hidden text-center">FinesseCode.</p>
        <div>

        </div>
      </div>
    </footer>
  )
}

export default FooterSection