import React from 'react';
import { Handshake, Eye, Heart, Shield, Trophy } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Handshake,
      title: 'Trust',
      description: 'Building and maintaining trust with clients and partners through consistent, reliable actions.',
      color: 'bg-blue-500'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Ensuring openness and clarity in all our communications and dealings.',
      color: 'bg-green-500'
    },
    {
      icon: Heart,
      title: 'Respect',
      description: 'Treating everyone with respect, valuing diverse perspectives, and fostering an inclusive environment.',
      color: 'bg-purple-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Upholding the highest standards of integrity in all our actions, ensuring honesty and ethical behavior.',
      color: 'bg-red-500'
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Striving for excellence in everything we do, committed to delivering the highest quality services and results.',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Proven Principles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <strong>Industry-tested values</strong> that have guided 50+ successful operational transformations. 
            These proven principles ensure consistent, measurable results and long-term client partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                <value.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
