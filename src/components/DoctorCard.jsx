import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin } from 'lucide-react';

const DoctorCard = ({ doctor }) => {
  const getAvailabilityColor = (availability) => {
    switch (availability.toLowerCase()) {
      case 'available today':
        return 'bg-green-100 text-green-800';
      case 'fully booked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start space-x-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{doctor.specialization}</p>
            
            <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
              <MapPin className="h-4 w-4" />
              <span>{doctor.location}</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{doctor.hospital}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-medium">{doctor.rating}</span>
                <span>({doctor.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{doctor.experience} experience</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(doctor.availability)}`}>
                {doctor.availability}
              </span>
              <span className="text-lg font-semibold text-gray-900">{doctor.fees}</span>
            </div>
          </div>
        </div>

        <div className="mt-auto flex space-x-3">
          <Link
            to={`/doctor/${doctor.id}`}
            className="flex-1 bg-blue-600 text-white text-center py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            View Profile
          </Link>
          <Link
            to={`/book/${doctor.id}`}
            className="flex-1 bg-white text-blue-600 border border-blue-600 text-center py-2.5 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;