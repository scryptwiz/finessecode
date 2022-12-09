import HomeHero from "../Components/HomeHero"
import Navbar from "../Components/Navbar"

const Home = () => {
  return (
    <div>
        {/* Header Section */}
        <Navbar />
        <HomeHero />
    </div>
  )
}

export default Home