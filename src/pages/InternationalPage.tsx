import { Link } from 'react-router-dom';
import { internationalDestinations } from '../data/internationalDestinations';
import DestinationCard from '../components/DestinationCard';

export default function InternationalPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920"
            alt="International"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            International Destinations
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Explore the world with our expertly curated international tour packages with complete visa assistance
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-600">{internationalDestinations.length}+</div>
              <div className="text-gray-600 text-sm">Destinations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-600">Visa</div>
              <div className="text-gray-600 text-sm">Assistance Included</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-600">Forex</div>
              <div className="text-gray-600 text-sm">Services Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-600">Travel</div>
              <div className="text-gray-600 text-sm">Insurance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Assistance Banner */}
      <section className="py-8 bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <span className="text-3xl mr-4">📋</span>
              <div>
                <h3 className="font-semibold text-gray-800">Need Visa for Your Trip?</h3>
                <p className="text-gray-600 text-sm">We provide complete visa assistance for all international destinations</p>
              </div>
            </div>
            <Link
              to="/visa-services"
              className="bg-amber-500 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-amber-600 transition-colors whitespace-nowrap"
            >
              View Visa Services
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">International Tour Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              World-class destinations with visa assistance and complete travel support
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What's Typically Included</h2>
            <p className="text-gray-600">Comprehensive packages for a hassle-free international experience</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏨', title: 'Accommodation', desc: '3-4 star hotels' },
              { icon: '🍽️', title: 'Meals', desc: 'As per itinerary' },
              { icon: '🚌', title: 'Transport', desc: 'AC coach/vehicle' },
              { icon: '📋', title: 'Visa Assistance', desc: 'Documentation support' },
              { icon: '✈️', title: 'Transfers', desc: 'Airport pickups/drops' },
              { icon: '👨‍💼', title: 'Tour Manager', desc: 'For group tours' },
              { icon: '🎫', title: 'Sightseeing', desc: 'As per itinerary' },
              { icon: '🛡️', title: 'Insurance', desc: 'Travel coverage' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Countries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Countries</h2>
            <p className="text-gray-600">Click to view available packages</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { flag: '🇦🇪', name: 'UAE', id: 'dubai' },
              { flag: '🇹🇭', name: 'Thailand', id: 'thailand' },
              { flag: '🇸🇬', name: 'Singapore', id: 'singapore' },
              { flag: '🇮🇩', name: 'Bali', id: 'bali' },
              { flag: '🇲🇻', name: 'Maldives', id: 'maldives' },
              { flag: '🇫🇷', name: 'Europe', id: 'europe' },
              { flag: '🇲🇾', name: 'Malaysia', id: 'malaysia' },
              { flag: '🇻🇳', name: 'Vietnam', id: 'vietnam' },
              { flag: '🇯🇵', name: 'Japan', id: 'japan' },
              { flag: '🇦🇺', name: 'Australia', id: 'australia' },
            ].map((country, index) => (
              <Link
                key={index}
                to={`/destination/${country.id}`}
                className="flex items-center bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl mr-2">{country.flag}</span>
                <span className="font-medium text-gray-800">{country.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Planning an International Trip?</h2>
          <p className="text-cyan-100 mb-8">
            Let our travel experts help you plan the perfect international getaway with visa assistance and complete support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Get Custom Quote
            </Link>
            <Link
              to="/visa-services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all"
            >
              Check Visa Requirements
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
