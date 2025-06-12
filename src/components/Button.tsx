'use client';
import { motion } from 'framer-motion';
import styles from './Button.module.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: ReactNode;
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    variant === 'secondary' ? styles.secondary : '',
    size === 'small' ? styles.small : '',
    size === 'large' ? styles.large : '',
    fullWidth ? styles['full-width'] : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={buttonClasses}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </motion.button>
  );
}
