import { BsTelephone } from "react-icons/bs"
import ContactHero from "../Components/ContactHero"
import FooterSection from "../Components/FooterSection"
import Navbar from "../Components/Navbar"

const Contact = () => {
  return (
    <div>
        {/* header */}
        <Navbar/>
        <ContactHero/>
        <div className="px-28 mb-10 md:mb-12">
            <div className="flex flex-col gap-6">
                <div>
                    <h2 className="text-xl md:text-4xl text-finesseBlue font-semibold">Contact Info</h2>
                    <hr className="border-finesseBlue/100 w-28" />
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-xl font-semibold text-finesseBlue">Telephone Number</p>
                    <div className="flex gap-4">
                        <div className="bg-finesseBlue rounded-md p-1 flex items-center w-14"><BsTelephone className="text-white flex mx-auto text-2xl font-semibold"/></div>
                        <div className="flex flex-col gap-2">
                            <p className="text-#737588">(+65) - 48596 - 5789</p>
                            <p className="text-#737588">(+65) - 48596 - 5789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer */}
        {/* <FooterSection /> */}
    </div>
  )
}

export default Contact