import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { About, Academics, Contact, Home, Portfolio } from './pages'
import Navbar from './components/Navbar'
import { Footer } from './components'
import { useAudio } from './context/AudioContext'
import { AudioToggle } from './components/Buttons'
import { useSite } from './context/SiteContext'
import Layout from './layout/Layout'

const App = () => {
  const {isHome, setIsHome} = useSite();
  const { isPlaying, setIsPlaying } = useAudio();
  return (
    <main className="bg-gray-200 dark:bg-gray-900 text-white min-h-screen w-full flex flex-col justify-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home isHome={isHome} setIsHome={setIsHome} />} />
      </Routes>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <AudioToggle isPlayingMusic={isPlaying} setIsPlayingMusic={setIsPlaying} />
      </Layout>
      <Footer isHome={isHome} setIsHome={setIsHome}/>
    </main>
  )
}

export default App
