// ============================================
// VISA SERVICES DATA
// ============================================
// Edit this file to add/modify/remove visa services
// ============================================

export interface VisaService {
  id: string;
  country: string;
  flag: string; // Emoji flag
  image: string;
  processingTime: string;
  validity: string;
  visaType: string;
  stayDuration: string;
  documentsRequired: string[];
  fees?: string; // Optional - remove if you don't want to show fees
  notes?: string[];
}

export const visaServices: VisaService[] = [
  {
    id: "usa",
    country: "United States",
    flag: "🇺🇸",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=400",
    processingTime: "3-5 Weeks",
    validity: "10 Years",
    visaType: "B1/B2 Tourist/Business",
    stayDuration: "Up to 6 months per visit",
    documentsRequired: [
      "Valid passport (6+ months validity)",
      "DS-160 form confirmation",
      "Passport size photographs",
      "Bank statements (6 months)",
      "Income tax returns (3 years)",
      "Employment/Business proof",
      "Property documents",
      "Travel itinerary",
      "Cover letter"
    ],
    notes: [
      "Interview required at US Embassy",
      "Biometrics will be taken during interview",
      "Previous travel history strengthens application"
    ]
  },
  {
    id: "uk",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400",
    processingTime: "15-20 Working Days",
    validity: "6 Months - 10 Years",
    visaType: "Standard Visitor Visa",
    stayDuration: "Up to 6 months",
    documentsRequired: [
      "Valid passport",
      "Completed online application",
      "Passport photographs",
      "Bank statements (6 months)",
      "Income tax returns (3 years)",
      "Employment letter",
      "Accommodation proof",
      "Travel insurance",
      "Flight itinerary"
    ],
    notes: [
      "Biometrics appointment required",
      "Priority service available",
      "Super Priority 24-hour service available"
    ]
  },
  {
    id: "schengen",
    country: "Schengen (Europe)",
    flag: "🇪🇺",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400",
    processingTime: "15 Working Days",
    validity: "Up to 5 Years (Multiple Entry)",
    visaType: "Schengen Tourist Visa",
    stayDuration: "90 days in 180 days",
    documentsRequired: [
      "Valid passport",
      "Completed visa application form",
      "Passport photographs (35x45mm)",
      "Travel insurance (€30,000 coverage)",
      "Bank statements (3-6 months)",
      "Income tax returns",
      "Employment/Business proof",
      "Flight reservation",
      "Hotel bookings",
      "Day-wise travel itinerary",
      "Cover letter"
    ],
    notes: [
      "Apply at embassy of main destination country",
      "Book appointment well in advance",
      "26 European countries covered"
    ]
  },
  {
    id: "australia",
    country: "Australia",
    flag: "🇦🇺",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400",
    processingTime: "20-30 Working Days",
    validity: "1-3 Years",
    visaType: "Visitor Visa (Subclass 600)",
    stayDuration: "Up to 12 months",
    documentsRequired: [
      "Valid passport",
      "Online ImmiAccount application",
      "Passport photographs",
      "Bank statements (6 months)",
      "Income tax returns (3 years)",
      "Employment proof",
      "Property documents",
      "Travel insurance",
      "Purpose of visit letter"
    ],
    notes: [
      "No interview required (usually)",
      "Health examination may be required",
      "Character requirements apply"
    ]
  },
  {
    id: "canada",
    country: "Canada",
    flag: "🇨🇦",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400",
    processingTime: "3-4 Weeks",
    validity: "Up to 10 Years",
    visaType: "Temporary Resident Visa",
    stayDuration: "Up to 6 months",
    documentsRequired: [
      "Valid passport",
      "Completed IMM 5257 form",
      "Passport photographs",
      "Bank statements (6 months)",
      "Income tax returns (3 years)",
      "Employment letter",
      "Property documents",
      "Travel history proof",
      "Purpose of visit"
    ],
    notes: [
      "Biometrics required",
      "Apply online through IRCC",
      "Family information form required"
    ]
  },
  {
    id: "singapore",
    country: "Singapore",
    flag: "🇸🇬",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400",
    processingTime: "3-5 Working Days",
    validity: "35 Days - 2 Years",
    visaType: "Tourist Visa",
    stayDuration: "Up to 30 days",
    documentsRequired: [
      "Valid passport",
      "Visa application form",
      "Passport photographs",
      "Bank statements (3 months)",
      "Employment/Business proof",
      "Confirmed flight tickets",
      "Hotel bookings",
      "Cover letter"
    ],
    notes: [
      "Apply through authorized agents",
      "E-visa available",
      "Multiple entry possible"
    ]
  },
  {
    id: "uae",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400",
    processingTime: "3-4 Working Days",
    validity: "30-90 Days",
    visaType: "Tourist Visa",
    stayDuration: "30/60/90 days",
    documentsRequired: [
      "Valid passport (6 months validity)",
      "Passport photographs",
      "Passport copy (color scan)",
      "Confirmed return tickets",
      "Bank statements (3 months)",
      "Hotel booking confirmation"
    ],
    notes: [
      "E-visa process",
      "Very quick processing",
      "Visa can be extended within UAE"
    ]
  },
  {
    id: "thailand",
    country: "Thailand",
    flag: "🇹🇭",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=400",
    processingTime: "Visa on Arrival",
    validity: "15 Days",
    visaType: "Visa on Arrival / E-Visa",
    stayDuration: "15-60 days",
    documentsRequired: [
      "Valid passport (6 months validity)",
      "Passport photographs",
      "Confirmed return tickets",
      "Hotel booking",
      "Sufficient funds (₹35,000)",
      "Completed arrival form"
    ],
    notes: [
      "Indians eligible for VOA (15 days)",
      "E-Visa for longer stays",
      "Thai Baht recommended for VOA fee"
    ]
  },
  {
    id: "malaysia",
    country: "Malaysia",
    flag: "🇲🇾",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400",
    processingTime: "3-5 Working Days",
    validity: "3 Months",
    visaType: "eVisa / eNTRI",
    stayDuration: "15-30 days",
    documentsRequired: [
      "Valid passport",
      "Digital passport photo",
      "Return flight tickets",
      "Hotel bookings",
      "Bank statements"
    ],
    notes: [
      "eNTRI for 15 days (faster)",
      "eVisa for 30 days",
      "Apply online"
    ]
  },
  {
    id: "japan",
    country: "Japan",
    flag: "🇯🇵",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400",
    processingTime: "5-7 Working Days",
    validity: "3 Months",
    visaType: "Tourist Visa",
    stayDuration: "15-90 days",
    documentsRequired: [
      "Valid passport",
      "Visa application form",
      "Passport photographs",
      "Bank statements (6 months)",
      "Income tax returns (3 years)",
      "Employment certificate",
      "Detailed travel itinerary",
      "Flight & hotel bookings"
    ],
    notes: [
      "Apply through VFS",
      "Strong financial proof needed",
      "Day-wise itinerary mandatory"
    ]
  },
  {
    id: "newzealand",
    country: "New Zealand",
    flag: "🇳🇿",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400",
    processingTime: "20-25 Working Days",
    validity: "Up to 5 Years",
    visaType: "Visitor Visa",
    stayDuration: "Up to 9 months",
    documentsRequired: [
      "Valid passport",
      "Online application",
      "Passport photographs",
      "Bank statements (6 months)",
      "Employment/Business proof",
      "Accommodation details",
      "Travel insurance",
      "Chest X-ray (if required)"
    ],
    notes: [
      "Apply online through INZ",
      "Health requirements may apply",
      "Character requirements apply"
    ]
  },
  {
    id: "vietnam",
    country: "Vietnam",
    flag: "🇻🇳",
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400",
    processingTime: "3-5 Working Days",
    validity: "30-90 Days",
    visaType: "E-Visa",
    stayDuration: "30 days single entry",
    documentsRequired: [
      "Valid passport",
      "Digital passport photo",
      "Return flight booking",
      "Hotel reservation"
    ],
    notes: [
      "E-visa available for Indians",
      "Simple online process",
      "Extendable within Vietnam"
    ]
  }
];
