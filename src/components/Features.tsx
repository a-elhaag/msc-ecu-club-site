'use client';
import styles from './Features.module.css';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function FeatureCard({ title, description, icon }: FeatureProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      className={styles.featureCard}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.featureIcon}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </motion.div>
  );
}

export default function Features() {
  const features = [
    {
      title: 'Tech Workshops',
      description: 'Hands-on workshops and training sessions on the latest Microsoft technologies, cloud computing, and programming languages.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19H20M4 5H20M4 5V19M20 5V19M4 12H12M16 9L18 12L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Networking Events',
      description: 'Connect with industry professionals, Microsoft employees, and fellow tech enthusiasts to build your professional network.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Hackathons',
      description: 'Participate in coding challenges and hackathons sponsored by Microsoft to apply your skills and win exciting prizes.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.4 15C19.1277 15.6171 19.0529 16.3096 19.1877 16.9765C19.3225 17.6434 19.6602 18.2502 20.15 18.7L20.2 18.75C20.5914 19.1414 20.9034 19.6104 21.1149 20.1289C21.3264 20.6474 21.4337 21.2054 21.4317 21.7683C21.4297 22.3311 21.3186 22.8882 21.1035 23.4049C20.8884 23.9215 20.573 24.3878 20.179 24.7761C19.785 25.1645 19.3144 25.4731 18.7947 25.6807C18.2751 25.8884 17.7165 25.9915 17.1537 25.9853C16.5908 25.9791 16.0348 25.8638 15.5205 25.6448C15.0061 25.4258 14.5432 25.107 14.16 24.71L14.11 24.65C13.6603 24.1602 13.0535 23.8225 12.3866 23.6877C11.7197 23.5529 11.0272 23.6277 10.41 23.9C9.80392 24.1723 9.30565 24.6324 8.98217 25.2077C8.65869 25.783 8.52888 26.4404 8.61 27.09C8.69112 27.7395 8.98065 28.345 9.43 28.81C9.87936 29.275 10.4616 29.5781 11.1 29.68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12C2 14.3869 3.05357 16.6761 4.92893 18.3639C6.8043 20.0518 9.34784 21 12 21C14.6522 21 17.1957 20.0518 19.0711 18.3639C20.9464 16.6761 22 14.3869 22 12C22 9.61305 20.9464 7.32387 19.0711 5.63604C17.1957 3.94821 14.6522 3 12 3C9.34784 3 6.8043 3.94821 4.92893 5.63604C3.05357 7.32387 2 9.61305 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Career Development',
      description: 'Access exclusive internship opportunities, resume workshops, and mock interviews to prepare for your tech career.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Project Collaboration',
      description: 'Work on real-world projects with fellow club members to build your portfolio and gain practical experience.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Microsoft Resources',
      description: 'Get exclusive access to Microsoft software, Azure credits, training materials, and certification discounts as a club member.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.features} ref={ref}>
      <div className="container">
        <motion.div 
          className={styles.featuresHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.featuresTitle}>What We Offer</h2>
          <p className={styles.featuresSubtitle}>
            Join MSC ECU for a comprehensive tech experience that enhances your academic journey and prepares you for industry success
          </p>
        </motion.div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
