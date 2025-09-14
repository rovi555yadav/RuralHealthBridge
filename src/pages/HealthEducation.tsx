import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  Clock, 
  User, 
  Heart, 
  Baby, 
  Utensils, 
  Activity,
  Shield,
  Brain,
  Eye,
  Search,
  Filter,
  Bookmark,
  Share2
} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: number;
  author: string;
  summary: string;
  image: string;
  language: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  isFeatured: boolean;
}

interface Video {
  id: string;
  title: string;
  category: string;
  duration: string;
  instructor: string;
  thumbnail: string;
  language: string;
  views: number;
}

const HealthEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('articles');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'general', name: 'General Health', icon: <Heart className="h-5 w-5" /> },
    { id: 'nutrition', name: 'Nutrition', icon: <Utensils className="h-5 w-5" /> },
    { id: 'fitness', name: 'Fitness', icon: <Activity className="h-5 w-5" /> },
    { id: 'maternal', name: 'Maternal Health', icon: <Baby className="h-5 w-5" /> },
    { id: 'mental', name: 'Mental Health', icon: <Brain className="h-5 w-5" /> },
    { id: 'prevention', name: 'Disease Prevention', icon: <Shield className="h-5 w-5" /> }
  ];

  const articles: Article[] = [
    {
      id: '1',
      title: 'Understanding Diabetes: Prevention and Management',
      category: 'general',
      readTime: 8,
      author: 'Dr. Rajesh Kumar',
      summary: 'Learn about diabetes prevention, early symptoms, and effective management strategies for better health.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x200/3b82f6/ffffff?text=Diabetes+Management',
      language: 'English',
      difficulty: 'beginner',
      isFeatured: true
    },
    {
      id: '2',
      title: 'मानसिक स्वास्थ्य का महत्व: तनाव को कैसे करें कम',
      category: 'mental',
      readTime: 6,
      author: 'Dr. Priya Sharma',
      summary: 'मानसिक स्वास्थ्य की देखभाल और तनाव प्रबंधन के प्रभावी तरीकों के बारे में जानें।',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x200/10b981/ffffff?text=Mental+Health',
      language: 'Hindi',
      difficulty: 'beginner',
      isFeatured: true
    },
    {
      id: '3',
      title: 'Balanced Diet for Rural Communities',
      category: 'nutrition',
      readTime: 10,
      author: 'Nutritionist Anjali Gupta',
      summary: 'Simple and affordable nutrition tips for families in rural areas using locally available ingredients.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x200/f59e0b/ffffff?text=Nutrition',
      language: 'English',
      difficulty: 'beginner',
      isFeatured: false
    },
    {
      id: '4',
      title: 'गर्भावस्था में देखभाल: मां और बच्चे के लिए जरूरी बातें',
      category: 'maternal',
      readTime: 12,
      author: 'Dr. Sunita Iyer',
      summary: 'गर्भावस्था के दौरान माँ और बच्चे की सुरक्षा के लिए आवश्यक सावधानियाँ और देखभाल।',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x200/ec4899/ffffff?text=Pregnancy+Care',
      language: 'Hindi',
      difficulty: 'intermediate',
      isFeatured: false
    },
    {
      id: '5',
      title: 'Home Exercises for Better Health',
      category: 'fitness',
      readTime: 7,
      author: 'Fitness Coach Rahul Singh',
      summary: 'Simple exercises you can do at home without any equipment to stay fit and healthy.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x200/8b5cf6/ffffff?text=Home+Exercises',
      language: 'English',
      difficulty: 'beginner',
      isFeatured: false
    },
    {
      id: '6',
      title: 'बच्चों में सामान्य बीमारियों की रोकथाम',
      category: 'prevention',
      readTime: 9,
      author: 'Dr. Amit Patel',
      summary: 'बच्चों में होने वाली सामान्य बीमारियों से बचाव और घरेलू उपचार के तरीके।',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x200/dc2626/ffffff?text=Child+Health',
      language: 'Hindi',
      difficulty: 'beginner',
      isFeatured: false
    }
  ];

  const videos: Video[] = [
    {
      id: '1',
      title: 'How to Check Blood Pressure at Home',
      category: 'general',
      duration: '5:30',
      instructor: 'Dr. Sarah Johnson',
      thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/320x180/3b82f6/ffffff?text=BP+Check',
      language: 'English',
      views: 15420
    },
    {
      id: '2',
      title: 'योग: तनाव कम करने के लिए आसान आसन',
      category: 'mental',
      duration: '12:45',
      instructor: 'योग गुरु राम शर्मा',
      thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/320x180/10b981/ffffff?text=Yoga+Hindi',
      language: 'Hindi',
      views: 8750
    },
    {
      id: '3',
      title: 'Basic First Aid for Emergencies',
      category: 'general',
      duration: '8:20',
      instructor: 'Emergency Nurse Lisa Chen',
      thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/320x180/dc2626/ffffff?text=First+Aid',
      language: 'English',
      views: 12300
    },
    {
      id: '4',
      title: 'स्वस्थ भोजन बनाने के आसान तरीके',
      category: 'nutrition',
      duration: '10:15',
      instructor: 'शेफ अनिता गुप्ता',
      thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/320x180/f59e0b/ffffff?text=Healthy+Cooking',
      language: 'Hindi',
      views: 6890
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || article.language.toLowerCase() === selectedLanguage;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLanguage && matchesSearch;
  });

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || video.language.toLowerCase() === selectedLanguage;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLanguage && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
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
            Health Education
          </h1>
          <p className="text-xl text-gray-600">
            Learn about health and wellness through expert articles and videos in your language
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedCategory === category.id
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    {category.icon}
                    <span className="text-sm font-medium text-center">{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Search articles and videos..."
                  />
                </div>
              </div>

              {/* Language Filter */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Languages</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>

              {/* Tab Navigation */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('articles')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'articles'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Articles
                </button>
                <button
                  onClick={() => setActiveTab('videos')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'videos'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Videos
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Featured Articles */}
            {filteredArticles.some(article => article.isFeatured) && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles
                    .filter(article => article.isFeatured)
                    .map((article, index) => (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                              {article.difficulty}
                            </span>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4 text-gray-500" />
                              <span className="text-sm text-gray-500">{article.readTime} min read</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{article.summary}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <User className="h-4 w-4" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="p-1 text-gray-500 hover:text-blue-600">
                                <Bookmark className="h-4 w-4" />
                              </button>
                              <button className="p-1 text-gray-500 hover:text-blue-600">
                                <Share2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            )}

            {/* All Articles */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  All Articles ({filteredArticles.length})
                </h2>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Sort by: Newest</option>
                  <option>Sort by: Popular</option>
                  <option>Sort by: Reading Time</option>
                </select>
              </div>

              <div className="space-y-4">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-start space-y-3 md:space-y-0 md:space-x-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full md:w-32 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
                            {article.difficulty}
                          </span>
                          <span className="text-xs text-gray-500">{article.language}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{article.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{article.summary}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{article.readTime} min read</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button className="p-1 text-gray-500 hover:text-blue-600">
                              <Bookmark className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-500 hover:text-blue-600">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Health Videos ({filteredVideos.length})
              </h2>
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Sort by: Newest</option>
                <option>Sort by: Most Viewed</option>
                <option>Sort by: Duration</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{video.instructor}</span>
                      </div>
                      <span>{video.language}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {video.views.toLocaleString()} views
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* No Results */}
        {((activeTab === 'articles' && filteredArticles.length === 0) ||
          (activeTab === 'videos' && filteredVideos.length === 0)) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <BookOpen className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No {activeTab} found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HealthEducation;
