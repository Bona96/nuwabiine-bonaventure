import { DarkModeProvider } from './DarkModeContext.jsx';
import { AudioProvider } from './AudioContext';
import { ThemeProvider } from './ThemeContext.jsx';

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <DarkModeProvider>
        <AudioProvider>
          {children}
        </AudioProvider>
      </DarkModeProvider>
    </ThemeProvider>
  );
}