import { DarkModeProvider } from './DarkModeContext.tsx';
import { AudioProvider } from './AudioContext.tsx';
import { ThemeProvider } from './ThemeContext.tsx';
import { SiteProvider } from './SiteContext.tsx';

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider>
      <DarkModeProvider>
        <SiteProvider>
          <AudioProvider>
            {children}
          </AudioProvider>
        </SiteProvider>
      </DarkModeProvider>
    </ThemeProvider>
  );
}