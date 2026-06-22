// ============================================
// COMPANY CONFIGURATION FILE
// ============================================
// Edit this file to change all company information
// across the entire website
// ============================================

export const companyConfig = {
  // Basic Company Info
  name: "The Global Edge Consultant",
  tagline: "Your Journey, Our Passion",
  description: "Premium travel experiences across India and around the world. We craft unforgettable journeys tailored to your dreams.",

  // Contact Information
  contact: {
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    alternatePhone: "+91 98765 43211",
    email: "hello@travelease.com",
    supportEmail: "support@travelease.com",

    // WhatsApp Configuration
    whatsapp: {
      number: "919925843357", // Country code + number without + or spaces
      defaultMessage: "Hi! I'm interested in your travel packages. Please share more details.",
    },
  },

  // Office Address
  address: {
    street: "123 Travel Plaza, MG Road",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400001",
    country: "India",
    fullAddress: "123 Travel Plaza, MG Road, Mumbai, Maharashtra 400001",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin",
    googleMapsLink: "https://maps.google.com/?q=Mumbai,Maharashtra,India",
  },

  // Working Hours
  workingHours: {
    weekdays: "Mon - Fri: 9:00 AM - 7:00 PM",
    saturday: "Sat: 10:00 AM - 5:00 PM",
    sunday: "Sun: Closed",
    timezone: "IST",
  },

  // Social Media Links
  socialMedia: {
    facebook: "https://facebook.com/travelease",
    instagram: "https://instagram.com/travelease",
    twitter: "https://twitter.com/travelease",
    youtube: "https://youtube.com/travelease",
    linkedin: "https://linkedin.com/company/travelease",
    pinterest: "https://pinterest.com/travelease",
  },

  // Legal Information
  legal: {
    gst: "27XXXXX1234X1ZX",
    pan: "XXXXX1234X",
    registrationNumber: "MH/TOUR/2024/12345",
  },

  // Stats (shown on homepage)
  stats: {
    packages: "500+",
    destinations: "50+",
    happyClients: "10,000+",
    yearsExperience: "15+",
  },

  // SEO & Meta
  seo: {
    title: "TravelEase - Premium Travel Packages | Domestic & International Tours",
    description: "Discover amazing travel packages for domestic and international destinations. Visa assistance, customized itineraries, and 24/7 support.",
    keywords: "travel agency, tour packages, domestic tours, international tours, visa services, India tours",
  },

  // API Configuration (for Laravel backend)
  api: {
    baseUrl: "http://localhost:8000/api/v1", // Change to your Laravel API URL
    // Production: "https://yourdomain.com/api/v1"
  },
};

// ============================================
// HERO IMAGES CONFIGURATION
// ============================================
export const heroImages = {
  home: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920",
  domestic: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920",
  international: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920",
  visa: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920",
  contact: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1920",
};

// ============================================
// PAYMENT & BOOKING CONFIGURATION
// ============================================
export const bookingConfig = {
  advancePercentage: 30, // Advance payment percentage
  cancellationPolicy: "Free cancellation up to 7 days before departure",
  refundPolicy: "Full refund minus processing fee within 48 hours of booking",
  paymentMethods: ["Credit Card", "Debit Card", "Net Banking", "UPI", "EMI Available"],
};

// Helper function to generate WhatsApp link
export const getWhatsAppLink = (message?: string, destination?: string) => {
  const { whatsapp } = companyConfig.contact;
  let finalMessage = message || whatsapp.defaultMessage;

  if (destination) {
    finalMessage = `Hi! I'm interested in the "${destination}" package. Please share more details including pricing and availability.`;
  }

  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(finalMessage)}`;
};

// Helper function to generate call link
export const getCallLink = () => {
  return `tel:${companyConfig.contact.phone.replace(/\s/g, '')}`;
};

// Helper function to generate email link
export const getEmailLink = (subject?: string, body?: string) => {
  let link = `mailto:${companyConfig.contact.email}`;
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  if (params.length > 0) link += `?${params.join('&')}`;
  return link;
};
