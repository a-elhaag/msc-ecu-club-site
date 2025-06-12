'use client';
import styles from './Hero.module.css';
import { Button } from './Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
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
              Microsoft Student Club at Edith Cowan University connects students with technology, innovation, and career opportunities through workshops, hackathons, and industry engagement.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/joinus">
                <Button size="large">
                  Join the Club
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
            <Image
              src="/globe.svg"
              alt="MSC ECU Global Network"
              width={500}
              height={500}
              priority
            />
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
