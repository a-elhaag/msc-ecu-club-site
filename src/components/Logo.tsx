'use client';
import Image from 'next/image';
import styles from './Logo.module.css';
import { motion } from 'framer-motion';

interface LogoProps { 
  src: string; 
  alt: string; 
  credit?: string;
  url?: string;
}

export default function Logo({ src, alt, credit, url }: LogoProps) {
  return (
    <motion.figure 
      className={styles.figure}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      onClick={() => url && window.open(url, '_blank')}
    >
      <Image 
        src={src} 
        alt={alt} 
        width={120} 
        height={120} 
        className={styles.img} 
        priority
      />
      {credit && <figcaption className={styles.caption}>{credit}</figcaption>}
    </motion.figure>
  );
}