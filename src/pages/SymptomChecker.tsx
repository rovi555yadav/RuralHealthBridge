import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, AlertTriangle, CheckCircle, Info, User, Calendar, MapPin } from 'lucide-react';

interface Symptom {
  id: string;
  name: string;
  category: string;
}

interface Assessment {
  severity: 'low' | 'medium' | 'high';
  condition: string;
  recommendations: string[];
  shouldSeekCare: boolean;
}

const SymptomChecker: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [userInfo, setUserInfo] = useState({
    age: '',
    gender: '',
    location: ''
  });
  const [assessment, setAssessment] = useState<Assessment | null>(null);

  const commonSymptoms: Symptom[] = [
    { id: '1', name: 'Fever', category: 'General' },
    { id: '2', name: 'Headache', category: 'Neurological' },
    { id: '3', name: 'Cough', category: 'Respiratory' },
    { id: '4', name: 'Sore Throat', category: 'Respiratory' },
    { id: '5', name: 'Nausea', category: 'Digestive' },
    { id: '6', name: 'Diarrhea', category: 'Digestive' },
    { id: '7', name: 'Fatigue', category: 'General' },
    { id: '8', name: 'Body Ache', category: 'Musculoskeletal' },
    { id: '9', name: 'Chest Pain', category: 'Cardiovascular' },
    { id: '10', name: 'Shortness of Breath', category: 'Respiratory' },
    { id: '11', name: 'Dizziness', category: 'Neurological' },
    { id: '12', name: 'Stomach Pain', category: 'Digestive' }
  ];

  const filteredSymptoms = commonSymptoms.filter(symptom =>
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedSymptoms.find(s => s.id === symptom.id)
  );

  const handleSymptomSelect = (symptom: Symptom) => {
    setSelectedSymptoms([...selectedSymptoms, symptom]);
    setSearchTerm('');
  };

  const handleSymptomRemove = (symptomId: string) => {
    setSelectedSymptoms(selectedSymptoms.filter(s => s.id !== symptomId));
  };

  const handleAssessment = () => {
    // Mock assessment logic
    const hasHighRiskSymptoms = selectedSymptoms.some(s => 
      ['Chest Pain', 'Shortness of Breath', 'Severe Headache'].includes(s.name)
    );
    
    const mockAssessment: Assessment = {
      severity: hasHighRiskSymptoms ? 'high' : selectedSymptoms.length > 3 ? 'medium' : 'low',
      condition: hasHighRiskSymptoms ? 'Possible cardiac/respiratory issue' : 'Common viral infection',
      recommendations: [
        'Rest and stay hydrated',
        'Monitor symptoms for 24-48 hours',
        'Take paracetamol for fever if needed',
        hasHighRiskSymptoms ? 'Seek immediate medical attention' : 'Consult a doctor if symptoms worsen'
      ],
      shouldSeekCare: hasHighRiskSymptoms || selectedSymptoms.length > 4
    };

    setAssessment(mockAssessment);
    setCurrentStep(4);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">AI Symptom Checker</h1>
            <p className="text-blue-100">
              Get instant health assessment based on your symptoms
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 h-2">
            <div 
              className="bg-blue-600 h-2 transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            />
          </div>

          <div className="p-6">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Basic Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-1" />
                      Age
                    </label>
                    <input
                      type="number"
                      value={userInfo.age}
                      onChange={(e) => setUserInfo({...userInfo, age: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your age"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <select
                      value={userInfo.gender}
                      onChange={(e) => setUserInfo({...userInfo, gender: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="h-4 w-4 inline mr-1" />
                      Location
                    </label>
                    <input
                      type="text"
                      value={userInfo.location}
                      onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your location"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!userInfo.age || !userInfo.gender}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </motion.div>
            )}

            {/* Step 2: Symptom Selection */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Select Your Symptoms
                </h2>

                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Search for symptoms..."
                  />
                </div>

                {/* Selected Symptoms */}
                {selectedSymptoms.length > 0 && (
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-700">Selected Symptoms:</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSymptoms.map((symptom) => (
                        <span
                          key={symptom.id}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center space-x-2"
                        >
                          <span>{symptom.name}</span>
                          <button
                            onClick={() => handleSymptomRemove(symptom.id)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Available Symptoms */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filteredSymptoms.map((symptom) => (
                    <button
                      key={symptom.id}
                      onClick={() => handleSymptomSelect(symptom)}
                      className="text-left p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-medium text-gray-800">{symptom.name}</div>
                      <div className="text-sm text-gray-500">{symptom.category}</div>
                    </button>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    disabled={selectedSymptoms.length === 0}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Review Your Information
                </h2>

                <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Personal Information</h3>
                    <div className="text-sm text-gray-600">
                      Age: {userInfo.age} | Gender: {userInfo.gender} | Location: {userInfo.location}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Symptoms ({selectedSymptoms.length})</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedSymptoms.map((symptom) => (
                        <span
                          key={symptom.id}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {symptom.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-sm text-blue-800">
                      <p className="font-medium mb-1">Important Disclaimer</p>
                      <p>
                        This symptom checker is for informational purposes only and should not replace 
                        professional medical advice. Always consult with a qualified healthcare provider 
                        for proper diagnosis and treatment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleAssessment}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get Assessment
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Results */}
            {currentStep === 4 && assessment && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Your Health Assessment
                </h2>

                {/* Severity Alert */}
                <div className={`border rounded-lg p-4 ${getSeverityColor(assessment.severity)}`}>
                  <div className="flex items-center space-x-3">
                    {assessment.severity === 'high' && <AlertTriangle className="h-6 w-6" />}
                    {assessment.severity === 'medium' && <Info className="h-6 w-6" />}
                    {assessment.severity === 'low' && <CheckCircle className="h-6 w-6" />}
                    <div>
                      <div className="font-semibold capitalize">{assessment.severity} Priority</div>
                      <div className="text-sm">{assessment.condition}</div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-3">Recommendations</h3>
                  <ul className="space-y-2">
                    {assessment.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Action */}
                {assessment.shouldSeekCare && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                      <div>
                        <div className="font-semibold text-red-800">Seek Medical Attention</div>
                        <div className="text-sm text-red-700">
                          We recommend consulting with a healthcare provider soon.
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      setCurrentStep(1);
                      setSelectedSymptoms([]);
                      setAssessment(null);
                      setUserInfo({ age: '', gender: '', location: '' });
                    }}
                    className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
                  >
                    Start Over
                  </button>
                  <button
                    onClick={() => window.location.href = '/consult-doctor'}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Consult Doctor
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SymptomChecker;
