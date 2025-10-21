import { notFound } from "next/navigation"
import { TourHero } from "@/components/tours/tour-hero"
import { TourOverview } from "@/components/tours/tour-overview"
import { TourItinerary } from "@/components/tours/tour-itinerary"
import { TourInclusions } from "@/components/tours/tour-inclusions"
import { TourBookingCTA } from "@/components/tours/tour-booking-cta"

// Sample tour data - in production, this would come from a database or CMS
const tours = {
  "kenya-classic-safari": {
    id: "kenya-classic-safari",
    title: "Kenya Classic Safari Experience",
    year: "2026",
    heroImage: "/kenya-safari-landscape-with-acacia-trees.jpg",
    price: "₦3,950,499",
    duration: "7 Days, 6 Nights",
    destinations: "4 Destinations",
    deposit: "₦1,000,000",
    highlights: [
      { label: "Price", value: "$3,499", sublabel: "Per Person" },
      { label: "Duration", value: "7 Days", sublabel: "6 Nights" },
      { label: "Deposit", value: "$500", sublabel: "To Secure Booking" },
    ],
    whyJoin: {
      title: "WHY JOIN THE Kenya Classic Safari Experience WITH US?",
      description:
        "Experience the magic of Kenya's wildlife and landscapes with expert guides who know every corner of this magnificent country. Our carefully crafted itinerary ensures you witness the Big Five, explore diverse ecosystems, and immerse yourself in local culture.",
      images: ["/mount-kenya-landscape.jpg", "/kenya-wildlife-safari-scene.jpg"],
    },
    overview: {
      title: "KENYA CLASSIC SAFARI EXPERIENCE",
      subtitle: "7 Days, 6 Nights, 4 Destinations",
      description:
        "Embark on an unforgettable journey through Kenya's most iconic wildlife destinations. From the elephant herds of Amboseli against the backdrop of Mount Kilimanjaro to the flamingo-filled shores of Lake Nakuru and the endless plains of the Maasai Mara, this safari offers the complete East African experience.",
      image: "/nairobi-city-skyline.jpg",
    },
    itinerary: [
      {
        location: "Nairobi",
        day: "Day -0",
        title: "Departure from Home City",
        activities: [
          "Depart from your home city",
          "International flight (Duration: 10-12 hours)",
          "Overnight flight to Nairobi",
        ],
        image: "/nairobi-city-view.jpg",
      },
      {
        location: "Amboseli National Park",
        day: "Day -2",
        title: "Arrival & Amboseli National Park",
        activities: [
          "Arrive at Jomo Kenyatta International Airport",
          "Meet and greet with safari guide",
          "Drive to Amboseli National Park (4 hours)",
          "Afternoon game drive",
          "Dinner and overnight at lodge",
        ],
        image: "/amboseli-elephants-with-kilimanjaro.jpg",
      },
      {
        location: "Amboseli National Park",
        day: "Day -3",
        title: "Full Day Amboseli",
        activities: [
          "Early morning game drive",
          "Breakfast at the lodge",
          "Visit to Maasai village",
          "Afternoon game drive with views of Mt. Kilimanjaro",
          "Sundowner experience",
        ],
        image: "/maasai-village-kenya.jpg",
      },
      {
        location: "Lake Nakuru National Park",
        day: "Day -4",
        title: "Lake Nakuru National Park",
        activities: [
          "Early breakfast and checkout",
          "Drive to Lake Nakuru (5-6 hours)",
          "Lunch en route",
          "Afternoon game drive around the lake",
          "Spot flamingos, rhinos, and diverse birdlife",
        ],
        image: "/lake-nakuru-flamingos.jpg",
      },
      {
        location: "Maasai Mara National Reserve",
        day: "Day -6",
        title: "Maasai Mara - The Jewel of Kenya",
        activities: [
          "Morning departure to Maasai Mara",
          "Scenic drive through the Great Rift Valley",
          "Arrive at camp for lunch",
          "Evening game drive in the reserve",
          "Witness the incredible wildlife density",
        ],
        image: "/maasai-mara-wildlife.jpg",
      },
      {
        location: "Maasai Mara National Reserve",
        day: "Day -7",
        title: "Full Day Maasai Mara",
        activities: [
          "Full day game drives with picnic lunch",
          "Search for the Big Five",
          "Optional hot air balloon safari (additional cost)",
          "Visit to Mara River (migration season)",
          "Sunset game drive",
        ],
        image: "/maasai-mara-big-five.jpg",
      },
      {
        location: "Maasai Mara National Reserve",
        day: "Day -8",
        title: "Departure",
        activities: [
          "Early morning game drive",
          "Return to camp for breakfast",
          "Drive back to Nairobi",
          "Lunch at a local restaurant",
          "Transfer to airport for international flight",
        ],
        image: "/kenya-sunset-safari.jpg",
      },
    ],
    inclusions: {
      included: [
        "All accommodation as specified",
        "All meals during the safari",
        "All park entrance fees",
        "Professional English-speaking driver-guide",
        "4x4 safari vehicle with pop-up roof",
        "Bottled water during game drives",
        "Airport transfers",
        "Government taxes",
      ],
      excluded: [
        "International flights",
        "Visa fees",
        "Travel insurance",
        "Personal expenses",
        "Tips and gratuities",
        "Optional activities",
        "Alcoholic beverages",
      ],
    },
    ctaText:
      "Ready to embark on the safari of a lifetime? The vast plains of Kenya await, teeming with wildlife and natural wonders. From witnessing the Great Migration to tracking the Big Five, every moment promises adventure and discovery. Our expert guides will ensure you experience the very best of Kenya's wilderness while enjoying comfortable accommodations and authentic cultural encounters.",
  },
  "paris-france-escape": {
    id: "paris-france-escape",
    title: "7 Days in Paris, France",
    year: "2026",
    heroImage: "/paris.jpg",
    price: "₦2,450,000",
    duration: "7 Days, 6 Nights",
    destinations: "1 Destination",
    deposit: "₦600,000",
    highlights: [
      { label: "Price", value: "₦2,450,000", sublabel: "Per Person" },
      { label: "Duration", value: "7 Days", sublabel: "6 Nights" },
      { label: "Deposit", value: "₦600,000", sublabel: "To Secure Booking" },
    ],
    whyJoin: {
      title: "WHY VISIT PARIS WITH US?",
      description:
        "Experience the magic of Paris, the world's most romantic city. From the iconic Eiffel Tower to the artistic treasures of the Louvre, charming neighborhoods, and exquisite French cuisine, Paris offers unforgettable memories at every corner.",
      images: ["/paris-louvre-museum.jpg", "/paris-seine-river-cruise.jpg"],
    },
    overview: {
      title: "7 DAYS IN PARIS, FRANCE",
      subtitle: "7 Days, 6 Nights, The City of Light",
      description:
        "Immerse yourself in the elegance and charm of Paris. Visit world-renowned museums, stroll through historic neighborhoods, enjoy authentic French dining, and experience the romance that has captivated travelers for centuries.",
      image: "/paris-arc-de-triomphe.jpg",
    },
    itinerary: [
      {
        location: "Paris",
        day: "Day 1",
        title: "Arrival in Paris",
        activities: [
          "Arrive at Charles de Gaulle Airport",
          "Hotel check-in and rest",
          "Evening stroll along the Seine River",
          "Dinner at a traditional French bistro",
        ],
        image: "/paris-seine-river.jpg",
      },
      {
        location: "Paris",
        day: "Day 2",
        title: "Iconic Paris Landmarks",
        activities: [
          "Visit the Eiffel Tower with skip-the-line access",
          "Lunch at a café with Eiffel Tower views",
          "Explore the Trocadéro Gardens",
          "Evening visit to Arc de Triomphe",
          "Dinner in the Champs-Élysées area",
        ],
        image: "/paris-eiffel-tower-view.jpg",
      },
      {
        location: "Paris",
        day: "Day 3",
        title: "Art & Culture",
        activities: [
          "Guided tour of the Louvre Museum",
          "See the Mona Lisa and Venus de Milo",
          "Lunch in the Latin Quarter",
          "Visit Notre-Dame Cathedral",
          "Explore Sainte-Chapelle",
        ],
        image: "/paris-louvre-interior.jpg",
      },
      {
        location: "Paris",
        day: "Day 4",
        title: "Montmartre & Sacré-Cœur",
        activities: [
          "Visit the Sacré-Cœur Basilica",
          "Explore the artistic neighborhood of Montmartre",
          "Visit the Moulin Rouge",
          "Lunch at a local café",
          "Shopping at local boutiques",
        ],
        image: "/paris-sacre-coeur.jpg",
      },
      {
        location: "Paris",
        day: "Day 5",
        title: "Palace of Versailles",
        activities: [
          "Day trip to the Palace of Versailles",
          "Guided tour of the opulent palace",
          "Explore the magnificent gardens",
          "Visit Marie Antoinette's estate",
          "Return to Paris for dinner",
        ],
        image: "/paris-versailles-palace.jpg",
      },
      {
        location: "Paris",
        day: "Day 6",
        title: "Shopping & Leisure",
        activities: [
          "Shopping on the Champs-Élysées",
          "Visit Galeries Lafayette",
          "Explore the Marais district",
          "Visit local art galleries",
          "Farewell dinner cruise on the Seine",
        ],
        image: "/paris-shopping-district.jpg",
      },
      {
        location: "Paris",
        day: "Day 7",
        title: "Departure",
        activities: [
          "Leisurely breakfast at a café",
          "Last-minute shopping or sightseeing",
          "Hotel checkout",
          "Transfer to airport",
          "Departure flight",
        ],
        image: "/paris-airport.jpg",
      },
    ],
    inclusions: {
      included: [
        "4-star hotel accommodation",
        "Daily breakfast",
        "Guided tours of major attractions",
        "Skip-the-line tickets to Louvre and Eiffel Tower",
        "Day trip to Versailles",
        "Seine River dinner cruise",
        "Airport transfers",
        "Professional English-speaking guide",
      ],
      excluded: [
        "International flights",
        "Travel insurance",
        "Personal expenses",
        "Meals not specified",
        "Tips and gratuities",
        "Optional activities",
      ],
    },
    ctaText:
      "Fall in love with Paris on this enchanting 7-day journey. Walk the streets where artists and writers found inspiration, dine at world-class restaurants, and create memories in the most romantic city on Earth. Our carefully curated itinerary ensures you experience the best of Paris while enjoying comfortable accommodations and expert local guidance.",
  },
  "casablanca-morocco-acn": {
    id: "casablanca-morocco-acn",
    title: "9 Days in Casablanca, Morocco - Africa Cup of Nations 2026",
    year: "2026",
    heroImage: "https://bsnsports.com.ng/public/images/news/2024/Dec/16/6760473fe2f58.png",
    price: "₦3,250,000",
    duration: "9 Days, 8 Nights",
    destinations: "1 Destinations",
    deposit: "₦1,000,000",
    highlights: [
      { label: "Price", value: "₦3,250,000", sublabel: "Per Person" },
      { label: "Duration", value: "9 Days", sublabel: "8 Nights" },
      { label: "Deposit", value: "₦800,000", sublabel: "To Secure Booking" },
    ],
    whyJoin: {
      title: "WHY JOIN THE AFRICA CUP OF NATIONS 2026 IN MOROCCO WITH US?",
      description:
        "Experience the electrifying atmosphere of Africa's premier football tournament while exploring Morocco's rich culture, stunning architecture, and vibrant markets. Combine world-class football action with authentic Moroccan hospitality and unforgettable cultural experiences.",
      images: ["/casablanca-medina-market.jpg", "/morocco-atlas-mountains.jpg"],
    },
    overview: {
      title: "9 DAYS IN CASABLANCA, MOROCCO - AFRICA CUP OF NATIONS 2026",
      subtitle: "9 Days, 8 Nights, 2 Destinations",
      description:
        "Join us for an extraordinary journey to Morocco during the Africa Cup of Nations 2026. Experience thrilling football matches, explore the cosmopolitan city of Casablanca, discover the blue-washed streets of Chefchaouen, and immerse yourself in Moroccan culture, cuisine, and hospitality.",
      image: "/casablanca-city-view.jpg",
    },
    itinerary: [
      {
        location: "Casablanca",
        day: "Day 1",
        title: "Arrival in Casablanca",
        activities: [
          "Arrive at Casablanca Airport",
          "Hotel check-in",
          "Evening exploration of Hassan II Mosque",
          "Welcome dinner with local cuisine",
        ],
        image: "/casablanca-hassan-ii-mosque.jpg",
      },
      {
        location: "Casablanca",
        day: "Day 2",
        title: "Casablanca City Tour",
        activities: [
          "Guided tour of Hassan II Mosque",
          "Visit the Medina (old city)",
          "Explore local markets and souks",
          "Lunch at a traditional Moroccan restaurant",
          "Afternoon at the beach",
        ],
        image: "/casablanca-medina.jpg",
      },
      {
        location: "Casablanca",
        day: "Day 3",
        title: "Africa Cup of Nations Match Day 1",
        activities: [
          "Breakfast and rest",
          "Stadium tour and preparation",
          "Attend Africa Cup of Nations match",
          "Post-match celebration and dinner",
          "Evening entertainment",
        ],
        image: "/casablanca-stadium.jpg",
      },
      {
        location: "Chefchaouen",
        day: "Day 4",
        title: "Journey to Chefchaouen",
        activities: [
          "Drive to the blue city of Chefchaouen (3 hours)",
          "Hotel check-in",
          "Explore the stunning blue-washed medina",
          "Visit local artisan workshops",
          "Dinner with mountain views",
        ],
        image: "/chefchaouen-blue-city.jpg",
      },
      {
        location: "Chefchaouen",
        day: "Day 5",
        title: "Chefchaouen Exploration",
        activities: [
          "Guided tour of the blue medina",
          "Visit Ras El Maa waterfall",
          "Explore local markets and cafés",
          "Photography session in scenic locations",
          "Traditional Moroccan cooking class",
        ],
        image: "/chefchaouen-medina.jpg",
      },
      {
        location: "Casablanca",
        day: "Day 6",
        title: "Return to Casablanca & Match Day 2",
        activities: [
          "Return drive to Casablanca",
          "Lunch en route",
          "Rest and preparation",
          "Attend Africa Cup of Nations match",
          "Evening celebration",
        ],
        image: "/casablanca-evening.jpg",
      },
      {
        location: "Casablanca",
        day: "Day 7",
        title: "Cultural Immersion",
        activities: [
          "Visit the Royal Palace area",
          "Explore Corniche beach",
          "Shopping at local boutiques",
          "Moroccan hammam (spa) experience",
          "Gourmet dinner at a fine dining restaurant",
        ],
        image: "/casablanca-corniche.jpg",
      },
      {
        location: "Casablanca",
        day: "Day 8",
        title: "Final Match & Celebration",
        activities: [
          "Leisurely breakfast",
          "Last-minute shopping",
          "Attend final Africa Cup of Nations match",
          "Celebration dinner with fellow travelers",
          "Evening entertainment",
        ],
        image: "/casablanca-celebration.jpg",
      },
      {
        location: "Casablanca",
        day: "Day 9",
        title: "Departure",
        activities: [
          "Breakfast and hotel checkout",
          "Last visit to Hassan II Mosque",
          "Transfer to airport",
          "Departure flight",
        ],
        image: "/casablanca-airport.jpg",
      },
    ],
    inclusions: {
      included: [
        "4-star hotel accommodation in Casablanca and Chefchaouen",
        "Daily breakfast and selected meals",
        "Africa Cup of Nations match tickets (2 matches)",
        "Guided city tours",
        "Transportation between cities",
        "Airport transfers",
        "Professional English-speaking guide",
        "Moroccan cooking class",
        "Hammam spa experience",
      ],
      excluded: [
        "International flights",
        "Travel insurance",
        "Personal expenses",
        "Meals not specified",
        "Tips and gratuities",
        "Optional activities",
        "Visa fees",
      ],
    },
    ctaText:
      "Experience the magic of Morocco while witnessing the Africa Cup of Nations 2026! Combine the thrill of world-class football with the enchantment of Moroccan culture, from the cosmopolitan streets of Casablanca to the mystical blue city of Chefchaouen. This is more than a football tournament—it's a journey into the heart of Africa's vibrant spirit and hospitality.",
  },
}

export default function TourDetailsPage({ params }: { params: { slug: string } }) {
  const tour = tours[params.slug as keyof typeof tours]

  if (!tour) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <TourHero title={tour.title} year={tour.year} image={tour.heroImage} highlights={tour.highlights} />
      <TourOverview
        title={tour.overview.title}
        subtitle={tour.overview.subtitle}
        description={tour.overview.description}
        image={tour.overview.image}
        whyJoin={tour.whyJoin}
      />
      <TourItinerary itinerary={tour.itinerary} />
      <TourInclusions inclusions={tour.inclusions} />
      <TourBookingCTA title={tour.title} description={tour.ctaText} image={tour.heroImage} />
    </main>
  )
}
