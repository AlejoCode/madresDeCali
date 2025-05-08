
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BusinessCarousel from '../components/BusinessCarousel';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <BusinessCarousel />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
