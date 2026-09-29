import React, { ReactNode, HTMLAttributes } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'light';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
  className?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  centered?: boolean;
  withGradient?: boolean;
}

const paddingClasses = {
  sm: 'py-8 px-4',
  md: 'py-12 px-6',
  lg: 'py-16 px-8',
  xl: 'py-20 px-8',
};

const maxWidthClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '7xl': 'max-w-7xl',
};

/**
 * Primary Section - Light background
 */
export const PrimarySection: React.FC<SectionProps> = ({
  children,
  padding = 'lg',
  maxWidth = '7xl',
  className = '',
  title,
  subtitle,
  centered = false,
  ...props
}) => {
  return (
    <section
      className={`${paddingClasses[padding]} transition-all duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-dark)',
      }}
      {...props}
    >
      <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${centered ? 'text-center' : ''}`}>
        {title && (
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-dark)' }}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg mb-12" style={{ color: 'var(--text-dark-secondary)' }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

/**
 * Secondary Section - Subtle accent background
 */
export const SecondarySection: React.FC<SectionProps> = ({
  children,
  padding = 'lg',
  maxWidth = '7xl',
  className = '',
  title,
  subtitle,
  centered = false,
  ...props
}) => {
  return (
    <section
      className={`${paddingClasses[padding]} transition-all duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--surface-dark)',
        color: 'var(--text-dark)',
      }}
      {...props}
    >
      <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${centered ? 'text-center' : ''}`}>
        {title && (
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-dark)' }}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg mb-12" style={{ color: 'var(--text-dark-secondary)' }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

/**
 * Accent Section - Dark with accent highlights
 */
export const AccentSection: React.FC<SectionProps> = ({
  children,
  padding = 'lg',
  maxWidth = '7xl',
  className = '',
  title,
  subtitle,
  centered = false,
  withGradient = true,
  ...props
}) => {
  return (
    <section
      className={`${paddingClasses[padding]} transition-all duration-300 ${className}`}
      style={{
        background: withGradient ? 'var(--hero-gradient)' : 'var(--primary-color)',
        color: 'var(--text-primary)',
      }}
      {...props}
    >
      <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${centered ? 'text-center' : ''}`}>
        {title && (
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

/**
 * Light Section - Accent-light background
 */
export const LightSection: React.FC<SectionProps> = ({
  children,
  padding = 'lg',
  maxWidth = '7xl',
  className = '',
  title,
  subtitle,
  centered = false,
  ...props
}) => {
  return (
    <section
      className={`${paddingClasses[padding]} transition-all duration-300 ${className}`}
      style={{
        backgroundColor: 'var(--accent-soft)',
        color: 'var(--text-dark)',
      }}
      {...props}
    >
      <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${centered ? 'text-center' : ''}`}>
        {title && (
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'var(--text-dark)' }}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-lg mb-12" style={{ color: 'var(--text-dark-secondary)' }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

/**
 * Flexible Section Component - Choose variant
 */
export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  switch (variant) {
    case 'secondary':
      return <SecondarySection {...props}>{children}</SecondarySection>;
    case 'accent':
      return <AccentSection {...props}>{children}</AccentSection>;
    case 'light':
      return <LightSection {...props}>{children}</LightSection>;
    default:
      return <PrimarySection {...props}>{children}</PrimarySection>;
  }
};

export default Section;
