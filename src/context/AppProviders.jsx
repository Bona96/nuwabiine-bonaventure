import { DarkModeProvider } from './DarkModeContext.jsx';

export function AppProviders({ children }) {
  return (
    <DarkModeProvider>
      {children}
    </DarkModeProvider>
  );
}