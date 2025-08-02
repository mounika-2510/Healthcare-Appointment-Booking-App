import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Calendar } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
            <Heart className="h-8 w-8" />
            <span className="text-xl font-bold">MediCare</span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Find Doctors
            </Link>
            <Link 
              to="/"
              className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Book Appointment</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;