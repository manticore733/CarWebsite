import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Shared/Navbar'
import Footer from './components/Shared/Footer'
import Home from './pages/Home'
import About from './pages/About'
import VehiclesAndRates from './pages/VehiclesAndRates'
import ContactUs from './pages/ContactUs'
import Tnc from './pages/Tnc'
import './App.css'
import { useEffect } from 'react'

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Navbar />

      <main className={isHome ? "main-content-home" : "main-content"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<VehiclesAndRates />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/tnc" element={<Tnc />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
