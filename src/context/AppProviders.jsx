import { DarkModeProvider } from './DarkModeContext.jsx';
import { AudioProvider } from './AudioContext';

export function AppProviders({ children }) {
  return (
    <DarkModeProvider>
      <AudioProvider>
        {children}
      </AudioProvider>
    </DarkModeProvider>
  );
}