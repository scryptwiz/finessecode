import React from 'react';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';

const ContactInformation = () => {
    return (
        <div className="md:border border-gray-400 rounded-sm stat_max_section gap-7 lg:text-left text-center lg:gap-12 px-12 py-8 mb-8 md:mb-12" >
            <div className="w-full md:w-[30%] p-6 flex flex-col items-center text-center gap-3">
                <CiLocationOn className='text-finesseBlue text-4xl' />
                <p className="text-finesseBlue">Address: Ikeja, Lagos 100265, NG</p>
            </div>
            <hr className="hidden md:inline-flex md:h-36 border border-finesseBlue/70" />
            <div className="w-full md:w-[30%] p-6 flex flex-col items-center text-center gap-3">
                <CiMail className='text-finesseBlue text-4xl' />
                <p className="text-finesseBlue">info@fenessecode.com <br /> www.finessecode.com</p>
            </div>
            <hr className="hidden md:inline-flex md:h-36 border border-finesseBlue/70" />
            <div className="w-full md:w-[30%] py-6 flex flex-col items-center text-center gap-3">
                <IoCallOutline className='text-finesseBlue text-4xl' />
                <p className="text-finesseBlue">+234 786 415 6171 <br /> +234 931 104 7842</p>
            </div>
        </div>
    )
}

export default ContactInformation