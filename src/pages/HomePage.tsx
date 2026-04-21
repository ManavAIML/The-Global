import { useState } from 'react';
import { Link } from 'react-router-dom';
import { domesticDestinations } from '../data/domesticDestinations';
import { internationalDestinations } from '../data/internationalDestinations';
import DestinationCard from '../components/DestinationCard';
import InquiryModal from '../components/InquiryModal';
import TestimonialCard from '../components/TestimonialCard';
import { heroImages } from '../config/company';
import { getWhatsAppLink } from '../config/company';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { icon: '✈️', title: 'Flight Bookings', description: 'Best deals on domestic & international flights' },
    { icon: '🏨', title: 'Hotel Reservations', description: 'Handpicked hotels for comfortable stays' },
    { icon: '📋', title: 'Visa Processing', description: 'Hassle-free visa assistance for all countries' },
    { icon: '🚗', title: 'Airport Transfers', description: 'Comfortable pickup and drop services' },
    { icon: '🎯', title: 'Customized Tours', description: 'Tailor-made itineraries for your needs' },
    { icon: '🛡️', title: 'Travel Insurance', description: 'Comprehensive coverage for peace of mind' },
  ];

  const stats = [
    { value: '500+', label: 'Tour Packages' },
    { value: '50K+', label: 'Happy Travelers' },
    { value: '100+', label: 'Destinations' },
    { value: '15+', label: 'Years Experience' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920"
            alt="Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Discover Your Next
              <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Adventure
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore breathtaking destinations across India and around the world. 
              From majestic mountains to pristine beaches, we craft unforgettable journeys.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                to="/domestic"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/30 transform hover:-translate-y-1 transition-all"
              >
                Explore India
              </Link>
              <Link
                to="/international"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all"
              >
                Go International
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-teal-400">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From planning to execution, we handle every aspect of your travel
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Domestic Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                Explore India
              </h2>
              <p className="text-gray-600">Discover the incredible diversity of India</p>
            </div>
            <Link
              to="/domestic"
              className="mt-4 sm:mt-0 text-teal-600 font-semibold flex items-center hover:text-teal-700"
            >
              View All Domestic Tours
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticDestinations.slice(0, 3).map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured International Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                Go International
              </h2>
              <p className="text-gray-600">World-class destinations with visa assistance</p>
            </div>
            <Link
              to="/international"
              className="mt-4 sm:mt-0 text-teal-600 font-semibold flex items-center hover:text-teal-700"
            >
              View All International Tours
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalDestinations.slice(0, 3).map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose TravelEase?</h2>
            <p className="text-teal-100 max-w-2xl mx-auto">
              We're committed to making your travel dreams come true
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💰', title: 'Best Price Guarantee', description: 'We match or beat any comparable price' },
              { icon: '🔒', title: 'Safe & Secure', description: 'Your bookings and payments are protected' },
              { icon: '👨‍💼', title: 'Expert Consultants', description: 'Experienced travel advisors at your service' },
              { icon: '⭐', title: 'Trusted by Thousands', description: '50,000+ happy travelers and counting' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-teal-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Services Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Need Visa Assistance?
                </h2>
                <p className="text-gray-300 mb-6">
                  We provide comprehensive visa services for USA, UK, Schengen, Australia, Canada, and many more countries. 
                  Let our experts handle the paperwork while you plan your trip.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['🇺🇸', '🇬🇧', '🇪🇺', '🇦🇺', '🇨🇦', '🇸🇬', '🇦🇪', '🇹🇭'].map((flag, index) => (
                    <span key={index} className="text-3xl">{flag}</span>
                  ))}
                </div>
                <Link
                  to="/visa-services"
                  className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Explore Visa Services
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800"
                  alt="Travel Visa"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote. Our travel experts are here to help you plan the perfect trip.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
            >
              Get Free Quote
            </button>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all flex items-center"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <InquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
