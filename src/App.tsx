import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SymptomChecker from './pages/SymptomChecker';
import ConsultDoctor from './pages/ConsultDoctor';
import HealthRecords from './pages/HealthRecords';
import Emergency from './pages/Emergency';
import HealthEducation from './pages/HealthEducation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
            <Route path="/consult-doctor" element={<ConsultDoctor />} />
            <Route path="/health-records" element={<HealthRecords />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/health-education" element={<HealthEducation />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
