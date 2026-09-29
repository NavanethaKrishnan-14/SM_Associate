/**
 * Page to Theme Mapping
 * Maps each page/route to its corresponding theme and color palette
 */

import type { ThemeType } from '@/contexts/ThemeContext';

export interface PageThemeConfig {
  path: string;
  themeName: string;
  theme: ThemeType;
  description: string;
}

export const PAGE_THEME_MAP: PageThemeConfig[] = [
  // Home & Main Pages
  {
    path: '/',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'Home page - Primary brand theme with navy background and gold accents',
  },
  {
    path: '/about',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'About page - Company story and values',
  },
  {
    path: '/contact',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'Contact page - Get in touch with team',
  },

  // Loan Services
  {
    path: '/home-loan',
    themeName: 'Home Loan - Cyan & Teal',
    theme: 'home-loan',
    description: 'Home loan services - Cyan and teal for modern, trustworthy financing',
  },
  {
    path: '/car-loan',
    themeName: 'Car Loan - Navy & Gold',
    theme: 'car-loan',
    description: 'Car loan services - Navy and gold for premium automotive financing',
  },
  {
    path: '/business-loan',
    themeName: 'Business Loan - Emerald & Teal',
    theme: 'business-loan',
    description: 'Business loan services - Emerald and teal for growth-focused enterprises',
  },
  {
    path: '/personal-loan',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'Personal loan services',
  },
  {
    path: '/two-wheeler-loan',
    themeName: 'Car Loan - Navy & Gold',
    theme: 'car-loan',
    description: 'Two-wheeler loan services',
  },

  // Gold & Resale
  {
    path: '/gold-loan',
    themeName: 'Gold Loan - Amber & Gold',
    theme: 'gold-loan',
    description: 'Gold loan services - Amber and gold for luxury and wealth',
  },
  {
    path: '/sm-gold',
    themeName: 'Gold Loan - Amber & Gold',
    theme: 'gold-loan',
    description: 'SM Gold products and services',
  },
  {
    path: '/car-resale',
    themeName: 'Vehicle Resale - Navy & Teal',
    theme: 'resale',
    description: 'Car resale services - Navy and teal for trusted pre-owned vehicles',
  },
  {
    path: '/gold-resale',
    themeName: 'Gold Loan - Amber & Gold',
    theme: 'gold-loan',
    description: 'Gold resale services',
  },

  // Insurance
  {
    path: '/insurance',
    themeName: 'Insurance - Navy & Cyan',
    theme: 'insurance',
    description: 'Insurance products and services - Navy and cyan for security and protection',
  },
  {
    path: '/two-wheeler-insurance',
    themeName: 'Insurance - Navy & Cyan',
    theme: 'insurance',
    description: 'Two-wheeler insurance coverage',
  },

  // Vehicle Marketplace
  {
    path: '/vehicles',
    themeName: 'Vehicle Resale - Navy & Teal',
    theme: 'resale',
    description: 'Vehicle marketplace - Browse available vehicles',
  },
  {
    path: '/sell-vehicle',
    themeName: 'Vehicle Resale - Navy & Teal',
    theme: 'resale',
    description: 'Sell your vehicle - List and manage your vehicle',
  },

  // EMI Calculator
  {
    path: '/emi-calculator',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'EMI calculator tool',
  },

  // Blog
  {
    path: '/blog',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'Blog and articles',
  },
];

/**
 * Get theme for a given path
 */
export function getThemeForPath(path: string): ThemeType {
  const config = PAGE_THEME_MAP.find((item) => item.path === path);
  return config?.theme || 'default';
}

/**
 * Get all available themes
 */
export function getAllPageThemes(): PageThemeConfig[] {
  return PAGE_THEME_MAP;
}

/**
 * Check if path should use a specific theme
 */
export function isPathWithTheme(path: string, theme: ThemeType): boolean {
  return getThemeForPath(path) === theme;
}
