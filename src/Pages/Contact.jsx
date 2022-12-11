import ContactForm from "../Components/ContactForm"
import ContactHero from "../Components/ContactHero"
import ContactInformation from "../Components/ContactInformation"
import FooterSection from "../Components/FooterSection"
import Map from "../Components/Map"
import Navbar from "../Components/Navbar"

const Contact = () => {
  return (
    <div>
        {/* header */}
        <Navbar/>
        <ContactHero/>
        {/* Contact Info */}
        <ContactInformation />
        {/* Contact Form */}
        <ContactForm />
        {/* Map */}
        <Map/>  
        {/* Footer */}
        <FooterSection />
    </div>
  )
}

export default Contact