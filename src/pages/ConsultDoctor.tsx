import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Star, 
  Clock, 
  Video, 
  Phone, 
  MessageSquare, 
  Calendar,
  MapPin,
  DollarSign,
  Heart,
  Brain,
  Baby,
  Eye,
  Stethoscope,
  Filter
} from 'lucide-react';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  languages: string[];
  availability: string;
  consultationFee: number;
  location: string;
  image: string;
  verified: boolean;
}

const ConsultDoctor: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const specialties = [
    { id: 'all', name: 'All Specialties', icon: <Stethoscope className="h-5 w-5" /> },
    { id: 'general', name: 'General Medicine', icon: <Heart className="h-5 w-5" /> },
    { id: 'cardiology', name: 'Cardiology', icon: <Heart className="h-5 w-5" /> },
    { id: 'neurology', name: 'Neurology', icon: <Brain className="h-5 w-5" /> },
    { id: 'pediatrics', name: 'Pediatrics', icon: <Baby className="h-5 w-5" /> },
    { id: 'ophthalmology', name: 'Ophthalmology', icon: <Eye className="h-5 w-5" /> }
  ];

  const doctors: Doctor[] = [
    {
      id: '1',
      name: 'Dr. Rajesh Sharma',
      specialty: 'General Medicine',
      experience: 15,
      rating: 4.8,
      reviews: 234,
      languages: ['Hindi', 'English', 'Punjabi'],
      availability: 'Available Now',
      consultationFee: 200,
      location: 'New Delhi',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/4f46e5/ffffff?text=RS',
      verified: true
    },
    {
      id: '2',
      name: 'Dr. Priya Patel',
      specialty: 'Pediatrics',
      experience: 12,
      rating: 4.9,
      reviews: 189,
      languages: ['Hindi', 'English', 'Gujarati'],
      availability: 'Available in 30 mins',
      consultationFee: 250,
      location: 'Ahmedabad',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/ec4899/ffffff?text=PP',
      verified: true
    },
    {
      id: '3',
      name: 'Dr. Amit Kumar',
      specialty: 'Cardiology',
      experience: 20,
      rating: 4.7,
      reviews: 456,
      languages: ['Hindi', 'English', 'Bengali'],
      availability: 'Available Tomorrow',
      consultationFee: 400,
      location: 'Kolkata',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/059669/ffffff?text=AK',
      verified: true
    },
    {
      id: '4',
      name: 'Dr. Sunita Singh',
      specialty: 'Ophthalmology',
      experience: 8,
      rating: 4.6,
      reviews: 67,
      languages: ['Hindi', 'English', 'Marathi'],
      availability: 'Available Now',
      consultationFee: 180,
      location: 'Mumbai',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/7c3aed/ffffff?text=SS',
      verified: true
    },
    {
      id: '5',
      name: 'Dr. Mohammed Khan',
      specialty: 'Neurology',
      experience: 18,
      rating: 4.9,
      reviews: 298,
      languages: ['Hindi', 'English', 'Urdu'],
      availability: 'Available in 1 hour',
      consultationFee: 350,
      location: 'Hyderabad',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/dc2626/ffffff?text=MK',
      verified: true
    },
    {
      id: '6',
      name: 'Dr. Lakshmi Iyer',
      specialty: 'General Medicine',
      experience: 10,
      rating: 4.5,
      reviews: 156,
      languages: ['Hindi', 'English', 'Tamil', 'Telugu'],
      availability: 'Available Now',
      consultationFee: 220,
      location: 'Chennai',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/f59e0b/ffffff?text=LI',
      verified: true
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === 'all' || 
      doctor.specialty.toLowerCase().includes(selectedSpecialty);
    const matchesLanguage = selectedLanguage === 'all' || 
      doctor.languages.some(lang => lang.toLowerCase().includes(selectedLanguage));
    const matchesPrice = priceRange === 'all' || 
      (priceRange === 'low' && doctor.consultationFee <= 200) ||
      (priceRange === 'medium' && doctor.consultationFee > 200 && doctor.consultationFee <= 300) ||
      (priceRange === 'high' && doctor.consultationFee > 300);
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSpecialty && matchesLanguage && matchesPrice && matchesSearch;
  });

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes('Now')) return 'text-green-600 bg-green-50';
    if (availability.includes('mins') || availability.includes('hour')) return 'text-orange-600 bg-orange-50';
    return 'text-blue-600 bg-blue-50';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Consult with Qualified Doctors
          </h1>
          <p className="text-xl text-gray-600">
            Get expert medical consultation from certified doctors in your preferred language
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Doctor
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Doctor name or specialty"
                />
              </div>

              {/* Specialty Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialty
                </label>
                <select
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {specialties.map(specialty => (
                    <option key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Languages</option>
                  <option value="hindi">Hindi</option>
                  <option value="english">English</option>
                  <option value="bengali">Bengali</option>
                  <option value="tamil">Tamil</option>
                  <option value="telugu">Telugu</option>
                  <option value="gujarati">Gujarati</option>
                  <option value="punjabi">Punjabi</option>
                  <option value="marathi">Marathi</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Consultation Fee
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="low">Under ₹200</option>
                  <option value="medium">₹200 - ₹300</option>
                  <option value="high">Above ₹300</option>
                </select>
              </div>

              {/* Quick Filters */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Filters</h3>
                <div className="space-y-2">
                  <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">
                    Available Now
                  </button>
                  <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">
                    Highly Rated (4.5+)
                  </button>
                  <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">
                    Experienced (10+ years)
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Doctors List */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 flex items-center justify-between"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {filteredDoctors.length} Doctors Available
              </h2>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Sort by: Recommended</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Experience</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
              </select>
            </motion.div>

            <div className="space-y-6">
              {filteredDoctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      {/* Doctor Image & Basic Info */}
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-20 h-20 rounded-full object-cover"
                          />
                          {doctor.verified && (
                            <div className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full p-1">
                              <Star className="h-3 w-3 fill-current" />
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {doctor.name}
                          </h3>
                          <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{doctor.experience} years exp.</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{doctor.location}</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Rating & Reviews */}
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="font-semibold text-gray-800">{doctor.rating}</span>
                        </div>
                        <span className="text-gray-600">({doctor.reviews} reviews)</span>
                      </div>

                      {/* Availability */}
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(doctor.availability)}`}>
                        <Clock className="h-4 w-4 inline mr-1" />
                        {doctor.availability}
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">
                          ₹{doctor.consultationFee}
                        </div>
                        <div className="text-sm text-gray-600">per consultation</div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="mt-4">
                      <span className="text-sm text-gray-600">Languages: </span>
                      <div className="inline-flex flex-wrap gap-2 mt-1">
                        {doctor.languages.map((language, langIndex) => (
                          <span
                            key={langIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                        <Video className="h-5 w-5" />
                        <span>Video Consultation</span>
                      </button>
                      <button className="flex-1 bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2">
                        <Phone className="h-5 w-5" />
                        <span>Voice Call</span>
                      </button>
                      <button className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2">
                        <MessageSquare className="h-5 w-5" />
                        <span>Chat</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredDoctors.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <User className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No doctors found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your filters to find more doctors
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Emergency Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Phone className="h-6 w-6 text-red-600" />
            <h3 className="text-lg font-semibold text-red-800">Emergency Medical Help</h3>
          </div>
          <p className="text-red-700 mb-4">
            If you are experiencing a medical emergency, please call emergency services immediately 
            or visit the nearest hospital. This platform is for non-emergency consultations.
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Emergency Hotline: 108
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ConsultDoctor;
