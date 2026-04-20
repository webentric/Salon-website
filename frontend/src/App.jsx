import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact"
import Hair from "./pages/Hair"
import Home from "./pages/Home"
import Nail from "./pages/Nail"
import Products from "./pages/Products"
import Skin from "./pages/Skin"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hair' element={<Hair />} />
        <Route path='/nail' element={<Nail />} />
        <Route path='/skin' element={<Skin />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
