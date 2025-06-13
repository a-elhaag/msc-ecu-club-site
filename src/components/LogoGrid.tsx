'use client';
import Logo from './Logo';
import styles from './LogoGrid.module.css';
import { motion } from 'framer-motion';

const logos = [
  { src: '/Logo.png', alt: 'Microsoft Student Club', credit: 'MSC' },
  { src: '/file.svg', alt: 'Egyptian Chinese University', credit: 'ECU' },
  { src: '/file.svg', alt: 'GitHub', credit: 'GitHub' },
  { src: '/globe.svg', alt: 'Azure', credit: 'Azure' },
  { src: '/next.svg', alt: 'Next.js', credit: 'Next.js' },
  { src: '/vercel.svg', alt: 'Vercel', credit: 'Vercel' },
  { src: '/window.svg', alt: 'Visual Studio', credit: 'Visual Studio' },
  { src: '/favicon.ico', alt: 'Microsoft', credit: 'Microsoft' },
];

export default function LogoGrid() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={`${styles.floatingBlob} ${styles.blob1}`}></div>
      <div className={`${styles.floatingBlob} ${styles.blob2}`}></div>
      
      <div className={styles.heading}>
        <motion.h2 
          className={styles.headingTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Partners & Sponsors
        </motion.h2>
        <motion.p 
          className={styles.headingSubtitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We are proud to work with industry-leading organizations that support our mission to empower students through technology
        </motion.p>
      </div>

      <div className={styles.grid}>
        {logos.map((logo, i) => (
          <motion.div
            key={i}
            className={styles.logoContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.logoBackground}></div>
            <Logo 
              src={logo.src}
              alt={logo.alt}
              credit={logo.credit}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
