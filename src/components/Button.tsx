'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asLink?: boolean;
  href?: string;
}

export interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const baseClasses = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2';

/**
 * Primary Button - Uses theme accent color as background
 */
export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      style={{
        background: 'var(--button-bg)',
        color: 'var(--button-text)',
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 30px var(--button-hover-shadow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Secondary Button - Uses theme accent as border and text
 */
export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} border-2 ${className}`}
      style={{
        borderColor: 'var(--accent-color)',
        color: 'var(--accent-color)',
        backgroundColor: 'transparent',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Tertiary Button - Subtle button with soft background
 */
export const TertiaryButton: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      style={{
        backgroundColor: 'var(--accent-soft)',
        color: 'var(--accent-color)',
        border: '1px solid var(--border-accent)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--accent-light)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
      }}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Ghost Button - Text-only button
 */
export const GhostButton: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      style={{
        backgroundColor: 'transparent',
        color: 'var(--accent-color)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.8';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Primary Link Button - Navigation with primary styling
 */
export const PrimaryLinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <Link href={href}>
      <a
        className={`${baseClasses} ${sizeClasses[size]} ${className} no-underline`}
        style={{
          background: 'var(--button-bg)',
          color: 'var(--button-text)',
          display: 'inline-flex',
          boxShadow: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 30px var(--button-hover-shadow)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

/**
 * Secondary Link Button - Navigation with secondary styling
 */
export const SecondaryLinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  size = 'md',
  className = '',
  ...props
}) => {
  return (
    <Link href={href}>
      <a
        className={`${baseClasses} ${sizeClasses[size]} border-2 ${className} no-underline`}
        style={{
          borderColor: 'var(--accent-color)',
          color: 'var(--accent-color)',
          backgroundColor: 'transparent',
          display: 'inline-flex',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
        {...props}
      >
        {children}
      </a>
    </Link>
  );
};

/**
 * Flexible Button Component - Choose variant and size
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  switch (variant) {
    case 'secondary':
      return <SecondaryButton size={size} {...props}>{children}</SecondaryButton>;
    case 'tertiary':
      return <TertiaryButton size={size} {...props}>{children}</TertiaryButton>;
    case 'ghost':
      return <GhostButton size={size} {...props}>{children}</GhostButton>;
    default:
      return <PrimaryButton size={size} {...props}>{children}</PrimaryButton>;
  }
};

export default Button;
