
import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';

// Sample portfolio companies data
const portfolioCompanies = [
  {
    id: 1,
    name: "TechNova",
    logoUrl: "https://via.placeholder.com/150x50?text=TechNova",
    description: "AI-powered platform that automates complex business processes for enterprise customers.",
    industry: "Enterprise Software",
    url: "#"
  },
  {
    id: 2,
    name: "HealthGen",
    logoUrl: "https://via.placeholder.com/150x50?text=HealthGen",
    description: "Biotechnology company developing novel gene therapies for rare diseases.",
    industry: "Healthcare",
    url: "#"
  },
  {
    id: 3,
    name: "GreenEnergy",
    logoUrl: "https://via.placeholder.com/150x50?text=GreenEnergy",
    description: "Renewable energy solutions provider with innovative solar storage technology.",
    industry: "CleanTech",
    url: "#"
  },
  {
    id: 4,
    name: "FinPlus",
    logoUrl: "https://via.placeholder.com/150x50?text=FinPlus",
    description: "Financial technology platform democratizing access to investment opportunities.",
    industry: "FinTech",
    url: "#"
  },
  {
    id: 5,
    name: "RetailAI",
    logoUrl: "https://via.placeholder.com/150x50?text=RetailAI",
    description: "AI-powered retail analytics platform helping brands optimize their merchandising strategies.",
    industry: "Retail Tech",
    url: "#"
  },
  {
    id: 6,
    name: "DataSentry",
    logoUrl: "https://via.placeholder.com/150x50?text=DataSentry",
    description: "Cybersecurity company providing advanced threat detection and prevention solutions.",
    industry: "Cybersecurity",
    url: "#"
  },
  {
    id: 7,
    name: "SpaceTech",
    logoUrl: "https://via.placeholder.com/150x50?text=SpaceTech",
    description: "Building next-generation satellite technology for earth observation and communication.",
    industry: "Space Technology",
    url: "#"
  },
  {
    id: 8,
    name: "EduLearn",
    logoUrl: "https://via.placeholder.com/150x50?text=EduLearn",
    description: "Personalized learning platform using AI to adapt content to individual student needs.",
    industry: "EdTech",
    url: "#"
  },
  {
    id: 9,
    name: "FoodFuture",
    logoUrl: "https://via.placeholder.com/150x50?text=FoodFuture",
    description: "Developing sustainable alternative protein products to address global food challenges.",
    industry: "FoodTech",
    url: "#"
  }
];

// Industry filter options
const industries = [
  "All",
  "Enterprise Software",
  "Healthcare", 
  "CleanTech", 
  "FinTech",
  "Retail Tech",
  "Cybersecurity",
  "Space Technology",
  "EdTech",
  "FoodTech"
];

const PortfolioSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  
  const filteredCompanies = selectedIndustry === "All" 
    ? portfolioCompanies 
    : portfolioCompanies.filter(company => company.industry === selectedIndustry);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-20 h-1 bg-linkred mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with these innovative companies that are 
            transforming industries and creating lasting impact.
          </p>
        </div>
        
        {/* Industry Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedIndustry === industry
                  ? 'bg-linkred text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <PortfolioCard
              key={company.id}
              name={company.name}
              logoUrl={company.logoUrl}
              description={company.description}
              industry={company.industry}
              url={company.url}
            />
          ))}
        </div>
        
        {filteredCompanies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No companies found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
