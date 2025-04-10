
import React from 'react';
import FocusCard from './FocusCard';
import { 
  Cloud, 
  Activity, 
  Zap, 
  Shield, 
  Database, 
  Globe 
} from 'lucide-react';

const FocusSection = () => {
  return (
    <section id="focus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Focus</h2>
          <div className="w-20 h-1 bg-linkred mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We invest in companies across these key sectors where technology 
            is enabling transformative innovation and growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FocusCard
            title="Enterprise SaaS"
            description="Cloud-based software solutions that improve business efficiency, productivity, and decision-making."
            icon={<Cloud className="h-10 w-10" />}
            examples={[
              "AI-powered analytics platforms",
              "Workflow automation tools",
              "Productivity software"
            ]}
          />
          
          <FocusCard
            title="Healthcare & Biotech"
            description="Companies leveraging technology to improve healthcare delivery, outcomes, and accessibility."
            icon={<Activity className="h-10 w-10" />}
            examples={[
              "Digital health platforms",
              "Precision medicine",
              "Healthcare data analytics"
            ]}
          />
          
          <FocusCard
            title="CleanTech"
            description="Solutions that address climate change, energy efficiency, and sustainable resource management."
            icon={<Zap className="h-10 w-10" />}
            examples={[
              "Renewable energy technologies",
              "Carbon capture & storage",
              "Smart grid solutions"
            ]}
          />
          
          <FocusCard
            title="Cybersecurity"
            description="Technologies that protect data, networks, and systems from unauthorized access and cyber threats."
            icon={<Shield className="h-10 w-10" />}
            examples={[
              "Threat detection & prevention",
              "Identity & access management",
              "Zero-trust security frameworks"
            ]}
          />
          
          <FocusCard
            title="FinTech"
            description="Innovative technologies that improve and automate financial services, transactions, and accessibility."
            icon={<Database className="h-10 w-10" />}
            examples={[
              "Payment processing solutions",
              "Digital banking platforms",
              "Wealth management tools"
            ]}
          />
          
          <FocusCard
            title="Frontier Tech"
            description="Cutting-edge technologies that are pushing the boundaries of what's possible."
            icon={<Globe className="h-10 w-10" />}
            examples={[
              "Artificial Intelligence & ML",
              "Quantum computing",
              "Advanced materials"
            ]}
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-linkred text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            Pitch Your Startup
          </a>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
