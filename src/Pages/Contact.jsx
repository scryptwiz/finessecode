import ContactHero from "../Components/ContactHero"
import ContactInformation from "../Components/ContactInformation"
import FooterSection from "../Components/FooterSection"
import Navbar from "../Components/Navbar"

const Contact = () => {
  return (
    <div>
        {/* header */}
        <Navbar/>
        <ContactHero/>
        {/* Contact Info */}
        <ContactInformation />
        {/* Footer */}
        <FooterSection />
    </div>
  )
}

export default Contact