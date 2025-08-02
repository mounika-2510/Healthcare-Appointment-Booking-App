# MediCare - Healthcare Appointment Booking App

A responsive web application for booking healthcare appointments built with React.js. Users can browse doctors, view their profiles, check availability, and book appointments through an intuitive interface.

## 📸 Application Screenshots

### Home Page
![Home Page](https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200)
*Clean and modern landing page displaying available doctors with search functionality and key statistics*

### Doctor Profile Page
![Doctor Profile](https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=1200)
*Detailed doctor information including qualifications, experience, weekly schedule, and booking options*

### Appointment Booking Page
![Booking Page](https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=1200)
*User-friendly booking form with validation and appointment summary*

## 🚀 Live Demo

The application is deployed and accessible at: [Your Deployment URL]

## 📋 Features

### Core Features
- **Doctor Listing**: Browse available doctors with their specializations, ratings, and availability status
- **Location & Hospital Information**: View doctor locations and affiliated hospitals
- **Search Functionality**: Filter doctors by name or specialization
- **Doctor Profiles**: Detailed doctor information including qualifications, experience, and weekly schedules
- **Appointment Booking**: Simple form to book appointments with date/time selection
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Form Validation**: Client-side validation for all form inputs

### User Interface
- Clean and modern design using Tailwind CSS
- Intuitive navigation with React Router
- Professional color scheme and typography
- Smooth animations and hover effects
- Mobile-first responsive design

## 🛠️ Tools/Libraries Used

### Frontend
- **React.js** (v18.3.1) - JavaScript library for building user interfaces
- **React Router DOM** (v7.7.1) - Declarative routing for React applications
- **Tailwind CSS** (v3.4.1) - Utility-first CSS framework for styling
- **Lucide React** (v0.344.0) - Beautiful and customizable SVG icons

### Development Tools
- **Vite** (v5.4.2) - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing

### State Management
- **React Context API** - For managing appointment state across components
- **React Hooks** - useState, useEffect, useContext for local state management

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── SearchBar.jsx   # Doctor search functionality
│   └── DoctorCard.jsx  # Doctor information cards
├── pages/              # Main application pages
│   ├── Home.jsx        # Landing page with doctor listings
│   ├── DoctorProfile.jsx # Individual doctor details
│   └── BookAppointment.jsx # Appointment booking form
├── context/            # React Context for state management
│   └── AppointmentContext.jsx # Appointment state management
├── data/               # Static data and mock backend
│   └── doctors.js      # Doctor information and schedules
└── main.jsx           # Application entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd healthcare-booking-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile devices** (320px and up)
- **Tablets** (768px and up)
- **Desktop** (1024px and up)

## 🎯 Challenges Faced and Solutions

### 1. State Management Complexity
**Challenge**: Managing appointment data across multiple components without prop drilling.

**Solution**: Implemented React Context API to create a centralized appointment state that can be accessed by any component in the application. This eliminated the need for complex prop passing and made the code more maintainable.

### 2. Form Validation
**Challenge**: Creating comprehensive client-side validation for the appointment booking form with proper error handling.

**Solution**: Built a custom validation system that checks each field individually and provides specific error messages. Used regex patterns for email and phone validation, and implemented date validation to prevent booking appointments in the past.

### 3. Route Management
**Challenge**: Handling dynamic routes for individual doctor profiles and appointment booking while maintaining clean URLs.

**Solution**: Utilized React Router's dynamic routing with URL parameters (`/doctor/:id` and `/book/:doctorId`) to create SEO-friendly URLs while passing necessary data between components.

## 🙏 Acknowledgments

- **Pexels** for providing high-quality stock photos for doctor profiles
- **Lucide** for the beautiful icon set
- **Tailwind CSS** for the utility-first CSS framework
- **React Team** for the amazing JavaScript library