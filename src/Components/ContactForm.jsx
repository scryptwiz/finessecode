import { BiMessageRounded } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineSubtitles } from 'react-icons/md';

const ContactForm = () => {
  return (
    <div className='max-w-full flex flex-col lg:flex-row mx-auto px-8 lg:px-28 mb-12'>
            {/* Image section */}
            <div className='hidden lg:flex mx-auto w-4/12'>
                <img src="/assets/contact.svg" alt="ContactSVG" />
            </div>
            {/* Form Section */}
            <div className='w-full lg:w-7/12 shadow-md rounded-sm p-9'>
                <form action="" className=' flex flex-col gap-3'>
                    <h4 className='text-finesseBlue font-semibold text-base md:text-xl'>Get In Touch !</h4>
                    <div className='flex flex-col gap-8'>
                        <div className='w-full flex items-center border border-finesseBlue/40 rounded-md focus:outline focus:outline-finesseBlue px-5'>
                            <FaRegUser className='text-xl text-finesseBlue' />
                            <input type="text" placeholder='Your Full Name' className='border-0 flex-1 focus:outline-none p-3 text-finesseBlue' />
                        </div>
                        <div className='w-full flex items-center border border-finesseBlue/40 rounded-md focus:outline focus:outline-finesseBlue px-5'>
                            <HiOutlineMail className='text-xl text-finesseBlue' />
                            <input type="text" placeholder='Email' className='border-0 flex-1 focus:outline-none p-3 text-finesseBlue' />
                        </div>
                        <div className='w-full flex items-center border border-finesseBlue/40 rounded-md focus:outline focus:outline-finesseBlue px-5'>
                            <MdOutlineSubtitles className='text-xl text-finesseBlue' />
                            <input type="text" placeholder='Your Title' className='w-full border-0 flex-1 focus:outline-none p-3 text-finesseBlue' />
                        </div>
                        <div className="flex rounded-md px-5 py-[0.5rem] border border-gray-300 text-[#3C4858] focus:border  focus:border-blue-700 gap-4">
                            <BiMessageRounded className='text-2xl text-finesseBlue' />
                            <textarea type="text" placeholder="Message :" className="rounded-md w-full outline-none placeholder:text-[#3C4858] max-h-28 h-28 text-finesseBlue"></textarea>
                        </div>
                        <button className="bg-finesseBlue border border-finesseBlue w-full md:w-fit text-white py-3 px-8 text-base text-center font-normal rounded-md  hover:bg-transparent hover:text-finesseBlue transition-all ease-in duration-300">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default ContactForm