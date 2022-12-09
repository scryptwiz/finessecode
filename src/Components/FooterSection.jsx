import { BsFacebook, BsLinkedin,BsTwitter } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const FooterSection = () => {
  return (
    <div className="w-full flex">
      <div className="max_section gap-10 border-t w-full">
        <div className="w-full md:w-4/12 bg-finesseBlue py-5 px-5">
          <h5 className="text-white text-3xl">Finesse-Code</h5>
          <p className="text-md text-gray-100 mt-2">Since 2019, we have been steadily expanding with the goal of seeing Organizations achieve and raise the bar on the international stage.</p>
        </div>
        <div className="w-full md:w-fit px-5 py-5">
          <span className="flex gap-3">
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