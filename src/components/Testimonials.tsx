'use client';
import styles from './Testimonials.module.css';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Computer Science Student",
      image: "/globe.svg",
      quote: "Joining the Microsoft Student Club at ECU was one of the best decisions I made during my university years. The workshops and networking opportunities helped me secure an internship at a top tech company."
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Software Engineering Graduate",
      image: "/file.svg",
      quote: "The hands-on projects and hackathons organized by MSC ECU gave me practical experience that I couldn't get from regular coursework. Now I work as a developer at Microsoft!"
    },
    {
      id: 3,
      name: "Michael Taylor",
      role: "IT Student",
      image: "/window.svg",
      quote: "Thanks to the Microsoft Student Club, I gained access to Azure resources and certification training that helped me stand out in the job market. The mentorship from industry professionals was invaluable."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef(null);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <motion.div 
          className={styles.testimonialHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.testimonialTitle}>Student Success Stories</h2>
          <p className={styles.testimonialSubtitle}>
            Hear from our members about how MSC ECU has impacted their academic and professional journeys
          </p>
        </motion.div>
        
        <div className={styles.testimonialContainer}>
          <button 
            className={`${styles.navigationButton} ${styles.prevButton}`}
            onClick={goToPrevious}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className={styles.testimonialContent} ref={testimonialRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={styles.testimonialCard}
              >
                <div className={styles.testimonialQuote}>
                  <svg className={styles.quoteIcon} width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H7C7.53043 5 8.03914 5.21071 8.41421 5.58579C8.78929 5.96086 9 6.46957 9 7V12C9 13.0609 8.57857 14.0783 7.82843 14.8284C7.07828 15.5786 6.06087 16 5 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 11H15C14.4696 11 13.9609 10.7893 13.5858 10.4142C13.2107 10.0391 13 9.53043 13 9V7C13 6.46957 13.2107 5.96086 13.5858 5.58579C13.9609 5.21071 14.4696 5 15 5H16C16.5304 5 17.0391 5.21071 17.4142 5.58579C17.7893 5.96086 18 6.46957 18 7V12C18 13.0609 17.5786 14.0783 16.8284 14.8284C16.0783 15.5786 15.0609 16 14 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>{testimonials[currentIndex].quote}</p>
                </div>
                
                <div className={styles.testimonialAuthor}>
                  <div className={styles.authorImage}>
                    <Image 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <h3 className={styles.authorName}>{testimonials[currentIndex].name}</h3>
                    <p className={styles.authorRole}>{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            className={`${styles.navigationButton} ${styles.nextButton}`}
            onClick={goToNext}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className={styles.indicatorContainer}>
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`${styles.indicator} ${currentIndex === index ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
