import { useTheme } from '@/contexts/ThemeContext';

export interface ThemeColors {
  // Primary palette
  primaryColor: string;
  primaryLight: string;
  primaryDark: string;
  
  // Accent colors
  accentColor: string;
  accentLight: string;
  accentSoft: string;
  accentHover: string;
  
  // Secondary accents
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
  
  // Borders
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
  
  // Hero
  heroGradient: string;
  heroAccentGlow: string;
}

const CSS_VAR_MAP: Record<keyof ThemeColors, string> = {
  primaryColor: '--primary-color',
  primaryLight: '--primary-light',
  primaryDark: '--primary-dark',
  accentColor: '--accent-color',
  accentLight: '--accent-light',
  accentSoft: '--accent-soft',
  accentHover: '--accent-hover',
  accentSecondary: '--accent-secondary',
  accentTertiary: '--accent-tertiary',
  backgroundColor: '--background-color',
  surfaceColor: '--surface-color',
  surfaceDark: '--surface-dark',
  textPrimary: '--text-primary',
  textSecondary: '--text-secondary',
  textMuted: '--text-muted',
  textDark: '--text-dark',
  textDarkSecondary: '--text-dark-secondary',
  borderColor: '--border-color',
  borderAccent: '--border-accent',
  borderLight: '--border-light',
  headerBg: '--header-bg',
  headerColor: '--header-color',
  footerBg: '--footer-bg',
  footerColor: '--footer-color',
  buttonBg: '--button-bg',
  buttonText: '--button-text',
  buttonHoverShadow: '--button-hover-shadow',
  heroGradient: '--hero-gradient',
  heroAccentGlow: '--hero-accent-glow',
};

/**
 * Hook to access theme colors via CSS variables
 * Automatically updates when theme changes
 */
export const useThemeColors = (): ThemeColors => {
  const { theme } = useTheme();

  const getCSSVariableValue = (varName: string): string => {
    if (typeof window === 'undefined') return '';
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  };

  const colors: ThemeColors = {
    primaryColor: getCSSVariableValue('--primary-color'),
    primaryLight: getCSSVariableValue('--primary-light'),
    primaryDark: getCSSVariableValue('--primary-dark'),
    accentColor: getCSSVariableValue('--accent-color'),
    accentLight: getCSSVariableValue('--accent-light'),
    accentSoft: getCSSVariableValue('--accent-soft'),
    accentHover: getCSSVariableValue('--accent-hover'),
    accentSecondary: getCSSVariableValue('--accent-secondary'),
    accentTertiary: getCSSVariableValue('--accent-tertiary'),
    backgroundColor: getCSSVariableValue('--background-color'),
    surfaceColor: getCSSVariableValue('--surface-color'),
    surfaceDark: getCSSVariableValue('--surface-dark'),
    textPrimary: getCSSVariableValue('--text-primary'),
    textSecondary: getCSSVariableValue('--text-secondary'),
    textMuted: getCSSVariableValue('--text-muted'),
    textDark: getCSSVariableValue('--text-dark'),
    textDarkSecondary: getCSSVariableValue('--text-dark-secondary'),
    borderColor: getCSSVariableValue('--border-color'),
    borderAccent: getCSSVariableValue('--border-accent'),
    borderLight: getCSSVariableValue('--border-light'),
    headerBg: getCSSVariableValue('--header-bg'),
    headerColor: getCSSVariableValue('--header-color'),
    footerBg: getCSSVariableValue('--footer-bg'),
    footerColor: getCSSVariableValue('--footer-color'),
    buttonBg: getCSSVariableValue('--button-bg'),
    buttonText: getCSSVariableValue('--button-text'),
    buttonHoverShadow: getCSSVariableValue('--button-hover-shadow'),
    heroGradient: getCSSVariableValue('--hero-gradient'),
    heroAccentGlow: getCSSVariableValue('--hero-accent-glow'),
  };

  return colors;
};

/**
 * Hook to access theme colors as CSS variable strings
 * Useful for inline styles and dynamic className generation
 */
export const useThemeCSSVariables = () => {
  const { theme } = useTheme();

  return {
    primaryColor: 'var(--primary-color)',
    primaryLight: 'var(--primary-light)',
    primaryDark: 'var(--primary-dark)',
    accentColor: 'var(--accent-color)',
    accentLight: 'var(--accent-light)',
    accentSoft: 'var(--accent-soft)',
    accentHover: 'var(--accent-hover)',
    accentSecondary: 'var(--accent-secondary)',
    accentTertiary: 'var(--accent-tertiary)',
    backgroundColor: 'var(--background-color)',
    surfaceColor: 'var(--surface-color)',
    surfaceDark: 'var(--surface-dark)',
    textPrimary: 'var(--text-primary)',
    textSecondary: 'var(--text-secondary)',
    textMuted: 'var(--text-muted)',
    textDark: 'var(--text-dark)',
    textDarkSecondary: 'var(--text-dark-secondary)',
    borderColor: 'var(--border-color)',
    borderAccent: 'var(--border-accent)',
    borderLight: 'var(--border-light)',
    headerBg: 'var(--header-bg)',
    headerColor: 'var(--header-color)',
    footerBg: 'var(--footer-bg)',
    footerColor: 'var(--footer-color)',
    buttonBg: 'var(--button-bg)',
    buttonText: 'var(--button-text)',
    buttonHoverShadow: 'var(--button-hover-shadow)',
    heroGradient: 'var(--hero-gradient)',
    heroAccentGlow: 'var(--hero-accent-glow)',
  };
};
