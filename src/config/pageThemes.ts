/**
 * Page to theme mapping
 * Visual accents are centralized here so Header, Footer and page styling
 * all use the same premium color identity.
 */

import type { ThemeType } from '@/contexts/ThemeContext';

export interface PageThemeConfig {
  path: string;
  themeName: string;
  theme: ThemeType;
  description: string;
  visual: 'gold' | 'teal' | 'burgundy' | 'silver';
}

const VISUAL_THEMES = {
  gold: { accent: '#d6b35a', accentSoft: '#f2dfa3', accentGlow: 'rgba(214,179,90,.19)' },
  teal: { accent: '#4fc9b7', accentSoft: '#b9f0e6', accentGlow: 'rgba(79,201,183,.18)' },
  burgundy: { accent: '#d88b9a', accentSoft: '#f0c4cc', accentGlow: 'rgba(216,139,154,.17)' },
  silver: { accent: '#aab8c4', accentSoft: '#e3ebf0', accentGlow: 'rgba(170,184,196,.14)' },
} as const;

export const PAGE_THEME_MAP: PageThemeConfig[] = [
  { path: '/', themeName: 'Home - Navy & Gold', theme: 'default', description: 'Premium home finance and mobility experience', visual: 'gold' },
  { path: '/about', themeName: 'About - Navy & Gold', theme: 'default', description: 'Company story, values and milestones', visual: 'gold' },
  { path: '/contact', themeName: 'Contact - Charcoal & Teal', theme: 'default', description: 'Contact and customer support', visual: 'teal' },

  { path: '/loans', themeName: 'Services - Charcoal & Teal', theme: 'default', description: 'Loan service overview', visual: 'teal' },
  { path: '/home-loan', themeName: 'Home Loan - Navy & Gold', theme: 'home-loan', description: 'Home financing', visual: 'gold' },
  { path: '/car-loan', themeName: 'Car Loan - Charcoal & Burgundy', theme: 'car-loan', description: 'Automotive financing', visual: 'burgundy' },
  { path: '/business-loan', themeName: 'Business Loan - Deep Teal', theme: 'business-loan', description: 'Business financing', visual: 'teal' },
  { path: '/personal-loan', themeName: 'Personal Loan - Steel Blue', theme: 'default', description: 'Personal financing', visual: 'silver' },
  { path: '/two-wheeler-loan', themeName: 'Two Wheeler Loan - Deep Teal', theme: 'car-loan', description: 'Two-wheeler financing', visual: 'teal' },

  { path: '/gold-loan', themeName: 'Gold Resale - Legacy URL', theme: 'gold-loan', description: 'Legacy gold route redirecting to Gold Resale', visual: 'gold' },
  { path: '/sm-gold', themeName: 'SM Gold - Midnight & Gold', theme: 'gold-loan', description: 'SM Gold products and services', visual: 'gold' },
  { path: '/gold-resale', themeName: 'Gold Resale - Midnight & Gold', theme: 'gold-loan', description: 'Gold resale services', visual: 'gold' },
  { path: '/car-resale', themeName: 'Vehicle Resale - Charcoal & Burgundy', theme: 'resale', description: 'Vehicle resale services', visual: 'burgundy' },

  { path: '/insurance', themeName: 'Insurance - Charcoal & Teal', theme: 'insurance', description: 'Insurance overview', visual: 'teal' },
  { path: '/two-wheeler-insurance', themeName: 'Two Wheeler Insurance - Charcoal & Teal', theme: 'insurance', description: 'Insurance coverage', visual: 'teal' },

  { path: '/vehicles', themeName: 'Vehicle Marketplace - Charcoal & Burgundy', theme: 'resale', description: 'Used vehicle marketplace', visual: 'burgundy' },
  { path: '/sell-vehicle', themeName: 'Sell Vehicle - Charcoal & Burgundy', theme: 'resale', description: 'Vehicle resale journey', visual: 'burgundy' },

  { path: '/emi-calculator', themeName: 'EMI Calculator - Midnight & Gold', theme: 'default', description: 'EMI calculator', visual: 'gold' },
  { path: '/loan-application', themeName: 'Loan Application - Deep Teal', theme: 'default', description: 'Loan enquiry and application', visual: 'teal' },
  { path: '/blog', themeName: 'Insights - Navy & Gold', theme: 'default', description: 'Guides and articles', visual: 'gold' },

  { path: '/privacy-policy', themeName: 'Privacy - Midnight & Silver', theme: 'default', description: 'Privacy policy', visual: 'silver' },
  { path: '/terms-conditions', themeName: 'Terms - Midnight & Silver', theme: 'default', description: 'Terms and conditions', visual: 'silver' },
  { path: '/disclaimer', themeName: 'Disclaimer - Midnight & Silver', theme: 'default', description: 'Disclaimer', visual: 'silver' },
];

export function getThemeForPath(path: string): ThemeType {
  return getConfigForPath(path)?.theme || 'default';
}

function getConfigForPath(path: string): PageThemeConfig | undefined {
  return [...PAGE_THEME_MAP]
    .sort((a, b) => b.path.length - a.path.length)
    .find((item) => path === item.path || path.startsWith(item.path + '/'));
}

export function getVisualThemeForPath(path: string) {
  const config = getConfigForPath(path);
  const key = config?.visual || 'gold';
  return { name: key, ...VISUAL_THEMES[key] } as const;
}

export function getAllPageThemes(): PageThemeConfig[] {
  return PAGE_THEME_MAP;
}

export function isPathWithTheme(path: string, theme: ThemeType): boolean {
  return getThemeForPath(path) === theme;
}
