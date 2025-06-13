'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './NavBar.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Events', path: '/events' },
  { name: 'Join Us', path: '/joinus' },
  { name: 'Leaderboard', path: '/leaderboard' },
  { name: 'Contact', path: '/contact' }
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.spacer}></div>
        
        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? '✕' : '☰'}
        </button>
        
        <ul className={styles.menu}>
          {links.map(link => (
            <li key={link.name}>
              <Link 
                href={link.path} 
                className={pathname === link.path ? styles.active : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        <AnimatePresence>
          {isOpen && (
            <motion.ul 
              className={styles.mobileMenu}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {links.map(link => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className={pathname === link.path ? styles.active : ''}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
