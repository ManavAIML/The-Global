/**
 * ========================================
 * DESTINATIONS & TOUR DATA
 * ========================================
 * 
 * Edit this file to:
 * - Change destination images
 * - Update itineraries
 * - Add/remove destinations
 * 
 * Changes reflect immediately - just refresh!
 */

const DESTINATIONS = {
    // ========================================
    // DOMESTIC DESTINATIONS (INDIA)
    // ========================================
    domestic: {
        kashmir: {
            id: "kashmir",
            name: "Kashmir Paradise",
            location: "Jammu & Kashmir, India",
            duration: "6 Days / 5 Nights",
            groupSize: "2-15 People",
            bestTime: "Mar - Oct",
            image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=800",
            highlights: ["Dal Lake", "Gulmarg", "Pahalgam", "Mughal Gardens", "Shikara Ride"],
            overview: "Experience the breathtaking beauty of Kashmir, often called 'Paradise on Earth'. From the serene Dal Lake to the snow-capped peaks of Gulmarg, this tour covers all the iconic destinations of this magnificent region.",
            inclusions: [
                "5 Nights accommodation in 3-4 star hotels",
                "Daily breakfast and dinner",
                "Airport/Railway station transfers",
                "All sightseeing by private AC vehicle",
                "Shikara ride on Dal Lake",
                "Gondola ride in Gulmarg (1st phase)",
                "All applicable taxes"
            ],
            exclusions: [
                "Flight/Train tickets",
                "Lunch during the tour",
                "Personal expenses",
                "Travel insurance",
                "Anything not mentioned in inclusions"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Srinagar",
                    activities: [
                        "Arrive at Srinagar Airport/Railway Station",
                        "Transfer to hotel and check-in",
                        "Evening Shikara ride on Dal Lake",
                        "Overnight stay at Srinagar"
                    ],
                    meals: "Dinner",
                    accommodation: "Hotel in Srinagar"
                },
                {
                    day: 2,
                    title: "Srinagar - Gulmarg - Srinagar",
                    activities: [
                        "Breakfast at hotel",
                        "Full day excursion to Gulmarg (56 km)",
                        "Gondola ride to Kongdoori (Phase 1)",
                        "Explore snow activities and meadows",
                        "Return to Srinagar by evening"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Srinagar"
                },
                {
                    day: 3,
                    title: "Srinagar - Pahalgam",
                    activities: [
                        "Breakfast and check-out",
                        "Drive to Pahalgam (95 km)",
                        "En-route visit Saffron fields and Awantipora ruins",
                        "Check-in at Pahalgam hotel",
                        "Evening at leisure by Lidder River"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Pahalgam"
                },
                {
                    day: 4,
                    title: "Pahalgam Sightseeing",
                    activities: [
                        "Breakfast at hotel",
                        "Visit Betaab Valley",
                        "Explore Aru Valley",
                        "Visit Chandanwari",
                        "Evening free for shopping"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Pahalgam"
                },
                {
                    day: 5,
                    title: "Pahalgam - Srinagar",
                    activities: [
                        "Breakfast and check-out",
                        "Drive back to Srinagar",
                        "Visit Mughal Gardens - Nishat Bagh, Shalimar Bagh",
                        "Shopping at local markets",
                        "Evening free for leisure"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Houseboat on Dal Lake"
                },
                {
                    day: 6,
                    title: "Departure",
                    activities: [
                        "Breakfast at houseboat",
                        "Check-out and transfer to airport",
                        "Tour ends with beautiful memories"
                    ],
                    meals: "Breakfast",
                    accommodation: "N/A"
                }
            ]
        },
        kerala: {
            id: "kerala",
            name: "Kerala Backwaters",
            location: "Kerala, India",
            duration: "5 Days / 4 Nights",
            groupSize: "2-12 People",
            bestTime: "Sep - Mar",
            image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
            highlights: ["Alleppey Backwaters", "Munnar Tea Gardens", "Houseboat Stay", "Cochin", "Kathakali Show"],
            overview: "Discover the serene backwaters, lush tea plantations, and rich cultural heritage of God's Own Country - Kerala. This tour offers a perfect blend of nature, culture, and relaxation.",
            inclusions: [
                "4 Nights accommodation",
                "1 Night premium houseboat stay",
                "Daily breakfast and dinner",
                "All transfers by AC vehicle",
                "Sightseeing as per itinerary",
                "All applicable taxes"
            ],
            exclusions: [
                "Flight/Train tickets",
                "Lunch during tour",
                "Personal expenses",
                "Entry fees at monuments",
                "Travel insurance"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Cochin",
                    activities: [
                        "Arrive at Cochin Airport",
                        "Transfer to hotel",
                        "Visit Fort Kochi and Chinese Fishing Nets",
                        "Evening Kathakali dance performance"
                    ],
                    meals: "Dinner",
                    accommodation: "Hotel in Cochin"
                },
                {
                    day: 2,
                    title: "Cochin - Munnar",
                    activities: [
                        "Breakfast and check-out",
                        "Drive to Munnar (130 km)",
                        "En-route visit Cheeyappara Waterfalls",
                        "Check-in and evening at leisure"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Munnar"
                },
                {
                    day: 3,
                    title: "Munnar Sightseeing",
                    activities: [
                        "Breakfast at hotel",
                        "Visit Tea Museum",
                        "Explore Eravikulam National Park",
                        "Visit Mattupetty Dam",
                        "Tea plantation walk"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Munnar"
                },
                {
                    day: 4,
                    title: "Munnar - Alleppey",
                    activities: [
                        "Breakfast and check-out",
                        "Drive to Alleppey (170 km)",
                        "Board premium houseboat at noon",
                        "Cruise through backwaters",
                        "Overnight stay on houseboat"
                    ],
                    meals: "Breakfast, Lunch, Dinner",
                    accommodation: "Premium Houseboat"
                },
                {
                    day: 5,
                    title: "Departure",
                    activities: [
                        "Breakfast on houseboat",
                        "Disembark at jetty",
                        "Transfer to Cochin Airport",
                        "Tour ends"
                    ],
                    meals: "Breakfast",
                    accommodation: "N/A"
                }
            ]
        },
        rajasthan: {
            id: "rajasthan",
            name: "Royal Rajasthan",
            location: "Rajasthan, India",
            duration: "7 Days / 6 Nights",
            groupSize: "2-20 People",
            bestTime: "Oct - Mar",
            image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
            highlights: ["Jaipur", "Jodhpur", "Udaipur", "Desert Safari", "Palace Hotels"],
            overview: "Experience the royal heritage of Rajasthan through its magnificent forts, palaces, and vibrant culture. This comprehensive tour covers the golden triangle of Rajasthan.",
            inclusions: [
                "6 Nights in heritage/4-star hotels",
                "Daily breakfast and dinner",
                "AC vehicle for all transfers",
                "Desert safari in Jodhpur",
                "All sightseeing with guide",
                "All applicable taxes"
            ],
            exclusions: [
                "Flight/Train tickets",
                "Lunch",
                "Monument entry fees",
                "Personal expenses",
                "Camera fees"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Jaipur",
                    activities: [
                        "Arrive at Jaipur Airport",
                        "Transfer to heritage hotel",
                        "Evening visit to Birla Temple",
                        "Explore local markets"
                    ],
                    meals: "Dinner",
                    accommodation: "Heritage Hotel in Jaipur"
                },
                {
                    day: 2,
                    title: "Jaipur Sightseeing",
                    activities: [
                        "Visit Amber Fort with elephant ride",
                        "Photo stop at Jal Mahal",
                        "Visit City Palace and Jantar Mantar",
                        "Explore Hawa Mahal"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Heritage Hotel in Jaipur"
                },
                {
                    day: 3,
                    title: "Jaipur - Jodhpur",
                    activities: [
                        "Drive to Jodhpur (340 km)",
                        "En-route visit Ajmer and Pushkar",
                        "Check-in at hotel",
                        "Evening at leisure"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Jodhpur"
                },
                {
                    day: 4,
                    title: "Jodhpur Sightseeing",
                    activities: [
                        "Visit Mehrangarh Fort",
                        "Explore Jaswant Thada",
                        "Visit Umaid Bhawan Palace",
                        "Evening desert safari with cultural program"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Jodhpur"
                },
                {
                    day: 5,
                    title: "Jodhpur - Udaipur",
                    activities: [
                        "Drive to Udaipur (260 km)",
                        "En-route visit Ranakpur Jain Temple",
                        "Check-in at lakeside hotel",
                        "Evening boat ride on Lake Pichola"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Lake-facing Hotel in Udaipur"
                },
                {
                    day: 6,
                    title: "Udaipur Sightseeing",
                    activities: [
                        "Visit City Palace",
                        "Explore Saheliyon Ki Bari",
                        "Visit Jagdish Temple",
                        "Shopping at Hathi Pol"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Lake-facing Hotel in Udaipur"
                },
                {
                    day: 7,
                    title: "Departure",
                    activities: [
                        "Breakfast at hotel",
                        "Transfer to Udaipur Airport",
                        "Tour ends"
                    ],
                    meals: "Breakfast",
                    accommodation: "N/A"
                }
            ]
        },
        goa: {
            id: "goa",
            name: "Goa Beach Escape",
            location: "Goa, India",
            duration: "4 Days / 3 Nights",
            groupSize: "2-10 People",
            bestTime: "Nov - Feb",
            image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
            highlights: ["Beaches", "Water Sports", "Old Goa Churches", "Nightlife", "Cruise"],
            overview: "Unwind on the beautiful beaches of Goa, explore Portuguese heritage, and experience the vibrant nightlife. Perfect for a quick beach getaway.",
            inclusions: [
                "3 Nights at beach resort",
                "Daily breakfast",
                "Airport transfers",
                "North Goa sightseeing",
                "Sunset cruise with dinner"
            ],
            exclusions: [
                "Flights",
                "Lunch and dinner (except cruise)",
                "Water sports",
                "Personal expenses"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Goa",
                    activities: [
                        "Arrive at Goa Airport",
                        "Transfer to beach resort",
                        "Relax at the beach",
                        "Evening at leisure"
                    ],
                    meals: "None",
                    accommodation: "Beach Resort"
                },
                {
                    day: 2,
                    title: "North Goa Tour",
                    activities: [
                        "Breakfast at resort",
                        "Visit Fort Aguada",
                        "Explore Calangute and Baga Beach",
                        "Water sports (optional)",
                        "Evening sunset cruise with dinner"
                    ],
                    meals: "Breakfast, Dinner (Cruise)",
                    accommodation: "Beach Resort"
                },
                {
                    day: 3,
                    title: "Old Goa & South Goa",
                    activities: [
                        "Visit Basilica of Bom Jesus",
                        "Explore Se Cathedral",
                        "Visit Mangueshi Temple",
                        "Relax at Colva Beach",
                        "Evening at leisure"
                    ],
                    meals: "Breakfast",
                    accommodation: "Beach Resort"
                },
                {
                    day: 4,
                    title: "Departure",
                    activities: [
                        "Breakfast at resort",
                        "Transfer to airport",
                        "Tour ends"
                    ],
                    meals: "Breakfast",
                    accommodation: "N/A"
                }
            ]
        },
        ladakh: {
            id: "ladakh",
            name: "Ladakh Adventure",
            location: "Ladakh, India",
            duration: "7 Days / 6 Nights",
            groupSize: "4-15 People",
            bestTime: "Jun - Sep",
            image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
            highlights: ["Leh Palace", "Pangong Lake", "Nubra Valley", "Khardung La", "Monasteries"],
            overview: "Experience the raw beauty of Ladakh with its high-altitude lakes, ancient monasteries, and dramatic landscapes. A perfect adventure for nature lovers.",
            inclusions: [
                "6 Nights accommodation",
                "All meals (Breakfast, Lunch, Dinner)",
                "Innova/Tempo Traveller",
                "Inner line permits",
                "Oxygen cylinder in vehicle"
            ],
            exclusions: [
                "Flights to Leh",
                "Personal expenses",
                "Medical expenses",
                "Bike rentals"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Leh",
                    activities: [
                        "Arrive at Leh Airport",
                        "Transfer to hotel",
                        "Complete rest for acclimatization",
                        "Light walk in evening (optional)"
                    ],
                    meals: "Lunch, Dinner",
                    accommodation: "Hotel in Leh"
                },
                {
                    day: 2,
                    title: "Leh Local Sightseeing",
                    activities: [
                        "Visit Leh Palace",
                        "Explore Shanti Stupa",
                        "Visit Magnetic Hill",
                        "Sangam point (confluence of rivers)"
                    ],
                    meals: "Breakfast, Lunch, Dinner",
                    accommodation: "Hotel in Leh"
                },
                {
                    day: 3,
                    title: "Leh - Nubra Valley",
                    activities: [
                        "Drive to Nubra via Khardung La",
                        "Visit Diskit Monastery",
                        "Double hump camel ride at Hunder",
                        "Overnight at Nubra"
                    ],
                    meals: "Breakfast, Lunch, Dinner",
                    accommodation: "Camp/Hotel in Nubra"
                },
                {
                    day: 4,
                    title: "Nubra - Pangong Lake",
                    activities: [
                        "Drive to Pangong Lake via Shyok",
                        "Enjoy the stunning blue waters",
                        "Photography at 3 Idiots spot",
                        "Overnight at Pangong"
                    ],
                    meals: "Breakfast, Lunch, Dinner",
                    accommodation: "Camp at Pangong"
                },
                {
                    day: 5,
                    title: "Pangong - Leh",
                    activities: [
                        "Sunrise at Pangong Lake",
                        "Drive back to Leh via Chang La",
                        "Visit Hemis Monastery",
                        "Evening at leisure"
                    ],
                    meals: "Breakfast, Lunch, Dinner",
                    accommodation: "Hotel in Leh"
                },
                {
                    day: 6,
                    title: "Leh Monasteries Tour",
                    activities: [
                        "Visit Thiksey Monastery",
                        "Explore Shey Palace",
                        "Visit Rancho's School (3 Idiots)",
                        "Shopping at Leh Market"
                    ],
                    meals: "Breakfast, Lunch, Dinner",
                    accommodation: "Hotel in Leh"
                },
                {
                    day: 7,
                    title: "Departure",
                    activities: [
                        "Breakfast at hotel",
                        "Transfer to airport",
                        "Tour ends"
                    ],
                    meals: "Breakfast",
                    accommodation: "N/A"
                }
            ]
        },
        andaman: {
            id: "andaman",
            name: "Andaman Islands",
            location: "Andaman & Nicobar, India",
            duration: "5 Days / 4 Nights",
            groupSize: "2-15 People",
            bestTime: "Oct - May",
            image: "https://images.unsplash.com/photo-1586508577428-120d6b072945?w=800",
            highlights: ["Port Blair", "Havelock Island", "Radhanagar Beach", "Cellular Jail", "Scuba Diving"],
            overview: "Discover the pristine beaches and crystal-clear waters of the Andaman Islands. Perfect for beach lovers and water sports enthusiasts.",
            inclusions: [
                "4 Nights accommodation",
                "Daily breakfast",
                "Ferry tickets (Port Blair-Havelock-Port Blair)",
                "All transfers",
                "Sightseeing as per itinerary"
            ],
            exclusions: [
                "Flights to Port Blair",
                "Water sports activities",
                "Lunch and dinner",
                "Personal expenses"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Port Blair",
                    activities: [
                        "Arrive at Port Blair Airport",
                        "Visit Cellular Jail",
                        "Light and Sound Show at Cellular Jail",
                        "Overnight at Port Blair"
                    ],
                    meals: "None",
                    accommodation: "Hotel in Port Blair"
                },
                {
                    day: 2,
                    title: "Port Blair - Havelock Island",
                    activities: [
                        "Ferry to Havelock Island",
                        "Check-in at beach resort",
                        "Visit Radhanagar Beach (Asia's best beach)",
                        "Sunset at the beach"
                    ],
                    meals: "Breakfast",
                    accommodation: "Beach Resort in Havelock"
                },
                {
                    day: 3,
                    title: "Havelock - Water Activities",
                    activities: [
                        "Scuba diving/Snorkeling at Elephant Beach",
                        "Glass bottom boat ride",
                        "Relax at Kalapathar Beach",
                        "Evening at leisure"
                    ],
                    meals: "Breakfast",
                    accommodation: "Beach Resort in Havelock"
                },
                {
                    day: 4,
                    title: "Havelock - Port Blair",
                    activities: [
                        "Morning at leisure",
                        "Ferry back to Port Blair",
                        "Visit Samudrika Marine Museum",
                        "Shopping at Aberdeen Bazaar"
                    ],
                    meals: "Breakfast",
                    accommodation: "Hotel in Port Blair"
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
            ]
        }
    },

    // ========================================
    // INTERNATIONAL DESTINATIONS
    // ========================================
    international: {
        dubai: {
            id: "dubai",
            name: "Dubai Dazzle",
            location: "Dubai, UAE",
            duration: "5 Days / 4 Nights",
            groupSize: "2-20 People",
            bestTime: "Nov - Mar",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
            highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Palm Jumeirah", "Dhow Cruise"],
            overview: "Experience the glamour of Dubai - from the world's tallest building to thrilling desert adventures. This tour showcases the best of modern Arabian luxury.",
            inclusions: [
                "4 Nights at 4-star hotel",
                "Daily breakfast",
                "Airport transfers",
                "Half-day city tour",
                "Desert safari with BBQ dinner",
                "Dhow cruise dinner",
                "Visa assistance"
            ],
            exclusions: [
                "Flight tickets",
                "Visa fees",
                "Burj Khalifa tickets",
                "Lunch",
                "Travel insurance"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Dubai",
                    activities: [
                        "Arrive at Dubai International Airport",
                        "Meet and greet, transfer to hotel",
                        "Evening at leisure",
                        "Explore nearby areas"
                    ],
                    meals: "None",
                    accommodation: "4-star Hotel"
                },
                {
                    day: 2,
                    title: "Dubai City Tour",
                    activities: [
                        "Breakfast at hotel",
                        "Half-day city tour",
                        "Visit Dubai Museum, Gold Souk, Spice Souk",
                        "Photo stop at Burj Al Arab",
                        "Evening Desert Safari with BBQ dinner"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "4-star Hotel"
                },
                {
                    day: 3,
                    title: "Dubai Mall & Burj Khalifa",
                    activities: [
                        "Breakfast at hotel",
                        "Visit Dubai Mall",
                        "Dubai Aquarium and Underwater Zoo",
                        "Burj Khalifa observation deck (optional)",
                        "Dubai Fountain show"
                    ],
                    meals: "Breakfast",
                    accommodation: "4-star Hotel"
                },
                {
                    day: 4,
                    title: "Palm Jumeirah & Dhow Cruise",
                    activities: [
                        "Breakfast at hotel",
                        "Visit Atlantis The Palm",
                        "Explore Palm Jumeirah",
                        "Evening Dhow Cruise with dinner"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "4-star Hotel"
                },
                {
                    day: 5,
                    title: "Departure",
                    activities: [
                        "Breakfast at hotel",
                        "Check-out and transfer to airport",
                        "Tour ends"
                    ],
                    meals: "Breakfast",
                    accommodation: "N/A"
                }
            ]
        },
        thailand: {
            id: "thailand",
            name: "Thailand Treasures",
            location: "Bangkok & Pattaya, Thailand",
            duration: "6 Days / 5 Nights",
            groupSize: "2-20 People",
            bestTime: "Nov - Feb",
            image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800",
            highlights: ["Grand Palace", "Pattaya Beach", "Coral Island", "Safari World", "Alcazar Show"],
            overview: "Explore the vibrant culture of Thailand from the temples of Bangkok to the beaches of Pattaya. A perfect mix of culture, adventure, and relaxation.",
            inclusions: [
                "5 Nights accommodation",
                "Daily breakfast",
                "Airport transfers",
                "Bangkok city tour",
                "Coral Island tour with lunch",
                "Safari World with Marine Park",
                "Alcazar Show",
                "Visa on arrival assistance"
            ],
            exclusions: [
                "Flight tickets",
                "Visa on arrival fees",
                "Lunch and dinner (except Coral Island)",
                "Travel insurance"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Bangkok",
                    activities: [
                        "Arrive at Bangkok Airport",
                        "Transfer to Pattaya (2 hours)",
                        "Check-in at hotel",
                        "Evening at leisure"
                    ],
                    meals: "None",
                    accommodation: "Hotel in Pattaya"
                },
                {
                    day: 2,
                    title: "Coral Island Tour",
                    activities: [
                        "Breakfast at hotel",
                        "Full day Coral Island tour",
                        "Speedboat ride",
                        "Water activities - parasailing, banana boat",
                        "Seafood lunch on island",
                        "Evening Alcazar Show"
                    ],
                    meals: "Breakfast, Lunch",
                    accommodation: "Hotel in Pattaya"
                },
                {
                    day: 3,
                    title: "Pattaya City Tour",
                    activities: [
                        "Breakfast at hotel",
                        "Visit Nong Nooch Garden",
                        "Gems Gallery",
                        "Explore Walking Street",
                        "Evening at leisure"
                    ],
                    meals: "Breakfast",
                    accommodation: "Hotel in Pattaya"
                },
                {
                    day: 4,
                    title: "Pattaya - Bangkok",
                    activities: [
                        "Breakfast and check-out",
                        "Drive to Bangkok",
                        "Safari World with Marine Park",
                        "Check-in at Bangkok hotel",
                        "Evening at leisure"
                    ],
                    meals: "Breakfast",
                    accommodation: "Hotel in Bangkok"
                },
                {
                    day: 5,
                    title: "Bangkok City Tour",
                    activities: [
                        "Breakfast at hotel",
                        "Visit Grand Palace",
                        "Explore Wat Pho (Reclining Buddha)",
                        "Visit Wat Arun",
                        "Shopping at MBK and Platinum Mall"
                    ],
                    meals: "Breakfast",
                    accommodation: "Hotel in Bangkok"
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
            ]
        },
        singapore: {
            id: "singapore",
            name: "Singapore Sensation",
            location: "Singapore",
            duration: "5 Days / 4 Nights",
            groupSize: "2-15 People",
            bestTime: "Year Round",
            image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
            highlights: ["Marina Bay", "Sentosa Island", "Universal Studios", "Gardens by the Bay", "Night Safari"],
            overview: "Discover the garden city of Singapore with its stunning skyline, world-class attractions, and delicious cuisine. Perfect for families and couples alike.",
            inclusions: [
                "4 Nights at 4-star hotel",
                "Daily breakfast",
                "Airport transfers",
                "City tour with Merlion",
                "Sentosa Island tour",
                "Gardens by the Bay",
                "Night Safari",
                "Visa assistance"
            ],
            exclusions: [
                "Flight tickets",
                "Universal Studios tickets",
                "Lunch and dinner",
                "Travel insurance"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Singapore",
                    activities: [
                        "Arrive at Changi Airport",
                        "Transfer to hotel",
                        "Evening visit to Marina Bay Sands",
                        "Light and Water Show"
                    ],
                    meals: "None",
                    accommodation: "4-star Hotel"
                },
                {
                    day: 2,
                    title: "Singapore City Tour",
                    activities: [
                        "Breakfast at hotel",
                        "Half-day city tour",
                        "Visit Merlion Park",
                        "Explore Chinatown and Little India",
                        "Evening at Gardens by the Bay"
                    ],
                    meals: "Breakfast",
                    accommodation: "4-star Hotel"
                },
                {
                    day: 3,
                    title: "Sentosa Island",
                    activities: [
                        "Breakfast at hotel",
                        "Full day at Sentosa Island",
                        "Cable car ride",
                        "S.E.A. Aquarium",
                        "Wings of Time show"
                    ],
                    meals: "Breakfast",
                    accommodation: "4-star Hotel"
                },
                {
                    day: 4,
                    title: "Universal Studios / Night Safari",
                    activities: [
                        "Breakfast at hotel",
                        "Full day at Universal Studios (optional)",
                        "Or shopping at Orchard Road",
                        "Evening Night Safari"
                    ],
                    meals: "Breakfast",
                    accommodation: "4-star Hotel"
                },
                {
                    day: 5,
                    title: "Departure",
                    activities: [
                        "Breakfast at hotel",
                        "Free time for shopping",
                        "Transfer to Changi Airport",
                        "Tour ends"
                    ],
                    meals: "Breakfast",
                    accommodation: "N/A"
                }
            ]
        },
        bali: {
            id: "bali",
            name: "Bali Bliss",
            location: "Bali, Indonesia",
            duration: "6 Days / 5 Nights",
            groupSize: "2-12 People",
            bestTime: "Apr - Oct",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
            highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Kuta Beach", "Water Sports", "Balinese Spa"],
            overview: "Experience the magical island of Bali with its stunning temples, lush rice terraces, and beautiful beaches. A perfect tropical paradise getaway.",
            inclusions: [
                "5 Nights at 4-star resort",
                "Daily breakfast",
                "Airport transfers",
                "Full day Ubud tour",
                "Tanah Lot sunset tour",
                "Water sports at Tanjung Benoa",
                "Balinese spa treatment",
                "Visa on arrival assistance"
            ],
            exclusions: [
                "Flight tickets",
                "Lunch and dinner",
                "Personal expenses",
                "Travel insurance"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Bali",
                    activities: [
                        "Arrive at Ngurah Rai Airport",
                        "Transfer to hotel in Kuta/Seminyak",
                        "Evening at leisure",
                        "Explore Kuta Beach"
                    ],
                    meals: "None",
                    accommodation: "4-star Resort"
                },
                {
                    day: 2,
                    title: "Ubud Tour",
                    activities: [
                        "Breakfast at hotel",
                        "Visit Tegallalang Rice Terraces",
                        "Explore Ubud Monkey Forest",
                        "Visit Ubud Art Market",
                        "Explore Ubud Palace"
                    ],
                    meals: "Breakfast",
                    accommodation: "4-star Resort"
                },
                {
                    day: 3,
                    title: "Water Sports & Uluwatu",
                    activities: [
                        "Breakfast at hotel",
                        "Water sports at Tanjung Benoa",
                        "Parasailing, banana boat, jet ski",
                        "Evening Uluwatu Temple visit",
                        "Kecak Fire Dance performance"
                    ],
                    meals: "Breakfast",
                    accommodation: "4-star Resort"
                },
                {
                    day: 4,
                    title: "Tanah Lot Sunset Tour",
                    activities: [
                        "Breakfast at hotel",
                        "Visit Taman Ayun Temple",
                        "Coffee plantation visit",
                        "Sunset at Tanah Lot Temple",
                        "Evening at leisure"
                    ],
                    meals: "Breakfast",
                    accommodation: "4-star Resort"
                },
                {
                    day: 5,
                    title: "Spa Day & Shopping",
                    activities: [
                        "Breakfast at hotel",
                        "Traditional Balinese spa treatment",
                        "Shopping at Seminyak",
                        "Sunset at beach club"
                    ],
                    meals: "Breakfast",
                    accommodation: "4-star Resort"
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
            ]
        },
        maldives: {
            id: "maldives",
            name: "Maldives Paradise",
            location: "Maldives",
            duration: "4 Days / 3 Nights",
            groupSize: "2-6 People",
            bestTime: "Nov - Apr",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
            highlights: ["Water Villa", "Snorkeling", "Sunset Cruise", "Spa", "Underwater Dining"],
            overview: "Escape to the pristine islands of Maldives for the ultimate luxury beach experience. Crystal clear waters, overwater villas, and world-class service await.",
            inclusions: [
                "3 Nights in Water Villa",
                "All meals (Full Board)",
                "Speedboat transfers",
                "Snorkeling equipment",
                "Sunset cruise",
                "Complimentary spa session"
            ],
            exclusions: [
                "Flight tickets",
                "Visa (if required)",
                "Premium alcohol",
                "Water sports",
                "Travel insurance"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Maldives",
                    activities: [
                        "Arrive at Male Airport",
                        "Speedboat transfer to resort",
                        "Check-in to Water Villa",
                        "Welcome drink and resort orientation",
                        "Evening at leisure"
                    ],
                    meals: "Lunch, Dinner",
                    accommodation: "Water Villa"
                },
                {
                    day: 2,
                    title: "Snorkeling & Sunset Cruise",
                    activities: [
                        "Breakfast at villa",
                        "Snorkeling at house reef",
                        "Relax at beach or pool",
                        "Sunset dolphin cruise",
                        "Dinner at overwater restaurant"
                    ],
                    meals: "Breakfast, Lunch, Dinner",
                    accommodation: "Water Villa"
                },
                {
                    day: 3,
                    title: "Spa & Island Exploration",
                    activities: [
                        "Breakfast at villa",
                        "Complimentary spa treatment",
                        "Island hopping excursion",
                        "Water sports activities",
                        "Romantic beach dinner"
                    ],
                    meals: "Breakfast, Lunch, Dinner",
                    accommodation: "Water Villa"
                },
                {
                    day: 4,
                    title: "Departure",
                    activities: [
                        "Breakfast at villa",
                        "Free time until check-out",
                        "Speedboat transfer to airport",
                        "Tour ends"
                    ],
                    meals: "Breakfast",
                    accommodation: "N/A"
                }
            ]
        },
        europe: {
            id: "europe",
            name: "Europe Highlights",
            location: "France, Switzerland, Italy",
            duration: "10 Days / 9 Nights",
            groupSize: "10-25 People",
            bestTime: "Apr - Oct",
            image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800",
            highlights: ["Paris", "Swiss Alps", "Rome", "Venice", "Eiffel Tower", "Colosseum"],
            overview: "Experience the best of Europe covering three iconic countries. From the romance of Paris to the Alps of Switzerland and the history of Italy.",
            inclusions: [
                "9 Nights at 3-4 star hotels",
                "Daily breakfast and dinner",
                "AC coach throughout",
                "English speaking guide",
                "All sightseeing entries",
                "Schengen visa assistance"
            ],
            exclusions: [
                "Flight tickets",
                "Schengen visa fees",
                "Lunch",
                "Travel insurance",
                "Tips to guide"
            ],
            itinerary: [
                {
                    day: 1,
                    title: "Arrival in Paris",
                    activities: [
                        "Arrive at Paris Airport",
                        "Transfer to hotel",
                        "Evening Seine River cruise",
                        "Dinner and overnight"
                    ],
                    meals: "Dinner",
                    accommodation: "Hotel in Paris"
                },
                {
                    day: 2,
                    title: "Paris City Tour",
                    activities: [
                        "Breakfast at hotel",
                        "Visit Eiffel Tower (2nd level)",
                        "Explore Champs-Élysées",
                        "Photo stop at Arc de Triomphe",
                        "Visit Louvre Museum"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Paris"
                },
                {
                    day: 3,
                    title: "Paris - Switzerland",
                    activities: [
                        "Breakfast and check-out",
                        "TGV train to Switzerland",
                        "Arrive in Zurich/Lucerne",
                        "Evening walk in old town"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Switzerland"
                },
                {
                    day: 4,
                    title: "Mount Titlis Excursion",
                    activities: [
                        "Breakfast at hotel",
                        "Full day Mount Titlis excursion",
                        "Rotair cable car",
                        "Ice Flyer chairlift",
                        "Glacier cave experience"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Switzerland"
                },
                {
                    day: 5,
                    title: "Interlaken",
                    activities: [
                        "Breakfast at hotel",
                        "Drive to Interlaken",
                        "Adventure activities (optional)",
                        "Shopping and leisure",
                        "Evening in Interlaken"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Interlaken"
                },
                {
                    day: 6,
                    title: "Switzerland - Italy",
                    activities: [
                        "Breakfast and check-out",
                        "Scenic drive to Italy",
                        "Arrive in Venice",
                        "Evening gondola ride"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel near Venice"
                },
                {
                    day: 7,
                    title: "Venice Sightseeing",
                    activities: [
                        "Breakfast at hotel",
                        "Full day Venice tour",
                        "Visit St. Mark's Square",
                        "Explore Doge's Palace",
                        "Glass blowing demonstration"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel near Venice"
                },
                {
                    day: 8,
                    title: "Venice - Florence - Rome",
                    activities: [
                        "Breakfast and check-out",
                        "Drive to Florence",
                        "Photo stop at Piazzale Michelangelo",
                        "Continue to Rome",
                        "Evening at leisure"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Rome"
                },
                {
                    day: 9,
                    title: "Rome City Tour & Vatican",
                    activities: [
                        "Breakfast at hotel",
                        "Visit Vatican City",
                        "Sistine Chapel and St. Peter's Basilica",
                        "Explore Colosseum",
                        "Visit Trevi Fountain"
                    ],
                    meals: "Breakfast, Dinner",
                    accommodation: "Hotel in Rome"
                },
                {
                    day: 10,
                    title: "Departure",
                    activities: [
                        "Breakfast at hotel",
                        "Transfer to Rome Airport",
                        "Tour ends"
                    ],
                    meals: "Breakfast",
                    accommodation: "N/A"
                }
            ]
        }
    }
};

// ========================================
// VISA SERVICES DATA
// ========================================
const VISA_SERVICES = [
    {
        country: "USA",
        flag: "🇺🇸",
        type: "Tourist Visa (B1/B2)",
        processingTime: "3-5 weeks",
        validity: "10 Years",
        documents: ["Passport", "DS-160 form", "Photo", "Bank statements", "ITR", "Employment letter"]
    },
    {
        country: "UK",
        flag: "🇬🇧",
        type: "Standard Visitor Visa",
        processingTime: "15 working days",
        validity: "6 Months - 10 Years",
        documents: ["Passport", "Photo", "Bank statements", "ITR", "Travel itinerary", "Accommodation proof"]
    },
    {
        country: "Schengen",
        flag: "🇪🇺",
        type: "Tourist Visa",
        processingTime: "15 working days",
        validity: "90 days",
        documents: ["Passport", "Photo", "Travel insurance", "Bank statements", "Flight booking", "Hotel booking"]
    },
    {
        country: "Australia",
        flag: "🇦🇺",
        type: "Visitor Visa (600)",
        processingTime: "20-30 days",
        validity: "3-12 Months",
        documents: ["Passport", "Photo", "Bank statements", "Employment proof", "Travel insurance"]
    },
    {
        country: "Canada",
        flag: "🇨🇦",
        type: "Temporary Resident Visa",
        processingTime: "3-4 weeks",
        validity: "Up to 10 Years",
        documents: ["Passport", "Photo", "Bank statements", "ITR", "Travel history", "Employment letter"]
    },
    {
        country: "Singapore",
        flag: "🇸🇬",
        type: "Tourist Visa",
        processingTime: "3-5 working days",
        validity: "30 days",
        documents: ["Passport", "Photo", "Bank statements", "Flight tickets", "Hotel booking"]
    },
    {
        country: "UAE",
        flag: "🇦🇪",
        type: "Tourist Visa",
        processingTime: "3-4 working days",
        validity: "30-90 days",
        documents: ["Passport", "Photo", "Bank statements", "Flight tickets", "Confirmed hotel"]
    },
    {
        country: "Thailand",
        flag: "🇹🇭",
        type: "Tourist Visa / VOA",
        processingTime: "3-5 working days",
        validity: "60 days",
        documents: ["Passport", "Photo", "Bank statements", "Flight tickets", "Hotel booking"]
    },
    {
        country: "Malaysia",
        flag: "🇲🇾",
        type: "eVisa / eNTRI",
        processingTime: "24-48 hours",
        validity: "30 days",
        documents: ["Passport", "Photo", "Flight tickets", "Hotel booking", "Bank statement"]
    },
    {
        country: "Japan",
        flag: "🇯🇵",
        type: "Tourist Visa",
        processingTime: "5-7 working days",
        validity: "90 days",
        documents: ["Passport", "Photo", "Bank statements", "ITR", "Travel itinerary", "Guarantee letter"]
    },
    {
        country: "New Zealand",
        flag: "🇳🇿",
        type: "Visitor Visa",
        processingTime: "20-25 days",
        validity: "9 Months",
        documents: ["Passport", "Photo", "Bank statements", "Travel insurance", "Medical certificate"]
    },
    {
        country: "Indonesia",
        flag: "🇮🇩",
        type: "Visa on Arrival",
        processingTime: "On arrival",
        validity: "30 days",
        documents: ["Passport", "Return ticket", "Hotel booking"]
    }
];

// Don't modify below this line
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DESTINATIONS, VISA_SERVICES };
}
