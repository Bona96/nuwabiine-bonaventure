import { useDarkMode } from "../context/DarkModeContext"; // Import dark mode context
import { soundoff, soundon } from "../assets/icons";
import { useAudio } from "../context/AudioContext";
import sakura from "../assets/music/sakura.mp3";
import onecallaway from "../assets/music/onecallaway.mp3";

//dark mode
export const DarkModeToggle = () => {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <button
      onClick={() => toggleDark()}
      className="p-2 rounded-md text-gray-800 dark:text-white bg-gray-200/50 dark:bg-gray-600/50 hover:bg-cyan-800 dark:hover:bg-cyan-400 hover:text-gray-200 dark:hover:text-gray-800"
    >
      {/* {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />} */}
      {isDark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

// Example song list (expand as needed)
const SONGS = [
  { label: "One call", value: onecallaway },
  { label: "Sakura", value: sakura },
  // Add more songs here, e.g. { label: "Another Song", value: anotherSong }
];

export const AudioToggle = ({ isPlayingMusic, setIsPlayingMusic }) => {
  const { currentTrack, changeTrack } = useAudio();
  return (
    <div className="absolute bottom-4 left-4 z-999 flex flex-col gap-2 items-start">
      <button
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        className="p-3 rounded-full text-white bg-gray-900 dark:bg-white dark:text-gray-900 shadow-xl transition-colors duration-300 hover:bg-cyan-600 dark:hover:bg-cyan-300"
        title={isPlayingMusic ? "Pause Music" : "Play Music"}
      >
        {isPlayingMusic ? (
          <img src={soundon} alt="Sound On" className="w-6 h-6" />
        ) : (
          <img src={soundoff} alt="Sound Off" className="w-6 h-6" />
        )}
      </button>
      <select
        className="mt-2 p-2 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow"
        value={currentTrack}
        onChange={(e) => changeTrack(e.target.value)}
      >
        {SONGS.map((song) => (
          <option key={song.value} value={song.value}>
            {song.label}
          </option>
        ))}
      </select>
    </div>
  );
};
