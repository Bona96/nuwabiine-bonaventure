import React, { createContext, useContext, useState } from "react";
import { themes } from "../constants/index.tsx";
import type { ThemeContextType } from "../lib/types";


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode}> = ({ children }) => {
  const [themeName, setThemeName] = useState("default");

  const theme = themes.find((v) => v.name === themeName) || themes[0];

  const switchTheme = (name: string) => {
    if (themes.some((v) => v.name === name)) {
      setThemeName(name);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, themeName, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
