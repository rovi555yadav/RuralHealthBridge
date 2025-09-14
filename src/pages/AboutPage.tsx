import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Target, 
  Award, 
  MapPin, 
  Calendar,
  Quote,
  CheckCircle
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, number: '50,000+', label: 'Patients Served' },
    { icon: <Heart className="h-8 w-8" />, number: '500+', label: 'Qualified Doctors' },
    { icon: <MapPin className="h-8 w-8" />, number: '1,000+', label: 'Villages Covered' },
    { icon: <Award className="h-8 w-8" />, number: '24/7', label: 'Emergency Support' }
  ];

  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chief Medical Officer',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/200x200/4f46e5/ffffff?text=RK',
      description: 'Leading rural healthcare initiatives with 20+ years of experience'
    },
    {
      name: 'Priya Sharma',
      role: 'Technology Director',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/200x200/ec4899/ffffff?text=PS',
      description: 'Building accessible healthcare technology for rural communities'
    },
    {
      name: 'Dr. Amit Patel',
      role: 'Community Health Lead',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/200x200/059669/ffffff?text=AP',
      description: 'Connecting healthcare services with remote villages across India'
    }
  ];

  const values = [
    {
      title: 'Accessibility',
      description: 'Making healthcare accessible to every corner of rural India',
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: 'Quality Care',
      description: 'Providing world-class medical services without compromise',
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: 'Affordability',
      description: 'Ensuring healthcare remains affordable for all economic backgrounds',
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: 'Innovation',
      description: 'Using technology to bridge the healthcare gap in rural areas',
      icon: <Target className="h-6 w-6" />
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
              About HealthSathi
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Bridging the healthcare gap in rural India through technology and compassion
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Heart className="h-8 w-8 text-red-300" />
              <span className="text-lg">Serving communities since 2020</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                HealthSathi was founded with a simple yet powerful mission: to ensure that 
                quality healthcare is accessible to every individual in rural and remote areas 
                of India, regardless of their location or economic status.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that distance should never be a barrier to receiving proper medical 
                care. Through our platform, we connect rural communities with qualified healthcare 
                professionals, provide AI-powered health assessments, and offer 24/7 emergency support.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Connecting rural patients with qualified doctors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Providing AI-powered symptom checking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Offering health education in local languages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">24/7 emergency medical support</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/2563eb/ffffff?text=Rural+Healthcare+Mission"
                alt="Rural Healthcare Mission"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals working to transform rural healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Quote className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="prose prose-lg max-w-none text-gray-600"
            >
              <p className="text-xl leading-relaxed mb-6">
                HealthSathi was born from a personal experience. Our founder, Dr. Rajesh Kumar, 
                witnessed firsthand the struggles of rural communities to access quality healthcare 
                when his own grandfather couldn&apos;t receive timely medical attention in their village.
              </p>
              
              <p className="text-xl leading-relaxed mb-6">
                This experience sparked a vision: what if technology could bridge the gap between 
                rural patients and urban healthcare expertise? What if distance was no longer a 
                barrier to receiving quality medical care?
              </p>
              
              <p className="text-xl leading-relaxed mb-6">
                Since our launch in 2020, we&apos;ve grown from a small team of passionate healthcare 
                professionals to a comprehensive platform serving thousands of patients across rural India. 
                We&apos;ve partnered with government initiatives, local healthcare workers, and technology 
                experts to create a solution that truly understands and addresses the unique challenges 
                of rural healthcare.
              </p>
              
              <p className="text-xl leading-relaxed">
                Today, HealthSathi continues to evolve, always keeping our core mission at heart: 
                ensuring that every person, regardless of where they live, has access to the healthcare 
                they deserve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our mission to transform rural healthcare
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: '2020',
                  title: 'HealthSathi Founded',
                  description: 'Started with a vision to bridge healthcare gaps in rural India'
                },
                {
                  year: '2021',
                  title: 'First 100 Villages Connected',
                  description: 'Reached our first milestone of serving 100 rural communities'
                },
                {
                  year: '2022',
                  title: 'AI Symptom Checker Launched',
                  description: 'Introduced AI-powered health assessments in multiple Indian languages'
                },
                {
                  year: '2023',
                  title: '500+ Doctors Onboarded',
                  description: 'Built a network of qualified healthcare professionals'
                },
                {
                  year: '2024',
                  title: '50,000 Patients Served',
                  description: 'Reached the milestone of serving 50,000+ rural patients'
                },
                {
                  year: '2025',
                  title: 'Expanding Across India',
                  description: 'Continuing our mission to cover all rural areas of India'
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                  }`}
                >
                  <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="h-6 w-6 text-blue-600" />
                      <span className="text-blue-600 font-semibold">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
