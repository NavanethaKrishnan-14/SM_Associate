'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeType = 
  | 'default' 
  | 'home-loan' 
  | 'car-loan' 
  | 'business-loan' 
  | 'gold-loan' 
  | 'insurance' 
  | 'resale';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode; initialTheme?: ThemeType }> = ({
  children,
  initialTheme = 'default',
}) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Apply theme to document root
    const root = document.documentElement;
    
    // Remove all theme attributes first
    root.removeAttribute('data-theme');
    
    // Set new theme if not default
    if (theme !== 'default') {
      root.setAttribute('data-theme', theme);
    }

    // Trigger any theme-related side effects
    document.documentElement.style.colorScheme = 'light';
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
