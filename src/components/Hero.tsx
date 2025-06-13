'use client';
import styles from './Hero.module.css';
import { Button } from './Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.floatingElement} ${styles.floatingElement1}`}></div>
      <div className={`${styles.floatingElement} ${styles.floatingElement2}`}></div>
      <div className={`${styles.floatingElement} ${styles.floatingElement3}`}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <motion.div 
            className={styles.heroText}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={styles.heroTitle}>
              Empower Your Tech Journey with MSC ECU
            </h1>
            <p className={styles.heroSubtitle}>
              Microsoft Student Club at Egyptian Chinese University connects students with technology, innovation, and career opportunities through workshops, hackathons, and industry engagement.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/joinus">
                <Button size="large">
                  Join the Club
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="secondary" size="large">
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.heroGraphic}>
              <Image 
                src="/Logo.png" 
                alt="MSC ECU Logo" 
                width={320}
                height={240}
                className={styles.logoImage}
                priority
              />
            </div>
          </motion.div>
        </div>
        
        <div className={styles.heroStats}>
          {[
            { value: '500+', label: 'Student Members' },
            { value: '25+', label: 'Annual Events' },
            { value: '40+', label: 'Industry Partners' },
            { value: '90%', label: 'Graduation Placement' }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
