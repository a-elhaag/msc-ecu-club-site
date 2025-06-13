'use client';
import { motion, HTMLMotionProps } from 'framer-motion';
import styles from './Button.module.css';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'style'> {
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
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 15 
      }}
      className={buttonClasses}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children as ReactNode}
    </motion.button>
  );
}
