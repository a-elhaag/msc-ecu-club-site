'use client';
import styles from './contact.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validate = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    // Simulate form submission
    setStatus('submitting');
    
    // This would be an API call in a real application
    setTimeout(() => {
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after showing success message
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="container">
      <section className={styles.contactHero}>
        <motion.div 
          className={styles.contactContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.contactTitle}>Get in Touch</h1>
          <p className={styles.contactSubtitle}>
            Have questions about the club or want to collaborate? We'd love to hear from you!
          </p>
        </motion.div>
      </section>
      
      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          <motion.div 
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={styles.sectionTitle}>Contact Information</h2>
            
            <div className={styles.contactInfoGrid}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h3>Email</h3>
                  <p>contact@mscecu.org</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h3>Location</h3>
                  <p>Joondalup Campus, Building 18<br />Edith Cowan University<br />270 Joondalup Drive, Joondalup</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h3>Social Media</h3>
                  <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/company/msc-ecu" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://www.instagram.com/mscecu" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/mscecu" target="_blank" rel="noreferrer">Facebook</a>
                  </div>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h3>Club Hours</h3>
                  <p>Monday - Friday: 10:00 AM - 4:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.contactForm}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.formCard}>
              <h2 className={styles.sectionTitle}>Send Us a Message</h2>
              
              {status === 'success' ? (
                <motion.div 
                  className={styles.successMessage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>Thank you!</h3>
                  <p>Your message has been sent successfully. We will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <Input 
                      name="name"
                      label="Name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      disabled={status === 'submitting'}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <Input 
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Your email address"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      disabled={status === 'submitting'}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <Input 
                      name="subject"
                      label="Subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      error={errors.subject}
                      disabled={status === 'submitting'}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Message</label>
                    <textarea 
                      name="message"
                      className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                    ></textarea>
                    {errors.message && <div className={styles.errorMessage}>{errors.message}</div>}
                  </div>
                  
                  <Button 
                    type="submit"
                    size="large"
                    fullWidth
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className={styles.mapSection}>
        <h2 className={styles.sectionTitle}>Find Us</h2>
        <div className={styles.map}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.580313061474!2d115.76683291519885!3d-31.750937981288443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2bcd5cfcb3aad839%3A0x68e4dff4a27c9230!2sEdith%20Cowan%20University%20Joondalup%20Campus!5e0!3m2!1sen!2sau!4v1624986216238!5m2!1sen!2sau" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="ECU Joondalup Campus Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
