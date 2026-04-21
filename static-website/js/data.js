// ===== DESTINATIONS DATA =====
// Edit this file to add/modify destinations

const DESTINATIONS = {
    // ===== DOMESTIC DESTINATIONS =====
    kashmir: {
        id: "kashmir",
        name: "Kashmir Paradise",
        type: "domestic",
        location: "Srinagar, Jammu & Kashmir",
        duration: "6 Days / 5 Nights",
        bestTime: "March - October",
        groupSize: "2-15 People",
        image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800",
        gallery: [
            "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800",
            "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800",
            "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800"
        ],
        highlights: [
            "Dal Lake Shikara Ride",
            "Gulmarg Gondola",
            "Pahalgam Valley",
            "Mughal Gardens"
        ],
        overview: "Experience the heaven on earth with our Kashmir Paradise tour. Explore the stunning Dal Lake, snow-capped mountains of Gulmarg, and the picturesque Pahalgam valley. This tour offers a perfect blend of natural beauty, adventure, and cultural experiences.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Srinagar",
                activities: [
                    "Arrive at Srinagar Airport",
                    "Transfer to Houseboat on Dal Lake",
                    "Evening Shikara ride on Dal Lake",
                    "Visit floating vegetable market",
                    "Welcome dinner on houseboat"
                ],
                meals: "Dinner",
                accommodation: "Deluxe Houseboat"
            },
            {
                day: 2,
                title: "Gulmarg Excursion",
                activities: [
                    "After breakfast, drive to Gulmarg (51 km)",
                    "Gondola ride to Kongdori & Apharwat Peak",
                    "Enjoy snow activities (seasonal)",
                    "Visit Gulmarg Golf Course",
                    "Return to Srinagar by evening"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Deluxe Houseboat"
            },
            {
                day: 3,
                title: "Srinagar to Pahalgam",
                activities: [
                    "Check out from houseboat",
                    "Visit Mughal Gardens - Nishat & Shalimar Bagh",
                    "Drive to Pahalgam (95 km)",
                    "En route visit Saffron fields & Awantipora ruins",
                    "Check in to hotel in Pahalgam"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 4,
                title: "Pahalgam Exploration",
                activities: [
                    "Visit Betaab Valley",
                    "Explore Aru Valley",
                    "Chandanwari visit (optional pony ride)",
                    "River rafting in Lidder River (seasonal)",
                    "Evening at leisure"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 5,
                title: "Pahalgam to Srinagar",
                activities: [
                    "Morning at leisure for shopping",
                    "Drive back to Srinagar",
                    "Visit local handicraft markets",
                    "Shikara ride at sunset",
                    "Farewell dinner"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 6,
                title: "Departure",
                activities: [
                    "Breakfast at hotel",
                    "Transfer to Srinagar Airport",
                    "Tour ends with beautiful memories"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "5 Nights accommodation",
            "Daily breakfast and dinner",
            "Airport transfers",
            "All sightseeing by private vehicle",
            "Shikara ride on Dal Lake",
            "Gondola tickets (Phase 1)",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Adventure activities",
            "Gondola Phase 2",
            "Pony rides",
            "Travel insurance"
        ]
    },

    kerala: {
        id: "kerala",
        name: "Kerala Backwaters",
        type: "domestic",
        location: "Kerala, India",
        duration: "5 Days / 4 Nights",
        bestTime: "September - March",
        groupSize: "2-12 People",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
        gallery: [
            "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
            "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800"
        ],
        highlights: [
            "Houseboat Stay in Alleppey",
            "Munnar Tea Gardens",
            "Kathakali Dance Show",
            "Ayurvedic Spa Experience"
        ],
        overview: "Discover God's Own Country with our Kerala Backwaters tour. Cruise through serene backwaters, explore lush tea plantations in Munnar, and experience authentic Kerala culture and cuisine.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Cochin",
                activities: [
                    "Arrive at Cochin Airport",
                    "Visit Fort Kochi and Chinese Fishing Nets",
                    "Explore St. Francis Church",
                    "Evening Kathakali dance performance",
                    "Overnight in Cochin"
                ],
                meals: "Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 2,
                title: "Cochin to Munnar",
                activities: [
                    "After breakfast, drive to Munnar (130 km)",
                    "En route visit Cheeyappara Waterfalls",
                    "Visit spice plantations",
                    "Arrive Munnar and check in",
                    "Evening at leisure"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Mountain Resort"
            },
            {
                day: 3,
                title: "Munnar Sightseeing",
                activities: [
                    "Visit Tea Museum",
                    "Explore Eravikulam National Park",
                    "Photo stop at Mattupetty Dam",
                    "Visit Echo Point",
                    "Evening tea tasting experience"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Mountain Resort"
            },
            {
                day: 4,
                title: "Munnar to Alleppey",
                activities: [
                    "Drive to Alleppey (160 km)",
                    "Board premium houseboat at noon",
                    "Cruise through backwaters",
                    "Village walk and local interactions",
                    "Overnight on houseboat"
                ],
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Premium Houseboat"
            },
            {
                day: 5,
                title: "Departure",
                activities: [
                    "Morning cruise and breakfast",
                    "Disembark at Alleppey",
                    "Transfer to Cochin Airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "4 Nights accommodation",
            "Daily breakfast and dinner",
            "1 lunch on houseboat",
            "Airport transfers",
            "All sightseeing by AC vehicle",
            "Premium houseboat with all meals",
            "Kathakali show tickets"
        ],
        exclusions: [
            "Airfare",
            "Lunch (except houseboat)",
            "Personal expenses",
            "Entry fees to parks",
            "Boating charges",
            "Travel insurance"
        ]
    },

    rajasthan: {
        id: "rajasthan",
        name: "Royal Rajasthan",
        type: "domestic",
        location: "Rajasthan, India",
        duration: "7 Days / 6 Nights",
        bestTime: "October - March",
        groupSize: "2-20 People",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
        gallery: [
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
            "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800"
        ],
        highlights: [
            "Jaipur - Pink City Palaces",
            "Udaipur - City of Lakes",
            "Jodhpur - Blue City",
            "Desert Safari in Jaisalmer"
        ],
        overview: "Experience the royal heritage of Rajasthan. Visit magnificent palaces, ancient forts, and enjoy the golden desert safari. This tour covers the best of Rajasthan's culture, history, and hospitality.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Jaipur",
                activities: [
                    "Arrive at Jaipur Airport",
                    "Check in to heritage hotel",
                    "Evening visit to Birla Temple",
                    "Explore local bazaars",
                    "Welcome dinner with folk music"
                ],
                meals: "Dinner",
                accommodation: "Heritage Hotel"
            },
            {
                day: 2,
                title: "Jaipur Sightseeing",
                activities: [
                    "Visit Amber Fort with elephant ride",
                    "Photo stop at Jal Mahal",
                    "City Palace and Jantar Mantar",
                    "Hawa Mahal (Palace of Winds)",
                    "Shopping at Johari Bazaar"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Heritage Hotel"
            },
            {
                day: 3,
                title: "Jaipur to Jodhpur",
                activities: [
                    "Drive to Jodhpur (330 km)",
                    "En route visit Ajmer and Pushkar",
                    "Arrive Jodhpur by evening",
                    "Check in to hotel",
                    "Evening at leisure"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "4-Star Hotel"
            },
            {
                day: 4,
                title: "Jodhpur to Jaisalmer",
                activities: [
                    "Morning visit Mehrangarh Fort",
                    "Explore Jaswant Thada",
                    "Drive to Jaisalmer (280 km)",
                    "Arrive and check into desert camp",
                    "Evening desert safari with sunset"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Desert Camp"
            },
            {
                day: 5,
                title: "Jaisalmer Exploration",
                activities: [
                    "Visit Jaisalmer Fort",
                    "Explore Patwon Ki Haveli",
                    "Visit Gadisar Lake",
                    "Camel safari in sand dunes",
                    "Cultural evening with dinner"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Desert Camp"
            },
            {
                day: 6,
                title: "Jaisalmer to Udaipur",
                activities: [
                    "Drive to Udaipur (530 km)",
                    "En route visit Ranakpur Jain Temple",
                    "Arrive Udaipur by evening",
                    "Check in to lake-view hotel",
                    "Evening boat ride on Lake Pichola"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Lake View Hotel"
            },
            {
                day: 7,
                title: "Udaipur & Departure",
                activities: [
                    "Visit City Palace",
                    "Explore Jagdish Temple",
                    "Saheliyon Ki Bari",
                    "Transfer to airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "6 Nights accommodation",
            "Daily breakfast and dinner",
            "All transfers by AC vehicle",
            "Elephant ride at Amber Fort",
            "Desert safari with camel ride",
            "Boat ride at Lake Pichola",
            "All monument entry fees"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "Camera fees at monuments",
            "Travel insurance",
            "Tips and gratuities"
        ]
    },

    goa: {
        id: "goa",
        name: "Goa Beach Escape",
        type: "domestic",
        location: "Goa, India",
        duration: "4 Days / 3 Nights",
        bestTime: "October - March",
        groupSize: "2-10 People",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
        highlights: [
            "Beach Hopping",
            "Water Sports",
            "Portuguese Heritage",
            "Nightlife & Cuisine"
        ],
        overview: "Relax on pristine beaches, explore Portuguese heritage, and enjoy Goa's vibrant nightlife. Perfect for beach lovers and party enthusiasts.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Goa",
                activities: [
                    "Arrive at Goa Airport",
                    "Transfer to beach resort",
                    "Relax at beach",
                    "Sunset at Calangute Beach",
                    "Dinner at beach shack"
                ],
                meals: "Dinner",
                accommodation: "Beach Resort"
            },
            {
                day: 2,
                title: "North Goa Tour",
                activities: [
                    "Visit Fort Aguada",
                    "Explore Anjuna Flea Market",
                    "Baga Beach water sports",
                    "Lunch at Thalassa",
                    "Evening at Tito's Lane"
                ],
                meals: "Breakfast",
                accommodation: "Beach Resort"
            },
            {
                day: 3,
                title: "South Goa & Heritage",
                activities: [
                    "Visit Old Goa Churches",
                    "Basilica of Bom Jesus (UNESCO)",
                    "Palolem Beach visit",
                    "Colva Beach sunset",
                    "Farewell dinner"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Beach Resort"
            },
            {
                day: 4,
                title: "Departure",
                activities: [
                    "Breakfast at resort",
                    "Last minute shopping",
                    "Transfer to airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "3 Nights at beach resort",
            "Daily breakfast",
            "Airport transfers",
            "North & South Goa sightseeing",
            "All taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch and dinner",
            "Water sports",
            "Personal expenses",
            "Travel insurance"
        ]
    },

    ladakh: {
        id: "ladakh",
        name: "Ladakh Adventure",
        type: "domestic",
        location: "Leh-Ladakh, India",
        duration: "7 Days / 6 Nights",
        bestTime: "May - September",
        groupSize: "4-12 People",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
        highlights: [
            "Pangong Lake",
            "Nubra Valley",
            "Khardung La Pass",
            "Buddhist Monasteries"
        ],
        overview: "Embark on an adventure to the Land of High Passes. Experience stunning landscapes, ancient monasteries, and the famous Pangong Lake.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Leh",
                activities: [
                    "Arrive at Leh Airport",
                    "Transfer to hotel",
                    "Rest for acclimatization",
                    "Light walk in Leh Market",
                    "Overnight in Leh"
                ],
                meals: "Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 2,
                title: "Leh Local Sightseeing",
                activities: [
                    "Visit Shanti Stupa",
                    "Leh Palace exploration",
                    "Hall of Fame museum",
                    "Magnetic Hill",
                    "Sangam point"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 3,
                title: "Leh to Nubra Valley",
                activities: [
                    "Drive over Khardung La (18,380 ft)",
                    "World's highest motorable road",
                    "Arrive Nubra Valley",
                    "Double hump camel ride",
                    "Overnight at camp"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Deluxe Camp"
            },
            {
                day: 4,
                title: "Nubra to Pangong",
                activities: [
                    "Drive to Pangong Lake via Shyok route",
                    "Arrive at the stunning blue lake",
                    "Photography and leisure time",
                    "Sunset at Pangong",
                    "Overnight in camps by the lake"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Lakeside Camp"
            },
            {
                day: 5,
                title: "Pangong to Leh",
                activities: [
                    "Sunrise at Pangong Lake",
                    "Drive back to Leh via Chang La",
                    "Visit Hemis Monastery",
                    "Thiksey Monastery",
                    "Return to Leh"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 6,
                title: "Leh Leisure Day",
                activities: [
                    "Visit local markets",
                    "Shopping for souvenirs",
                    "Optional river rafting",
                    "Farewell dinner",
                    "Overnight in Leh"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 7,
                title: "Departure",
                activities: [
                    "Early breakfast",
                    "Transfer to Leh Airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "6 Nights accommodation",
            "Daily breakfast and dinner",
            "All transfers by Innova/Tempo",
            "Inner Line Permits",
            "Camel ride in Nubra",
            "Oxygen cylinder in vehicle",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Personal expenses",
            "River rafting",
            "Travel insurance",
            "Monument entry fees"
        ]
    },

    andaman: {
        id: "andaman",
        name: "Andaman Islands",
        type: "domestic",
        location: "Andaman & Nicobar",
        duration: "5 Days / 4 Nights",
        bestTime: "October - May",
        groupSize: "2-15 People",
        image: "https://images.unsplash.com/photo-1589171874234-87898c4d2e26?w=800",
        highlights: [
            "Radhanagar Beach",
            "Cellular Jail",
            "Scuba Diving",
            "Havelock Island"
        ],
        overview: "Discover the tropical paradise of Andaman Islands. Crystal clear waters, pristine beaches, and rich marine life await you.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Port Blair",
                activities: [
                    "Arrive at Port Blair Airport",
                    "Visit Cellular Jail",
                    "Light and Sound Show",
                    "Corbyn's Cove Beach",
                    "Overnight in Port Blair"
                ],
                meals: "Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 2,
                title: "Port Blair to Havelock",
                activities: [
                    "Ferry to Havelock Island",
                    "Check in to beach resort",
                    "Visit Radhanagar Beach (Asia's Best)",
                    "Sunset at the beach",
                    "Overnight in Havelock"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Beach Resort"
            },
            {
                day: 3,
                title: "Havelock Water Activities",
                activities: [
                    "Scuba diving / Snorkeling at Elephant Beach",
                    "Glass bottom boat ride",
                    "Kayaking (optional)",
                    "Beach relaxation",
                    "Overnight in Havelock"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "Beach Resort"
            },
            {
                day: 4,
                title: "Havelock to Port Blair",
                activities: [
                    "Morning at leisure",
                    "Ferry back to Port Blair",
                    "Visit Samudrika Marine Museum",
                    "Shopping at Aberdeen Bazaar",
                    "Overnight in Port Blair"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 5,
                title: "Departure",
                activities: [
                    "Breakfast at hotel",
                    "Transfer to airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "4 Nights accommodation",
            "Daily breakfast and dinner",
            "Ferry tickets (AC class)",
            "All transfers",
            "Sightseeing as per itinerary",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare",
            "Lunch",
            "Scuba diving / Water sports",
            "Personal expenses",
            "Travel insurance"
        ]
    },

    // ===== INTERNATIONAL DESTINATIONS =====
    dubai: {
        id: "dubai",
        name: "Dubai Delights",
        type: "international",
        location: "Dubai, UAE",
        duration: "5 Days / 4 Nights",
        bestTime: "November - March",
        groupSize: "2-20 People",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
        gallery: [
            "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
            "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800"
        ],
        highlights: [
            "Burj Khalifa - At The Top",
            "Desert Safari with BBQ",
            "Dubai Mall & Fountain Show",
            "Dhow Cruise Dinner"
        ],
        overview: "Experience the glamour of Dubai - from the world's tallest building to thrilling desert adventures. Shop at luxurious malls and enjoy Arabian hospitality.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Dubai",
                activities: [
                    "Arrive at Dubai International Airport",
                    "Meet and greet, transfer to hotel",
                    "Evening at leisure",
                    "Visit Dubai Marina for dinner",
                    "Overnight in Dubai"
                ],
                meals: "Dinner",
                accommodation: "4-Star Hotel"
            },
            {
                day: 2,
                title: "Dubai City Tour",
                activities: [
                    "Visit Dubai Museum",
                    "Abra ride across Dubai Creek",
                    "Gold and Spice Souk exploration",
                    "Photo stop at Burj Al Arab",
                    "Visit Palm Jumeirah",
                    "Evening at Dubai Mall"
                ],
                meals: "Breakfast",
                accommodation: "4-Star Hotel"
            },
            {
                day: 3,
                title: "Burj Khalifa & Desert Safari",
                activities: [
                    "Morning at leisure",
                    "Burj Khalifa - At The Top (124th floor)",
                    "Lunch at Dubai Mall",
                    "Afternoon Desert Safari",
                    "Dune bashing, camel ride, sandboarding",
                    "BBQ dinner with belly dance show"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "4-Star Hotel"
            },
            {
                day: 4,
                title: "Abu Dhabi Day Trip",
                activities: [
                    "Drive to Abu Dhabi (140 km)",
                    "Visit Sheikh Zayed Grand Mosque",
                    "Photo stop at Emirates Palace",
                    "Yas Island visit",
                    "Return to Dubai",
                    "Dhow Cruise dinner"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "4-Star Hotel"
            },
            {
                day: 5,
                title: "Departure",
                activities: [
                    "Breakfast at hotel",
                    "Last minute shopping (optional)",
                    "Transfer to Dubai Airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "4 Nights accommodation",
            "Daily breakfast",
            "Airport transfers",
            "Dubai city tour",
            "Burj Khalifa tickets (Level 124)",
            "Desert Safari with BBQ dinner",
            "Dhow Cruise dinner",
            "Abu Dhabi day trip",
            "All tours on SIC basis"
        ],
        exclusions: [
            "Airfare",
            "Visa fees",
            "Lunch",
            "Travel insurance",
            "Personal expenses",
            "Tips and gratuities"
        ]
    },

    thailand: {
        id: "thailand",
        name: "Thailand Explorer",
        type: "international",
        location: "Bangkok & Pattaya",
        duration: "6 Days / 5 Nights",
        bestTime: "November - February",
        groupSize: "2-20 People",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800",
        highlights: [
            "Grand Palace Bangkok",
            "Phi Phi Islands",
            "Coral Island Pattaya",
            "Thai Massage & Cuisine"
        ],
        overview: "Explore the Land of Smiles with temple visits, island hopping, vibrant nightlife, and authentic Thai cuisine experiences.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bangkok",
                activities: [
                    "Arrive at Suvarnabhumi Airport",
                    "Transfer to hotel",
                    "Evening at Asiatique Riverfront",
                    "Dinner cruise (optional)",
                    "Overnight in Bangkok"
                ],
                meals: "Dinner",
                accommodation: "4-Star Hotel"
            },
            {
                day: 2,
                title: "Bangkok Temple Tour",
                activities: [
                    "Visit Grand Palace & Wat Phra Kaew",
                    "Wat Pho (Reclining Buddha)",
                    "Wat Arun (Temple of Dawn)",
                    "Lunch at local restaurant",
                    "Evening at Chatuchak Market"
                ],
                meals: "Breakfast, Lunch",
                accommodation: "4-Star Hotel"
            },
            {
                day: 3,
                title: "Bangkok to Pattaya",
                activities: [
                    "Drive to Pattaya (150 km)",
                    "Visit Nong Nooch Tropical Garden",
                    "Traditional Thai cultural show",
                    "Walking Street exploration",
                    "Overnight in Pattaya"
                ],
                meals: "Breakfast",
                accommodation: "Beach Resort"
            },
            {
                day: 4,
                title: "Coral Island Tour",
                activities: [
                    "Speedboat to Coral Island",
                    "Water sports activities",
                    "Parasailing, jet ski (optional)",
                    "Beach relaxation",
                    "Evening Thai massage"
                ],
                meals: "Breakfast, Lunch",
                accommodation: "Beach Resort"
            },
            {
                day: 5,
                title: "Pattaya to Bangkok",
                activities: [
                    "Morning at leisure",
                    "Return to Bangkok",
                    "Visit MBK & Siam Paragon",
                    "Shopping time",
                    "Farewell dinner"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "4-Star Hotel"
            },
            {
                day: 6,
                title: "Departure",
                activities: [
                    "Breakfast at hotel",
                    "Transfer to airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "5 Nights accommodation",
            "Daily breakfast",
            "Airport transfers",
            "Bangkok temple tour",
            "Pattaya city tour",
            "Coral Island with lunch",
            "All tours on SIC basis"
        ],
        exclusions: [
            "Airfare",
            "Visa on arrival fees",
            "Water sports",
            "Personal expenses",
            "Travel insurance"
        ]
    },

    singapore: {
        id: "singapore",
        name: "Singapore Sensation",
        type: "international",
        location: "Singapore",
        duration: "4 Days / 3 Nights",
        bestTime: "Year Round",
        groupSize: "2-15 People",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
        highlights: [
            "Marina Bay Sands",
            "Sentosa Island",
            "Gardens by the Bay",
            "Universal Studios"
        ],
        overview: "Experience the Lion City's blend of culture, cuisine, and futuristic architecture. Perfect for families and couples alike.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Singapore",
                activities: [
                    "Arrive at Changi Airport",
                    "Transfer to hotel",
                    "Evening visit to Merlion Park",
                    "Marina Bay Sands light show",
                    "Dinner at Clarke Quay"
                ],
                meals: "Dinner",
                accommodation: "4-Star Hotel"
            },
            {
                day: 2,
                title: "City Tour & Gardens",
                activities: [
                    "Half day city tour",
                    "Visit Little India & Chinatown",
                    "Gardens by the Bay",
                    "Cloud Forest & Flower Dome",
                    "Supertree Grove light show"
                ],
                meals: "Breakfast",
                accommodation: "4-Star Hotel"
            },
            {
                day: 3,
                title: "Sentosa Island",
                activities: [
                    "Full day at Sentosa",
                    "Universal Studios Singapore",
                    "S.E.A. Aquarium (optional)",
                    "Wings of Time show",
                    "Return to hotel"
                ],
                meals: "Breakfast",
                accommodation: "4-Star Hotel"
            },
            {
                day: 4,
                title: "Departure",
                activities: [
                    "Breakfast at hotel",
                    "Shopping at Orchard Road",
                    "Transfer to Changi Airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "3 Nights accommodation",
            "Daily breakfast",
            "Airport transfers",
            "Half day city tour",
            "Gardens by the Bay tickets",
            "Universal Studios ticket",
            "Sentosa cable car"
        ],
        exclusions: [
            "Airfare",
            "Visa (if applicable)",
            "Lunch and dinner",
            "Personal expenses",
            "Travel insurance"
        ]
    },

    bali: {
        id: "bali",
        name: "Bali Paradise",
        type: "international",
        location: "Bali, Indonesia",
        duration: "6 Days / 5 Nights",
        bestTime: "April - October",
        groupSize: "2-12 People",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        highlights: [
            "Ubud Rice Terraces",
            "Tanah Lot Temple",
            "Seminyak Beach Clubs",
            "Spa & Wellness"
        ],
        overview: "Discover the Island of Gods with ancient temples, stunning rice terraces, and beautiful beaches. A perfect blend of culture and relaxation.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Bali",
                activities: [
                    "Arrive at Ngurah Rai Airport",
                    "Transfer to Seminyak",
                    "Check in to resort",
                    "Evening beach walk",
                    "Dinner at beach restaurant"
                ],
                meals: "Dinner",
                accommodation: "4-Star Resort"
            },
            {
                day: 2,
                title: "Ubud Tour",
                activities: [
                    "Visit Tegalalang Rice Terraces",
                    "Sacred Monkey Forest",
                    "Ubud Art Market",
                    "Traditional dance performance",
                    "Return to Seminyak"
                ],
                meals: "Breakfast, Lunch",
                accommodation: "4-Star Resort"
            },
            {
                day: 3,
                title: "Temple Tour",
                activities: [
                    "Visit Tanah Lot Temple",
                    "Uluwatu Temple sunset",
                    "Kecak Fire Dance show",
                    "Seafood dinner at Jimbaran Bay",
                    "Return to hotel"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "4-Star Resort"
            },
            {
                day: 4,
                title: "Water Activities",
                activities: [
                    "Transfer to Nusa Dua",
                    "Water sports activities",
                    "Banana boat, jet ski, parasailing",
                    "Beach relaxation",
                    "Evening spa treatment"
                ],
                meals: "Breakfast",
                accommodation: "4-Star Resort"
            },
            {
                day: 5,
                title: "Leisure Day",
                activities: [
                    "Morning yoga session",
                    "Pool or beach time",
                    "Optional cooking class",
                    "Sunset at beach club",
                    "Farewell dinner"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "4-Star Resort"
            },
            {
                day: 6,
                title: "Departure",
                activities: [
                    "Breakfast at resort",
                    "Transfer to airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "5 Nights accommodation",
            "Daily breakfast",
            "Airport transfers",
            "Ubud tour with lunch",
            "Temple tour with dinner",
            "1 Spa treatment",
            "All tours with English guide"
        ],
        exclusions: [
            "Airfare",
            "Visa on arrival fees",
            "Water sports",
            "Personal expenses",
            "Travel insurance"
        ]
    },

    maldives: {
        id: "maldives",
        name: "Maldives Escape",
        type: "international",
        location: "Maldives",
        duration: "4 Days / 3 Nights",
        bestTime: "November - April",
        groupSize: "2-8 People",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
        highlights: [
            "Overwater Villa Stay",
            "Snorkeling & Diving",
            "Sunset Dolphin Cruise",
            "Romantic Beach Dinner"
        ],
        overview: "Experience ultimate luxury in the tropical paradise of Maldives. Crystal clear waters, white sandy beaches, and world-class resorts await.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Maldives",
                activities: [
                    "Arrive at Malé Airport",
                    "Speedboat transfer to resort",
                    "Check in to water villa",
                    "Resort orientation",
                    "Sunset cocktails and dinner"
                ],
                meals: "Dinner",
                accommodation: "Water Villa"
            },
            {
                day: 2,
                title: "Water Activities",
                activities: [
                    "Breakfast with lagoon view",
                    "Snorkeling session",
                    "Kayaking or paddleboarding",
                    "Spa treatment",
                    "Romantic dinner on beach"
                ],
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Water Villa"
            },
            {
                day: 3,
                title: "Island Experience",
                activities: [
                    "Sunrise yoga session",
                    "Dolphin watching cruise",
                    "Local island visit",
                    "Underwater dining (optional)",
                    "Stargazing on beach"
                ],
                meals: "Breakfast, Lunch, Dinner",
                accommodation: "Water Villa"
            },
            {
                day: 4,
                title: "Departure",
                activities: [
                    "Final breakfast",
                    "Resort leisure time",
                    "Speedboat to Malé Airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "3 Nights in Water Villa",
            "Full board meals",
            "Speedboat transfers",
            "Snorkeling equipment",
            "Dolphin cruise",
            "1 Spa treatment",
            "Kayaking/Paddleboarding"
        ],
        exclusions: [
            "Airfare",
            "Visa (if applicable)",
            "Premium beverages",
            "Scuba diving",
            "Personal expenses",
            "Travel insurance"
        ]
    },

    europe: {
        id: "europe",
        name: "Europe Highlights",
        type: "international",
        location: "France, Switzerland, Italy",
        duration: "10 Days / 9 Nights",
        bestTime: "April - September",
        groupSize: "10-25 People",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
        highlights: [
            "Eiffel Tower Paris",
            "Swiss Alps",
            "Venice Gondola Ride",
            "Rome Colosseum"
        ],
        overview: "Experience the best of Europe in one tour. From the romance of Paris to the beauty of Swiss Alps and the history of Rome.",
        itinerary: [
            {
                day: 1,
                title: "Arrival in Paris",
                activities: [
                    "Arrive at Charles de Gaulle Airport",
                    "Transfer to hotel",
                    "Evening Seine River cruise",
                    "Dinner with Eiffel Tower view",
                    "Overnight in Paris"
                ],
                meals: "Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 2,
                title: "Paris Sightseeing",
                activities: [
                    "Visit Eiffel Tower",
                    "Louvre Museum tour",
                    "Champs-Élysées walk",
                    "Arc de Triomphe",
                    "Notre-Dame Cathedral area"
                ],
                meals: "Breakfast",
                accommodation: "3-Star Hotel"
            },
            {
                day: 3,
                title: "Paris to Switzerland",
                activities: [
                    "TGV train to Zurich",
                    "Transfer to Lucerne",
                    "Lake Lucerne boat ride",
                    "Chapel Bridge visit",
                    "Overnight in Lucerne"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 4,
                title: "Mount Titlis Excursion",
                activities: [
                    "Cable car to Mt. Titlis",
                    "Ice Flyer and Glacier Cave",
                    "Cliff Walk experience",
                    "Return to Lucerne",
                    "Evening at leisure"
                ],
                meals: "Breakfast",
                accommodation: "3-Star Hotel"
            },
            {
                day: 5,
                title: "Lucerne to Interlaken",
                activities: [
                    "Drive to Interlaken",
                    "Jungfraujoch excursion (optional)",
                    "Swiss chocolate tasting",
                    "Explore Interlaken town",
                    "Overnight in Interlaken"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 6,
                title: "Switzerland to Italy",
                activities: [
                    "Drive to Milan",
                    "Quick Milan Cathedral visit",
                    "Continue to Venice",
                    "Evening in Venice",
                    "Overnight near Venice"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 7,
                title: "Venice Full Day",
                activities: [
                    "St. Mark's Square",
                    "Doge's Palace",
                    "Gondola ride",
                    "Rialto Bridge",
                    "Murano Island (glass factory)"
                ],
                meals: "Breakfast",
                accommodation: "3-Star Hotel"
            },
            {
                day: 8,
                title: "Venice to Florence",
                activities: [
                    "Drive to Florence",
                    "Piazzale Michelangelo",
                    "Duomo and Baptistery",
                    "Ponte Vecchio",
                    "Leather market shopping"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 9,
                title: "Florence to Rome",
                activities: [
                    "Drive to Rome",
                    "Colosseum visit",
                    "Roman Forum",
                    "Trevi Fountain",
                    "Spanish Steps"
                ],
                meals: "Breakfast, Dinner",
                accommodation: "3-Star Hotel"
            },
            {
                day: 10,
                title: "Rome & Departure",
                activities: [
                    "Vatican City visit",
                    "St. Peter's Basilica",
                    "Sistine Chapel",
                    "Transfer to Rome Airport",
                    "Tour ends"
                ],
                meals: "Breakfast",
                accommodation: "N/A"
            }
        ],
        inclusions: [
            "9 Nights accommodation",
            "Daily breakfast",
            "5 Dinners",
            "Luxury coach travel",
            "Paris-Zurich TGV train",
            "Local city tours",
            "Gondola ride Venice",
            "Mt. Titlis cable car",
            "English speaking guide"
        ],
        exclusions: [
            "Airfare",
            "Schengen Visa fees",
            "Lunch",
            "Travel insurance",
            "Optional tours",
            "City taxes (paid locally)"
        ]
    }
};

// ===== VISA SERVICES DATA =====
const VISA_SERVICES = {
    usa: {
        id: "usa",
        country: "USA",
        flag: "🇺🇸",
        processingTime: "3-5 weeks",
        validity: "10 Years",
        type: "B1/B2 Tourist",
        fee: "₹14,500",
        documents: [
            "Valid passport (6 months validity)",
            "DS-160 confirmation",
            "Passport size photographs",
            "Bank statements (6 months)",
            "ITR for last 3 years",
            "Employment letter",
            "Travel itinerary"
        ]
    },
    uk: {
        id: "uk",
        country: "United Kingdom",
        flag: "🇬🇧",
        processingTime: "15-20 days",
        validity: "6 Months - 10 Years",
        type: "Standard Visitor",
        fee: "₹11,500",
        documents: [
            "Valid passport",
            "Passport photographs",
            "Bank statements (6 months)",
            "Employment proof",
            "Hotel booking",
            "Flight itinerary",
            "Travel insurance"
        ]
    },
    schengen: {
        id: "schengen",
        country: "Schengen (Europe)",
        flag: "🇪🇺",
        processingTime: "15-20 days",
        validity: "Up to 90 days",
        type: "Short Stay",
        fee: "₹7,500",
        documents: [
            "Valid passport",
            "Visa application form",
            "Photographs (35x45mm)",
            "Travel insurance (€30,000)",
            "Flight reservation",
            "Hotel booking",
            "Bank statements (3 months)",
            "Cover letter"
        ]
    },
    australia: {
        id: "australia",
        country: "Australia",
        flag: "🇦🇺",
        processingTime: "20-30 days",
        validity: "1 Year",
        type: "Visitor (600)",
        fee: "₹10,500",
        documents: [
            "Valid passport",
            "Photographs",
            "Bank statements (6 months)",
            "Employment letter",
            "Travel itinerary",
            "Health insurance",
            "Form 1419"
        ]
    },
    canada: {
        id: "canada",
        country: "Canada",
        flag: "🇨🇦",
        processingTime: "4-6 weeks",
        validity: "Up to 10 Years",
        type: "Temporary Resident",
        fee: "₹8,500",
        documents: [
            "Valid passport",
            "Digital photographs",
            "Bank statements",
            "Employment proof",
            "Travel history proof",
            "Purpose of travel",
            "IMM 5257 form"
        ]
    },
    singapore: {
        id: "singapore",
        country: "Singapore",
        flag: "🇸🇬",
        processingTime: "3-5 days",
        validity: "30-90 days",
        type: "Tourist Visa",
        fee: "₹2,500",
        documents: [
            "Valid passport",
            "Photographs",
            "Bank statements (3 months)",
            "Flight tickets",
            "Hotel booking",
            "Employment letter",
            "Form 14A"
        ]
    },
    uae: {
        id: "uae",
        country: "UAE (Dubai)",
        flag: "🇦🇪",
        processingTime: "3-4 days",
        validity: "30-90 days",
        type: "Tourist Visa",
        fee: "₹6,500",
        documents: [
            "Valid passport (6 months)",
            "Passport photographs",
            "Flight tickets",
            "Hotel confirmation",
            "Bank statements",
            "Passport color scan"
        ]
    },
    thailand: {
        id: "thailand",
        country: "Thailand",
        flag: "🇹🇭",
        processingTime: "On Arrival",
        validity: "15-30 days",
        type: "Visa on Arrival",
        fee: "₹2,000 (2000 THB)",
        documents: [
            "Valid passport (6 months)",
            "Passport photographs",
            "Return flight ticket",
            "Hotel booking",
            "Cash (20,000 THB equivalent)",
            "Arrival/Departure card"
        ]
    },
    malaysia: {
        id: "malaysia",
        country: "Malaysia",
        flag: "🇲🇾",
        processingTime: "eNTRI - Instant",
        validity: "15 days",
        type: "eNTRI / eVisa",
        fee: "₹1,800",
        documents: [
            "Valid passport",
            "Passport photograph",
            "Flight tickets",
            "Hotel booking",
            "Bank statements"
        ]
    },
    japan: {
        id: "japan",
        country: "Japan",
        flag: "🇯🇵",
        processingTime: "5-7 days",
        validity: "15-90 days",
        type: "Tourist Visa",
        fee: "₹1,500",
        documents: [
            "Valid passport",
            "Photographs",
            "Bank statements (6 months)",
            "ITR",
            "Daily schedule in Japan",
            "Hotel reservations",
            "Flight tickets"
        ]
    },
    vietnam: {
        id: "vietnam",
        country: "Vietnam",
        flag: "🇻🇳",
        processingTime: "3-5 days",
        validity: "30 days",
        type: "E-Visa",
        fee: "₹2,200",
        documents: [
            "Valid passport",
            "Passport photograph",
            "Flight tickets",
            "Hotel booking"
        ]
    },
    srilanka: {
        id: "srilanka",
        country: "Sri Lanka",
        flag: "🇱🇰",
        processingTime: "1-2 days",
        validity: "30 days",
        type: "ETA",
        fee: "₹2,500",
        documents: [
            "Valid passport",
            "Return flight tickets",
            "Hotel booking"
        ]
    }
};

// Helper function to get destinations by type
function getDestinationsByType(type) {
    return Object.values(DESTINATIONS).filter(dest => dest.type === type);
}

// Helper function to get destination by ID
function getDestinationById(id) {
    return DESTINATIONS[id] || null;
}

// Helper function to get visa by country ID
function getVisaById(id) {
    return VISA_SERVICES[id] || null;
}

// Make data available globally
window.DESTINATIONS = DESTINATIONS;
window.VISA_SERVICES = VISA_SERVICES;
window.getDestinationsByType = getDestinationsByType;
window.getDestinationById = getDestinationById;
window.getVisaById = getVisaById;
