import React from 'react';
import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We align operational strategies with business objectives to drive sustainable growth.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our experienced professionals bring decades of operational excellence expertise.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions that transform traditional operational approaches.'
    },
    {
      icon: TrendingUp,
      title: 'Results Driven',
      description: 'Measurable improvements in efficiency, productivity, and bottom-line performance.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Proven
              <span className="block text-gray-600">Excellence</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our proprietary <strong>P.O.W.E.R. Framework™</strong> (Process Optimization, Workflow Enhancement, 
                Efficiency Realization) has consistently delivered:
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4 my-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black">30%</div>
                  <div className="text-sm text-gray-600">Efficiency Increase</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black">25%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-black">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Recognized industry expert with two decades of experience specializing in transportation logistics optimization, 
                supply chain excellence, and manufacturing operational transformation.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/bulb.jpeg" 
                alt="Innovation and Strategy" 
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
