
import React from 'react';
import TeamCard from './TeamCard';

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Managing Partner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600&q=80",
    bio: "Sarah has over 20 years of experience in venture capital and previously founded two successful startups in the enterprise software space.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600&q=80",
    bio: "Michael specializes in healthcare and biotech investments with a background as a physician and healthcare executive.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 3,
    name: "David Rodriguez",
    title: "Partner",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600&q=80",
    bio: "David leads our fintech practice and previously worked at leading financial institutions and tech companies.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 4,
    name: "Rebecca Kim",
    title: "Principal",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600&q=80",
    bio: "Rebecca focuses on enterprise SaaS and cybersecurity investments, with technical expertise in AI and machine learning.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 5,
    name: "James Williams",
    title: "Principal",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600&q=80",
    bio: "James specializes in cleantech investments and has a background in renewable energy and sustainability.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 6,
    name: "Olivia Garcia",
    title: "Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600&q=80",
    bio: "Olivia leads our frontier tech investments, with expertise in emerging technologies and deep tech.",
    linkedin: "#",
    twitter: "#"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-linkred mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the experienced team behind Link Ventures, dedicated to finding 
            and supporting the next generation of innovative companies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              title={member.title}
              image={member.image}
              bio={member.bio}
              linkedin={member.linkedin}
              twitter={member.twitter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
