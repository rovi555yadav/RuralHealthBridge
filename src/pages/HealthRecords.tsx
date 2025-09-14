import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Plus, 
  Download, 
  Eye, 
  Share2, 
  Calendar, 
  User, 
  Heart,
  Activity,
  Thermometer,
  Weight,
  Ruler,
  Upload,
  Search,
  Filter
} from 'lucide-react';

interface HealthRecord {
  id: string;
  type: 'prescription' | 'lab_report' | 'consultation' | 'vaccination' | 'vitals';
  title: string;
  date: string;
  doctor: string;
  hospital: string;
  summary: string;
  fileUrl?: string;
}

interface VitalSigns {
  bloodPressure: string;
  heartRate: string;
  temperature: string;
  weight: string;
  height: string;
  bmi: string;
}

const HealthRecords: React.FC = () => {
  const [activeTab, setActiveTab] = useState('records');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const [vitals, setVitals] = useState<VitalSigns>({
    bloodPressure: '120/80',
    heartRate: '72',
    temperature: '98.6',
    weight: '70',
    height: '170',
    bmi: '24.2'
  });

  const healthRecords: HealthRecord[] = [
    {
      id: '1',
      type: 'consultation',
      title: 'General Health Checkup',
      date: '2025-01-15',
      doctor: 'Dr. Rajesh Sharma',
      hospital: 'District Hospital',
      summary: 'Routine checkup - All vital signs normal. Recommended to continue current lifestyle.',
      fileUrl: '/reports/consultation-1.pdf'
    },
    {
      id: '2',
      type: 'lab_report',
      title: 'Blood Test Results',
      date: '2025-01-10',
      doctor: 'Dr. Priya Patel',
      hospital: 'City Medical Center',
      summary: 'Complete blood count and lipid profile. Cholesterol slightly elevated.',
      fileUrl: '/reports/blood-test-1.pdf'
    },
    {
      id: '3',
      type: 'prescription',
      title: 'Medication for Hypertension',
      date: '2025-01-08',
      doctor: 'Dr. Amit Kumar',
      hospital: 'Primary Health Center',
      summary: 'Prescribed medication for blood pressure management. Follow up in 2 weeks.',
      fileUrl: '/reports/prescription-1.pdf'
    },
    {
      id: '4',
      type: 'vaccination',
      title: 'COVID-19 Booster Shot',
      date: '2024-12-20',
      doctor: 'Dr. Sunita Singh',
      hospital: 'Vaccination Center',
      summary: 'COVID-19 booster vaccination administered. No adverse reactions reported.'
    },
    {
      id: '5',
      type: 'vitals',
      title: 'Monthly Vitals Check',
      date: '2025-01-01',
      doctor: 'Self Recorded',
      hospital: 'Home',
      summary: 'Monthly vital signs monitoring. All parameters within normal range.'
    }
  ];

  const filteredRecords = healthRecords.filter(record => {
    const matchesSearch = record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || record.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getRecordIcon = (type: string) => {
    switch (type) {
      case 'prescription': return <FileText className="h-5 w-5 text-blue-600" />;
      case 'lab_report': return <Activity className="h-5 w-5 text-green-600" />;
      case 'consultation': return <User className="h-5 w-5 text-purple-600" />;
      case 'vaccination': return <Heart className="h-5 w-5 text-red-600" />;
      case 'vitals': return <Thermometer className="h-5 w-5 text-orange-600" />;
      default: return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  const getRecordTypeColor = (type: string) => {
    switch (type) {
      case 'prescription': return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'lab_report': return 'bg-green-50 text-green-800 border-green-200';
      case 'consultation': return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'vaccination': return 'bg-red-50 text-red-800 border-red-200';
      case 'vitals': return 'bg-orange-50 text-orange-800 border-orange-200';
      default: return 'bg-gray-50 text-gray-800 border-gray-200';
    }
  };

  const handleVitalUpdate = (vital: keyof VitalSigns, value: string) => {
    setVitals(prev => ({ ...prev, [vital]: value }));
    
    // Calculate BMI if height or weight is updated
    if (vital === 'height' || vital === 'weight') {
      const height = vital === 'height' ? parseFloat(value) : parseFloat(vitals.height);
      const weight = vital === 'weight' ? parseFloat(value) : parseFloat(vitals.weight);
      
      if (height && weight) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
        setVitals(prev => ({ ...prev, bmi }));
      }
    }
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
            Health Records
          </h1>
          <p className="text-xl text-gray-600">
            Manage your medical records, prescriptions, and health data in one place
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('records')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'records'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FileText className="h-5 w-5 inline mr-2" />
                Medical Records
              </button>
              <button
                onClick={() => setActiveTab('vitals')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'vitals'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Activity className="h-5 w-5 inline mr-2" />
                Vital Signs
              </button>
            </nav>
          </div>

          {/* Medical Records Tab */}
          {activeTab === 'records' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6"
            >
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="flex-1 max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Search records..."
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="consultation">Consultations</option>
                    <option value="lab_report">Lab Reports</option>
                    <option value="prescription">Prescriptions</option>
                    <option value="vaccination">Vaccinations</option>
                    <option value="vitals">Vitals</option>
                  </select>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                    <Plus className="h-5 w-5" />
                    <span>Add Record</span>
                  </button>
                </div>
              </div>

              {/* Records List */}
              <div className="space-y-4">
                {filteredRecords.map((record, index) => (
                  <motion.div
                    key={record.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="mt-1">
                          {getRecordIcon(record.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-800">
                              {record.title}
                            </h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRecordTypeColor(record.type)}`}>
                              {record.type.replace('_', ' ').toUpperCase()}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600 mb-2">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(record.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{record.doctor}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FileText className="h-4 w-4" />
                              <span>{record.hospital}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-700">{record.summary}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Eye className="h-5 w-5" />
                        </button>
                        {record.fileUrl && (
                          <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <Download className="h-5 w-5" />
                          </button>
                        )}
                        <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                          <Share2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredRecords.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No records found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Vital Signs Tab */}
          {activeTab === 'vitals' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Blood Pressure */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Heart className="h-6 w-6 text-red-600" />
                    <h3 className="font-semibold text-red-800">Blood Pressure</h3>
                  </div>
                  <input
                    type="text"
                    value={vitals.bloodPressure}
                    onChange={(e) => handleVitalUpdate('bloodPressure', e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="120/80"
                  />
                  <p className="text-sm text-red-600 mt-1">mmHg</p>
                </div>

                {/* Heart Rate */}
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Activity className="h-6 w-6 text-pink-600" />
                    <h3 className="font-semibold text-pink-800">Heart Rate</h3>
                  </div>
                  <input
                    type="number"
                    value={vitals.heartRate}
                    onChange={(e) => handleVitalUpdate('heartRate', e.target.value)}
                    className="w-full px-3 py-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="72"
                  />
                  <p className="text-sm text-pink-600 mt-1">bpm</p>
                </div>

                {/* Temperature */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Thermometer className="h-6 w-6 text-orange-600" />
                    <h3 className="font-semibold text-orange-800">Temperature</h3>
                  </div>
                  <input
                    type="number"
                    step="0.1"
                    value={vitals.temperature}
                    onChange={(e) => handleVitalUpdate('temperature', e.target.value)}
                    className="w-full px-3 py-2 border border-orange-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="98.6"
                  />
                  <p className="text-sm text-orange-600 mt-1">°F</p>
                </div>

                {/* Weight */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Weight className="h-6 w-6 text-blue-600" />
                    <h3 className="font-semibold text-blue-800">Weight</h3>
                  </div>
                  <input
                    type="number"
                    step="0.1"
                    value={vitals.weight}
                    onChange={(e) => handleVitalUpdate('weight', e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="70"
                  />
                  <p className="text-sm text-blue-600 mt-1">kg</p>
                </div>

                {/* Height */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Ruler className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold text-green-800">Height</h3>
                  </div>
                  <input
                    type="number"
                    value={vitals.height}
                    onChange={(e) => handleVitalUpdate('height', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="170"
                  />
                  <p className="text-sm text-green-600 mt-1">cm</p>
                </div>

                {/* BMI */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Activity className="h-6 w-6 text-purple-600" />
                    <h3 className="font-semibold text-purple-800">BMI</h3>
                  </div>
                  <input
                    type="text"
                    value={vitals.bmi}
                    readOnly
                    className="w-full px-3 py-2 bg-gray-100 border border-purple-300 rounded-lg"
                  />
                  <p className="text-sm text-purple-600 mt-1">kg/m²</p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Import from Device</span>
                </button>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Save Vitals
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthRecords;
