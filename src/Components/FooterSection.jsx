import { BsFacebook, BsLinkedin,BsTwitter } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { TbSend } from 'react-icons/tb';

const FooterSection = () => {
  return (
    <div className="w-full flex">
      <div className="footer_max_section gap-10 border-t w-full">
        <div className="w-full md:w-5/12 bg-finesseBlue py-5 px-5">
          <h5 className="text-white text-4xl">Finesse-Code</h5>
          <p className="text-sm text-gray-100 mt-4">Since 2019, we have been steadily expanding with the goal of seeing Organizations achieve and raise the bar on the international stage.</p>
          <h6 className='mt-5 text-white font-medium'>Subscribe To Our Newsletter</h6>
          <div className='flex mt-2'>
            <input type="text" className='px-3 py-2 text-sm bg-gray-500 rounded-l text-white outline-none border-none' placeholder='Enter Email' />
            <button className='px-4 py-3 text-white text-xl bg-gray-600 rounded-r'><TbSend /></button>
          </div>
        </div>
        <div className="w-full md:w-fit px-5 py-5">
          <span className="flex gap-5 items-center">
            <h5 className='text-finesseBlue text-xl font-semibold'>Follow Us: </h5>
            <a href="https://www.linkedin.com/company/finessecodes/" rel="noreferrer" target="_blank"> <BsLinkedin className='text-finesseBlue text-xl' /> </a>
            <BsFacebook className='text-finesseBlue text-xl' />
            <BsTwitter className='text-finesseBlue text-xl' />
          </span>
          <span>
            <h5 className='text-lg font-medium text-finesseBlue mt-5'>Address</h5>
            <span className='flex gap-4 items-center'>
              <CiLocationOn className='text-finesseBlue text-xl' />
              <p className='text-finesseBlue'>Ikeja, Lagos 100265, NG</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default FooterSection