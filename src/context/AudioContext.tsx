import { createContext, useContext, useRef, useState, useEffect } from "react";
import { SONGS } from "../constants/index";

type AudioContextType = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentTrack: string;
  changeTrack: (track: string) => void;
};


const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(SONGS[0].value);
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

  const changeTrack = (track: string) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, setIsPlaying, currentTrack, changeTrack }}>
      {children}
    </AudioContext.Provider>
  );
};

// export const useAudio = () => useContext(AudioContext);
export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useDarkMode must be used within DarkModeProvider');
  return ctx;
}
