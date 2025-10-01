import { useDarkMode } from '../context/DarkModeContext'; // Import dark mode context
//dark mode
export const DarkModeToggle = () => {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <button
      onClick={() => toggleDark()}
      className="p-2 rounded-md text-gray-800 dark:text-white bg-gray-200/50 dark:bg-gray-600/50 hover:bg-cyan-800 dark:hover:bg-cyan-400 hover:text-gray-200 dark:hover:text-gray-800"
    >
      {/* {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />} */}
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};