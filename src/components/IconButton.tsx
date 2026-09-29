import React, { ButtonHTMLAttributes } from 'lucide-react';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export interface ThemedIconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: number;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'light' | 'muted';
}

const sizeClasses = {
  sm: 'p-2',
  md: 'p-2.5',
  lg: 'p-3',
};

const sizeValues = {
  sm: 16,
  md: 18,
  lg: 20,
};

/**
 * Themed Icon - Uses accent color from theme
 */
export const ThemedIcon: React.FC<ThemedIconProps> = ({
  icon: Icon,
  size = 20,
  className = '',
  variant = 'accent',
}) => {
  const getColorVar = () => {
    switch (variant) {
      case 'primary':
        return 'var(--primary-color)';
      case 'secondary':
        return 'var(--accent-secondary)';
      case 'light':
        return 'var(--accent-light)';
      case 'muted':
        return 'var(--text-muted)';
      default:
        return 'var(--accent-color)';
    }
  };

  return (
    <Icon
      size={size}
      className={className}
      style={{
        color: getColorVar(),
      }}
      aria-hidden="true"
    />
  );
};

/**
 * Primary Icon Button - Accent background with theme color
 */
export const PrimaryIconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'md',
  label,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`rounded-lg transition-all duration-300 flex items-center justify-center ${sizeClasses[size]} ${className}`}
      style={{
        background: 'var(--button-bg)',
        color: 'var(--button-text)',
        border: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 20px var(--button-hover-shadow)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
      title={label}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
};

/**
 * Secondary Icon Button - Accent border and text
 */
export const SecondaryIconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'md',
  label,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`rounded-lg transition-all duration-300 flex items-center justify-center border ${sizeClasses[size]} ${className}`}
      style={{
        backgroundColor: 'transparent',
        borderColor: 'var(--border-accent)',
        color: 'var(--accent-color)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--accent-soft)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
      title={label}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
};

/**
 * Tertiary Icon Button - Soft background
 */
export const TertiaryIconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'md',
  label,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`rounded-lg transition-all duration-300 flex items-center justify-center ${sizeClasses[size]} ${className}`}
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
      title={label}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
};

/**
 * Ghost Icon Button - Text only
 */
export const GhostIconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'md',
  label,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`rounded-lg transition-all duration-300 flex items-center justify-center ${sizeClasses[size]} ${className}`}
      style={{
        backgroundColor: 'transparent',
        color: 'var(--accent-color)',
        border: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.8';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '1';
      }}
      title={label}
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
};

/**
 * Flexible Icon Button - Choose variant and size
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'secondary',
  size = 'md',
  ...props
}) => {
  switch (variant) {
    case 'primary':
      return <PrimaryIconButton icon={icon} size={size} {...props} />;
    case 'tertiary':
      return <TertiaryIconButton icon={icon} size={size} {...props} />;
    case 'ghost':
      return <GhostIconButton icon={icon} size={size} {...props} />;
    default:
      return <SecondaryIconButton icon={icon} size={size} {...props} />;
  }
};

export default IconButton;
