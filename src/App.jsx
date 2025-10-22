import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { About, Academics, Contact, Home, Portfolio } from './pages'
import Navbar from './components/Navbar'
import { Footer } from './components'

const App = () => {
  return (
    <main className='bg-slate-300 dark:bg-gray-900 transition-colors duration-500 h-[100vh] flex flex-col justify-between'>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </main>
  )
}

export default App
