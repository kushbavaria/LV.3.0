
import React from 'react';
import { BarChart3, Lightbulb, Users, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Link Ventures</h2>
          <div className="w-20 h-1 bg-linkred mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Link Ventures is a venture capital firm dedicated to funding and supporting 
            visionary entrepreneurs who are building innovative, market-defining companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Value Proposition 1 */}
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-linkred/10 text-linkred rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Capital</h3>
            <p className="text-gray-600">
              We provide early and growth-stage capital to companies with exceptional potential. 
              Our investments typically range from $500K to $10M.
            </p>
          </div>
          
          {/* Value Proposition 2 */}
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-linkred/10 text-linkred rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expertise</h3>
            <p className="text-gray-600">
              Our team brings decades of operational expertise, industry knowledge, 
              and strategic guidance to help our portfolio companies succeed.
            </p>
          </div>
          
          {/* Value Proposition 3 */}
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-linkred/10 text-linkred rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Network</h3>
            <p className="text-gray-600">
              We connect our founders with our extensive network of industry leaders, 
              potential customers, and strategic partners.
            </p>
          </div>
          
          {/* Value Proposition 4 */}
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-linkred/10 text-linkred rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Long-term Vision</h3>
            <p className="text-gray-600">
              We partner with entrepreneurs for the long haul, providing support 
              throughout the company's journey from startup to market leader.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 p-8 md:p-12 rounded-xl">
          <div className="md:flex items-center">
            <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Our Investment Philosophy</h3>
              <p className="text-gray-600 mb-4">
                At Link Ventures, we believe that the most successful companies are those that solve 
                meaningful problems with innovative approaches. We look for founders with a combination 
                of vision, expertise, and the perseverance required to build transformative businesses.
              </p>
              <p className="text-gray-600">
                We are active investors who work closely with our portfolio companies, 
                providing more than just capital. Our team offers strategic guidance, 
                operational support, and access to our extensive network.
              </p>
            </div>
            <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-4">We focus on companies that:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-linkred/10 text-linkred flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Disrupt existing markets or create entirely new ones</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-linkred/10 text-linkred flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Demonstrate strong product-market fit or clear path to it</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-linkred/10 text-linkred flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Are led by exceptional founders with deep domain expertise</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-linkred/10 text-linkred flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Have the potential for significant growth and scalability</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-linkred/10 text-linkred flex items-center justify-center mr-3 mt-0.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Operate in markets with strong tailwinds and large TAM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
