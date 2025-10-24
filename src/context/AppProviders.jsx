import { DarkModeProvider } from './DarkModeContext.jsx';
import { AudioProvider } from './AudioContext';
import { ThemeProvider } from './ThemeContext.jsx';
import { SiteProvider } from './SiteContext.jsx';

export function AppProviders({ children }) {
  return (
    <SiteProvider>
      <ThemeProvider>
        <DarkModeProvider>
          <AudioProvider>
            {children}
          </AudioProvider>
        </DarkModeProvider>
      </ThemeProvider>
    </SiteProvider>
  );
}