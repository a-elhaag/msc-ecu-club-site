'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <Link href="/" className={styles.logo}>
              <Image 
                src="/Logo.png" 
                alt="MSC ECU Logo" 
                width={144}
                height={108} 
                style={{ marginRight: '10px' }}
              />
              
            </Link>
            <p className={styles.footerText}>
              Microsoft Student Club at Egyptian Chinese University aims to foster innovation and technological advancement among students.
            </p>
          </div>
          
          <div className={styles.footerCol}>
            <h3 className={styles.footerHeading}>Quick Links</h3>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/joinus">Join Club</Link></li>
              <li><Link href="/leaderboard">Leaderboard</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h3 className={styles.footerHeading}>Resources</h3>
            <ul className={styles.footerLinks}>
              <li><a href="https://www.microsoft.com/en-au/education/students" target="_blank" rel="noopener noreferrer">Microsoft for Students</a></li>
              <li><a href="https://learn.microsoft.com/" target="_blank" rel="noopener noreferrer">Microsoft Learn</a></li>
              <li><a href="https://mvp.microsoft.com/" target="_blank" rel="noopener noreferrer">Microsoft MVP</a></li>
              <li><a href="https://www.ecu.edu.eg/" target="_blank" rel="noopener noreferrer">ECU Website</a></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h3 className={styles.footerHeading}>Connect With Us</h3>
            <div className={styles.socialLinks}>
              <motion.a 
                href="https://www.linkedin.com/company/msc-ecu" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/mscecu" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/mscecu" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </motion.a>
            </div>
            <div className={styles.contactInfo}>
              <p><strong>Campuses:</strong></p>
              <ul>
                <li>Nasr City</li>
                <li>Gesr El Suez</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Microsoft Student Club ECU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
