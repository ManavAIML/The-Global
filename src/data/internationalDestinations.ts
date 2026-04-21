// ============================================
// INTERNATIONAL DESTINATIONS DATA
// ============================================
// Edit this file to add/modify/remove international tour packages
// ============================================

import { Destination } from './domesticDestinations';

export const internationalDestinations: Destination[] = [
  {
    id: "dubai",
    name: "Dubai Extravaganza",
    location: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1200",
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "2-15 People",
    bestTime: "November - March",
    highlights: [
      "Burj Khalifa At The Top",
      "Desert Safari with BBQ",
      "Dubai Mall & Fountain Show",
      "Dhow Cruise Dinner",
      "Palm Jumeirah Visit"
    ],
    overview: "Experience the glamour and grandeur of Dubai! From the world's tallest building to the thrilling desert safari, this tour showcases the best of this modern metropolis. Enjoy luxury shopping, world-class dining, and unforgettable experiences.",
    inclusions: [
      "Accommodation in 4-star hotel",
      "Daily breakfast",
      "Airport transfers",
      "Burj Khalifa tickets (Level 124)",
      "Desert Safari with BBQ dinner",
      "Dhow Cruise with dinner",
      "Dubai city tour",
      "Visa assistance",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch",
      "Travel insurance",
      "Personal expenses",
      "Optional tours",
      "UAE Visa fee"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai",
        description: "Welcome to the City of Gold! Begin your Dubai adventure.",
        activities: [
          "Airport pickup and welcome",
          "Transfer to hotel",
          "Check-in and freshen up",
          "Evening at Dubai Marina",
          "Walk along JBR Beach",
          "Dinner at leisure"
        ],
        meals: "Dinner",
        accommodation: "4-Star Hotel, Dubai"
      },
      {
        day: 2,
        title: "Dubai City Tour & Burj Khalifa",
        description: "Explore Old and New Dubai with a visit to the world's tallest building.",
        activities: [
          "Breakfast at hotel",
          "Visit Dubai Museum",
          "Abra ride across Dubai Creek",
          "Explore Gold & Spice Souks",
          "Afternoon at Dubai Mall",
          "Burj Khalifa At The Top (Sunset)",
          "Dubai Fountain show"
        ],
        meals: "Breakfast",
        accommodation: "4-Star Hotel, Dubai"
      },
      {
        day: 3,
        title: "Desert Safari Adventure",
        description: "Experience the thrill of the Arabian Desert.",
        activities: [
          "Breakfast at hotel",
          "Morning at leisure / Optional Mall visit",
          "Afternoon Desert Safari pickup",
          "Dune bashing in 4x4",
          "Camel riding & Sandboarding",
          "BBQ dinner with belly dance show",
          "Return to hotel"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "4-Star Hotel, Dubai"
      },
      {
        day: 4,
        title: "Abu Dhabi Day Trip",
        description: "Visit the capital city and its magnificent Grand Mosque.",
        activities: [
          "Breakfast and check-out ready",
          "Drive to Abu Dhabi (2 hours)",
          "Sheikh Zayed Grand Mosque visit",
          "Photo stop at Emirates Palace",
          "Corniche drive",
          "Return to Dubai",
          "Evening Dhow Cruise with dinner"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "4-Star Hotel, Dubai"
      },
      {
        day: 5,
        title: "Departure",
        description: "Last minute shopping and departure.",
        activities: [
          "Breakfast at hotel",
          "Check-out",
          "Optional: Visit Palm Jumeirah/Atlantis",
          "Transfer to Dubai Airport"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "international"
  },
  {
    id: "thailand",
    name: "Thailand Discovery",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200",
    ],
    duration: "6 Days / 5 Nights",
    groupSize: "2-15 People",
    bestTime: "November - February",
    highlights: [
      "Bangkok Temple Tour",
      "Pattaya Beach & Shows",
      "Coral Island Trip",
      "Floating Market Visit",
      "Thai Massage Experience"
    ],
    overview: "Discover the Land of Smiles! From the bustling streets of Bangkok to the beautiful beaches of Pattaya, experience Thai culture, cuisine, and natural beauty. This tour combines city exploration with beach relaxation.",
    inclusions: [
      "Accommodation in 3-star/4-star hotels",
      "Daily breakfast",
      "Airport transfers",
      "Bangkok city tour",
      "Coral Island tour",
      "Safari World tickets",
      "All transfers",
      "English speaking guide"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Visa on arrival fee",
      "Personal expenses",
      "Travel insurance",
      "Optional tours"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bangkok",
        description: "Welcome to Thailand! Arrive in the vibrant capital city.",
        activities: [
          "Airport pickup",
          "Transfer to hotel",
          "Check-in and freshen up",
          "Evening at Asiatique Riverfront",
          "Dinner cruise (optional)",
          "Overnight in Bangkok"
        ],
        meals: "N/A",
        accommodation: "Hotel in Bangkok"
      },
      {
        day: 2,
        title: "Bangkok Temple Tour",
        description: "Explore the magnificent temples and palaces of Bangkok.",
        activities: [
          "Breakfast at hotel",
          "Visit Grand Palace",
          "Wat Pho (Reclining Buddha)",
          "Wat Arun (Temple of Dawn)",
          "Lunch at local restaurant",
          "Evening at MBK/Siam Square",
          "Thai massage experience"
        ],
        meals: "Breakfast",
        accommodation: "Hotel in Bangkok"
      },
      {
        day: 3,
        title: "Safari World & Transfer to Pattaya",
        description: "Morning at Safari World, then proceed to Pattaya.",
        activities: [
          "Early breakfast",
          "Safari World & Marine Park",
          "Animal shows and safari drive",
          "Afternoon transfer to Pattaya",
          "Check-in at Pattaya hotel",
          "Evening at Walking Street"
        ],
        meals: "Breakfast",
        accommodation: "Hotel in Pattaya"
      },
      {
        day: 4,
        title: "Coral Island & Pattaya",
        description: "Beach day at the beautiful Coral Island.",
        activities: [
          "Breakfast at hotel",
          "Speedboat to Coral Island",
          "Parasailing & water sports (optional)",
          "Beach relaxation",
          "Lunch on island",
          "Return to Pattaya",
          "Alcazar Show (optional)"
        ],
        meals: "Breakfast, Lunch",
        accommodation: "Hotel in Pattaya"
      },
      {
        day: 5,
        title: "Pattaya to Bangkok",
        description: "Return to Bangkok with floating market visit.",
        activities: [
          "Breakfast at hotel",
          "Visit Nong Nooch Garden",
          "Drive to Bangkok",
          "Damnoen Saduak Floating Market",
          "Evening shopping at Pratunam",
          "Farewell dinner"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Bangkok"
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to Bangkok Airport.",
        activities: [
          "Breakfast at hotel",
          "Check-out",
          "Transfer to Suvarnabhumi Airport"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "international"
  },
  {
    id: "singapore",
    name: "Singapore Delight",
    location: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200",
    ],
    duration: "4 Days / 3 Nights",
    groupSize: "2-12 People",
    bestTime: "Year Round",
    highlights: [
      "Sentosa Island Fun",
      "Gardens by the Bay",
      "Universal Studios",
      "Marina Bay Sands",
      "Night Safari"
    ],
    overview: "Experience the Lion City's perfect blend of culture, cuisine, and modern attractions. From the futuristic Gardens by the Bay to the thrilling Universal Studios, Singapore offers something for everyone.",
    inclusions: [
      "Accommodation in 3-star/4-star hotel",
      "Daily breakfast",
      "Airport transfers",
      "City tour",
      "Sentosa cable car",
      "Gardens by the Bay tickets",
      "Singapore Flyer",
      "All transfers"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Universal Studios tickets",
      "Personal expenses",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Singapore",
        description: "Welcome to the Garden City!",
        activities: [
          "Airport pickup",
          "Transfer to hotel",
          "Check-in and rest",
          "Evening at Orchard Road",
          "Dinner at Newton Food Centre",
          "Marina Bay Sands light show"
        ],
        meals: "N/A",
        accommodation: "Hotel in Singapore"
      },
      {
        day: 2,
        title: "Singapore City Tour",
        description: "Explore the highlights of Singapore.",
        activities: [
          "Breakfast at hotel",
          "Merlion Park visit",
          "Chinatown & Little India",
          "Gardens by the Bay",
          "Cloud Forest & Flower Dome",
          "Singapore Flyer ride",
          "Evening at Clarke Quay"
        ],
        meals: "Breakfast",
        accommodation: "Hotel in Singapore"
      },
      {
        day: 3,
        title: "Sentosa Island",
        description: "Full day of fun at Sentosa Island.",
        activities: [
          "Breakfast at hotel",
          "Cable car to Sentosa",
          "S.E.A Aquarium",
          "Universal Studios (optional)",
          "Wings of Time show",
          "Return to hotel"
        ],
        meals: "Breakfast",
        accommodation: "Hotel in Singapore"
      },
      {
        day: 4,
        title: "Departure",
        description: "Last minute shopping and departure.",
        activities: [
          "Breakfast at hotel",
          "Check-out",
          "Shopping at Mustafa Centre",
          "Transfer to Changi Airport"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "international"
  },
  {
    id: "bali",
    name: "Bali Paradise",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "2-10 People",
    bestTime: "April - October",
    highlights: [
      "Ubud Rice Terraces",
      "Tanah Lot Temple",
      "Kintamani Volcano",
      "Traditional Spa Treatment",
      "Kecak Fire Dance"
    ],
    overview: "Discover the magical island of Bali with its stunning temples, lush rice terraces, and beautiful beaches. Experience the unique Balinese culture, indulgent spas, and breathtaking natural beauty.",
    inclusions: [
      "Accommodation in 4-star resort",
      "Daily breakfast",
      "Airport transfers",
      "Ubud tour with lunch",
      "Tanah Lot sunset tour",
      "Kintamani volcano tour",
      "All entrance fees",
      "English speaking guide"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Visa on arrival (if applicable)",
      "Personal expenses",
      "Travel insurance",
      "Spa treatments"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali",
        description: "Welcome to the Island of Gods!",
        activities: [
          "Airport pickup",
          "Transfer to Ubud/Seminyak",
          "Check-in at resort",
          "Welcome drink",
          "Evening at leisure",
          "Dinner at resort"
        ],
        meals: "Dinner",
        accommodation: "Resort in Bali"
      },
      {
        day: 2,
        title: "Ubud Cultural Tour",
        description: "Explore the cultural heart of Bali.",
        activities: [
          "Breakfast at resort",
          "Tegallalang Rice Terraces",
          "Ubud Monkey Forest",
          "Ubud Palace & Art Market",
          "Traditional lunch with view",
          "Evening Kecak Fire Dance",
          "Return to hotel"
        ],
        meals: "Breakfast, Lunch",
        accommodation: "Resort in Bali"
      },
      {
        day: 3,
        title: "Kintamani & Temples",
        description: "Visit the volcano and water temples.",
        activities: [
          "Breakfast at resort",
          "Drive to Kintamani",
          "Mount Batur viewpoint",
          "Lunch with volcano view",
          "Tirta Empul Holy Spring Temple",
          "Coffee plantation visit",
          "Return to hotel"
        ],
        meals: "Breakfast, Lunch",
        accommodation: "Resort in Bali"
      },
      {
        day: 4,
        title: "Beach & Tanah Lot",
        description: "Relax on beaches and witness iconic sunset.",
        activities: [
          "Breakfast at resort",
          "Morning at Seminyak Beach",
          "Shopping at boutiques",
          "Afternoon spa treatment",
          "Tanah Lot Temple sunset",
          "Farewell dinner"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Resort in Bali"
      },
      {
        day: 5,
        title: "Departure",
        description: "Last day in paradise.",
        activities: [
          "Breakfast at resort",
          "Check-out",
          "Optional: Beach time",
          "Transfer to airport"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "international"
  },
  {
    id: "maldives",
    name: "Maldives Luxury Escape",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200",
    ],
    duration: "4 Days / 3 Nights",
    groupSize: "2-6 People",
    bestTime: "November - April",
    highlights: [
      "Overwater Villa Stay",
      "Snorkeling with Manta Rays",
      "Sunset Dolphin Cruise",
      "Underwater Restaurant",
      "Private Beach Dinner"
    ],
    overview: "Experience ultimate luxury in the Maldives! Stay in stunning overwater villas, swim in crystal-clear lagoons, and witness incredible marine life. This is the perfect romantic getaway or honeymoon destination.",
    inclusions: [
      "Accommodation in Beach/Water Villa",
      "Full board meals",
      "Speedboat/Seaplane transfers",
      "Snorkeling equipment",
      "Sunset dolphin cruise",
      "Non-motorized water sports",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Spa treatments",
      "Motorized water sports",
      "Alcoholic beverages",
      "Travel insurance",
      "Premium dining"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise",
        description: "Welcome to the Maldives!",
        activities: [
          "Arrival at Male Airport",
          "Speedboat/Seaplane to resort",
          "Welcome with coconut",
          "Villa check-in and orientation",
          "Explore the island",
          "Sunset dinner at beach"
        ],
        meals: "Lunch, Dinner",
        accommodation: "Beach/Water Villa"
      },
      {
        day: 2,
        title: "Ocean Adventures",
        description: "Explore the underwater world.",
        activities: [
          "Sunrise yoga (optional)",
          "Breakfast with ocean view",
          "Snorkeling at house reef",
          "Lunch at overwater restaurant",
          "Sunset dolphin cruise",
          "Dinner under the stars"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Beach/Water Villa"
      },
      {
        day: 3,
        title: "Leisure in Paradise",
        description: "Relax and enjoy resort facilities.",
        activities: [
          "Breakfast at villa",
          "Spa treatment (optional)",
          "Kayaking/Paddleboarding",
          "Swimming and sunbathing",
          "Fishing trip (optional)",
          "Private beach dinner"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Beach/Water Villa"
      },
      {
        day: 4,
        title: "Departure",
        description: "Farewell to paradise.",
        activities: [
          "Sunrise photography",
          "Breakfast at villa",
          "Last swim in lagoon",
          "Transfer to Male Airport"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "international"
  },
  {
    id: "europe",
    name: "Europe Highlights",
    location: "France, Switzerland, Italy",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200",
    ],
    duration: "10 Days / 9 Nights",
    groupSize: "10-25 People",
    bestTime: "April - October",
    highlights: [
      "Eiffel Tower & Paris",
      "Swiss Alps & Jungfrau",
      "Venice Gondola Ride",
      "Rome Colosseum",
      "Leaning Tower of Pisa"
    ],
    overview: "Experience the best of Europe in this comprehensive tour covering France, Switzerland, and Italy. From the romantic streets of Paris to the canals of Venice and the history of Rome, create memories that last a lifetime.",
    inclusions: [
      "Accommodation in 3-star hotels",
      "Daily breakfast",
      "Deluxe coach travel",
      "Professional tour manager",
      "City tours as per itinerary",
      "Jungfrau excursion",
      "Venice Gondola ride",
      "Schengen visa assistance"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Schengen Visa fee",
      "Travel insurance",
      "Personal expenses",
      "Optional excursions",
      "Tips to driver/guide"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paris",
        description: "Bonjour! Welcome to the City of Lights.",
        activities: [
          "Arrival at Paris CDG Airport",
          "Transfer to hotel",
          "Check-in and rest",
          "Evening Seine River cruise",
          "View Eiffel Tower sparkling",
          "Dinner at Indian restaurant"
        ],
        meals: "Dinner",
        accommodation: "Hotel in Paris"
      },
      {
        day: 2,
        title: "Paris City Tour",
        description: "Explore the iconic landmarks of Paris.",
        activities: [
          "Breakfast at hotel",
          "Eiffel Tower visit",
          "Champs-Élysées drive",
          "Arc de Triomphe",
          "Louvre Museum (outside)",
          "Notre-Dame Cathedral",
          "Evening at Montmartre"
        ],
        meals: "Breakfast",
        accommodation: "Hotel in Paris"
      },
      {
        day: 3,
        title: "Paris to Switzerland",
        description: "Travel to beautiful Switzerland.",
        activities: [
          "Breakfast and check-out",
          "TGV train to Switzerland",
          "Arrive in Zurich/Lucerne",
          "Check-in at hotel",
          "Evening walk by the lake",
          "Dinner at hotel"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Switzerland"
      },
      {
        day: 4,
        title: "Jungfrau Excursion",
        description: "Visit the Top of Europe.",
        activities: [
          "Early breakfast",
          "Drive to Interlaken",
          "Cogwheel train to Jungfraujoch",
          "Ice Palace visit",
          "Sphinx Observatory",
          "Return to hotel",
          "Overnight in Interlaken"
        ],
        meals: "Breakfast",
        accommodation: "Hotel in Switzerland"
      },
      {
        day: 5,
        title: "Mt. Titlis & Lucerne",
        description: "Cable car to Mt. Titlis and explore Lucerne.",
        activities: [
          "Breakfast at hotel",
          "Mt. Titlis cable car ride",
          "Glacier cave & Ice Flyer",
          "Drive to Lucerne",
          "Chapel Bridge & Lion Monument",
          "Shopping time",
          "Overnight in Lucerne"
        ],
        meals: "Breakfast",
        accommodation: "Hotel in Lucerne"
      },
      {
        day: 6,
        title: "Switzerland to Italy",
        description: "Journey through the Alps to Venice.",
        activities: [
          "Breakfast and check-out",
          "Scenic drive through Alps",
          "Arrive in Venice area",
          "Check-in at hotel",
          "Evening at leisure",
          "Dinner at hotel"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel near Venice"
      },
      {
        day: 7,
        title: "Venice",
        description: "Explore the romantic city of canals.",
        activities: [
          "Breakfast at hotel",
          "Boat to Venice island",
          "St. Mark's Square",
          "St. Mark's Basilica",
          "Doge's Palace (outside)",
          "Gondola ride",
          "Murano glass factory",
          "Return to hotel"
        ],
        meals: "Breakfast",
        accommodation: "Hotel near Venice"
      },
      {
        day: 8,
        title: "Venice to Florence/Pisa",
        description: "Visit Renaissance Florence and Pisa.",
        activities: [
          "Breakfast and check-out",
          "Drive to Florence",
          "Florence walking tour",
          "Piazzale Michelangelo",
          "Continue to Pisa",
          "Leaning Tower photo stop",
          "Drive to Rome area"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel near Rome"
      },
      {
        day: 9,
        title: "Rome City Tour",
        description: "Explore the Eternal City.",
        activities: [
          "Breakfast at hotel",
          "Colosseum (outside)",
          "Roman Forum view",
          "Trevi Fountain",
          "Spanish Steps",
          "Vatican City visit",
          "St. Peter's Basilica",
          "Farewell dinner"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Rome"
      },
      {
        day: 10,
        title: "Departure",
        description: "Arrivederci! Time to say goodbye.",
        activities: [
          "Breakfast at hotel",
          "Check-out",
          "Transfer to Rome Airport",
          "Departure with memories"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "international"
  }
];
