import React, { createContext, useContext, useState } from 'react';

type SiteContextType = {
    isHome: boolean;
    setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
};

const SiteContext = createContext<SiteContextType | null>(null);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isHome, setIsHome] = useState(false);

    return (
        <SiteContext.Provider value={{ isHome, setIsHome }}>
            {children}
        </SiteContext.Provider>
    );
};

// export const useSite = () => useContext();
export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used within SiteProvider');
  return ctx;
}