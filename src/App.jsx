import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Bookings from './pages/Bookings'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"                element={<Home />} />
        <Route path="/about"                element={<About />} />
        <Route path="/plan-your-event" element={<Bookings />} />
        <Route path="/services"        element={<Services />} />
        <Route path="/gallery"         element={<Gallery />} />
        <Route path="/contact"         element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}
