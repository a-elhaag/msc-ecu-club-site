'use client';
import styles from './joinus.module.css';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function JoinUsPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    year: '',
    major: '',
    interests: [] as string[],
    experience: '',
    hearAbout: '',
    commitment: '',
    expectations: '',
  });
  
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    studentId: '',
    year: '',
    major: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
  
  const handleCheckboxChange = (interest: string) => {
    setFormData(prev => {
      const interests = [...prev.interests];
      
      if (interests.includes(interest)) {
        return {
          ...prev,
          interests: interests.filter(i => i !== interest)
        };
      } else {
        return {
          ...prev,
          interests: [...interests, interest]
        };
      }
    });
  };
  
  const validateStep1 = () => {
    let valid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      studentId: '',
      year: '',
      major: '',
    };
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.studentId.trim()) {
      newErrors.studentId = 'Student ID is required';
      valid = false;
    }
    
    if (!formData.year) {
      newErrors.year = 'Year of study is required';
      valid = false;
    }
    
    if (!formData.major.trim()) {
      newErrors.major = 'Major is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };
  
  const handleBack = () => {
    setStep(1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setStatus('submitting');
    
    // This would be an API call in a real application
    setTimeout(() => {
      setStatus('success');
      window.scrollTo(0, 0);
      
      // Reset form after success
      setTimeout(() => {
        setStep(1);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          studentId: '',
          year: '',
          major: '',
          interests: [],
          experience: '',
          hearAbout: '',
          commitment: '',
          expectations: '',
        });
        setStatus('idle');
      }, 10000);
    }, 1500);
  };
  
  const renderStep1 = () => (
    <div className={styles.formStep}>
      <h2 className={styles.stepTitle}>Step 1: Personal Information</h2>
      
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <Input 
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
        </div>
        <div className={styles.formGroup}>
          <Input 
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <Input 
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your university email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>
      
      <div className={styles.formGroup}>
        <Input 
          name="studentId"
          label="Student ID"
          placeholder="Enter your student ID"
          value={formData.studentId}
          onChange={handleChange}
          error={errors.studentId}
        />
      </div>
      
      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Year of Study</label>
          <select 
            name="year"
            className={`${styles.select} ${errors.year ? styles.error : ''}`}
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Select year</option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
            <option value="5+">Fifth Year or Above</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>
          {errors.year && <div className={styles.errorMessage}>{errors.year}</div>}
        </div>
        
        <div className={styles.formGroup}>
          <Input 
            name="major"
            label="Major/Field of Study"
            placeholder="e.g., Computer Science"
            value={formData.major}
            onChange={handleChange}
            error={errors.major}
          />
        </div>
      </div>
      
      <div className={styles.formActions}>
        <Button 
          size="large" 
          onClick={handleNext}
        >
          Next Step
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
      </div>
    </div>
  );
  
  const renderStep2 = () => (
    <div className={styles.formStep}>
      <h2 className={styles.stepTitle}>Step 2: Club Questionnaire</h2>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>What areas of technology are you interested in?</label>
        <div className={styles.checkboxGrid}>
          {[
            'Web Development', 'Mobile App Development', 'Cloud Computing', 'Artificial Intelligence',
            'Data Science', 'Cybersecurity', 'Game Development', 'UI/UX Design',
            'DevOps', 'Blockchain', 'IoT', 'Mixed Reality'
          ].map(interest => (
            <div className={styles.checkbox} key={interest}>
              <input 
                type="checkbox" 
                id={interest} 
                checked={formData.interests.includes(interest)}
                onChange={() => handleCheckboxChange(interest)}
              />
              <label htmlFor={interest}>{interest}</label>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>What is your level of programming experience?</label>
        <select 
          name="experience"
          className={styles.select}
          value={formData.experience}
          onChange={handleChange}
        >
          <option value="">Select experience level</option>
          <option value="Beginner">Beginner - Little to no coding experience</option>
          <option value="Intermediate">Intermediate - Comfortable with basics</option>
          <option value="Advanced">Advanced - Experience with multiple languages/frameworks</option>
          <option value="Expert">Expert - Extensive professional/project experience</option>
        </select>
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>How did you hear about the Microsoft Student Club?</label>
        <select 
          name="hearAbout"
          className={styles.select}
          value={formData.hearAbout}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="Friend">From a friend</option>
          <option value="Social Media">Social Media</option>
          <option value="Email">University Email</option>
          <option value="Flyer">Flyer or Poster</option>
          <option value="Event">Campus Event</option>
          <option value="Professor">Professor/Faculty</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>How much time can you commit to club activities per week?</label>
        <select 
          name="commitment"
          className={styles.select}
          value={formData.commitment}
          onChange={handleChange}
        >
          <option value="">Select time commitment</option>
          <option value="1-2">1-2 hours</option>
          <option value="3-5">3-5 hours</option>
          <option value="5-10">5-10 hours</option>
          <option value="10+">10+ hours</option>
        </select>
      </div>
      
      <div className={styles.formGroup}>
        <label className={styles.label}>What do you hope to gain from joining the Microsoft Student Club?</label>
        <textarea 
          name="expectations"
          className={styles.textarea}
          placeholder="Tell us about your expectations and goals"
          rows={4}
          value={formData.expectations}
          onChange={handleChange}
        ></textarea>
      </div>
      
      <div className={styles.formActions}>
        <Button 
          variant="secondary" 
          size="large" 
          onClick={handleBack}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </Button>
        <Button 
          size="large" 
          onClick={handleSubmit}
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
        </Button>
      </div>
    </div>
  );
  
  return (
    <div className="container">
      <section className={styles.joinHero}>
        <motion.div 
          className={styles.joinContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.joinTitle}>Join MSC ECU Club</h1>
          <p className={styles.joinSubtitle}>
            Become a part of our tech community and unlock opportunities to learn, grow, and connect
          </p>
        </motion.div>
      </section>
      
      <section className={styles.joinSection}>
        <div className={styles.joinGrid}>
          <motion.div 
            className={styles.joinInfo}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className={styles.sectionTitle}>Membership Benefits</h2>
            
            <div className={styles.benefitsList}>
              {[
                {
                  title: 'Microsoft Resources',
                  description: 'Access to Microsoft software, Azure credits, and exclusive resources'
                },
                {
                  title: 'Skill Development',
                  description: 'Regular workshops and training sessions on the latest technologies'
                },
                {
                  title: 'Networking',
                  description: 'Connections with industry professionals and fellow tech enthusiasts'
                },
                {
                  title: 'Project Experience',
                  description: 'Opportunities to work on real-world projects and build your portfolio'
                },
                {
                  title: 'Career Support',
                  description: 'Resume reviews, mock interviews, and internship opportunities'
                },
                {
                  title: 'Fun Events',
                  description: 'Social activities, hackathons, and tech competitions with prizes'
                }
              ].map((benefit, index) => (
                <div className={styles.benefitItem} key={index}>
                  <div className={styles.benefitIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.benefitContent}>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className={styles.requirementsCard}>
              <h3>Membership Requirements</h3>
              <ul className={styles.requirementsList}>
                <li>Current ECU student</li>
                <li>Interest in technology and Microsoft ecosystem</li>
                <li>Willingness to participate in club activities</li>
                <li>Passion for learning and collaboration</li>
              </ul>
              <p className={styles.note}>
                Note: Membership is free for all ECU students.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.joinForm}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={styles.formCard}>
              {status === 'success' ? (
                <motion.div 
                  className={styles.successMessage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg className={styles.successIcon} width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h2 className={styles.successTitle}>Application Submitted!</h2>
                  <p className={styles.successDescription}>
                    Thank you for applying to join the Microsoft Student Club at ECU. We've received your application and will review it shortly.
                  </p>
                  <p className={styles.successNext}>
                    Next steps: You'll receive an email within 3-5 business days regarding your application status and upcoming club events.
                  </p>
                </motion.div>
              ) : (
                <form className={styles.form}>
                  <div className={styles.formProgress}>
                    <div 
                      className={`${styles.progressStep} ${step === 1 ? styles.active : styles.completed}`}
                      onClick={() => step === 2 && handleBack()}
                    >
                      <div className={styles.stepNumber}>1</div>
                      <span>Personal Info</span>
                    </div>
                    <div className={`${styles.progressBar} ${step === 2 ? styles.completed : ''}`}></div>
                    <div className={`${styles.progressStep} ${step === 2 ? styles.active : ''}`}>
                      <div className={styles.stepNumber}>2</div>
                      <span>Questionnaire</span>
                    </div>
                  </div>
                  
                  {step === 1 ? renderStep1() : renderStep2()}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
