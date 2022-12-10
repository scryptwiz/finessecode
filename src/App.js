import Home from "./Pages/Home"
import {BrowserRouter,Routes, Route} from "react-router-dom"
import About from "./Pages/About"
import Service from "./Pages/Service"
import Contact from "./Pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App