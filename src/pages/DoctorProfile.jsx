import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, MapPin, Calendar, Phone, Mail, Award, Users } from 'lucide-react';
import { doctors } from '../data/doctors';

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find(d => d.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h2>
          <p className="text-gray-600 mb-6">The doctor you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const getAvailabilityColor = (availability) => {
    switch (availability.toLowerCase()) {
      case 'available today':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'fully booked':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    }
  };

  const formatSchedule = (schedule) => {
    return Object.entries(schedule).map(([day, times]) => ({
      day: day.charAt(0).toUpperCase() + day.slice(1),
      times: Array.isArray(times) ? times : [times]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          ← Back to Doctors
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Doctor Info Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-xl object-cover border-4 border-gray-100"
                />
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                  <p className="text-xl text-blue-600 font-semibold mb-3">{doctor.specialization}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{doctor.rating}</span>
                      <span>({doctor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{doctor.experience} experience</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>{doctor.qualification}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-600 font-medium">{doctor.hospital}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`inline-flex px-4 py-2 rounded-full text-sm font-medium border ${getAvailabilityColor(doctor.availability)}`}>
                      {doctor.availability}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">{doctor.fees}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About Dr. {doctor.name}</h2>
            <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
          </div>

          {/* Schedule Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Schedule</h2>
            <div className="space-y-3">
              {formatSchedule(doctor.schedule).map(({ day, times }) => (
                <div key={day} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-900 w-20">{day}</span>
                  <div className="flex-1 ml-4">
                    {times[0] === 'Closed' ? (
                      <span className="text-red-600 font-medium">Closed</span>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {times.map((time, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Book Appointment Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Book Appointment</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Consultation Fee</span>
                <span className="text-xl font-bold text-gray-900">{doctor.fees}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Available for booking</span>
              </div>
            </div>
            
            <Link
              to={`/book/${doctor.id}`}
              className="w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors block mb-4"
            >
              Book Appointment
            </Link>
            
            <div className="text-center">
              <p className="text-xs text-gray-500">
                Book instantly • Get confirmation • No waiting
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-600">Total Patients</span>
                </div>
                <span className="font-semibold text-gray-900">2,500+</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-600">Success Rate</span>
                </div>
                <span className="font-semibold text-gray-900">98%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span className="text-gray-600">Available Days</span>
                </div>
                <span className="font-semibold text-gray-900">6 days/week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;