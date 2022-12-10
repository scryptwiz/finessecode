import AboutHero from "../Components/AboutHero"
import AboutSection from "../Components/AboutSection"
import FooterSection from "../Components/FooterSection"
import Navbar from "../Components/Navbar"
import OurTeamSection from "../Components/OurTeamSection"
import StatsSection from "../Components/StatsSection"

const About = () => {
  return (
    <div>
        {/* Header Section */}
        <Navbar />
        <AboutHero />
        {/* About Section */}
        <AboutSection />
        {/* Statistic Section */}
        <StatsSection />
        {/* Our Team */}
        <OurTeamSection/>
        {/* Footer */}
        <FooterSection />
    </div>
  )
}

export default About