import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Heart, Phone, User, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleEmergency = () => {
    navigate('/emergency');
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">HealthSathi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/symptom-checker" className="text-gray-700 hover:text-blue-600 font-medium">
              Symptom Checker
            </Link>
            <Link to="/consult-doctor" className="text-gray-700 hover:text-blue-600 font-medium">
              Consult Doctor
            </Link>
            <Link to="/health-records" className="text-gray-700 hover:text-blue-600 font-medium">
              Health Records
            </Link>
            <Link to="/health-education" className="text-gray-700 hover:text-blue-600 font-medium">
              Health Education
            </Link>
          </nav>

          {/* Emergency & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleEmergency}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Emergency</span>
            </button>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Link to="/health-records" className="text-gray-700 hover:text-blue-600">
                  <User className="h-6 w-6" />
                </Link>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-gray-700 hover:text-red-600"
                >
                  <LogOut className="h-6 w-6" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="py-4 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/symptom-checker"
                className="block text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Symptom Checker
              </Link>
              <Link
                to="/consult-doctor"
                className="block text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Consult Doctor
              </Link>
              <Link
                to="/health-records"
                className="block text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Health Records
              </Link>
              <Link
                to="/health-education"
                className="block text-gray-700 hover:text-blue-600 font-medium px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Health Education
              </Link>
              <div className="px-4 py-2 space-y-2">
                <button
                  onClick={handleEmergency}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>Emergency</span>
                </button>
                {!isLoggedIn && (
                  <div className="flex space-x-2">
                    <Link
                      to="/login"
                      className="flex-1 text-center text-blue-600 hover:text-blue-700 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
