/**
 * ========================================
 * COMPANY CONFIGURATION FILE
 * ========================================
 * 
 * Edit this file to change your company details.
 * Changes will reflect immediately - just refresh the page!
 */

const CONFIG = {
    // ========================================
    // COMPANY INFORMATION
    // ========================================
    company: {
        name: "TravelEase",           // Your company name
        tagline: "Discover Your Next Adventure",
        logo: "✈️",                   // Emoji or image URL
    },

    // ========================================
    // CONTACT DETAILS
    // ========================================
    contact: {
        phone: "+91 98765 43210",     // Display format
        phoneLink: "919876543210",    // For tel: links (no +, no spaces)
        email: "info@travelease.com",
        address: "123 Travel Street, New Delhi, India",
        workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    },

    // ========================================
    // WHATSAPP SETTINGS
    // ========================================
    whatsapp: {
        number: "919876543210",       // WhatsApp number (no +, no spaces)
        defaultMessage: "Hi, I'm interested in your travel packages. Please share more details.",
    },

    // ========================================
    // SOCIAL MEDIA LINKS
    // ========================================
    social: {
        facebook: "https://facebook.com/travelease",
        instagram: "https://instagram.com/travelease",
        twitter: "https://twitter.com/travelease",
        youtube: "https://youtube.com/travelease",
    },

    // ========================================
    // STATISTICS (Displayed on homepage)
    // ========================================
    stats: {
        packages: "500+",
        travelers: "50K+",
        destinations: "100+",
        experience: "15+",
    },

    // ========================================
    // API ENDPOINTS (For Laravel Backend)
    // ========================================
    api: {
        baseUrl: 'http://localhost:8000/api',  // Development
        // baseUrl: 'https://your-api-domain.com/api',  // Production
        endpoints: {
            inquiry: '/inquiries',
            contact: '/contact',
            newsletter: '/newsletter'
        }
    }
};

// Don't modify below this line
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
