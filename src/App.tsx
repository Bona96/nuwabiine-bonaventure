import { Route, Routes } from "react-router-dom";
import { About, Academics, Contact, Home, Portfolio } from "./pages";
import Navbar from "./components/Navbar";
import { Footer } from "./components";
import { useAudio } from "./context/AudioContext";
import { AudioToggle } from "./components/Buttons";
import { useSite } from "./context/SiteContext";
import Layout from "./layout/Layout";
import type React from "react";

type AppProps = {
  children: React.ReactNode;
  isHome: boolean;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
};

const App: React.FC<AppProps> = () => {
  const { isHome, setIsHome } = useSite();
  const { isPlaying, setIsPlaying } = useAudio();
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home isHome={isHome} setIsHome={setIsHome} />}
        />
      </Routes>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <AudioToggle
          isPlayingMusic={isPlaying}
          setIsPlayingMusic={setIsPlaying}
        />

        <Footer isHome={isHome} setIsHome={setIsHome} />
      </Layout>
    </>
  );
};

export default App;
