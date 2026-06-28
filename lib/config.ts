import type { SiteConfig } from "@/types";

/**
 * Central configuration file for the website.
 * When building a new client site, update ALL values in this file.
 * Every component reads from here — change once, update everywhere.
 */
export const siteConfig: SiteConfig = {
  business: {
    name: "LJ Roofing",
    tagline: "Local Roofers. Quality You Can Trust.",
    industry: "Roofing",
    phone: "+447435349569",
    phoneDisplay: "07435 349569",
    email: "lylejones1309@mail.com",
    website: "https://ljroofing.co.uk",
    whatsapp: "+447435349569",
    whatsappUrl: "https://wa.me/+447435349569",
    whatsappMessage: "Hi, I'd like a quote for roofing work please.",
    address: {
      street: "",
      city: "Barnsley",
      county: "South Yorkshire",
      postcode: "",
      country: "United Kingdom",
    },
    geo: {
      latitude: 53.5526,
      longitude: -1.4797,
    },
    schemaType: "RoofingContractor",
    priceRange: "££",
    areasCovered: [
      "Barnsley",
      "Sheffield",
      "Doncaster",
      "Chesterfield",
      "Rotherham",
      "Wakefield",
      "Leeds",
      "Nottingham",
      "Wath",
      "Swinton",
      "Mexborough",
      "Denaby",
      "Conisbrough",
      "Penistone",
      "Worksop",
      "Chapeltown",
      "Wombwell",
      "Huddersfield",
    ],
    yearsTrading: 10,
    usp: "Trusted local roofers with over 10 years' experience across South Yorkshire",
    guarantees: [
      "New Roofs",
      "Roof Repairs",
      "Flat Roofs",
      "Pointing Work",
      "Guttering, Soffits & Fascias",
      "Chimneys & Leadwork",
    ],
  },

  brand: {
    primaryColour: "#0f1f3d",
    accentColour: "#2563eb",
    logoPath: "/branding/lj-roofing-logo.png",
    faviconPath: "/branding/lj-roofing-logo.png",
  },

  theme: {
    variant: "modern-trade",
  },

  layout: {
    hero: { variant: "centered" },
    services: { layout: "grid-4", cardStyle: "feature" },
    gallery: { variant: "grid", lightbox: true },
    cta: { variant: "dark" },
    about: { variant: "image-right" },
    whyChooseUs: { variant: "icon-list" },
    reviews: { variant: "featured" },
    process: { variant: "numbered" },
    faq: { variant: "accordion" },
  },

  seo: {
    title: "LJ Roofing | Local Roofers in Barnsley & South Yorkshire",
    description:
      "Trusted local roofers covering Barnsley, Sheffield, Doncaster and across South Yorkshire. New roofs, repairs, flat roofs, pointing & more. Free quotes. Call 07435 349569.",
    keywords: [
      "roofer",
      "roofers near me",
      "roofing company",
      "roofing contractor",
      "new roof",
      "roof repair",
      "chimney repair",
      "lead work",
      "flat roof",
      "roof cleaning",
      "gutter cleaning",
      "fascia and soffits",
      "roofers barnsley",
      "roofers sheffield",
      "roofers doncaster",
      "roofers chesterfield",
      "roofers rotherham",
    ],
    ogImage: "/branding/lj-roofing-logo.png",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],

  pages: {
    home: {
      seo: {
        title: "LJ Roofing | Local Roofers in Barnsley & South Yorkshire",
        description:
          "Trusted local roofers covering Barnsley, Sheffield, Doncaster and across South Yorkshire. New roofs, repairs, flat roofs, pointing & more. Free quotes. Call 07435 349569.",
        path: "/",
      },
      hero: {
        eyebrow: {
          prefix: "Roofing Specialists ·",
          rotatingLocations: [
            "South Yorkshire",
            "Barnsley",
            "Sheffield",
            "Doncaster",
            "Chesterfield",
            "Rotherham",
            "Wakefield",
            "Leeds",
          ],
          rotationIntervalSeconds: 3,
        },
        headline: {
          prefix: "Local Roofers. Quality You Can Trust.",
          rotatingLocations: [],
          rotationIntervalSeconds: 3,
        },
        subtext:
          "All aspects of roofing and pointing work undertaken. Over 10 years' experience delivering high-quality workmanship across Barnsley and surrounding areas.",
        primaryCtaLabel: "WhatsApp Us",
        secondaryCtaLabel: "Call 07435 349569",
        trustPointsLimit: 3,
        stats: [
          { value: "10+", label: "Years Experience" },
          { value: "18", label: "Areas Covered" },
          { value: "24/7", label: "Emergency Cover" },
        ],
        image: {
          src: "/gallery/Roofer on Roof.jpg",
          alt: "LJ Roofing specialist working on a roof in South Yorkshire",
          width: 1920,
          height: 1080,
          isPlaceholder: false,
        },
      },
    },
    about: {
      seo: {
        title: "About Us",
        description:
          "Learn about LJ Roofing — trusted roofing specialists serving Barnsley, Sheffield, Doncaster and across South Yorkshire for over 10 years.",
        path: "/about",
      },
      hero: {
        eyebrow: "About Us",
        title: "About LJ Roofing",
        description:
          "Your trusted local roofing specialists in Barnsley and across South Yorkshire.",
      },
      story: {
        title: "Our Story",
        paragraphs: [
          "LJ Roofing is a local roofing company based in South Yorkshire, providing professional roofing and pointing services to homeowners and businesses across Barnsley, Sheffield, Doncaster, Chesterfield and surrounding areas.",
          "With over 10 years of experience, we take pride in delivering high-quality workmanship on every job — from full new roof installations to emergency repairs, flat roofs, chimney work and pointing.",
          "We offer free quotes and inspections, including drone surveys where needed, so you know exactly what work is required before we start. Fully insured and committed to honest, reliable service on every project.",
        ],
      },
      values: {
        title: "Our Values",
        items: [
          {
            title: "Quality Workmanship",
            description:
              "Every roof repair and installation is completed to a high standard, using quality materials and proven techniques.",
          },
          {
            title: "Honest & Transparent",
            description:
              "Clear quotes with no hidden fees. We explain what's needed and give you an honest price before any work begins.",
          },
          {
            title: "Local & Reliable",
            description:
              "Based in South Yorkshire, we know the area and respond quickly — including 24/7 emergency callouts when you need us most.",
          },
        ],
      },
      guarantees: {
        title: "What We Cover",
      },
    },
    services: {
      seo: {
        title: "Our Services",
        description:
          "Professional roofing services in Barnsley and South Yorkshire. New roofs, roof repairs, flat roofs, pointing, guttering, fascias, soffits and chimney work. Free quotes available.",
        path: "/services",
      },
      hero: {
        eyebrow: "Our Services",
        title: "Roofing Services",
        description:
          "Comprehensive roofing services for homes and businesses across Barnsley, Sheffield, Doncaster, Chesterfield and surrounding areas.",
      },
      cta: {
        title: "Need a Service Not Listed?",
        description:
          "We handle all types of roofing and pointing work. Get in touch and we'll be happy to help with your specific requirements.",
        primaryLabel: "07435 349569",
        secondaryLabel: "Request a Quote",
      },
    },
    contact: {
      seo: {
        title: "Contact Us",
        description:
          "Get in touch with LJ Roofing. Call 07435 349569 or fill in our contact form for a free quote. Serving Barnsley and across South Yorkshire.",
        path: "/contact",
      },
      hero: {
        eyebrow: "Contact Us",
        title: "Get in Touch",
        description:
          "Ready to get started? Call us, email us, or fill in the form below. We'll get back to you as soon as possible.",
      },
      infoTitle: "Contact Information",
      infoDescription:
        "Prefer to speak to someone directly? Here's how to reach us.",
      areasTitle: "Areas We Cover",
    },
  },

  sections: {
    services: {
      eyebrow: "Our Services",
      title: "All Aspects of Roofing Covered",
      description:
        "Professional roofing services for homes and businesses across Barnsley, Sheffield, Doncaster and surrounding areas.",
      viewAllLabel: "View All Services",
      homepageLimit: 6,
    },
    aboutPreview: {
      eyebrow: "Welcome to LJ Roofing",
      title: "Your Local Roofing Specialists in Barnsley",
      paragraphs: [
        "LJ Roofing provides reliable, professional roofing and pointing services to homeowners and businesses across Barnsley and South Yorkshire.",
        "We pride ourselves on honest pricing, quality workmanship, and exceptional customer service. Every job is carried out to the highest standard, giving you complete peace of mind.",
      ],
      ctaLabel: "About Us",
      statsLabel: "Years of Experience",
      image: {
        src: "/gallery/Roof and van with logo.jpg",
        alt: "LJ Roofing team and branded van",
        width: 800,
        height: 600,
      },
    },
    whyChooseUs: {
      eyebrow: "Why Choose Us",
      title: "Why LJ Roofing?",
      description:
        "We're not just another roofing company. Here's what sets us apart from the rest.",
    },
    reviews: {
      eyebrow: "Customer Reviews",
      title: "What Our Customers Say",
      description:
        "Don't just take our word for it. Here's what local homeowners have to say about our work.",
    },
    gallery: {
      eyebrow: "Recent Work",
      title: "A Few of Our Latest Projects",
      description:
        "Browse our recent roofing projects and see the quality of our work for yourself.",
      emptyTitle: "Gallery coming soon",
      emptyDescription: "Project photos will be added here.",
      placeholderHint: "Replace with client photo",
    },
    process: {
      eyebrow: "How It Works",
      title: "Our Simple Process",
      description:
        "Getting started is easy. Here's how we work from your first call to a job well done.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      description:
        "Got a question? Here are the answers to the most common queries we receive.",
    },
  },

  contact: {
    openingHours: {
      weekday: "Mon–Fri: 8am – 6pm",
      emergency: "Emergency: 24/7",
    },
    form: {
      title: "Send Us a Message",
      description:
        "Fill in the form below and we'll get back to you within 24 hours.",
      submitLabel: "Send Message",
      sendingLabel: "Sending...",
      successTitle: "Message Sent!",
      successMessage:
        "Thank you for getting in touch. We'll get back to you as soon as possible.",
      sendAnotherLabel: "Send Another Message",
      selectServicePlaceholder: "Select a service (optional)",
    },
    stickyBar: {
      callLabel: "Call Now",
      whatsappLabel: "WhatsApp",
    },
  },

  ctas: {
    default: {
      title: "Ready to Get Started?",
      description:
        "Contact LJ Roofing today for a free, no-obligation quote. We're here to help with all your roofing needs across South Yorkshire.",
      primaryLabel: "WhatsApp Us",
      secondaryLabel: "Call 07435 349569",
      subheading: "Free quotes · No obligation · Fast response",
      trustText: "Fully insured · 10+ years experience · Free inspections",
    },
  },

  services: [
    {
      id: "new-roofs",
      title: "New Roofs",
      description:
        "Full new roof installations using concrete tiles, slate, and man-made fibre slate. Stripped, boarded, and completed to the highest standard.",
      icon: "Home",
      slug: "new-roofs",
    },
    {
      id: "roof-repairs",
      title: "Roof Repairs",
      description:
        "Fast, reliable repairs for leaks, storm damage, missing tiles, and general roof maintenance. Emergency callouts available 24/7.",
      icon: "Wrench",
      slug: "roof-repairs",
    },
    {
      id: "flat-roofs",
      title: "Flat Roofs",
      description:
        "Torch-on felt, GRP Firestone rubber roofs, and flat roof replacements with long-lasting, watertight finishes.",
      icon: "Layers",
      slug: "flat-roofs",
    },
    {
      id: "pointing-leadwork",
      title: "Pointing & Leadwork",
      description:
        "Professional repointing for stone and brick properties, including heritage homes. Leadwork and weatherproofing included.",
      icon: "Hammer",
      slug: "pointing-leadwork",
    },
    {
      id: "guttering-soffits-fascias",
      title: "Guttering, Soffits & Fascias",
      description:
        "Replacement and repair of fascias, soffits, and guttering to protect your property and improve kerb appeal.",
      icon: "Droplets",
      slug: "guttering-soffits-fascias",
    },
    {
      id: "chimneys-leadwork",
      title: "Chimneys & Leadwork",
      description:
        "Chimney repairs, repointing, lead flashing, and weatherproofing to keep your roof watertight and secure.",
      icon: "Flame",
      slug: "chimneys-leadwork",
    },
  ],

  reviews: [
    {
      id: "review-1",
      name: "Mark T.",
      location: "Barnsley",
      rating: 5,
      text: "Excellent job on our new roof. Professional, tidy and great value. Highly recommend.",
      date: "2025-11-12",
    },
    {
      id: "review-2",
      name: "Karen S.",
      location: "Sheffield",
      rating: 5,
      text: "Had our flat roof replaced — quick, clean and no mess. Will use again.",
      date: "2025-10-28",
    },
    {
      id: "review-3",
      name: "Dave R.",
      location: "Doncaster",
      rating: 5,
      text: "Called about a leak and they were out the same day. Sorted quickly and affordably.",
      date: "2025-09-15",
    },
    {
      id: "review-4",
      name: "Sue M.",
      location: "Rotherham",
      rating: 5,
      text: "Great work on our chimney. Wouldn't hesitate to recommend LJ Roofing.",
      date: "2025-08-03",
    },
  ],

  faqs: [
    {
      id: "faq-1",
      question: "Do you offer free quotes?",
      answer:
        "Yes, we provide free, no-obligation quotes for all work. We'll inspect your roof — including drone surveys where helpful — and give you a clear price before any work begins.",
    },
    {
      id: "faq-2",
      question: "What areas do you cover?",
      answer:
        "We cover Barnsley, Sheffield, Doncaster, Chesterfield, Rotherham, Wakefield, Leeds, Nottingham and surrounding towns within approximately 30 miles of Barnsley. Not sure if we cover your area? Give us a call.",
    },
    {
      id: "faq-3",
      question: "Do you do emergency roof repairs?",
      answer:
        "Yes. We offer 24/7 emergency callouts for urgent roof repairs such as leaks and storm damage. Call us anytime and we'll do our best to get to you as quickly as possible.",
    },
    {
      id: "faq-4",
      question: "What types of flat roof do you install?",
      answer:
        "We install torch-on felt flat roofs and GRP Firestone rubber roofs. We'll recommend the best option for your property based on the size, access, and your budget.",
    },
    {
      id: "faq-5",
      question: "How long have you been trading?",
      answer:
        "LJ Roofing has over 10 years of experience serving homeowners and businesses across South Yorkshire with professional roofing and pointing services.",
    },
    {
      id: "faq-6",
      question: "Are you fully insured?",
      answer:
        "Yes, we are fully insured for your peace of mind. All work is carried out professionally and safely, with public liability cover in place.",
    },
  ],

  process: [
    {
      id: "step-1",
      step: 1,
      title: "Free Quote",
      description:
        "Contact us by phone, WhatsApp, or our contact form. We'll arrange a convenient time for a free roof inspection.",
    },
    {
      id: "step-2",
      step: 2,
      title: "Survey & Recommendation",
      description:
        "We carry out a physical or drone survey, assess the work needed, and provide a clear written quote with no hidden costs.",
    },
    {
      id: "step-3",
      step: 3,
      title: "Expert Installation",
      description:
        "Once approved, we complete the work to the highest standard, keeping your property clean and tidy throughout.",
    },
    {
      id: "step-4",
      step: 4,
      title: "Aftercare",
      description:
        "We follow up to make sure you're completely happy with the finished job and the quality of our workmanship.",
    },
  ],

  trustBadges: [
    { id: "badge-1", label: "10+ Years Experience", icon: "Award" },
    { id: "badge-2", label: "Free Quotes & Inspections", icon: "ClipboardCheck" },
    { id: "badge-3", label: "Fully Insured", icon: "Shield" },
    { id: "badge-4", label: "5 Star Rated", icon: "Star" },
  ],

  whyChooseUs: [
    {
      id: "why-1",
      title: "10+ Years Experience",
      description:
        "Over a decade serving local homes and businesses with reliable, professional roofing services across South Yorkshire.",
      icon: "Award",
    },
    {
      id: "why-2",
      title: "Free Roof Inspections",
      description:
        "We offer free quotes and inspections, including drone surveys where needed, so you know exactly what's required.",
      icon: "ClipboardCheck",
    },
    {
      id: "why-3",
      title: "Fully Insured",
      description:
        "We are fully insured for your peace of mind, with professional standards on every job we undertake.",
      icon: "ShieldCheck",
    },
    {
      id: "why-4",
      title: "Local & Reliable",
      description:
        "Based in South Yorkshire, we respond quickly to enquiries and offer 24/7 emergency callouts when you need us.",
      icon: "Clock",
    },
  ],

  gallery: [
    {
      id: "gallery-1",
      src: "/gallery/new roof tiled roof.jpg",
      alt: "New tiled roof installation by LJ Roofing",
      width: 800,
      height: 600,
      category: "New Roofs",
      isPlaceholder: false,
    },
    {
      id: "gallery-2",
      src: "/gallery/flat roof install.jpg",
      alt: "Flat roof installation in progress",
      width: 800,
      height: 600,
      category: "Flat Roofs",
      isPlaceholder: false,
    },
    {
      id: "gallery-3",
      src: "/gallery/rubber roof.jpg",
      alt: "GRP rubber flat roof completed by LJ Roofing",
      width: 800,
      height: 600,
      category: "Flat Roofs",
      isPlaceholder: false,
    },
    {
      id: "gallery-4",
      src: "/gallery/Roofer on Roof.jpg",
      alt: "LJ Roofing specialist working on a roof",
      width: 800,
      height: 600,
      category: "Roofing Work",
      isPlaceholder: false,
    },
    {
      id: "gallery-5",
      src: "/gallery/chimney wrok.jpg",
      alt: "Chimney repair and leadwork",
      width: 800,
      height: 600,
      category: "Chimneys",
      isPlaceholder: false,
    },
    {
      id: "gallery-6",
      src: "/gallery/pointing work.jpg",
      alt: "Professional pointing work on a property",
      width: 800,
      height: 600,
      category: "Pointing",
      isPlaceholder: false,
    },
    {
      id: "gallery-7",
      src: "/gallery/Fascia,soffit,gutter 1.jpg",
      alt: "Fascia, soffit and gutter installation",
      width: 800,
      height: 600,
      category: "Guttering",
      isPlaceholder: false,
    },
    {
      id: "gallery-8",
      src: "/gallery/new roof progress.jpg",
      alt: "New roof installation in progress",
      width: 800,
      height: 600,
      category: "New Roofs",
      isPlaceholder: false,
    },
    {
      id: "gallery-9",
      src: "/gallery/Roof and van with logo.jpg",
      alt: "LJ Roofing team and branded van on site",
      width: 800,
      height: 600,
      category: "Our Team",
      isPlaceholder: false,
    },
  ],

  social: {
    facebook:
      "https://www.facebook.com/profile.php?id=61552970713666&locale=en_GB",
  },
};

export type { SiteConfig };
