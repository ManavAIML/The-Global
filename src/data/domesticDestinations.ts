// ============================================
// DOMESTIC DESTINATIONS DATA
// ============================================
// Edit this file to add/modify/remove domestic tour packages
// ============================================

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals: string;
  accommodation: string;
}

export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  gallery?: string[]; // Additional images for detail page
  duration: string;
  groupSize: string;
  bestTime: string;
  highlights: string[];
  overview: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: DayItinerary[];
  type: 'domestic' | 'international';
}

export const domesticDestinations: Destination[] = [
  {
    id: "kashmir",
    name: "Kashmir Paradise",
    location: "Jammu & Kashmir, India",
    // CHANGE IMAGE: Replace URL with your own image
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200",
      "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1200",
      "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1200",
    ],
    duration: "6 Days / 5 Nights",
    groupSize: "2-15 People",
    bestTime: "March - October",
    highlights: [
      "Shikara Ride on Dal Lake",
      "Gulmarg Gondola Ride",
      "Pahalgam Valley Visit",
      "Traditional Kashmiri Cuisine",
      "Mughal Gardens Tour"
    ],
    overview: "Experience the breathtaking beauty of Kashmir, often called 'Paradise on Earth'. From the serene Dal Lake to the snow-capped peaks of Gulmarg, this tour covers all the iconic destinations of Kashmir Valley. Enjoy traditional houseboats, stunning landscapes, and warm Kashmiri hospitality.",
    inclusions: [
      "Accommodation in 3-star/4-star hotels & houseboats",
      "Daily breakfast and dinner",
      "All transfers in AC vehicle",
      "Shikara ride on Dal Lake",
      "Gulmarg Gondola (Phase 1)",
      "Sightseeing as per itinerary",
      "All applicable taxes",
      "24/7 on-ground support"
    ],
    exclusions: [
      "Airfare / Train tickets",
      "Lunch and snacks",
      "Personal expenses",
      "Adventure activities",
      "Travel insurance",
      "Anything not mentioned in inclusions"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Welcome to Kashmir! Upon arrival at Srinagar Airport, our representative will greet you and transfer you to your houseboat on Dal Lake.",
        activities: [
          "Airport pickup and welcome",
          "Transfer to Dal Lake houseboat",
          "Check-in and freshen up",
          "Evening Shikara ride on Dal Lake",
          "Visit floating vegetable market",
          "Overnight stay in houseboat"
        ],
        meals: "Dinner",
        accommodation: "Deluxe Houseboat, Dal Lake"
      },
      {
        day: 2,
        title: "Srinagar Local Sightseeing",
        description: "Explore the historic Mughal Gardens and local attractions of Srinagar city.",
        activities: [
          "Breakfast at houseboat",
          "Visit Nishat Bagh (Garden of Joy)",
          "Explore Shalimar Bagh (Mughal Garden)",
          "Visit Chashme Shahi (Royal Spring)",
          "Shopping at local markets",
          "Return to hotel for overnight stay"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Srinagar"
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg",
        description: "Head to the meadow of flowers - Gulmarg, known for its stunning views and adventure activities.",
        activities: [
          "Early breakfast at hotel",
          "Drive to Gulmarg (2 hours)",
          "Gondola ride to Kongdoori (Phase 1)",
          "Optional: Phase 2 Gondola to Apharwat Peak",
          "Snow activities and photography",
          "Return to Gulmarg hotel"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Gulmarg"
      },
      {
        day: 4,
        title: "Gulmarg to Pahalgam",
        description: "Travel to the Valley of Shepherds - Pahalgam, along the beautiful Lidder River.",
        activities: [
          "Breakfast and check-out",
          "Scenic drive to Pahalgam (4 hours)",
          "En-route visit to Saffron fields",
          "Check-in at Pahalgam hotel",
          "Evening walk along Lidder River",
          "Local market exploration"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Pahalgam"
      },
      {
        day: 5,
        title: "Pahalgam Exploration",
        description: "Full day to explore the stunning valleys and meadows around Pahalgam.",
        activities: [
          "Breakfast at hotel",
          "Visit Betaab Valley",
          "Explore Chandanwari",
          "Pony ride to Baisaran (Mini Switzerland)",
          "Visit Aru Valley",
          "Return to hotel for dinner"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Pahalgam"
      },
      {
        day: 6,
        title: "Departure",
        description: "Time to bid farewell to the beautiful Kashmir Valley.",
        activities: [
          "Breakfast and check-out",
          "Drive to Srinagar Airport",
          "En-route shopping opportunities",
          "Drop at airport for onward journey"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "domestic"
  },
  {
    id: "kerala",
    name: "Kerala Backwaters",
    location: "Kerala, India",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=1200",
    ],
    duration: "5 Days / 4 Nights",
    groupSize: "2-12 People",
    bestTime: "September - March",
    highlights: [
      "Alleppey Houseboat Cruise",
      "Munnar Tea Plantations",
      "Kathakali Dance Show",
      "Ayurvedic Spa Experience",
      "Periyar Wildlife Sanctuary"
    ],
    overview: "Discover God's Own Country with its serene backwaters, lush tea plantations, and rich cultural heritage. From the houseboats of Alleppey to the hills of Munnar, experience the diverse beauty of Kerala.",
    inclusions: [
      "Accommodation in 3-star/4-star hotels",
      "1 Night premium houseboat stay",
      "Daily breakfast",
      "All transfers in AC vehicle",
      "Houseboat with all meals",
      "Kathakali show tickets",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare / Train tickets",
      "Lunch and dinner (except houseboat)",
      "Personal expenses",
      "Ayurvedic treatments",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin",
        description: "Welcome to Kerala! Arrive at Cochin and explore this historic port city.",
        activities: [
          "Airport pickup",
          "Visit Fort Kochi",
          "See Chinese Fishing Nets",
          "Explore St. Francis Church",
          "Walk through Jew Town",
          "Evening Kathakali dance show"
        ],
        meals: "Dinner",
        accommodation: "Hotel in Cochin"
      },
      {
        day: 2,
        title: "Cochin to Munnar",
        description: "Drive through scenic routes to the hill station of Munnar.",
        activities: [
          "Breakfast and check-out",
          "Scenic drive to Munnar (4 hours)",
          "Stop at Cheeyappara Waterfalls",
          "Visit Spice Plantations",
          "Check-in and evening at leisure",
          "Visit Munnar town"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Resort in Munnar"
      },
      {
        day: 3,
        title: "Munnar Sightseeing",
        description: "Explore the tea gardens and stunning viewpoints of Munnar.",
        activities: [
          "Breakfast at resort",
          "Visit Tea Museum",
          "Explore Eravikulam National Park",
          "Mattupetty Dam visit",
          "Echo Point and Top Station",
          "Return to resort"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Resort in Munnar"
      },
      {
        day: 4,
        title: "Munnar to Alleppey",
        description: "Journey to the backwaters and board your private houseboat.",
        activities: [
          "Breakfast and check-out",
          "Drive to Alleppey (4 hours)",
          "Board premium houseboat",
          "Cruise through backwaters",
          "Village walks",
          "Sunset on the lake"
        ],
        meals: "Breakfast, Lunch, Dinner",
        accommodation: "Premium Houseboat"
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning cruise and transfer to airport.",
        activities: [
          "Early morning cruise",
          "Breakfast on houseboat",
          "Disembark at Alleppey",
          "Transfer to Cochin Airport"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "domestic"
  },
  {
    id: "rajasthan",
    name: "Royal Rajasthan",
    location: "Rajasthan, India",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200",
    ],
    duration: "7 Days / 6 Nights",
    groupSize: "2-20 People",
    bestTime: "October - March",
    highlights: [
      "Amber Fort Elephant Ride",
      "Taj Mahal Sunrise Visit",
      "Desert Safari in Jaisalmer",
      "Lake Pichola Boat Ride",
      "Traditional Rajasthani Dinner"
    ],
    overview: "Step into the land of kings and experience the royal heritage of Rajasthan. From the pink city of Jaipur to the blue city of Jodhpur, explore magnificent forts, palaces, and the golden sands of the Thar Desert.",
    inclusions: [
      "Accommodation in heritage hotels",
      "Daily breakfast",
      "All transfers in AC vehicle",
      "Monument entrance fees",
      "Desert safari with dinner",
      "English speaking guide",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare / Train tickets",
      "Lunch and dinner",
      "Camera fees at monuments",
      "Personal expenses",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description: "Welcome to the Pink City! Begin your royal Rajasthan journey.",
        activities: [
          "Airport pickup",
          "Check-in at heritage hotel",
          "Visit Birla Temple",
          "Evening at Chokhi Dhani village",
          "Traditional Rajasthani dinner and folk show"
        ],
        meals: "Dinner",
        accommodation: "Heritage Hotel, Jaipur"
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description: "Full day exploring the magnificent forts and palaces of Jaipur.",
        activities: [
          "Breakfast at hotel",
          "Visit Amber Fort (Elephant/Jeep ride)",
          "Photo stop at Jal Mahal",
          "City Palace tour",
          "Jantar Mantar observatory",
          "Shopping at local bazaars"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Heritage Hotel, Jaipur"
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        description: "Journey to the Blue City of Jodhpur.",
        activities: [
          "Breakfast and check-out",
          "Drive to Jodhpur (5 hours)",
          "En-route visit Ajmer & Pushkar",
          "Check-in at Jodhpur hotel",
          "Evening walk in old city"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Jodhpur"
      },
      {
        day: 4,
        title: "Jodhpur to Jaisalmer",
        description: "Explore Jodhpur and proceed to the Golden City.",
        activities: [
          "Early breakfast",
          "Visit Mehrangarh Fort",
          "Jaswant Thada memorial",
          "Drive to Jaisalmer (5 hours)",
          "Check-in at desert camp",
          "Sunset at Sam Sand Dunes"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Desert Camp, Jaisalmer"
      },
      {
        day: 5,
        title: "Jaisalmer Exploration",
        description: "Explore the golden fort and enjoy desert activities.",
        activities: [
          "Sunrise camel safari",
          "Breakfast at camp",
          "Visit Jaisalmer Fort",
          "Patwon Ki Haveli",
          "Gadisar Lake",
          "Cultural program and dinner"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Jaisalmer"
      },
      {
        day: 6,
        title: "Jaisalmer to Udaipur",
        description: "Journey to the City of Lakes.",
        activities: [
          "Breakfast and check-out",
          "Drive to Udaipur (6 hours)",
          "En-route visit Ranakpur Temples",
          "Check-in at lake-facing hotel",
          "Evening boat ride on Lake Pichola"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Udaipur"
      },
      {
        day: 7,
        title: "Udaipur & Departure",
        description: "Morning sightseeing and departure.",
        activities: [
          "Breakfast at hotel",
          "City Palace visit",
          "Jagdish Temple",
          "Saheliyon Ki Bari",
          "Transfer to airport"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "domestic"
  },
  {
    id: "goa",
    name: "Goa Beach Escape",
    location: "Goa, India",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1200",
    ],
    duration: "4 Days / 3 Nights",
    groupSize: "2-10 People",
    bestTime: "November - February",
    highlights: [
      "Beach Hopping Tour",
      "Old Goa Churches",
      "Water Sports Activities",
      "Dudhsagar Waterfalls",
      "Goan Cuisine Experience"
    ],
    overview: "Relax on pristine beaches, explore Portuguese heritage, and enjoy the vibrant nightlife of Goa. This perfect beach getaway combines relaxation with adventure and cultural exploration.",
    inclusions: [
      "Accommodation in beach resort",
      "Daily breakfast",
      "Airport transfers",
      "North Goa sightseeing",
      "South Goa sightseeing",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Water sports",
      "Personal expenses",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description: "Welcome to the beach paradise!",
        activities: [
          "Airport pickup",
          "Check-in at beach resort",
          "Relax at beach",
          "Sunset at Calangute/Baga",
          "Dinner at beach shack"
        ],
        meals: "Dinner",
        accommodation: "Beach Resort"
      },
      {
        day: 2,
        title: "North Goa Tour",
        description: "Explore the popular beaches and attractions of North Goa.",
        activities: [
          "Breakfast at resort",
          "Aguada Fort visit",
          "Sinquerim Beach",
          "Lunch at Anjuna",
          "Vagator Beach & Chapora Fort",
          "Evening at Tito's Lane"
        ],
        meals: "Breakfast",
        accommodation: "Beach Resort"
      },
      {
        day: 3,
        title: "South Goa & Heritage",
        description: "Discover the serene South Goa and Portuguese heritage.",
        activities: [
          "Breakfast at resort",
          "Old Goa Churches (UNESCO)",
          "Basilica of Bom Jesus",
          "Colva Beach",
          "Palolem Beach",
          "Seafood dinner"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Beach Resort"
      },
      {
        day: 4,
        title: "Departure",
        description: "Leisure morning and departure.",
        activities: [
          "Breakfast at resort",
          "Optional: Spice plantation visit",
          "Shopping time",
          "Transfer to airport"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "domestic"
  },
  {
    id: "ladakh",
    name: "Ladakh Adventure",
    location: "Ladakh, India",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200",
    ],
    duration: "7 Days / 6 Nights",
    groupSize: "4-15 People",
    bestTime: "May - September",
    highlights: [
      "Pangong Lake Visit",
      "Nubra Valley Safari",
      "Khardung La Pass",
      "Monastery Tours",
      "River Rafting"
    ],
    overview: "Experience the raw beauty of Ladakh - the land of high passes. From the pristine Pangong Lake to the ancient monasteries, this adventure tour takes you through some of the most spectacular landscapes on Earth.",
    inclusions: [
      "Accommodation in hotels & camps",
      "Daily breakfast and dinner",
      "All transfers in Innova/Tempo",
      "Inner Line Permits",
      "Oxygen cylinder in vehicle",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch",
      "Adventure activities",
      "Personal expenses",
      "Travel insurance",
      "Monastery entrance fees"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh",
        description: "Arrive in Leh and acclimatize to the high altitude.",
        activities: [
          "Airport pickup",
          "Check-in at hotel",
          "Complete rest for acclimatization",
          "Light walk in evening",
          "Briefing about the trip"
        ],
        meals: "Dinner",
        accommodation: "Hotel in Leh"
      },
      {
        day: 2,
        title: "Leh Local Sightseeing",
        description: "Explore the ancient monasteries and palaces of Leh.",
        activities: [
          "Breakfast at hotel",
          "Shanti Stupa visit",
          "Leh Palace",
          "Thiksey Monastery",
          "Hemis Monastery",
          "Return to hotel"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Leh"
      },
      {
        day: 3,
        title: "Leh to Nubra Valley",
        description: "Cross the world's highest motorable pass to reach Nubra Valley.",
        activities: [
          "Early breakfast",
          "Drive via Khardung La (18,380 ft)",
          "Reach Diskit, Nubra Valley",
          "Visit Diskit Monastery",
          "Bactrian camel ride at Hunder",
          "Overnight at camp"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Camp in Nubra Valley"
      },
      {
        day: 4,
        title: "Nubra to Pangong Lake",
        description: "Journey to the stunning Pangong Tso Lake.",
        activities: [
          "Breakfast at camp",
          "Drive to Pangong via Shyok Route",
          "Reach Pangong by afternoon",
          "Explore the changing colors of lake",
          "Sunset photography",
          "Overnight at lakeside camp"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Camp at Pangong"
      },
      {
        day: 5,
        title: "Pangong to Leh",
        description: "Return to Leh via Chang La pass.",
        activities: [
          "Sunrise at Pangong",
          "Breakfast at camp",
          "Drive back to Leh via Chang La",
          "Visit Druk White Lotus School",
          "Evening free for shopping",
          "Overnight in Leh"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Leh"
      },
      {
        day: 6,
        title: "Sham Valley Tour",
        description: "Explore the beautiful Sham Valley and magnetic hill.",
        activities: [
          "Breakfast at hotel",
          "Visit Magnetic Hill",
          "Gurudwara Pathar Sahib",
          "Sangam Point (Indus-Zanskar)",
          "Alchi Monastery",
          "Return to Leh"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Leh"
      },
      {
        day: 7,
        title: "Departure",
        description: "Transfer to Leh Airport for your onward journey.",
        activities: [
          "Early breakfast",
          "Transfer to airport",
          "Departure with memories"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "domestic"
  },
  {
    id: "andaman",
    name: "Andaman Islands",
    location: "Andaman & Nicobar, India",
    image: "https://images.unsplash.com/photo-1589171243501-00ffe5d7eac1?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1589171243501-00ffe5d7eac1?w=1200",
    ],
    duration: "6 Days / 5 Nights",
    groupSize: "2-12 People",
    bestTime: "October - May",
    highlights: [
      "Cellular Jail Light Show",
      "Havelock Island Beach",
      "Scuba Diving & Snorkeling",
      "Neil Island Exploration",
      "Glass Bottom Boat Ride"
    ],
    overview: "Discover the pristine beaches and crystal-clear waters of the Andaman Islands. Experience world-class diving, explore historic sites, and relax on some of India's most beautiful beaches.",
    inclusions: [
      "Accommodation in beach resorts",
      "Daily breakfast",
      "All ferry transfers",
      "Port Blair sightseeing",
      "Cellular Jail entry & show",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare",
      "Lunch and dinner",
      "Water sports",
      "Personal expenses",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair",
        description: "Welcome to the Andaman Islands!",
        activities: [
          "Airport pickup",
          "Check-in at hotel",
          "Visit Cellular Jail (National Memorial)",
          "Light and Sound Show",
          "Dinner and overnight stay"
        ],
        meals: "Dinner",
        accommodation: "Hotel in Port Blair"
      },
      {
        day: 2,
        title: "Port Blair to Havelock",
        description: "Ferry to the beautiful Havelock Island.",
        activities: [
          "Early breakfast",
          "Ferry to Havelock (2 hours)",
          "Check-in at beach resort",
          "Visit Radhanagar Beach (Asia's Best)",
          "Sunset at beach",
          "Dinner at resort"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Beach Resort, Havelock"
      },
      {
        day: 3,
        title: "Havelock Exploration",
        description: "Explore the marine life and beaches of Havelock.",
        activities: [
          "Breakfast at resort",
          "Visit Elephant Beach",
          "Snorkeling/Scuba diving (optional)",
          "Glass bottom boat ride",
          "Kalapathar Beach visit",
          "Evening at leisure"
        ],
        meals: "Breakfast",
        accommodation: "Beach Resort, Havelock"
      },
      {
        day: 4,
        title: "Havelock to Neil Island",
        description: "Explore the quieter Neil Island.",
        activities: [
          "Breakfast and check-out",
          "Ferry to Neil Island",
          "Visit Bharatpur Beach",
          "Natural Rock Formation (Howrah Bridge)",
          "Laxmanpur Beach sunset",
          "Overnight at Neil"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Resort in Neil Island"
      },
      {
        day: 5,
        title: "Neil to Port Blair",
        description: "Return to Port Blair for local sightseeing.",
        activities: [
          "Breakfast and beach time",
          "Ferry to Port Blair",
          "Visit Corbyn's Cove Beach",
          "Anthropological Museum",
          "Samudrika Marine Museum",
          "Shopping at Aberdeen Bazaar"
        ],
        meals: "Breakfast, Dinner",
        accommodation: "Hotel in Port Blair"
      },
      {
        day: 6,
        title: "Departure",
        description: "Transfer to airport for departure.",
        activities: [
          "Breakfast at hotel",
          "Transfer to airport",
          "Departure"
        ],
        meals: "Breakfast",
        accommodation: "N/A"
      }
    ],
    type: "domestic"
  }
];
