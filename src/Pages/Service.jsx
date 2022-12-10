import FooterSection from "../Components/FooterSection"
import Navbar from "../Components/Navbar"
import ServiceHero from "../Components/ServiceHero"
import ServiceSection from "../Components/ServiceSection"

const Service = () => {
  return (
    <div>
        {/* Hero */}
        <Navbar />
        <ServiceHero />
        {/* Service */}
        <ServiceSection/>
        {/* Footer */}
        <FooterSection />
    </div>
  )
}

export default Service