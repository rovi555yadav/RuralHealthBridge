import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Heart,
  Headphones,
  Globe,
  Users
} from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Emergency Hotline',
      description: '24/7 emergency medical support',
      contact: '+91 1800-123-4567',
      availability: 'Available 24/7',
      color: 'bg-red-50 border-red-200 text-red-600'
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: 'General Support',
      description: 'For general inquiries and support',
      contact: '+91 1800-123-4568',
      availability: 'Mon-Fri: 9 AM - 6 PM',
      color: 'bg-blue-50 border-blue-200 text-blue-600'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Support',
      description: 'Send us your questions via email',
      contact: 'support@healthsathi.com',
      availability: 'Response within 24 hours',
      color: 'bg-green-50 border-green-200 text-green-600'
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9 AM - 9 PM',
      color: 'bg-purple-50 border-purple-200 text-purple-600'
    }
  ];

  const offices = [
    {
      city: 'New Delhi',
      address: '123 Health Street, Connaught Place, New Delhi 110001',
      phone: '+91 11-2345-6789',
      email: 'delhi@healthsathi.com'
    },
    {
      city: 'Mumbai',
      address: '456 Medical Center, Bandra West, Mumbai 400050',
      phone: '+91 22-3456-7890',
      email: 'mumbai@healthsathi.com'
    },
    {
      city: 'Bangalore',
      address: '789 Tech Park, Electronic City, Bangalore 560100',
      phone: '+91 80-4567-8901',
      email: 'bangalore@healthsathi.com'
    }
  ];

  const faqs = [
    {
      question: 'How do I book a consultation with a doctor?',
      answer: 'You can book a consultation by visiting our "Consult Doctor" page, selecting a doctor based on your needs, and choosing a convenient time slot.'
    },
    {
      question: 'Is the symptom checker accurate?',
      answer: 'Our AI-powered symptom checker is designed to provide initial health assessments, but it should not replace professional medical advice. Always consult with a qualified doctor for proper diagnosis.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets.'
    },
    {
      question: 'How can I access my health records?',
      answer: 'Your health records are securely stored in your account. You can access them anytime by logging into your HealthSathi account and visiting the "Health Records" section.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              We&apos;re here to help you with any questions or support you need
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Heart className="h-8 w-8 text-red-300" />
              <span className="text-lg">Your health, our priority</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose the best way to reach us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-2 rounded-lg p-6 hover:shadow-lg transition-shadow ${method.color}`}
              >
                <div className="mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {method.description}
                </p>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {method.contact}
                </div>
                <div className="text-sm text-gray-500">
                  {method.availability}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="medical">Medical Question</option>
                    <option value="billing">Billing & Payment</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide details about your inquiry"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Office Locations */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-gray-800 mb-2">{office.city}</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-start space-x-2">
                          <MapPin className="h-4 w-4 mt-0.5 text-blue-600" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-blue-600" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-blue-600" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-800">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-800">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-gray-800">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-center space-x-2 text-red-600">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold">Emergency Support: 24/7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a href="/emergency" className="flex items-center space-x-2 text-red-600 hover:text-red-800">
                    <Phone className="h-4 w-4" />
                    <span>Emergency Services</span>
                  </a>
                  <a href="/symptom-checker" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
                    <Heart className="h-4 w-4" />
                    <span>Symptom Checker</span>
                  </a>
                  <a href="/consult-doctor" className="flex items-center space-x-2 text-green-600 hover:text-green-800">
                    <Users className="h-4 w-4" />
                    <span>Consult Doctor</span>
                  </a>
                  <a href="/health-education" className="flex items-center space-x-2 text-purple-600 hover:text-purple-800">
                    <Globe className="h-4 w-4" />
                    <span>Health Education</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
