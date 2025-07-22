import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Lock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    verifyHuman: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      return;
    }
    
    // Verify human check
    if (!formData.verifyHuman) {
      alert('Please verify that you are human.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Create form data for submission
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('company', formData.company);
    submitData.append('message', formData.message);
    submitData.append('_to', 'mbrown@proactiveoperations.com');
    submitData.append('_subject', `New Contact Form Submission from ${formData.name}`);
    submitData.append('_cc', formData.email);
    
    // Submit to Formspree (free form handling service)
    fetch('https://formspree.io/f/xdkogkvo', {
      method: 'POST',
      body: submitData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          verifyHuman: false
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again or email us directly at mbrown@proactiveoperations.com');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'mbrown@proactiveoperations.com',
      description: 'Send us an email anytime'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Start Your Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Schedule your strategic consultation to discover how our proven P.O.W.E.R. Framework™ 
            can deliver 30% efficiency gains and 25% cost reductions for your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Let's Connect</h3>
            
            <div className="bg-gray-100 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-black mb-3">Proven Track Record</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 20+ years operational excellence expertise</li>
                <li>• Transportation & logistics specialization</li>
                <li>• Proprietary P.O.W.E.R. Framework™</li>
              </ul>
            </div>
            
            <div className="space-y-6 mb-8 max-w-sm">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">{info.title}</h4>
                    <p className="text-lg text-gray-900 mb-1">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users but visible to bots */}
              <div style={{ display: 'none' }}>
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full
