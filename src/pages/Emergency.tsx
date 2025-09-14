import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  Ambulance, 
  Heart, 
  Zap,
  Users,
  Navigation,
  PhoneCall,
  MessageSquare
} from 'lucide-react';

interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  description: string;
  type: 'national' | 'medical' | 'local';
  icon: React.ReactNode;
}

interface NearbyHospital {
  id: string;
  name: string;
  address: string;
  distance: string;
  contact: string;
  type: 'government' | 'private';
  facilities: string[];
}

const Emergency: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  const emergencyContacts: EmergencyContact[] = [
    {
      id: '1',
      name: 'National Emergency',
      number: '112',
      description: 'All emergency services (Police, Fire, Medical)',
      type: 'national',
      icon: <Phone className="h-8 w-8" />
    },
    {
      id: '2',
      name: 'Medical Emergency',
      number: '108',
      description: 'Free ambulance service across India',
      type: 'medical',
      icon: <Ambulance className="h-8 w-8" />
    },
    {
      id: '3',
      name: 'Police',
      number: '100',
      description: 'Police emergency helpline',
      type: 'national',
      icon: <AlertTriangle className="h-8 w-8" />
    },
    {
      id: '4',
      name: 'Fire Brigade',
      number: '101',
      description: 'Fire and rescue services',
      type: 'national',
      icon: <Zap className="h-8 w-8" />
    },
    {
      id: '5',
      name: 'Women Helpline',
      number: '1091',
      description: '24x7 women emergency helpline',
      type: 'national',
      icon: <Users className="h-8 w-8" />
    },
    {
      id: '6',
      name: 'Child Helpline',
      number: '1098',
      description: 'Child emergency and support services',
      type: 'national',
      icon: <Heart className="h-8 w-8" />
    }
  ];

  const nearbyHospitals: NearbyHospital[] = [
    {
      id: '1',
      name: 'District Government Hospital',
      address: 'Main Road, District Center',
      distance: '2.5 km',
      contact: '+91-1234567890',
      type: 'government',
      facilities: ['Emergency', 'ICU', 'Surgery', 'Ambulance']
    },
    {
      id: '2',
      name: 'Primary Health Center',
      address: 'Village Main Street',
      distance: '1.2 km',
      contact: '+91-1234567891',
      type: 'government',
      facilities: ['Basic Emergency', 'First Aid', 'Pharmacy']
    },
    {
      id: '3',
      name: 'City Medical Center',
      address: 'Civil Lines Area',
      distance: '5.8 km',
      contact: '+91-1234567892',
      type: 'private',
      facilities: ['24/7 Emergency', 'ICU', 'Cardiac Care', 'Surgery']
    }
  ];

  const getLocationAndFindHospitals = () => {
    setIsLocating(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsLocating(false);
          // In a real app, you would call an API to find nearby hospitals
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLocating(false);
          alert('Unable to get your location. Please enable location services.');
        }
      );
    } else {
      setIsLocating(false);
      alert('Geolocation is not supported by this browser.');
    }
  };

  const callEmergencyNumber = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  const getDirections = (hospital: NearbyHospital) => {
    // In a real app, this would open maps with directions
    alert(`Getting directions to ${hospital.name}`);
  };

  return (
    <div className="min-h-screen bg-red-50 py-8">
      <div className="container mx-auto px-4">
        {/* Emergency Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-600 text-white rounded-lg p-6 mb-8"
        >
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="h-8 w-8" />
            <h1 className="text-2xl md:text-3xl font-bold">Emergency Services</h1>
          </div>
          <p className="text-red-100 text-lg">
            Quick access to emergency contacts and nearby medical facilities
          </p>
          
          {/* Quick Call Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <button
              onClick={() => callEmergencyNumber('112')}
              className="bg-red-700 hover:bg-red-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call 112</span>
            </button>
            <button
              onClick={() => callEmergencyNumber('108')}
              className="bg-red-700 hover:bg-red-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Ambulance className="h-5 w-5" />
              <span>Call 108</span>
            </button>
            <button
              onClick={getLocationAndFindHospitals}
              disabled={isLocating}
              className="bg-red-700 hover:bg-red-800 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 md:col-span-1 col-span-2"
            >
              <Navigation className="h-5 w-5" />
              <span>{isLocating ? 'Finding...' : 'Find Hospitals'}</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <PhoneCall className="h-6 w-6 text-red-600" />
                <span>Emergency Contacts</span>
              </h2>
              
              <div className="space-y-4">
                {emergencyContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-red-300 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="text-red-600">
                          {contact.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{contact.name}</h3>
                          <p className="text-sm text-gray-600">{contact.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => callEmergencyNumber(contact.number)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                      >
                        {contact.number}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Tips */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">
                Emergency Tips
              </h3>
              <ul className="space-y-2 text-orange-700">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600">•</span>
                  <span>Stay calm and speak clearly when calling emergency services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600">•</span>
                  <span>Provide your exact location and describe the emergency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600">•</span>
                  <span>Follow the operator&apos;s instructions carefully</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600">•</span>
                  <span>Don&apos;t hang up until told to do so</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Nearby Hospitals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <span>Nearby Hospitals</span>
                </h2>
                {!userLocation && (
                  <button
                    onClick={getLocationAndFindHospitals}
                    disabled={isLocating}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  >
                    {isLocating ? 'Locating...' : 'Use My Location'}
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {nearbyHospitals.map((hospital) => (
                  <div
                    key={hospital.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-800">{hospital.name}</h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{hospital.address}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                          <Navigation className="h-4 w-4" />
                          <span>{hospital.distance} away</span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        hospital.type === 'government' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {hospital.type === 'government' ? 'Govt' : 'Private'}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {hospital.facilities.map((facility, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => callEmergencyNumber(hospital.contact)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center space-x-1"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Call</span>
                      </button>
                      <button
                        onClick={() => getDirections(hospital)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center space-x-1"
                      >
                        <Navigation className="h-4 w-4" />
                        <span>Directions</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-3">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Ambulance className="h-5 w-5" />
                  <span>Request Ambulance</span>
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Emergency Chat Support</span>
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Mental Health Crisis Line</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6"
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
              <p className="text-yellow-700">
                This emergency service locator is for reference only. In case of a life-threatening 
                emergency, immediately call 112 (National Emergency Number) or 108 (Medical Emergency). 
                Always prioritize calling official emergency services over using this app.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Emergency;
