'use client';
import styles from './about.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container">
      <section className={styles.aboutHero}>
        <motion.div 
          className={styles.aboutContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.aboutTitle}>About MSC ECU</h1>
          <p className={styles.aboutSubtitle}>
            Empowering students through technology and community at Egyptian Chinese University
          </p>
        </motion.div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutGrid}>
          <motion.div 
            className={styles.aboutText}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p>
              Microsoft Student Club at ECU is dedicated to creating a vibrant tech community that fosters learning, innovation, and career development. We bridge the gap between academic theory and industry practice by providing hands-on experiences with the latest Microsoft technologies.
            </p>
            <p>
              Our mission is to empower students with technical skills, industry connections, and leadership opportunities that prepare them for successful careers in technology.
            </p>
          </motion.div>
          <motion.div
            className={styles.aboutImage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-card network-bg" style={{
              width: 400,
              height: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span className="floating-element" style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#2382fe'
              }}>
                MSC ECU
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={`${styles.aboutGrid} ${styles.reversed}`}>
          <motion.div 
            className={styles.aboutImage}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card network-bg" style={{
              width: 400,
              height: 400,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <span className="floating-element" style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#2382fe'
              }}>
                Our Vision
              </span>
            </div>
          </motion.div>
          <motion.div 
            className={styles.aboutText}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <p>
              We envision a thriving community of tech enthusiasts who are equipped with cutting-edge skills and connected to industry professionals. Our aim is to make ECU a hub for technological innovation and talent development.
            </p>
            <p>
              By fostering a collaborative environment where students can learn, create, and grow together, we're building the next generation of technology leaders.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`${styles.sectionTitle} text-center`}>Our Team</h2>
          <p className={`${styles.sectionSubtitle} text-center`}>
            Meet the passionate students behind MSC ECU
          </p>
        </motion.div>
        
        <div className={styles.teamGrid}>
          {[
            { 
              name: 'Sarah Chen', 
              role: 'President', 
              image: '/window.svg', 
              bio: 'Computer Science senior passionate about cloud computing and community building.' 
            },
            { 
              name: 'Mark Johnson', 
              role: 'Vice President', 
              image: '/file.svg', 
              bio: 'Software Engineering student with a focus on AI and machine learning.' 
            },
            { 
              name: 'Aisha Patel', 
              role: 'Tech101 Lead', 
              image: '/globe.svg', 
              bio: 'IT major specializing in teaching programming fundamentals to beginners.' 
            },
            { 
              name: 'Jason Kim', 
              role: 'Media & Marketing Lead', 
              image: '/next.svg', 
              bio: 'Digital media specialist with expertise in content creation and social strategy.' 
            },
            { 
              name: 'Emma Wilson', 
              role: 'HR Team Lead', 
              image: '/vercel.svg', 
              bio: 'Dual major in IT and Business managing member recruitment and engagement.' 
            },
            { 
              name: 'David Nguyen', 
              role: 'Operations Lead', 
              image: '/file.svg', 
              bio: 'Project Management student coordinating club logistics and events.' 
            },
            { 
              name: 'Layla Hassan', 
              role: 'PR Team Lead', 
              image: '/window.svg', 
              bio: 'Communications major handling external partnerships and public relations.' 
            }
          ].map((member, index) => (
            <motion.div 
              key={index}
              className={styles.teamMember}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className={styles.memberImage}>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={120} 
                  height={120}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberBio}>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.valueCard}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.valueHeader}
          >
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.valueSubtitle}>
              The principles that guide our club and community
            </p>
          </motion.div>
          
          <div className={styles.valuesGrid}>
            {[
              {
                title: 'Innovation',
                description: 'We embrace new technologies and creative solutions to solve real-world problems.'
              },
              {
                title: 'Inclusivity',
                description: 'We welcome students of all backgrounds, skill levels, and disciplines to join our tech community.'
              },
              {
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and shared knowledge to achieve greater outcomes.'
              },
              {
                title: 'Learning',
                description: 'We foster continuous learning and growth through hands-on experience and mentorship.'
              },
              {
                title: 'Leadership',
                description: 'We develop the next generation of tech leaders through opportunities to guide projects and initiatives.'
              },
              {
                title: 'Industry Connection',
                description: 'We create bridges between academia and the professional world through networking and partnerships.'
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className={styles.valueItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
