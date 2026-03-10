import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { SiteProvider } from './context/SiteContext'; // Adjust path if needed
import App from './App';
import { AudioProvider } from './context/AudioContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for tests

test('renders app header', () => {
  render(
    <MemoryRouter initialEntries={['/']}> {/* Set initial route to "/" */}
      <DarkModeProvider>
        <SiteProvider>
          <AudioProvider>
            <App children={undefined} isHome={true} setIsHome={() => {}} />
          </AudioProvider>
        </SiteProvider>
      </DarkModeProvider>
    </MemoryRouter>
  );
  const logoElement = screen.getByAltText('Logo'); // Check for the logo instead
  expect(logoElement).toBeInTheDocument();
});