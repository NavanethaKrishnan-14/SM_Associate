/**
 * Professional Color Palettes for SM Associate
 * Each palette defines a complete theme with primary, accent, and supporting colors
 */

export interface ColorPalette {
  name: string;
  themeKey: string;
  description: string;
  
  // Primary palette
  primaryColor: string;
  primaryLight: string;
  primaryDark: string;
  
  // Accent colors (main brand color for this page)
  accentColor: string;
  accentLight: string;
  accentSoft: string;
  accentHover: string;
  
  // Secondary accents for depth
  accentSecondary: string;
  accentTertiary: string;
  
  // Backgrounds
  backgroundColor: string;
  surfaceColor: string;
  surfaceDark: string;
  
  // Text colors
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textDark: string;
  textDarkSecondary: string;
  
  // Borders & dividers
  borderColor: string;
  borderAccent: string;
  borderLight: string;
  
  // Component-specific
  headerBg: string;
  headerColor: string;
  footerBg: string;
  footerColor: string;
  buttonBg: string;
  buttonText: string;
  buttonHoverShadow: string;
  
  // Hero-specific
  heroGradient: string;
  heroAccentGlow: string;
}

// Default Theme - Navy & Gold (Premium, trustworthy, professional)
export const DEFAULT_PALETTE: ColorPalette = {
  name: 'Default - Navy & Gold',
  themeKey: 'default',
  description: 'Primary brand theme - Navy background with gold accents. Premium, trustworthy, and professional.',
  
  primaryColor: '#071A2B',      // Navy primary
  primaryLight: '#12395A',      // Navy light
  primaryDark: '#0B2239',       // Navy dark
  
  accentColor: '#D4AF37',       // Gold primary
  accentLight: '#F1D77A',       // Gold light
  accentSoft: '#E8C96A',        // Gold soft
  accentHover: '#C9A227',       // Gold hover
  
  accentSecondary: '#14B8A6',   // Teal
  accentTertiary: '#06B6D4',    // Cyan
  
  backgroundColor: '#f8fafc',
  surfaceColor: '#ffffff',
  surfaceDark: '#f1f5f9',
  
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.8)',
  textMuted: 'rgba(255, 255, 255, 0.6)',
  textDark: '#111827',
  textDarkSecondary: '#6b7280',
  
  borderColor: 'rgba(212, 175, 55, 0.2)',
  borderAccent: 'rgba(212, 175, 55, 0.3)',
  borderLight: 'rgba(255, 255, 255, 0.1)',
  
  headerBg: 'linear-gradient(135deg, #071A2B 0%, #12395A 100%)',
  headerColor: '#ffffff',
  footerBg: 'linear-gradient(135deg, #0B2239 0%, #071A2B 100%)',
  footerColor: '#ffffff',
  buttonBg: 'linear-gradient(135deg, #D4AF37 0%, #F1D77A 100%)',
  buttonText: '#071A2B',
  buttonHoverShadow: 'rgba(212, 175, 55, 0.5)',
  
  heroGradient: 'linear-gradient(135deg, #071A2B 0%, #12395A 100%)',
  heroAccentGlow: 'rgba(212, 175, 55, 0.4)',
};

// Home Loan Theme - Cyan & Teal (Modern, trustworthy, growth-oriented)
export const HOME_LOAN_PALETTE: ColorPalette = {
  name: 'Home Loan - Cyan & Teal',
  themeKey: 'home-loan',
  description: 'Home financing theme - Cool blues and teals convey trust, stability, and growth.',
  
  primaryColor: '#0f172a',      // Slate 900
  primaryLight: '#1e293b',      // Slate 800
  primaryDark: '#020617',       // Slate 950
  
  accentColor: '#06B6D4',       // Cyan primary
  accentLight: '#67e8f9',       // Cyan light
  accentSoft: '#22d3ee',        // Cyan soft
  accentHover: '#0891b2',       // Cyan hover
  
  accentSecondary: '#14B8A6',   // Teal
  accentTertiary: '#0ea5e9',    // Sky blue
  
  backgroundColor: '#f8fafc',
  surfaceColor: '#ffffff',
  surfaceDark: '#f1f5f9',
  
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.8)',
  textMuted: 'rgba(255, 255, 255, 0.6)',
  textDark: '#111827',
  textDarkSecondary: '#6b7280',
  
  borderColor: 'rgba(6, 182, 212, 0.2)',
  borderAccent: 'rgba(6, 182, 212, 0.3)',
  borderLight: 'rgba(255, 255, 255, 0.1)',
  
  headerBg: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  headerColor: '#ffffff',
  footerBg: 'linear-gradient(135deg, #020617 0%, #0f172a 100%)',
  footerColor: '#ffffff',
  buttonBg: 'linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%)',
  buttonText: '#ffffff',
  buttonHoverShadow: 'rgba(6, 182, 212, 0.5)',
  
  heroGradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  heroAccentGlow: 'rgba(6, 182, 212, 0.4)',
};

// Car Loan Theme - Navy & Gold (Same as default - consistency)
export const CAR_LOAN_PALETTE: ColorPalette = {
  name: 'Car Loan - Navy & Gold',
  themeKey: 'car-loan',
  description: 'Vehicle financing theme - Classic navy and gold for premium, trustworthy automotive services.',
  
  primaryColor: '#071A2B',      // Navy primary
  primaryLight: '#12395A',      // Navy light
  primaryDark: '#0B2239',       // Navy dark
  
  accentColor: '#D4AF37',       // Gold primary
  accentLight: '#F1D77A',       // Gold light
  accentSoft: '#E8C96A',        // Gold soft
  accentHover: '#C9A227',       // Gold hover
  
  accentSecondary: '#14B8A6',   // Teal
  accentTertiary: '#06B6D4',    // Cyan
  
  backgroundColor: '#f8fafc',
  surfaceColor: '#ffffff',
  surfaceDark: '#f1f5f9',
  
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.8)',
  textMuted: 'rgba(255, 255, 255, 0.6)',
  textDark: '#111827',
  textDarkSecondary: '#6b7280',
  
  borderColor: 'rgba(212, 175, 55, 0.2)',
  borderAccent: 'rgba(212, 175, 55, 0.3)',
  borderLight: 'rgba(255, 255, 255, 0.1)',
  
  headerBg: 'linear-gradient(135deg, #071A2B 0%, #12395A 100%)',
  headerColor: '#ffffff',
  footerBg: 'linear-gradient(135deg, #0B2239 0%, #071A2B 100%)',
  footerColor: '#ffffff',
  buttonBg: 'linear-gradient(135deg, #D4AF37 0%, #F1D77A 100%)',
  buttonText: '#071A2B',
  buttonHoverShadow: 'rgba(212, 175, 55, 0.5)',
  
  heroGradient: 'linear-gradient(135deg, #071A2B 0%, #12395A 100%)',
  heroAccentGlow: 'rgba(212, 175, 55, 0.4)',
};

// Business Loan Theme - Emerald & Teal (Growth, prosperity, forward-thinking)
export const BUSINESS_LOAN_PALETTE: ColorPalette = {
  name: 'Business Loan - Emerald & Teal',
  themeKey: 'business-loan',
  description: 'Business financing theme - Emerald and teal symbolize growth, prosperity, and forward-thinking ventures.',
  
  primaryColor: '#020617',      // Slate 950
  primaryLight: '#1e3a1f',      // Emerald 900
  primaryDark: '#030712',       // Near black
  
  accentColor: '#34D399',       // Emerald primary
  accentLight: '#6ee7b7',       // Emerald light
  accentSoft: '#a7f3d0',        // Emerald soft
  accentHover: '#059669',       // Emerald hover
  
  accentSecondary: '#14B8A6',   // Teal
  accentTertiary: '#06B6D4',    // Cyan
  
  backgroundColor: '#f8fafc',
  surfaceColor: '#ffffff',
  surfaceDark: '#f1f5f9',
  
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.8)',
  textMuted: 'rgba(255, 255, 255, 0.6)',
  textDark: '#111827',
  textDarkSecondary: '#6b7280',
  
  borderColor: 'rgba(52, 211, 153, 0.2)',
  borderAccent: 'rgba(52, 211, 153, 0.3)',
  borderLight: 'rgba(255, 255, 255, 0.1)',
  
  headerBg: 'linear-gradient(135deg, #020617 0%, #1e3a1f 100%)',
  headerColor: '#ffffff',
  footerBg: 'linear-gradient(135deg, #030712 0%, #020617 100%)',
  footerColor: '#ffffff',
  buttonBg: 'linear-gradient(135deg, #34D399 0%, #14B8A6 100%)',
  buttonText: '#ffffff',
  buttonHoverShadow: 'rgba(52, 211, 153, 0.5)',
  
  heroGradient: 'linear-gradient(135deg, #020617 0%, #1e3a1f 100%)',
  heroAccentGlow: 'rgba(52, 211, 153, 0.4)',
};

// Gold Loan Theme - Amber & Gold (Luxury, wealth, premium)
export const GOLD_LOAN_PALETTE: ColorPalette = {
  name: 'Gold Loan - Amber & Gold',
  themeKey: 'gold-loan',
  description: 'Gold financing theme - Warm ambers and golds convey luxury, wealth, and premium service.',
  
  primaryColor: '#711f1f',      // Amber 900
  primaryLight: '#92400e',      // Amber 800
  primaryDark: '#451a03',       // Amber 950
  
  accentColor: '#FBBF24',       // Amber primary
  accentLight: '#fcd34d',       // Amber light
  accentSoft: '#fde68a',        // Amber soft
  accentHover: '#d97706',       // Amber hover
  
  accentSecondary: '#14B8A6',   // Teal
  accentTertiary: '#06B6D4',    // Cyan
  
  backgroundColor: '#f8fafc',
  surfaceColor: '#ffffff',
  surfaceDark: '#f1f5f9',
  
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.8)',
  textMuted: 'rgba(255, 255, 255, 0.6)',
  textDark: '#111827',
  textDarkSecondary: '#6b7280',
  
  borderColor: 'rgba(251, 191, 36, 0.2)',
  borderAccent: 'rgba(251, 191, 36, 0.3)',
  borderLight: 'rgba(255, 255, 255, 0.1)',
  
  headerBg: 'linear-gradient(135deg, #711f1f 0%, #92400e 100%)',
  headerColor: '#ffffff',
  footerBg: 'linear-gradient(135deg, #451a03 0%, #711f1f 100%)',
  footerColor: '#ffffff',
  buttonBg: 'linear-gradient(135deg, #FBBF24 0%, #fde68a 100%)',
  buttonText: '#111827',
  buttonHoverShadow: 'rgba(251, 191, 36, 0.5)',
  
  heroGradient: 'linear-gradient(135deg, #711f1f 0%, #92400e 100%)',
  heroAccentGlow: 'rgba(251, 191, 36, 0.4)',
};

// Insurance Theme - Navy & Cyan (Security, protection, reliability)
export const INSURANCE_PALETTE: ColorPalette = {
  name: 'Insurance - Navy & Cyan',
  themeKey: 'insurance',
  description: 'Insurance theme - Navy and cyan convey security, protection, and reliable coverage.',
  
  primaryColor: '#0c1829',      // Navy 900
  primaryLight: '#1a2f4a',      // Navy 800
  primaryDark: '#051116',       // Navy 950
  
  accentColor: '#06B6D4',       // Cyan primary
  accentLight: '#67e8f9',       // Cyan light
  accentSoft: '#a5f3fc',        // Cyan soft
  accentHover: '#0891b2',       // Cyan hover
  
  accentSecondary: '#14B8A6',   // Teal
  accentTertiary: '#0ea5e9',    // Sky blue
  
  backgroundColor: '#f8fafc',
  surfaceColor: '#ffffff',
  surfaceDark: '#f1f5f9',
  
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.8)',
  textMuted: 'rgba(255, 255, 255, 0.6)',
  textDark: '#111827',
  textDarkSecondary: '#6b7280',
  
  borderColor: 'rgba(6, 182, 212, 0.2)',
  borderAccent: 'rgba(6, 182, 212, 0.3)',
  borderLight: 'rgba(255, 255, 255, 0.1)',
  
  headerBg: 'linear-gradient(135deg, #0c1829 0%, #1a2f4a 100%)',
  headerColor: '#ffffff',
  footerBg: 'linear-gradient(135deg, #051116 0%, #0c1829 100%)',
  footerColor: '#ffffff',
  buttonBg: 'linear-gradient(135deg, #06B6D4 0%, #0ea5e9 100%)',
  buttonText: '#ffffff',
  buttonHoverShadow: 'rgba(6, 182, 212, 0.5)',
  
  heroGradient: 'linear-gradient(135deg, #0c1829 0%, #1a2f4a 100%)',
  heroAccentGlow: 'rgba(6, 182, 212, 0.4)',
};

// Vehicle Resale Theme - Navy & Teal (Trust, reliability, value)
export const RESALE_PALETTE: ColorPalette = {
  name: 'Vehicle Resale - Navy & Teal',
  themeKey: 'resale',
  description: 'Vehicle resale theme - Navy and teal convey trust, reliability, and value in pre-owned vehicles.',
  
  primaryColor: '#071A2B',      // Navy primary
  primaryLight: '#12395A',      // Navy light
  primaryDark: '#0B2239',       // Navy dark
  
  accentColor: '#14B8A6',       // Teal primary
  accentLight: '#5eead4',       // Teal light
  accentSoft: '#99f6e4',        // Teal soft
  accentHover: '#0d9488',       // Teal hover
  
  accentSecondary: '#06B6D4',   // Cyan
  accentTertiary: '#14B8A6',    // Teal
  
  backgroundColor: '#f8fafc',
  surfaceColor: '#ffffff',
  surfaceDark: '#f1f5f9',
  
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.8)',
  textMuted: 'rgba(255, 255, 255, 0.6)',
  textDark: '#111827',
  textDarkSecondary: '#6b7280',
  
  borderColor: 'rgba(20, 184, 166, 0.2)',
  borderAccent: 'rgba(20, 184, 166, 0.3)',
  borderLight: 'rgba(255, 255, 255, 0.1)',
  
  headerBg: 'linear-gradient(135deg, #071A2B 0%, #12395A 100%)',
  headerColor: '#ffffff',
  footerBg: 'linear-gradient(135deg, #0B2239 0%, #071A2B 100%)',
  footerColor: '#ffffff',
  buttonBg: 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
  buttonText: '#ffffff',
  buttonHoverShadow: 'rgba(20, 184, 166, 0.5)',
  
  heroGradient: 'linear-gradient(135deg, #071A2B 0%, #12395A 100%)',
  heroAccentGlow: 'rgba(20, 184, 166, 0.4)',
};

// Map of all palettes
export const ALL_PALETTES: Record<string, ColorPalette> = {
  default: DEFAULT_PALETTE,
  'home-loan': HOME_LOAN_PALETTE,
  'car-loan': CAR_LOAN_PALETTE,
  'business-loan': BUSINESS_LOAN_PALETTE,
  'gold-loan': GOLD_LOAN_PALETTE,
  insurance: INSURANCE_PALETTE,
  resale: RESALE_PALETTE,
};

/**
 * Get palette by theme key
 */
export function getPaletteByTheme(themeKey: string): ColorPalette {
  return ALL_PALETTES[themeKey] || DEFAULT_PALETTE;
}
