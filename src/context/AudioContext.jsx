import { createContext, useContext, useRef, useState, useEffect } from "react";
import sakura from "../assets/music/sakura.mp3";
import onecallaway from "../assets/music/onecallaway.mp3";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(onecallaway);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(currentTrack));

  useEffect(() => {
    audioRef.current.src = currentTrack;
    if (isPlaying) {
      audioRef.current.play().catch((e) => console.error("Playback error:", e));
    } else {
      audioRef.current.pause();
    }
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const changeTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, setIsPlaying, currentTrack, changeTrack }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
