import { domesticDestinations } from '../data/domesticDestinations';
import DestinationCard from '../components/DestinationCard';

export default function DomesticPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920"
            alt="India"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Explore Incredible India
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            From the snow-capped Himalayas to the tropical backwaters, discover the diverse beauty of India
          </p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-teal-600">{domesticDestinations.length}+</div>
              <div className="text-gray-600 text-sm">Destinations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">No Visa</div>
              <div className="text-gray-600 text-sm">Required</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">Customizable</div>
              <div className="text-gray-600 text-sm">Itineraries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-600">24/7</div>
              <div className="text-gray-600 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Domestic Tour Packages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our handcrafted tour packages or let us customize one just for you
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticDestinations.map((destination) => (
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
            <p className="text-gray-600">Every package is customizable based on your preferences</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🏨', title: 'Accommodation', desc: 'Quality hotels & resorts' },
              { icon: '🍽️', title: 'Meals', desc: 'Breakfast & select meals' },
              { icon: '🚗', title: 'Transfers', desc: 'AC vehicle throughout' },
              { icon: '👨‍💼', title: 'Guide', desc: 'Expert local guides' },
              { icon: '🎫', title: 'Entry Tickets', desc: 'Monument & attraction fees' },
              { icon: '📸', title: 'Activities', desc: 'As per itinerary' },
              { icon: '📞', title: 'Support', desc: '24/7 assistance' },
              { icon: '📋', title: 'Permits', desc: 'Where required' },
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-teal-100 mb-8">
            We specialize in creating customized itineraries. Tell us your dream destination and we'll plan it for you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Request Custom Itinerary
          </a>
        </div>
      </section>
    </div>
  );
}
