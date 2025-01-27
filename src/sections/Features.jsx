import React from 'react';
import { featuresData } from '../constants'; // Ensure this uses the correct named export
import FeatureCard from '../components/FeatureCard';

const Features = () => {
  return (
    <section id="features" className="max-container">
      <div className="container max-sm:mt-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-12 rounded-lg bg-white shadow-xl ring-1 ring-slate-900/5">
        {
          featuresData.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))
        }
      </div>
    </section>
  );
};

export default Features;
