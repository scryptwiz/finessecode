import ContactHero from "../Components/ContactHero"
import FooterSection from "../Components/FooterSection"
import Navbar from "../Components/Navbar"

const Contact = () => {
  return (
    <div>
        {/* header */}
        <Navbar/>
        <ContactHero/>
        {/* Footer */}
        <FooterSection />
    </div>
  )
}

export default Contact