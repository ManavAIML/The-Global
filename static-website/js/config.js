// ===== COMPANY CONFIGURATION =====
// Edit these values to customize your website

const CONFIG = {
    // Company Information
    company: {
        name: "TravelEase",
        tagline: "Your Journey Begins Here",
        description: "Your trusted travel partner for domestic and international tours. Creating memorable journeys since 2010.",
        foundedYear: 2010
    },

    // Contact Information
    contact: {
        phone: "+91 98765 43210",
        phoneLink: "919876543210", // For WhatsApp (no + or spaces)
        email: "info@travelease.com",
        address: "123 Travel Street, Connaught Place, New Delhi, India - 110001",
        workingHours: "Mon - Sat: 9:00 AM - 7:00 PM"
    },

    // Social Media Links
    social: {
        facebook: "https://facebook.com/travelease",
        instagram: "https://instagram.com/travelease",
        twitter: "https://twitter.com/travelease",
        youtube: "https://youtube.com/travelease",
        whatsapp: "https://wa.me/919876543210"
    },

    // WhatsApp Message Templates
    whatsapp: {
        generalInquiry: "Hi! I'm interested in your travel packages. Please share more details.",
        tourInquiry: "Hi! I'm interested in the {destination} tour package. Please share the itinerary and pricing.",
        visaInquiry: "Hi! I need visa assistance for {country}. Please guide me through the process."
    },

    // API Endpoints (for Laravel backend)
    api: {
        baseUrl: "http://localhost:8000/api/v1", // Change this to your Laravel API URL
        endpoints: {
            inquiries: "/inquiries",
            destinations: "/destinations",
            visaServices: "/visa-services",
            contact: "/contact"
        }
    },

    // Email Configuration (for backend)
    email: {
        adminEmail: "admin@travelease.com",
        notificationSubject: "New Inquiry from Website"
    }
};

// WhatsApp helper function
function openWhatsApp(message, destination = '') {
    let text = message;
    if (destination) {
        text = text.replace('{destination}', destination).replace('{country}', destination);
    }
    const url = `https://wa.me/${CONFIG.contact.phoneLink}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

// Make config available globally
window.CONFIG = CONFIG;
window.openWhatsApp = openWhatsApp;
