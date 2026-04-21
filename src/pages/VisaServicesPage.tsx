import { useState } from 'react';
import { visaServices } from '../data/visaServices';
import InquiryModal from '../components/InquiryModal';

export default function VisaServicesPage() {
  const [selectedVisa, setSelectedVisa] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDestination, setModalDestination] = useState('');

  const handleApply = (country: string) => {
    setModalDestination(country);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920"
            alt="Visa Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Visa Services
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Hassle-free visa assistance for 50+ countries. Let our experts handle your visa application.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '📋', title: '50+ Countries', desc: 'Visa services available' },
              { icon: '⚡', title: 'Fast Processing', desc: 'Quick turnaround time' },
              { icon: '✅', title: '98% Success Rate', desc: 'High approval rate' },
              { icon: '👨‍💼', title: 'Expert Guidance', desc: 'Documentation support' },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Visa Services</h2>
            <p className="text-gray-600">Click on any country to view requirements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaServices.map((visa) => (
              <div
                key={visa.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-4xl mr-4">{visa.flag}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{visa.country}</h3>
                        <p className="text-gray-300 text-sm">{visa.visaType}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Processing Time</p>
                      <p className="font-semibold text-gray-800">{visa.processingTime}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">Validity</p>
                      <p className="font-semibold text-gray-800">{visa.validity}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">Stay Duration: {visa.stayDuration}</p>

                  {/* Expand/Collapse Documents */}
                  <button
                    onClick={() => setSelectedVisa(selectedVisa === visa.id ? null : visa.id)}
                    className="w-full flex items-center justify-between py-3 border-t text-teal-600 font-medium"
                  >
                    <span>View Required Documents</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        selectedVisa === visa.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {selectedVisa === visa.id && (
                    <div className="py-4 border-t">
                      <h4 className="font-semibold text-gray-800 mb-3">Required Documents:</h4>
                      <ul className="space-y-2">
                        {visa.documentsRequired.map((doc, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <svg className="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-gray-600">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA */}
                  <button
                    onClick={() => handleApply(visa.country)}
                    className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600">Simple 4-step process to get your visa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Submit Inquiry', desc: 'Fill the inquiry form with your travel details', icon: '📝' },
              { step: 2, title: 'Document Collection', desc: 'Our team will guide you on required documents', icon: '📂' },
              { step: 3, title: 'Application Filing', desc: 'We file your visa application accurately', icon: '✍️' },
              { step: 4, title: 'Visa Delivered', desc: 'Receive your approved visa', icon: '✅' },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                )}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Step {item.step}: {item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What documents are generally required for a tourist visa?',
                a: 'Common documents include a valid passport, passport-sized photographs, bank statements, employment proof, travel itinerary, and hotel bookings. Specific requirements vary by country.'
              },
              {
                q: 'How long does visa processing take?',
                a: 'Processing time varies by country - from 3-5 days for UAE/Thailand to 4-6 weeks for US/Canada. We recommend applying at least 3-4 weeks before your travel date.'
              },
              {
                q: 'Do you guarantee visa approval?',
                a: 'While we have a 98% success rate, visa approval is at the discretion of the respective embassy/consulate. We ensure your application is complete and accurate.'
              },
              {
                q: 'What are your visa service charges?',
                a: 'Our service charges vary by country and visa type. Contact us for a detailed quote including government fees and our processing charges.'
              },
              {
                q: 'Can you help with urgent visa processing?',
                a: 'Yes, we offer express processing for many countries. Additional charges may apply for urgent/express services.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Visa Assistance?</h2>
          <p className="text-amber-100 mb-8">
            Contact our visa experts for guidance on your visa application. We're here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                setModalDestination('');
                setIsModalOpen(true);
              }}
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Submit Visa Inquiry
            </button>
            <a
              href="https://wa.me/919876543210?text=Hi, I need visa assistance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        destination={modalDestination}
        inquiryType="visa"
      />
    </div>
  );
}
