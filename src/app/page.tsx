'use client';
import Hero from '../components/Hero';
import Features from '../components/Features';
import { default as Testimonials } from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <div className="container">
        <Features />
      </div>
      
      <div className="container">
        <Testimonials />
      </div>
    </>
  );
}
