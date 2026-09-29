import React, { ReactNode, HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'glass';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const paddingClasses = {
  sm: 'p-3',
  md: 'p-6',
  lg: 'p-8',
};

/**
 * Primary Card - Solid background with theme accent border
 */
export const PrimaryCard: React.FC<CardProps> = ({
  children,
  padding = 'md',
  hover = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-xl transition-all duration-300 ${paddingClasses[padding]} ${hover ? 'hover:shadow-lg' : ''} ${className}`}
      style={{
        backgroundColor: 'var(--surface-color)',
        borderWidth: '1px',
        borderColor: 'var(--border-light)',
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Secondary Card - Subtle background with accent border
 */
export const SecondaryCard: React.FC<CardProps> = ({
  children,
  padding = 'md',
  hover = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-xl transition-all duration-300 border ${paddingClasses[padding]} ${hover ? 'hover:shadow-lg' : ''} ${className}`}
      style={{
        backgroundColor: 'var(--accent-soft)',
        borderColor: 'var(--border-accent)',
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Tertiary Card - Accent light background
 */
export const TertiaryCard: React.FC<CardProps> = ({
  children,
  padding = 'md',
  hover = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-xl transition-all duration-300 border ${paddingClasses[padding]} ${hover ? 'hover:shadow-lg' : ''} ${className}`}
      style={{
        backgroundColor: 'var(--accent-light)',
        borderColor: 'var(--border-accent)',
        opacity: 0.15,
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
          e.currentTarget.style.opacity = '0.2';
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.opacity = '0.15';
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Glass Card - Glassmorphism effect
 */
export const GlassCard: React.FC<CardProps> = ({
  children,
  padding = 'md',
  hover = true,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-xl transition-all duration-300 border backdrop-blur-md ${paddingClasses[padding]} ${hover ? 'hover:shadow-lg' : ''} ${className}`}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Flexible Card Component - Choose variant
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  switch (variant) {
    case 'secondary':
      return <SecondaryCard {...props}>{children}</SecondaryCard>;
    case 'tertiary':
      return <TertiaryCard {...props}>{children}</TertiaryCard>;
    case 'glass':
      return <GlassCard {...props}>{children}</GlassCard>;
    default:
      return <PrimaryCard {...props}>{children}</PrimaryCard>;
  }
};

export default Card;
