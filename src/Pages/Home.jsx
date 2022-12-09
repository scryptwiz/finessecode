import AboutSection from "../Components/AboutSection"
import HomeHero from "../Components/HomeHero"
import Navbar from "../Components/Navbar"
import ServiceSection from "../Components/ServiceSection"

const Home = () => {
  return (
    <div>
        {/* Header Section */}
        <Navbar />
        <HomeHero />
        {/* About Section */}
        <AboutSection />
        {/* Service section */}
        <ServiceSection />
    </div>
  )
}

export default Home