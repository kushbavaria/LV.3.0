
import React from 'react';
import TeamCard from './TeamCard';

const teamMembers = [
  {
    id: 1,
    name: "Dave Blundin",
    title: "FOUNDER AND GENERAL PARTNER",
    image: "/images/team/dave-blundin.jpg",
    bio: "Dave has founded or co-founded five companies, including Vignette Corporation (VIGN), Vestmark, Cimpress NV (CMPR), and Link Ventures.",
    linkedin: "https://www.linkedin.com/in/blundin/",
    twitter: "#"
  },
  {
    id: 2,
    name: "Peter H. Diamandis, MD",
    title: "FOUNDER AND PARTNER - LINK XPV FUND",
    image: "/images/team/peter-diamandis.jpg",
    bio: "Peter is the Founder & Executive Chairman of the XPRIZE Foundation and Executive Founder of Singularity University. He has founded or co-founded over 20 companies.",
    linkedin: "https://www.linkedin.com/in/peterdiamandis/",
    twitter: "https://twitter.com/PeterDiamandis"
  },
  {
    id: 3,
    name: "John Werner",
    title: "MANAGING DIRECTOR",
    image: "/images/team/john-werner.jpg",
    bio: "John is a networker, inventor, and mobilizer who brings ideas, people, and resources together. Previously at MIT's Media Lab and the Autodesk Innovation Lab.",
    linkedin: "https://www.linkedin.com/in/john-werner-1048a45/",
    twitter: "#"
  },
  {
    id: 4,
    name: "Lisa Dolan",
    title: "MANAGING DIRECTOR",
    image: "/images/team/lisa-dolan.jpg",
    bio: "Lisa brings expertise in global business development and partnership creation. Former digital strategy executive from Universal Music and Condé Nast.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 5,
    name: "Boaz Fachler",
    title: "PRINCIPAL INVESTOR",
    image: "/images/team/boaz-fachler.jpg",
    bio: "Boaz focuses on early-stage startups at Link Ventures. Previously worked with healthcare and consumer startups as an early team member.",
    linkedin: "https://www.linkedin.com/in/boazfachler/",
    twitter: "#"
  },
  {
    id: 6,
    name: "Kush Bavaria",
    title: "INVESTOR",
    image: "/images/team/kush-bavaria.jpg",
    bio: "Kush leads investment and operational activities with portfolio companies. Previously at Tesla and worked with startups across hardware and software.",
    linkedin: "https://www.linkedin.com/in/kushbavaria/",
    twitter: "#"
  },
  {
    id: 7,
    name: "KJ Hardrict",
    title: "TECHNICAL PRINCIPAL INVESTOR",
    image: "/images/team/kj-hardrict.jpg", 
    bio: "KJ brings technical expertise to evaluate early-stage startups. Previously worked on AI, machine learning, and core technology ventures.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 8,
    name: "Yianni Psaltis, Ph.D.",
    title: "MANAGING DIRECTOR",
    image: "/images/team/yianni-psaltis.jpg",
    bio: "Yianni leads investment strategy and portfolio company operations at Link Ventures. Previously in business development and strategic partnerships.",
    linkedin: "#",
    twitter: "#"
  },
  {
    id: 9,
    name: "Erik Brynjolfsson, PhD",
    title: "VENTURE ADVISOR",
    image: "/images/team/erik-brynjolfsson.jpg",
    bio: "Erik is a professor at Stanford University and Director of the Stanford Digital Economy Lab. He is a leading researcher on technology's impact on business.",
    linkedin: "https://www.linkedin.com/in/erikbrynjolfsson/",
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
