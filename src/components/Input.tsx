'use client';
import { motion } from 'framer-motion';
import styles from './Input.module.css';
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, className = '', ...props }, ref) => {
    const inputClasses = [
      styles.input,
      error ? styles.error : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <div className={styles.inputWrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputContainer}>
          <motion.input
            initial={{ borderColor: 'var(--bg-secondary)' }}
            whileFocus={{ 
              borderColor: error ? 'var(--danger)' : 'var(--primary)', 
              boxShadow: error ? '0 0 0 3px rgba(231,76,60,0.2)' : '0 0 0 3px rgba(22,93,158,0.2)' 
            }}
            transition={{ duration: .2 }}
            ref={ref}
            className={inputClasses}
            {...props}
          />
          {icon && <span className={styles.inputIcon}>{icon}</span>}
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';