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
    price: "$3,499",
    duration: "7 Days, 6 Nights",
    destinations: "4 Destinations",
    deposit: "$500",
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
