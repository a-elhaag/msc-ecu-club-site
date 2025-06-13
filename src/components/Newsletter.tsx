'use client';
import styles from './Newsletter.module.css';
import { Input } from './Input';
import { Button } from './Button';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // Simulate form submission
    setStatus('loading');
    
    setTimeout(() => {
      // In a real app, you'd make an API call here
      setStatus('success');
      setEmail('');
      
      // Reset to idle after showing success message
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section className={styles.newsletter}>
      <div className={`${styles.floatingCircle} ${styles.circle1}`}></div>
      <div className={`${styles.floatingCircle} ${styles.circle2}`}></div>
      <div className={`${styles.floatingCircle} ${styles.circle3}`}></div>
      <div className="container">
        <div className={styles.newsletterContent}>
          <motion.div 
            className={styles.newsletterText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.newsletterTitle}>Stay Updated</h2>
            <p className={styles.newsletterSubtitle}>
              Subscribe to our newsletter to receive the latest news, events, and opportunities from MSC ECU.
            </p>
          </motion.div>
          
          <motion.form 
            className={styles.newsletterForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.inputGroup}>
              <Input 
                type="email" 
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                disabled={status === 'loading' || status === 'success'}
              />
              
              <Button 
                type="submit" 
                size="large"
                disabled={status === 'loading' || status === 'success'}
              >
                {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </div>
            
            {status === 'success' && (
              <motion.p 
                className={styles.successMessage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Thank you for subscribing! You&apos;ll receive our updates soon.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
