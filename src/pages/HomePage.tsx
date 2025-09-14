import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Users, 
  Clock, 
  Shield, 
  Heart, 
  Phone, 
  FileText, 
  BookOpen,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
      title: "AI Symptom Checker",
      description: "Get instant health assessments with our AI-powered symptom checker"
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Expert Doctors",
      description: "Consult with qualified doctors from the comfort of your home"
    },
    {
      icon: <Clock className="h-12 w-12 text-purple-600" />,
      title: "24/7 Support",
      description: "Round-the-clock medical support and emergency services"
    },
    {
      icon: <Shield className="h-12 w-12 text-red-600" />,
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security"
    }
  ];

  const services = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Symptom Assessment",
      description: "Check your symptoms and get instant health insights",
      link: "/symptom-checker",
      color: "bg-blue-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Doctor Consultation",
      description: "Video/voice calls with certified doctors",
      link: "/consult-doctor",
      color: "bg-green-500"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Health Records",
      description: "Manage your medical history and reports",
      link: "/health-records",
      color: "bg-purple-500"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Emergency Services",
      description: "Quick access to emergency medical help",
      link: "/emergency",
      color: "bg-red-500"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Health Education",
      description: "Learn about health and wellness",
      link: "/health-education",
      color: "bg-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Uttar Pradesh",
      rating: 5,
      comment: "HealthSathi helped me get quick medical advice when the nearest doctor was 50km away."
    },
    {
      name: "Priya Sharma",
      location: "Rajasthan",
      rating: 5,
      comment: "The symptom checker is very accurate and helped me understand my health better."
    },
    {
      name: "Dr. Amit Patel",
      location: "Gujarat",
      rating: 5,
      comment: "As a doctor, I appreciate how this platform bridges the healthcare gap in rural areas."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Healthcare for <span className="text-blue-200">Rural India</span>
              </h1>
              <p className="text-xl text-blue-100">
                Bringing quality healthcare to remote areas with AI-powered symptom checking, 
                doctor consultations, and 24/7 emergency support in your local language.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/symptom-checker"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Heart className="h-5 w-5" />
                  <span>Check Symptoms</span>
                </Link>
                <Link
                  to="/consult-doctor"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Users className="h-5 w-5" />
                  <span>Consult Doctor</span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/ffffff/2563eb?text=Rural+Healthcare"
                alt="Rural Healthcare"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose HealthSathi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the unique healthcare challenges in rural India and provide 
              solutions that are accessible, affordable, and effective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center space-y-4 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed for rural communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 h-full"
                >
                  <div className={`${service.color} text-white p-3 rounded-lg w-fit mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-200">Patients Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Qualified Doctors</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="text-blue-200">Villages Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Emergency Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people who have benefited from our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of users who trust HealthSathi for their healthcare needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Register Now</span>
              </Link>
              <Link
                to="/emergency"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Emergency Help</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
