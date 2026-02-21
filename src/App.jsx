import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">CarWebsite</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; 2026 CarWebsite. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App
