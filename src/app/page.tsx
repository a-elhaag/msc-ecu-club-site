'use client';
import Hero from '../components/Hero';
import LogoGrid from '../components/LogoGrid';
import Features from '../components/Features';
import { default as Newsletter } from '../components/Newsletter';
import { default as Testimonials } from '../components/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <div className="container">
        <LogoGrid />
        <Features />
      </div>
      
      <div className="container">
        <Testimonials />
      </div>
      
      <div className="container">
        <Newsletter />
      </div>
    </>
  );
}
