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
  accent: string;
  accentSoft: string;
  accentGlow: string;
}

const VISUAL_THEMES = {
  gold: { accent: '#d6b35a', accentSoft: '#f2dfa3', accentGlow: 'rgba(214,179,90,.19)' },
  teal: { accent: '#4fc9b7', accentSoft: '#b9f0e6', accentGlow: 'rgba(79,201,183,.18)' },
  burgundy: { accent: '#d88b9a', accentSoft: '#f0c4cc', accentGlow: 'rgba(216,139,154,.17)' },
  silver: { accent: '#aab8c4', accentSoft: '#e3ebf0', accentGlow: 'rgba(170,184,196,.14)' },
} as const;

export const PAGE_THEME_MAP: PageThemeConfig[] = [
  // Home & Main Pages
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'Home page - Primary brand theme with navy background and gold accents',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/about',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'About page - Company story and values',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/contact',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'Contact page - Get in touch with team',
  },

  // Loan Services
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/home-loan',
    themeName: 'Home Loan - Cyan & Teal',
    theme: 'home-loan',
    description: 'Home loan services - Cyan and teal for modern, trustworthy financing',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/car-loan',
    themeName: 'Car Loan - Navy & Gold',
    theme: 'car-loan',
    description: 'Car loan services - Navy and gold for premium automotive financing',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/business-loan',
    themeName: 'Business Loan - Emerald & Teal',
    theme: 'business-loan',
    description: 'Business loan services - Emerald and teal for growth-focused enterprises',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/personal-loan',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'Personal loan services',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/two-wheeler-loan',
    themeName: 'Car Loan - Navy & Gold',
    theme: 'car-loan',
    description: 'Two-wheeler loan services',
  },

  // Gold & Resale
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/gold-loan',
    themeName: 'Gold Loan - Amber & Gold',
    theme: 'gold-loan',
    description: 'Gold loan services - Amber and gold for luxury and wealth',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/sm-gold',
    themeName: 'Gold Loan - Amber & Gold',
    theme: 'gold-loan',
    description: 'SM Gold products and services',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/car-resale',
    themeName: 'Vehicle Resale - Navy & Teal',
    theme: 'resale',
    description: 'Car resale services - Navy and teal for trusted pre-owned vehicles',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/gold-resale',
    themeName: 'Gold Loan - Amber & Gold',
    theme: 'gold-loan',
    description: 'Gold resale services',
  },

  // Insurance
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/insurance',
    themeName: 'Insurance - Navy & Cyan',
    theme: 'insurance',
    description: 'Insurance products and services - Navy and cyan for security and protection',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/two-wheeler-insurance',
    themeName: 'Insurance - Navy & Cyan',
    theme: 'insurance',
    description: 'Two-wheeler insurance coverage',
  },

  // Vehicle Marketplace
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/vehicles',
    themeName: 'Vehicle Resale - Navy & Teal',
    theme: 'resale',
    description: 'Vehicle marketplace - Browse available vehicles',
  },
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/sell-vehicle',
    themeName: 'Vehicle Resale - Navy & Teal',
    theme: 'resale',
    description: 'Sell your vehicle - List and manage your vehicle',
  },

  // EMI Calculator
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
    path: '/emi-calculator',
    themeName: 'Default - Navy & Gold',
    theme: 'default',
    description: 'EMI calculator tool',
  },

  // Blog
  {
    accent: VISUAL_THEMES.gold.accent,
    accentSoft: VISUAL_THEMES.gold.accentSoft,
    accentGlow: VISUAL_THEMES.gold.accentGlow,
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

export function getVisualThemeForPath(path: string) {
  const normalized = path === '/sell-vehicle' ? '/sell-vehicle' : path;
  const config = [...PAGE_THEME_MAP]
    .sort((a, b) => b.path.length - a.path.length)
    .find((item) => normalized === item.path || normalized.startsWith(item.path + '/'));

  return {
    name:
      config?.accent === VISUAL_THEMES.teal.accent
        ? 'teal'
        : config?.accent === VISUAL_THEMES.burgundy.accent
          ? 'burgundy'
          : config?.accent === VISUAL_THEMES.silver.accent
            ? 'silver'
            : 'gold',
    accent: config?.accent || VISUAL_THEMES.gold.accent,
    accentSoft: config?.accentSoft || VISUAL_THEMES.gold.accentSoft,
    accentGlow: config?.accentGlow || VISUAL_THEMES.gold.accentGlow,
  } as const;
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
