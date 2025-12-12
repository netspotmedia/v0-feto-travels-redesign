export interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  content: ContentBlock[]
  tags: string[]
}

interface ContentBlock {
  type: "paragraph" | "heading" | "image" | "quote" | "list"
  text?: string
  src?: string
  alt?: string
  items?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "nigeria-travel-destination",
    title: "Why Nigeria Should Be Your Next Travel Destination — Experience Africa Like Never Before",
    excerpt:
      "Are you searching for a destination packed with culture, adventure, food, history, excitement, and warm hospitality? Discover Nigeria — the Heartbeat of Africa.",
    author: "FETO TRAVELS Team",
    date: "January 22, 2026",
    readTime: "12 min read",
    category: "Travel Guides",
    image: "/nigeria-tour.jpg",
    content: [
      {
        type: "paragraph",
        text: "Are you searching for a destination packed with culture, adventure, food, history, excitement, and warm hospitality? A place where every day feels like a festival, every city feels like a new world, and every moment creates unforgettable memories?",
      },
      {
        type: "paragraph",
        text: "Welcome to Nigeria — the Heartbeat of Africa.",
      },
      {
        type: "paragraph",
        text: "From the bustling streets of Lagos to the calm mountains of Obudu, from ancient kingdoms to modern luxury resorts, Nigeria is a country that takes you on a journey of discovery. And at FETO TRAVELS, we are ready to create a world-class tour experience tailored just for you.",
      },
      {
        type: "heading",
        text: "🌍 1. Nigeria Is a Land of Rich Cultural Diversity",
      },
      {
        type: "paragraph",
        text: "Nigeria is home to over 250 ethnic groups, each with its own unique traditions, languages, festivals, and cuisines. Everywhere you go, you experience something new:",
      },
      {
        type: "paragraph",
        text: "The Yoruba kingdoms with their colorful festivals, the Igbo villages full of heritage and craftsmanship, and the Hausa-Fulani traditions of music, art, and hospitality.",
      },
      {
        type: "paragraph",
        text: "Whether you're exploring ancient palaces, visiting traditional markets, or celebrating with locals, Nigeria's culture will captivate you. With FETO TRAVELS, we ensure you dive deep into the cultural experiences that make Nigeria one of the most vibrant countries on Earth.",
      },
      {
        type: "heading",
        text: "🏖️ 2. Breathtaking Nature & Adventure",
      },
      {
        type: "paragraph",
        text: "Nigeria offers some of the most beautiful natural attractions in Africa — perfect for adventurers, nature lovers, and photographers.",
      },
      {
        type: "paragraph",
        text: "Top attractions we can take you to: Obudu Mountain Resort with cable cars, mountain views, and nature trails; Erin-Ijesha Waterfall, one of Nigeria's most spectacular waterfalls; Yankari Game Reserve for wildlife safari, warm springs, and adventure trails; Lekki Conservation Centre featuring the longest canopy walkway in Africa; Kajuru Castle, a medieval-style castle hidden on a hilltop; and Tarkwa Bay & Elegushi Beach with clean, beautiful beaches for water fun.",
      },
      {
        type: "paragraph",
        text: "At FETO TRAVELS, we design nature tours that let you explore the stunning side of Nigeria often missed by first-time travelers.",
      },
      {
        type: "heading",
        text: "🍲 3. Nigerian Food Will Blow You Away",
      },
      {
        type: "paragraph",
        text: "If you love good food, get ready. Nigeria is the home of flavor, spice, and soulful meals.",
      },
      {
        type: "paragraph",
        text: "Must-try dishes include: Jollof Rice (world-famous!), Suya (spicy grilled beef), Pounded yam & Egusi soup, Pepper soup, Akara & Pap, Nkwobi, and Kilishi.",
      },
      {
        type: "paragraph",
        text: "Every region has its own unique dishes, and we can guide you to the best restaurants, street foods, and local spots.",
      },
      {
        type: "heading",
        text: "🎉 4. Festivals That Will Leave You Speechless",
      },
      {
        type: "paragraph",
        text: "If you've never attended a Nigerian festival, prepare for an explosion of colour, music, and culture.",
      },
      {
        type: "paragraph",
        text: "Some iconic festivals include: Calabar Carnival — 'Africa's Biggest Street Party', Osun-Osogbo Festival — deeply spiritual and historic, Argungu Fishing Festival — a thrilling cultural spectacle, and Ofala Festival — celebration of royalty and tradition.",
      },
      {
        type: "paragraph",
        text: "FETO TRAVELS can align your travel dates with major festivals so you don't miss out.",
      },
      {
        type: "heading",
        text: "🏙️ 5. Nigeria Has Some of the Best Cities in Africa",
      },
      {
        type: "paragraph",
        text: "Nigeria is dynamic and full of life. Each major city offers something unique:",
      },
      {
        type: "paragraph",
        text: "Lagos offers nightlife, beaches, shopping, arts, and luxury. Abuja is clean, calm, and beautifully designed. Port Harcourt has great food and entertainment. Ibadan features history and warm hospitality. Benin City showcases ancient bronze works and cultural heritage.",
      },
      {
        type: "paragraph",
        text: "We help you explore each city safely, comfortably, and with the best local guides.",
      },
      {
        type: "heading",
        text: "❤️ 6. Nigerians Are Warm, Welcoming, and Full of Life",
      },
      {
        type: "paragraph",
        text: "One of the best parts of visiting Nigeria is the people. Nigerians love visitors, love celebrating, and love showing off their country. Expect kindness, smiles, music, laughter, and endless 'You are welcome!'",
      },
      {
        type: "heading",
        text: "🧭 Plan Your Nigerian Tour with FETO TRAVELS",
      },
      {
        type: "paragraph",
        text: "At FETO TRAVELS, we don't just book tours — we create unforgettable experiences.",
      },
      {
        type: "paragraph",
        text: "Our services include: Customized Nigeria tour packages, Hotel bookings, Airport pickup, City-to-city transportation, Local tour guides, Food & cultural experience planning, and Group tours, honeymoon tours, business tours, and more.",
      },
      {
        type: "paragraph",
        text: "Wherever you want to visit, we will make it stress-free, enjoyable, and unforgettable.",
      },
      {
        type: "heading",
        text: "📞 CONTACT FETO TRAVELS TODAY",
      },
      {
        type: "paragraph",
        text: "Ready to experience Nigeria? Let's plan your dream vacation. Call/WhatsApp: +234 901 478 6078 or +234 701 105 3895. Email: fetotravels@gmail.com",
      },
      {
        type: "paragraph",
        text: "Your Nigerian adventure starts now. Travel with FETO TRAVELS — Experience Nigeria Like Never Before.",
      },
    ],
    tags: ["Nigeria", "Travel Guides", "Africa", "Cultural Tourism", "Adventure", "Food"],
  },
  {
    id: "study-abroad-nigerians",
    title: "Study Abroad Made Easy for Nigerians — How FETO TRAVELS Helps You Achieve Your Dream",
    excerpt:
      "Studying abroad is one of the best ways to build a successful future. Learn how FETO TRAVELS makes the entire study-abroad journey simple, affordable, stress-free, and achievable.",
    author: "FETO TRAVELS Team",
    date: "January 21, 2026",
    readTime: "15 min read",
    category: "Education",
    image: "/study-abroad.png",
    content: [
      {
        type: "paragraph",
        text: "Studying abroad is one of the best ways to build a successful future. It opens the door to global opportunities, better education, international exposure, and the chance to compete at a world-class level. But for many Nigerians, the process can feel overwhelming — from choosing the right country to finding affordable tuition, securing scholarships, applying for a student visa, and preparing for travel.",
      },
      {
        type: "paragraph",
        text: "That's where FETO TRAVELS comes in. We make the entire study-abroad journey simple, affordable, stress-free, and achievable for every Nigerian student.",
      },
      {
        type: "heading",
        text: "🌍 Why Nigerians Choose to Study Abroad",
      },
      {
        type: "paragraph",
        text: "More Nigerian students are pursuing education overseas because of: Better academic standards, Access to high-paying global careers, Stable learning environments, International exposure, Opportunities for part-time jobs, Post-study work visas in many countries, and Stronger global competitiveness.",
      },
      {
        type: "paragraph",
        text: "But the challenge is NOT the desire — it's the process. And that is exactly what FETO TRAVELS handles for you.",
      },
      {
        type: "heading",
        text: "✨ How FETO TRAVELS Helps Nigerians Study Abroad",
      },
      {
        type: "paragraph",
        text: "We offer a full range of educational support services to help you move from dream to departure.",
      },
      {
        type: "heading",
        text: "💰 1. We Help You Find Schools With Cheap & Affordable Tuition",
      },
      {
        type: "paragraph",
        text: "Many Nigerians believe studying abroad is too expensive — but the truth is, there are several countries with very affordable tuition fees, including: Poland, Cyprus, Hungary, Malaysia, Turkey, UAE, Canada (selected colleges), UK (selected foundation programs), Ireland, and Georgia.",
      },
      {
        type: "paragraph",
        text: "At FETO TRAVELS, we connect you to budget-friendly universities that offer: Low application fees, Low tuition (some below $2,000–$4,000 per year), Flexible payment plans, and No application exams for many programs.",
      },
      {
        type: "paragraph",
        text: "We match schools based on your budget, course, and career goals.",
      },
      {
        type: "heading",
        text: "🎓 2. We Help You Secure Scholarships & Partial Funding",
      },
      {
        type: "paragraph",
        text: "We help you apply for available: Merit-based scholarships, Need-based scholarships, Country-specific funding, Department/Faculty scholarships, International student rewards, Partial tuition waivers.",
      },
      {
        type: "paragraph",
        text: "Our team guides you through documentation, essay support, and scholarship applications to improve your chances.",
      },
      {
        type: "heading",
        text: "🛂 3. Student Visa Assistance — We Make It Easy",
      },
      {
        type: "paragraph",
        text: "Visa denial is one of the biggest fears for Nigerian students — especially for countries like: Canada, UK, USA, Australia, and Schengen countries.",
      },
      {
        type: "paragraph",
        text: "At FETO TRAVELS, our visa team helps you with: Visa document guidance, Proof of funds (how to structure it), Statement of purpose (SOP) support, Embassy interview preparation, Accurate visa form filling, and Pre-visa counseling.",
      },
      {
        type: "paragraph",
        text: "Our goal is to help you submit a strong, clean, correct, and convincing application.",
      },
      {
        type: "heading",
        text: "🏫 4. University Admission Processing",
      },
      {
        type: "paragraph",
        text: "We guide you through: Choosing the right course, Selecting a suitable country, Completing admission forms, Submitting documents, Tracking admission offers, and Accepting your offer and preparing for enrollment.",
      },
      {
        type: "paragraph",
        text: "From undergraduate to postgraduate programs, we help you every step of the way.",
      },
      {
        type: "heading",
        text: "✈️ 5. Travel Planning & Pre-Departure Support",
      },
      {
        type: "paragraph",
        text: "Once your visa is approved, we assist with: Flight booking, Airport pickup arrangements, Accommodation booking, Student orientation, What to pack, and Currency & travel advice.",
      },
      {
        type: "paragraph",
        text: "We make your transition smooth and stress-free.",
      },
      {
        type: "heading",
        text: "🧩 6. Guidance for Part-Time Jobs & Post-Study Opportunities",
      },
      {
        type: "paragraph",
        text: "Many Nigerian students want to know: 'Can I work while studying?', 'Which countries allow post-study work visas?', 'How do I settle abroad after graduation?'",
      },
      {
        type: "paragraph",
        text: "We provide full guidance on: Countries with easy work-study opportunities, Legal job options for students, Post-study work permit (PSW) policies, and Immigration pathways.",
      },
      {
        type: "paragraph",
        text: "We help you make smart decisions that benefit your future.",
      },
      {
        type: "heading",
        text: "🌟 Why Choose FETO TRAVELS?",
      },
      {
        type: "paragraph",
        text: "Here's why hundreds of Nigerians trust us: Fast & reliable admission processing, Affordable schools that match your budget, Professional visa support, Scholarship guidance, 100% transparency, Dedicated student advisors, and WhatsApp support for questions anytime.",
      },
      {
        type: "paragraph",
        text: "We don't just process papers — we guide your entire journey to becoming an international student.",
      },
      {
        type: "heading",
        text: "📞 Ready to Study Abroad? Contact FETO TRAVELS Today",
      },
      {
        type: "paragraph",
        text: "Let's turn your study-abroad dream into reality. Call/WhatsApp: +234 901 478 6078 or +234 701 105 3895. Email: fetotravels@gmail.com",
      },
      {
        type: "paragraph",
        text: "Your education. Your future. Let FETO TRAVELS lead you there.",
      },
    ],
    tags: ["Study Abroad", "Education", "Student Visa", "Scholarships", "Nigeria", "International Education"],
  },
  {
    id: "verify-dummy-ticket-visa-guide",
    title: "Why You Need a Verifiable Dummy Ticket for Your Visa Application — Not an Actual Flight Ticket",
    excerpt:
      "Learn why a verifiable dummy ticket is safer, cheaper, and more widely accepted than purchasing an actual flight ticket before visa approval.",
    author: "FETO TRAVELS Team",
    date: "January 20, 2026",
    readTime: "10 min read",
    category: "Visa Guidance",
    image: "/verify-dummy-tickets.jpg",
    content: [
      {
        type: "paragraph",
        text: "When applying for a visa, many embassies ask for proof of travel, flight itinerary, or onward/return flight reservation. This often confuses travelers: Should you buy a real flight ticket, or is a verifiable dummy ticket good enough?",
      },
      {
        type: "paragraph",
        text: "The truth is: A verifiable dummy ticket is safer, cheaper, and more widely accepted than purchasing an actual flight ticket before visa approval.",
      },
      {
        type: "heading",
        text: "🌍 What Is a Verifiable Dummy Ticket?",
      },
      {
        type: "paragraph",
        text: "A dummy ticket is a temporary, hold-only flight reservation with: A real airline, A real flight itinerary, A valid, verifiable PNR number, A booking that can be checked on airline websites. But it is not paid, meaning it will automatically cancel after a short period if unused.",
      },
      {
        type: "paragraph",
        text: "It looks exactly like a real ticket — and embassies accept it as proof of flight intention.",
      },
      {
        type: "heading",
        text: "🛂 Why Embassies Ask for a Flight Reservation",
      },
      {
        type: "paragraph",
        text: "Visa officers want to confirm: You intend to travel on specific dates, You plan to return to your home country, Your travel plans match the purpose of your trip, You're not likely to overstay.",
      },
      {
        type: "paragraph",
        text: "However, they do NOT require you to purchase a full flight ticket before visa approval. In fact, many embassies discourage it.",
      },
      {
        type: "heading",
        text: "❌ Why You Should NOT Buy an Actual Ticket Before Visa Approval",
      },
      {
        type: "paragraph",
        text: "Buying a real flight ticket before your visa is approved can be financially risky, time-consuming, and inflexible.",
      },
      {
        type: "paragraph",
        text: "1. Financially Risky: Airline tickets can be very expensive. If your visa is denied, you may lose the entire ticket cost, cancellation penalties, and non-refundable airline taxes. Refundable tickets are often 2x to 5x more expensive than regular fares.",
      },
      {
        type: "paragraph",
        text: "2. Visa Processing May Take Longer Than Expected: Your visa might take 2 weeks, 4 weeks, or even 3 months. Your real ticket may expire, forcing you to change or cancel it — often at a LOSS. Dummy tickets stay valid just long enough for submission.",
      },
      {
        type: "paragraph",
        text: "3. Travel Dates May Change Based on Embassy Decision: You may need to adjust your travel dates depending on visa interview availability, your approval timeline, or new embassy requirements. Changing a real ticket can cost a lot of money, while dummy tickets are flexible.",
      },
      {
        type: "paragraph",
        text: "4. Some Embassies Warn Travelers NOT to Buy Real Tickets Early: For example, Schengen embassies, UK Visa & Immigration, Canada Immigration, and US Embassies clearly state in guidelines: 'Do not book or purchase ACTUAL flight tickets before your visa is approved.' They only require a verifiable flight reservation, not a paid ticket.",
      },
      {
        type: "heading",
        text: "✔️ Why a Verifiable Dummy Ticket Is the Best Option",
      },
      {
        type: "paragraph",
        text: "1. Cost-Effective: Dummy tickets cost a small fee — usually $10 to $30, depending on the provider — instead of paying hundreds of dollars for a real ticket.",
      },
      {
        type: "paragraph",
        text: "2. Fully Verifiable With PNR: A reliable dummy ticket gives you a real PNR code, which can be checked on airline websites and GDS systems like Amadeus, Sabre, or Galileo. Visa officers can confirm it instantly.",
      },
      {
        type: "paragraph",
        text: "3. Flexible & Easy to Update: If the embassy asks you to change your travel dates, a dummy ticket can be updated, edited, cancelled, or reissued — often within minutes. This flexibility saves you money and stress.",
      },
      {
        type: "paragraph",
        text: "4. Accepted Worldwide: Dummy tickets are widely accepted for visa applications for Schengen countries, USA, Canada, UK, Australia, New Zealand, Asia, Middle East, Africa, and South & Central America. They meet embassy requirements for 'proof of travel.'",
      },
      {
        type: "paragraph",
        text: "5. Looks Identical to a Real Ticket: A proper dummy ticket includes passenger name, airline name, flight numbers, departure and arrival airports, date and time, PNR code, and booking confirmation design. It satisfies all embassy checklist requirements.",
      },
      {
        type: "heading",
        text: "📌 What Happens If You Use a Fake or Non-Verifiable Ticket?",
      },
      {
        type: "paragraph",
        text: "Not all 'dummy tickets' online are real or verifiable. Using a fake or non-verifiable itinerary can lead to: Visa refusal, Embassy flagging your application, Longer processing times, Permanent damage to your travel profile.",
      },
      {
        type: "paragraph",
        text: "Always use a trusted provider that issues real airline reservations.",
      },
      {
        type: "heading",
        text: "🧭 When Should You Use a Dummy Ticket?",
      },
      {
        type: "paragraph",
        text: "A verifiable dummy ticket is perfect for: Tourist Visa, Business Visa, Student Visa, Transit Visa, Work Visa (initial stage), Immigration proof of travel, and Proof of onward travel for airport immigration.",
      },
      {
        type: "paragraph",
        text: "You only need to buy an actual ticket after your visa is approved.",
      },
      {
        type: "heading",
        text: "🌟 Final Thoughts: Dummy Ticket = Smart, Safe, Affordable",
      },
      {
        type: "paragraph",
        text: "Getting a visa shouldn't force you to take financial risks. A verifiable dummy ticket protects your money, meets embassy requirements, and gives you flexibility throughout the application process.",
      },
      {
        type: "paragraph",
        text: "Before your visa approval: Use a dummy ticket. After your visa approval: Buy your actual travel ticket. This simple strategy is used by millions of travelers worldwide — and it works.",
      },
      {
        type: "heading",
        text: "📞 Get Your Verifiable Dummy Ticket Through FETO TRAVELS",
      },
      {
        type: "paragraph",
        text: "At FETO TRAVELS, we provide 100% verifiable dummy tickets for visa applications with real PNR codes that can be checked on airline systems. Contact us today: Call/WhatsApp: +234 901 478 6078 or +234 701 105 3895. Email: fetotravels@gmail.com",
      },
    ],
    tags: ["Visa Application", "Dummy Ticket", "Travel Tips", "Flight Reservation", "Embassy Requirements"],
  },
  {
    id: "work-abroad-guide",
    title: "Why Working Abroad Could Be the Best Decision You Ever Make — And How We Help You Get There",
    excerpt:
      "Discover why working abroad is a strategic choice for personal and professional growth, and how FETO TRAVELS helps you achieve your dream of international employment.",
    author: "FETO TRAVELS Team",
    date: "January 19, 2026",
    readTime: "14 min read",
    category: "Work Abroad",
    image: "/work-abroad.jpg",
    content: [
      {
        type: "paragraph",
        text: "In today's global economy, more people are choosing to leave their home country in search of better opportunities, higher income, and international exposure. Working abroad is no longer just a dream — it has become a strategic choice for personal and professional growth. Whether you're seeking a fresh start, a higher-paying job, or a chance to build an international career, the world is full of opportunities waiting for you.",
      },
      {
        type: "paragraph",
        text: "At FETO TRAVELS, we are committed to helping individuals achieve their dream of working abroad through verified guidance, documentation support, and seamless processing. From the first inquiry to the moment you secure your job placement and visa, we stand by you every step of the way.",
      },
      {
        type: "heading",
        text: "🌍 Why Consider Working Abroad?",
      },
      {
        type: "paragraph",
        text: "1. Higher Income Opportunities: Many people choose to work abroad because salaries in countries like Canada, the UK, the UAE, Qatar, Germany, Poland, and Australia are significantly higher. Even entry-level roles often pay more than senior roles in some home countries.",
      },
      {
        type: "paragraph",
        text: "2. International Career Growth: A job abroad enriches your work experience and exposes you to international work environments. This boosts your CV and expands your career options globally.",
      },
      {
        type: "paragraph",
        text: "3. Access to Better Work Conditions: Many countries offer workers health insurance, pension benefits, paid leave, standard working hours, and worker protections and rights. These benefits create a healthier and more stable work-life balance.",
      },
      {
        type: "paragraph",
        text: "4. Cultural Exposure: Working in a new country allows you to immerse yourself in different cultures, languages, and lifestyles. This shapes your worldview and makes you more adaptable and globally aware.",
      },
      {
        type: "paragraph",
        text: "5. Pathway to Permanent Residency: In several countries, work visas can lead to Permanent Residency (PR), long-term migration, and family relocation opportunities. This is one of the biggest reasons many people pursue jobs abroad.",
      },
      {
        type: "heading",
        text: "✈️ Types of Jobs You Can Apply for Abroad",
      },
      {
        type: "paragraph",
        text: "Depending on your skills, qualifications, and experience, opportunities available include:",
      },
      {
        type: "paragraph",
        text: "Skilled Jobs: IT & Tech, Healthcare (Nurses, Caregivers, Pharmacists), Engineering, Aviation, Accounting & Finance, Teaching.",
      },
      {
        type: "paragraph",
        text: "Unskilled Jobs: Factory workers, Cleaners, Drivers, Warehouse assistants, Hospitality staff, Security workers.",
      },
      {
        type: "paragraph",
        text: "Semi-Skilled Jobs: Customer service, Administrative roles, Supervisors, Technicians.",
      },
      {
        type: "heading",
        text: "📝 How FETO TRAVELS Helps You Work Abroad Successfully",
      },
      {
        type: "paragraph",
        text: "At FETO TRAVELS, we understand how confusing the process can be — from job search to documentation to visa approval. So we've built a full support system designed to help you achieve your dream of working abroad with ease.",
      },
      {
        type: "paragraph",
        text: "✔ Job Search Guidance: We guide you on countries hiring international workers and help you understand demand for your skills, hiring requirements, and salary expectations.",
      },
      {
        type: "paragraph",
        text: "✔ Documentation Assistance: We support you with CV formatting for international standards, cover letter creation, work application process, and professional guidance for required documents.",
      },
      {
        type: "paragraph",
        text: "✔ Visa Assistance: Navigating visa requirements can be overwhelming. We help you with visa guidance and document preparation, filling application forms correctly, dummy/flight reservation (if required), and interview preparation.",
      },
      {
        type: "paragraph",
        text: "✔ Connecting You to Trusted Opportunities: We ensure you apply only for real, safe, and verified jobs — avoiding fake job scams that many fall into.",
      },
      {
        type: "paragraph",
        text: "✔ Personalized Consultation: We walk you through every step based on your goals, your qualifications, and your preferred destination country.",
      },
      {
        type: "heading",
        text: "🌐 Top Countries Where We Help People Work Abroad",
      },
      {
        type: "paragraph",
        text: "Canada, United Kingdom, Germany, Poland, Qatar, Dubai (UAE), Australia, Saudi Arabia, Malta, Czech Republic.",
      },
      {
        type: "heading",
        text: "📞 Start Your Work Abroad Journey With Us",
      },
      {
        type: "paragraph",
        text: "If you're ready to take your career to the next level, FETO TRAVELS is here to support you. Whether you want skilled, semi-skilled, or unskilled job opportunities abroad, our expert guidance makes your journey easier, safer, and faster.",
      },
      {
        type: "paragraph",
        text: "Contact us today: Phone/WhatsApp: +234 901 478 6078 or +234 701 105 3895. Email: fetotravels@gmail.com",
      },
      {
        type: "paragraph",
        text: "Your global future starts with a single step — let FETO TRAVELS help you take that step confidently.",
      },
    ],
    tags: ["Work Abroad", "International Jobs", "Career Growth", "Work Visa", "Employment", "Migration"],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === slug)
}

export function getRelatedPosts(currentPostId: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.id !== currentPostId).slice(0, limit)
}
