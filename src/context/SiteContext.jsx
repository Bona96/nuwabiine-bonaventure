import React, { createContext, useContext, useState } from 'react';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
    const [isHome, setIsHome] = useState(false);

    return (
        <SiteContext.Provider value={{ isHome, setIsHome }}>
            {children}
        </SiteContext.Provider>
    );
};

export const useSite = () => useContext(SiteContext);