
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PortfolioCard from '@/components/PortfolioCard';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

// Enhanced portfolio data with descriptions and industries
const portfolioItems = [
  { 
    id: 1, 
    name: 'Mercor', 
    logoUrl: '/logos/mercor.png', 
    url: 'https://www.mercor.com', 
    description: 'AI-powered talent platform connecting top developers with companies worldwide.',
    industry: 'AI Talent'
  },
  { 
    id: 2, 
    name: 'Blitzy', 
    logoUrl: '/logos/Blitzy.jpg', 
    url: 'https://www.blitzy.com', 
    description: 'AI-Powered Autonomous Software Development Platform revolutionizing how code is written.',
    industry: 'AI Software'
  },
  { 
    id: 3, 
    name: 'Liquid AI', 
    logoUrl: '/logos/Liquid-AI.png', 
    url: 'https://liquid.ai', 
    description: 'Cutting-edge AI infrastructure platform enabling advanced machine learning capabilities.',
    industry: 'AI Infrastructure'
  },
  { 
    id: 4, 
    name: 'Themis AI', 
    logoUrl: '/logos/themisAI.png', 
    url: 'https://themis.ai', 
    description: 'AI ethics platform ensuring responsible and transparent artificial intelligence.',
    industry: 'AI Ethics'
  },
  { 
    id: 5, 
    name: 'Aaru', 
    logoUrl: 'https://via.placeholder.com/150x50?text=Aaru', 
    url: 'https://www.linkventures.com/portfolio/aaru', 
    description: 'Pioneering sustainable technology solutions to address environmental challenges.',
    industry: 'CleanTech'
  },
  { 
    id: 6, 
    name: 'Anomaly', 
    logoUrl: 'https://via.placeholder.com/150x50?text=Anomaly', 
    url: 'https://www.linkventures.com/portfolio/anomaly', 
    description: 'Advanced anomaly detection platform for cybersecurity threat prevention.',
    industry: 'Cybersecurity'
  },
  { 
    id: 7, 
    name: 'AnyQuestion', 
    logoUrl: 'https://via.placeholder.com/150x50?text=AnyQuestion', 
    url: 'https://www.linkventures.com/portfolio/anyquestion', 
    description: 'Q&A platform connecting users with expert knowledge across various domains.',
    industry: 'Knowledge Sharing'
  },
  { 
    id: 8, 
    name: 'Autotegrity', 
    logoUrl: 'https://via.placeholder.com/150x50?text=Autotegrity', 
    url: 'https://www.linkventures.com/portfolio/autotegrity', 
    description: 'Automotive technology platform enhancing vehicle performance and safety.',
    industry: 'Automotive'
  },
  { 
    id: 9, 
    name: 'C10 Labs', 
    logoUrl: 'https://via.placeholder.com/150x50?text=C10Labs', 
    url: 'https://www.linkventures.com/portfolio/c10-labs', 
    description: 'Innovative research lab focused on developing breakthrough technologies.',
    industry: 'Research'
  },
  { 
    id: 10, 
    name: 'Canela Media', 
    logoUrl: 'https://via.placeholder.com/150x50?text=CanelaMedia', 
    url: 'https://www.linkventures.com/portfolio/canela-media', 
    description: 'Digital media platform serving the Hispanic community with culturally relevant content.',
    industry: 'Media'
  },
  { 
    id: 11, 
    name: 'Caribou', 
    logoUrl: 'https://via.placeholder.com/150x50?text=Caribou', 
    url: 'https://www.linkventures.com/portfolio/caribou', 
    description: 'Financial technology platform helping consumers save on auto loans and insurance.',
    industry: 'FinTech'
  },
  { 
    id: 12, 
    name: 'Catalan.ai', 
    logoUrl: 'https://via.placeholder.com/150x50?text=Catalan', 
    url: 'https://www.linkventures.com/portfolio/catalan-ai', 
    description: 'Natural language processing AI specialized in multilingual understanding.',
    industry: 'AI Language'
  }
];

// Industry filter options based on available industries
const industries = [
  "All",
  "AI Talent",
  "AI Software",
  "AI Infrastructure",
  "AI Ethics",
  "AI Language",
  "CleanTech",
  "Cybersecurity",
  "Knowledge Sharing",
  "Automotive",
  "Research",
  "Media",
  "FinTech"
];

const Portfolio = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  // Filter companies based on selected industry
  const filteredCompanies = selectedIndustry === "All" 
    ? portfolioItems 
    : portfolioItems.filter(company => company.industry === selectedIndustry);
  
  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCompanies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto pt-24 pb-20 px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We invest in innovative companies that are transforming industries and creating lasting impact.
          </p>
        </div>
        
        {/* Industry Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => {
                setSelectedIndustry(industry);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedIndustry === industry
                  ? 'bg-linkred text-white'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentItems.map((company) => (
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
            <p className="text-gray-400">No companies found in this category.</p>
          </div>
        )}
        
        {/* Pagination */}
        {filteredCompanies.length > itemsPerPage && (
          <Pagination className="mt-12">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                </PaginationItem>
              )}
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink 
                    isActive={currentPage === page}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </main>
    </div>
  );
};

export default Portfolio;
