import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { About, Contact, Home, Portfolio } from './pages'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <main className='bg-slate-300/20 relative dark:bg-gray-900 transition-colors duration-500'>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default App
