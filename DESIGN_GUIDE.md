# SM Associate & Cars - Premium Design System

## Color Palette

### Primary Colors
```
Deep Navy        #071A2B    - Primary background, header, footer
Navy Dark        #0B2239    - Secondary background, overlays
Navy Royal       #12395A    - Accent backgrounds, borders
```

### Gold/Accent Colors
```
Metallic Gold    #D4AF37    - Primary CTA buttons, icons, highlights
Gold Light       #F1D77A    - Secondary highlights, badges
Gold Soft        #E8C96A    - Hover states, light accents
```

### Neutral Colors
```
White            #FFFFFF    - Pure white for contrast
Off White        #F7F8FA    - Background for white sections
Dark Text        #111827    - Primary text
Muted Text       #64748B    - Secondary text, descriptions
```

## Typography System

### Headings
- **H1 (Hero)**: 48-72px, Font-black, Leading-tight
- **H2 (Section)**: 40-60px, Font-black, Leading-tight  
- **H3 (Card)**: 20-32px, Font-bold, Leading-snug
- **H4 (Subheading)**: 16-20px, Font-semibold

### Body Text
- **Lead**: 18-20px, Font-medium
- **Body**: 16px, Font-medium
- **Small**: 14px, Font-medium
- **Caption**: 12px, Font-semibold

### Font Family
- Primary: Plus Jakarta Sans
- Fallback: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto

## Component Styling

### Buttons

#### Primary Button (CTA)
- Background: Gold gradient (#D4AF37 → #F1D77A)
- Text: Navy, Font-bold
- Padding: px-8 py-4
- Rounded: rounded-xl
- Hover: shadow-lg, shadow-gold-primary/50, scale-105

#### Secondary Button
- Background: Transparent
- Border: 2px border-gold-primary
- Text: Gold, Font-bold
- Padding: px-8 py-4
- Hover: bg-gold-primary/10

### Cards

#### Premium Card
- Background: White or Off-white
- Border: 1px border-gold-primary/10
- Rounded: rounded-2xl or rounded-3xl
- Shadow: shadow-lg
- Hover: shadow-2xl shadow-gold-primary/20, -translate-y-2, border-gold-primary/50

#### Icon Container
- Background: Gold gradient
- Text: Navy
- Size: w-14 h-14 or w-16 h-16
- Rounded: rounded-xl
- Hover: scale-110, shadow-lg shadow-gold-primary/50

### Badges

#### Badge Container
- Background: gold-primary/10
- Border: border-gold-primary/30
- Padding: px-4 py-2
- Rounded: rounded-full
- Text: text-gold-primary, Font-semibold, Tracking-wide

## Section Layouts

### Hero Section
- Full viewport height (min-h-screen)
- Background: gradient-navy-accent
- Layout: 2-column on desktop, 1-column on mobile
- Left: Content (60%)
- Right: Visual (40%)

### Content Section (White)
- Background: white
- Padding: py-20
- Max-width: 7xl
- Accent circles: bg-gold-primary/10, blur-3xl, opacity-10

### Accent Section (Navy)
- Background: gradient-navy-accent
- Padding: py-20 to py-28
- Text: white, headings in gold
- Cards: Navy with gold borders

## Spacing System

### Padding
- Section vertical: py-20 (80px)
- Section horizontal: px-4 sm:px-6 lg:px-8
- Component: p-6 to p-8
- Small: p-3 to p-4

### Margins
- Section gap: gap-12 to gap-16
- Component gap: gap-4 to gap-8
- Text spacing: mb-4, mt-4

## Animation Keyframes

### Fade-up
```css
0%: opacity 0, translateY(20px)
100%: opacity 1, translateY(0)
```

### Float
```css
0%, 100%: translateY(0)
50%: translateY(-20px)
```

### Float-delayed
```css
0%, 100%: translateY(0), rotate(0)
50%: translateY(-20px), rotate(2deg)
```

### Pulse-soft
```css
0%, 100%: opacity 1
50%: opacity 0.5
```

### Bounce-soft
```css
0%, 100%: translateY(0)
50%: translateY(-10px)
```

## Responsive Breakpoints

### Mobile First
- Small (< 640px): Single column, optimized touch
- Medium (640-1024px): 2 columns, compact spacing
- Large (> 1024px): 3 columns, premium spacing

### Grid Systems
- 1 column on mobile
- 2 columns on tablet
- 3-4 columns on desktop

## Hover States

### Links
- Color: text-gold-primary
- Transition: duration-300
- Arrow animation: translate-x-1

### Cards
- Shadow: shadow-2xl shadow-gold-primary/20
- Transform: -translate-y-2
- Border: border-gold-primary/50
- Background: slight gradient glow

### Buttons
- Scale: scale-105
- Shadow: shadow-lg shadow-gold-primary/50
- Color shifts: color transitions

## Visual Patterns

### Section Dividers
- Gradient line: from-transparent via-gold-primary to-transparent
- Height: h-1
- Max-width: max-w-2xl mx-auto
- Margin: mt-16

### Corner Accents
- Background: gold-primary/10
- Size: w-20 h-20
- Blur: blur-2xl
- Opacity: opacity-0 on default, opacity-100 on hover

### Accent Circles
- Background: bg-gold-primary/10
- Size: w-96 h-96
- Blur: blur-3xl
- Opacity: opacity-10
- Position: scattered in background

## Gradient Definitions

### Navy Gradient
```
linear-gradient(135deg, #071A2B 0%, #0B2239 100%)
linear-gradient(135deg, #071A2B 0%, #12395A 100%)
```

### Gold Gradient
```
linear-gradient(135deg, #D4AF37 0%, #F1D77A 100%)
```

### Accent Gradient
```
linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)
```

## Shadow System

### Light Shadow
- shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
- shadow-md: 0 4px 6px rgba(0,0,0,0.1)

### Medium Shadow
- shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
- shadow-xl: 0 20px 25px rgba(0,0,0,0.1)

### Premium Shadow
- shadow-2xl with shadow-gold-primary/20
- Creates golden glow effect on hover

## Border Radius

- Small components: rounded-lg (8px)
- Medium components: rounded-xl (12px)
- Large components: rounded-2xl (16px)
- Hero/Featured: rounded-3xl (24px)

## Transparency & Backdrop

### Blur Effects
- backdrop-blur-sm: blur(4px)
- backdrop-blur-md: blur(12px)
- backdrop-blur-lg: blur(16px)
- backdrop-blur-xl: blur(24px)

### Opacity Levels
- Subtle: opacity-10, opacity-20
- Visible: opacity-50, opacity-60
- Strong: opacity-80, opacity-90

## Implementation Notes

1. **Always use the gold palette** for CTAs and highlights
2. **Maintain whitespace** for premium feel
3. **Use animations sparingly** for performance
4. **Test on mobile first**, then enhance desktop
5. **Ensure WCAG AA contrast** on all text
6. **Use semantic HTML** for accessibility
7. **Optimize images** with Next.js Image component
8. **Keep consistent spacing** throughout

## Color Codes Reference

| Element | Light | Dark |
|---------|-------|------|
| Primary Background | #F7F8FA | #071A2B |
| Secondary Background | #FFFFFF | #0B2239 |
| Text | #111827 | #FFFFFF |
| Accent | #D4AF37 | #F1D77A |
| Border | #D4AF37/20 | #D4AF37/30 |
| Hover | #D4AF37/10 | #D4AF37/10 |

---

**Last Updated**: September 2026  
**Version**: 1.0  
**Status**: Production Ready
