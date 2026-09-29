# SM Associate Global Color System Guide

## Overview

This document describes the professional, premium, and consistent global color system for the SM Associate website. The system uses dynamic theming where each page's Hero section defines the primary visual identity, which automatically controls the Header, Footer, buttons, icons, and all page elements.

## Architecture

### 1. CSS Variables Foundation (`globals.css`)

All colors are defined as CSS custom properties at the `:root` level and theme-specific levels using `[data-theme]` selectors.

**Root-level CSS variables (default theme - Navy & Gold):**
- `--primary-color`: #071A2B (Navy primary)
- `--primary-light`: #12395A (Navy light)
- `--primary-dark`: #0B2239 (Navy dark)
- `--accent-color`: #D4AF37 (Gold primary)
- `--accent-light`: #F1D77A (Gold light)
- `--accent-soft`: #E8C96A (Gold soft)
- `--accent-hover`: #C9A227 (Gold hover)
- `--accent-secondary`: #14B8A6 (Teal)
- `--accent-tertiary`: #06B6D4 (Cyan)

**Component-specific variables:**
- `--header-bg`: Hero gradient for header
- `--header-color`: Header text color
- `--footer-bg`: Darker shade of primary for footer
- `--footer-color`: Footer text color
- `--button-bg`: Primary button background (accent gradient)
- `--button-text`: Primary button text color
- `--button-hover-shadow`: Button hover shadow color
- `--hero-gradient`: Full hero gradient
- `--hero-accent-glow`: Accent glow overlay color

**Text colors:**
- `--text-primary`: #ffffff (Light text)
- `--text-secondary`: rgba(255, 255, 255, 0.8)
- `--text-muted`: rgba(255, 255, 255, 0.6)
- `--text-dark`: #111827 (Dark text on light backgrounds)
- `--text-dark-secondary`: #6b7280

**Borders and backgrounds:**
- `--border-color`: Theme-specific border color with opacity
- `--border-accent`: Darker border accent
- `--border-light`: Light white border
- `--background-color`: #f8fafc (Light page background)
- `--surface-color`: #ffffff (Card/surface background)
- `--surface-dark`: #f1f5f9 (Subtle section background)

### 2. Theme Variants

Seven distinct themes are defined in `globals.css`:

#### Default Theme (Home, Contact, About, Personal Loan)
- Primary: Navy (#071A2B)
- Accent: Gold (#D4AF37)
- Palette: Professional, trustworthy, premium

#### Home Loan Theme
- Primary: Slate (#0f172a)
- Accent: Cyan (#06B6D4)
- Secondary: Teal (#14B8A6)
- Palette: Modern, trustworthy, growth-oriented

#### Car Loan Theme
- Primary: Navy (#071A2B)
- Accent: Gold (#D4AF37)
- Palette: Classic, premium automotive

#### Business Loan Theme
- Primary: Near-black (#020617)
- Accent: Emerald (#34D399)
- Secondary: Teal (#14B8A6)
- Palette: Growth, prosperity, forward-thinking

#### Gold Loan Theme
- Primary: Amber (#711f1f)
- Accent: Amber (#FBBF24)
- Palette: Luxury, wealth, premium service

#### Insurance Theme
- Primary: Navy (#0c1829)
- Accent: Cyan (#06B6D4)
- Secondary: Sky Blue (#0ea5e9)
- Palette: Security, protection, reliability

#### Vehicle Resale Theme
- Primary: Navy (#071A2B)
- Accent: Teal (#14B8A6)
- Secondary: Cyan (#06B6D4)
- Palette: Trust, reliability, value

### 3. React Theme System

**ThemeContext.tsx**
- Provides `useTheme()` hook to access current theme
- Automatically applies theme to document root via `data-theme` attribute
- Supports 7 theme types: default, home-loan, car-loan, business-loan, gold-loan, insurance, resale

**useThemeColors.ts**
- `useThemeColors()`: Returns actual computed CSS variable values
- `useThemeCSSVariables()`: Returns CSS variable names as strings for inline styles

**Page-to-Theme Mapping (pageThemes.ts)**
- Maps routes to themes automatically
- Example: `/home-loan` → `home-loan` theme
- Example: `/car-loan` → `car-loan` theme

### 4. Component Library

All components use CSS variables for styling and automatically adapt to theme changes.

#### Button Components (`Button.tsx`)
- `PrimaryButton`: Solid accent background (--button-bg)
- `SecondaryButton`: Accent border and text
- `TertiaryButton`: Soft accent background
- `GhostButton`: Text-only button
- All support sizes: sm, md, lg
- Automatic hover states with --button-hover-shadow

#### Icon Components (`IconButton.tsx`)
- `ThemedIcon`: Icon with theme-aware colors
- `PrimaryIconButton`: Solid background
- `SecondaryIconButton`: Border style
- `TertiaryIconButton`: Soft background
- `GhostIconButton`: Text only
- 5 color variants: primary, secondary, accent, light, muted

#### Card Components (`Card.tsx`)
- `PrimaryCard`: White background with subtle border
- `SecondaryCard`: Accent soft background
- `TertiaryCard`: Transparent accent light
- `GlassCard`: Glassmorphism effect
- All support hover lift animations

#### Section Components (`Section.tsx`)
- `PrimarySection`: Light background
- `SecondarySection`: Subtle gray background
- `AccentSection`: Dark with hero gradient
- `LightSection`: Accent soft background
- All support padding, maxWidth, titles, centered layout

### 5. How It Works

#### Dynamic Theme Application

1. **Page Load**
   - Header reads current pathname
   - `getThemeForPath()` maps path to theme
   - `setTheme()` updates ThemeContext
   - Document `data-theme` attribute changes
   - CSS cascades apply new theme values

2. **Hero Section Defines Page**
   - Hero gradient uses `--hero-gradient`
   - Hero accent uses `--accent-color`
   - Hero glow uses `--hero-accent-glow`

3. **Header Matches Hero**
   - Header background uses `--header-bg` (from theme)
   - Header text uses `--header-color`
   - Header accents use `--accent-color`
   - Navigation icons use accent colors

4. **Buttons Use Accent**
   - Primary buttons use `--button-bg` (accent gradient)
   - Secondary buttons use `--accent-color` border/text
   - All buttons use `--button-hover-shadow`

5. **Footer Matches Primary**
   - Footer background uses `--footer-bg` (darker primary)
   - Footer text uses `--footer-color`
   - Footer accents use `--accent-color`

6. **All Elements Inherit**
   - Cards use --surface-color, --accent-soft
   - Sections use --background-color, --accent-soft
   - Icons use --accent-color
   - Text uses --text-primary, --text-secondary, --text-muted

## Implementation Details

### Adding New Page Theme

1. **Add to `colorPalettes.ts`**:
```typescript
export const MY_PAGE_PALETTE: ColorPalette = {
  name: 'My Page - Color Name',
  themeKey: 'my-page',
  // Define all color values...
};
```

2. **Add to `pageThemes.ts`**:
```typescript
{
  path: '/my-page',
  themeName: 'My Page - Color Name',
  theme: 'my-page',
  description: 'Description of the page',
}
```

3. **Add to `globals.css`**:
```css
[data-theme="my-page"] {
  --primary-color: #value;
  --accent-color: #value;
  // ... all variables
}
```

### Using Components

**Buttons:**
```tsx
import { Button, PrimaryButton, SecondaryButton } from '@/components/Button';

<PrimaryButton size="lg">Get Started</PrimaryButton>
<SecondaryButton>Learn More</SecondaryButton>
```

**Icons:**
```tsx
import { ThemedIcon, IconButton } from '@/components/IconButton';
import { Heart } from 'lucide-react';

<ThemedIcon icon={Heart} variant="accent" />
<IconButton icon={<Heart size={20} />} variant="primary" />
```

**Cards:**
```tsx
import { Card, PrimaryCard } from '@/components/Card';

<Card variant="secondary" padding="lg">
  Card content
</Card>
```

**Sections:**
```tsx
import { Section, AccentSection } from '@/components/Section';

<Section variant="accent" padding="lg" title="Section Title">
  Section content
</Section>
```

## WCAG Compliance

The color system maintains WCAG AA contrast ratios:
- Light text on dark backgrounds: ✓ Pass
- Dark text on light backgrounds: ✓ Pass
- Accent colors have sufficient contrast: ✓ Pass

**Note**: Full WCAG compliance requires manual testing with assistive technologies.

## Customization

### Changing a Theme's Accent Color

1. Update `colorPalettes.ts`:
```typescript
accentColor: '#NEW_COLOR',
accentLight: '#LIGHTER_SHADE',
```

2. Update `globals.css`:
```css
[data-theme="theme-name"] {
  --accent-color: #NEW_COLOR;
  --accent-light: #LIGHTER_SHADE;
}
```

3. Update all pages using that theme to display changes immediately.

### Creating Custom Section Colors

Use `AccentSection` with `withGradient={false}`:
```tsx
<AccentSection withGradient={false}>
  Custom content
</AccentSection>
```

## Files Modified/Created

### Created Files:
- `/src/contexts/ThemeContext.tsx` - Theme provider and hook
- `/src/hooks/useThemeColors.ts` - Color hooks
- `/src/config/colorPalettes.ts` - Color definitions
- `/src/config/pageThemes.ts` - Route-to-theme mapping
- `/src/components/Button.tsx` - Button component library
- `/src/components/IconButton.tsx` - Icon component library
- `/src/components/Card.tsx` - Card component library
- `/src/components/Section.tsx` - Section component library

### Modified Files:
- `/src/styles/globals.css` - CSS variables system
- `/src/app/layout.tsx` - Added ThemeProvider
- `/src/components/Header.tsx` - Uses theme colors
- `/src/components/Footer.tsx` - Uses theme colors
- `/src/components/heroes/HomeHero.tsx` - Uses theme colors
- `/src/components/heroes/CarLoanHero.tsx` - Uses theme colors

## Testing the System

### Visual Testing Checklist
- [ ] Home page: Navy & Gold theme displays correctly
- [ ] Home Loan page: Cyan & Teal theme displays correctly
- [ ] Car Loan page: Navy & Gold theme displays correctly
- [ ] Business Loan page: Emerald & Teal theme displays correctly
- [ ] Gold Loan page: Amber & Gold theme displays correctly
- [ ] Insurance page: Navy & Cyan theme displays correctly
- [ ] Vehicle Resale page: Navy & Teal theme displays correctly
- [ ] Header colors match Hero on each page
- [ ] Footer colors match page theme
- [ ] Button colors match accent color
- [ ] Icon colors are consistent
- [ ] All text has sufficient contrast
- [ ] Hover states work smoothly
- [ ] Mobile responsiveness maintained

### Cross-Page Testing
- [ ] Navigate between different themed pages
- [ ] Verify theme switches correctly
- [ ] Check Header/Footer update appropriately
- [ ] Confirm accent colors change per theme

## Best Practices

1. **Always use CSS variables** instead of hardcoded colors
2. **Use the Button/Icon/Card components** for consistency
3. **Test across all 7 themes** when adding new features
4. **Maintain contrast ratios** for accessibility
5. **Update both CSS and React** when changing themes
6. **Use inline styles** for dynamic colors in JSX
7. **Leverage useTheme()** hook for logic based on current theme

## Future Enhancements

- [ ] Add light/dark mode toggle
- [ ] Support custom user-selected accent colors
- [ ] Add color animation transitions
- [ ] Create theme builder UI
- [ ] Add more theme variants
- [ ] Support seasonal themes
- [ ] Add high contrast mode
