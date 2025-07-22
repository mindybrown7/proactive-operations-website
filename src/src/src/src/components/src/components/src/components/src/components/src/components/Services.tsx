import React from 'react';
import { Lightbulb, Target, Cog, TrendingUp, DollarSign, Users, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Strategic Consulting',
      description: 'Proven methodologies backed by 20+ years of industry expertise delivering measurable operational transformation.',
      features: ['P.O.W.E.R. Framework™ Implementation', 'ROI-Focused Assessments', 'Industry-Specific Solutions'],
      color: 'bg-yellow-500'
    },
    {
      icon: Target,
      title: 'Fractional COO Leadership',
      description: 'C-suite operational expertise without full-time costs. Trusted by transportation and logistics leaders.',
      features: ['Executive-Level Strategy', 'Performance Accountability', 'Scalable Leadership Systems'],
      color: 'bg-red-500'
    },
    {
      icon: Cog,
      title: 'Operational Excellence',
      description: 'Proprietary optimization systems delivering average 30% efficiency gains across transportation sectors.',
      features: ['Lean Six Sigma Implementation', 'Digital Transformation', 'Quality Management Systems'],
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced analytics platforms providing real-time insights for transportation and logistics optimization.',
      features: ['Custom Dashboard Development', 'Predictive Analytics', 'ROI Measurement Systems'],
      color: 'bg-green-500'
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Proven track record of 25% average cost reductions while maintaining service excellence standards.',
      features: ['Strategic Cost Analysis', 'Vendor Optimization', 'Financial Performance Management'],
      color: 'bg-purple-500'
    },
    {
      icon: Rocket,
      title: 'Growth Acceleration',
      description: 'Scalable systems and processes enabling sustainable expansion in competitive transportation markets.',
      features: ['Market Expansion Strategy', 'Capacity Planning', 'Competitive Positioning'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Proven Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong>Two decades of industry-recognized expertise</strong> delivering transformational results across transportation, 
            logistics, and manufacturing sectors. Our proven methodologies consistently outperform industry benchmarks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-black text-white p-12 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Our clients achieve measurable results: proven cost savings, enhanced efficiency, 
              and sustainable competitive advantage through our proprietary methodologies.
            </p>
            <a href="#contact" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block">
              Schedule Strategic Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
