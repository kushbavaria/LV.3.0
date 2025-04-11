// /Users/kushbavaria/Desktop/visual-venture-vista/src/pages/Team.tsx
import React from 'react';
import Navbar from '@/components/Navbar'; // Assuming Navbar is needed on this page too

interface TeamMember {
  name: string;
  title: string;
  university: string;
  imageUrl?: string; // Optional: Use placeholder if no image provided
}

// Updated team member data
const teamMembers: TeamMember[] = [
  { name: 'Dave Blundin', title: 'FOUNDER AND GENERAL PARTNER', university: 'MIT', imageUrl: '/images/team/dave-blundin.jpg' },
  { name: 'Peter H. Diamandis, MD', title: 'FOUNDER AND PARTNER - LINK XPV FUND', university: 'MIT, Harvard', imageUrl: '/images/team/peter-diamandis.jpg' },
  { name: 'John Werner', title: 'MANAGING DIRECTOR', university: 'MIT Fellow', imageUrl: '/images/team/john-werner.jpg' },
  { name: 'Lisa Dolan', title: 'MANAGING DIRECTOR', university: 'JHU, Columbia', imageUrl: '/images/team/lisa-dolan.jpg' },
  { name: 'Boaz Fachler', title: 'PRINCIPAL INVESTOR', university: 'MIT', imageUrl: '/images/team/boaz-fachler.jpg' },
  { name: 'Kush Bavaria', title: 'INVESTOR', university: 'MIT', imageUrl: '/images/team/kush-bavaria.jpg' },
  { name: 'KJ Hardrict', title: 'TECHNICAL PRINCIPAL INVESTOR', university: 'MIT', imageUrl: '/images/team/kj-hardrict.jpg' },
  { name: 'Yianni Psaltis, Ph.D.', title: 'MANAGING DIRECTOR', university: 'BC, Georgetown', imageUrl: '/images/team/yianni-psaltis.jpg' },
  { name: 'Erik Brynjolfsson, PhD', title: 'VENTURE ADVISOR', university: 'MIT, Harvard, Stanford', imageUrl: '/images/team/erik-brynjolfsson.jpg' },
  { name: 'Alex Wissner-Gross Ph.D.', title: 'VENTURE ADVISOR', university: 'MIT, Harvard', imageUrl: '/images/team/alex-wissner-gross.jpg' },
  { name: 'Dominic Lloyd', title: 'MANAGING DIRECTOR', university: 'Univ Of Denver Law', imageUrl: '/images/team/dominic-lloyd.jpg' },
  { name: 'Matt Rita', title: 'MANAGING DIRECTOR', university: 'MIT', imageUrl: '/images/team/matt-rita.jpg' },
  { name: 'Roman Cepeda', title: 'MANAGING DIRECTOR, COO', university: 'MIT', imageUrl: '/images/team/roman-cepeda.jpg' },
  { name: 'Dan Oliveri', title: 'CHIEF OF STAFF', university: 'UMass Amherst', imageUrl: '/images/team/dan-oliveri.jpg' },
  { name: 'John McGeachie', title: 'STUDIO PARTNER', university: 'Dartmouth', imageUrl: '/images/team/john-mcgeachie.jpg' },
  { name: 'Cynthia Blanco', title: 'CHIEF FINANCIAL OFFICER', university: 'Northeastern', imageUrl: '/images/team/cynthia-blanco.jpg' },
  { name: 'John Blundin', title: 'MANAGING DIRECTOR, INVESTOR RELATION MANAGER', university: 'Rollins College', imageUrl: '/images/team/john-blundin.jpg' },
  { name: 'Jason Ryder', title: 'TAX DIRECTOR', university: 'Bentley', imageUrl: '/images/team/jason-ryder.jpg' },
  { name: 'Karen Green', title: 'OFFICE & CULTURE DIRECTOR', university: '', imageUrl: '/images/team/karen-green.jpg' }, // Added empty university as none was provided
];

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="w-full pt-32 pb-16 px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative w-full aspect-square">
              <img
                src={member.imageUrl || '/images/team/placeholder-image.jpg'}
                alt={member.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 p-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.title}</p>
                  {member.university && <p className="text-xs">{member.university}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
