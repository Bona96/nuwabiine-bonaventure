import { useDarkMode } from "../context/DarkModeContext.tsx"; // Import dark mode context
import { soundoff, soundon } from "../assets/icons/index.ts";
import { useAudio } from "../context/AudioContext.tsx";
import { SONGS, themes } from "../constants/index.tsx";
import { useTheme } from "../context/ThemeContext";

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
type AudioToggleProps = {
  isPlayingMusic: boolean;
  setIsPlayingMusic: (v: boolean) => void
}
export const AudioToggle: React.FC<AudioToggleProps> = ({ isPlayingMusic, setIsPlayingMusic }) => {
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

export const ThemeToogle = () => {
  const { theme, themeName, switchTheme } = useTheme();

  return (
    <div className="flex flex-row flex-wrap gap-2 ">
      {themes.map((t) => {
        return (
          <button
            key={t.id}
            className={`${theme.styles.button} ${
              themeName === t.name
                ? theme.styles.primary
                : theme.styles.secondary
            }`}
            onClick={() => switchTheme(t.name)}
          >
            {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
          </button>
        );
      })}
    </div>
  );
};
