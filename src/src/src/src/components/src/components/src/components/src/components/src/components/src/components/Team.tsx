import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative max-w-2xl">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/coin.jpeg" 
                alt="Proactive Operations" 
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
