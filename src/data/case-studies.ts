import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "fashion-d2c",
    slug: "fashion-d2c-7-9x-roas",
    client: "Fashion D2C Brand",
    industry: "E-commerce & D2C",
    category: "Paid Media",
    challenge:
      "A growing fashion D2C brand was struggling with high CAC and unprofitable Meta Ads campaigns. Creative fatigue and poor audience targeting were eroding margins.",
    strategy:
      "We rebuilt the full acquisition system from creative strategy through to post-purchase retention. Performance-led UGC creative testing, audience restructure, and a dedicated landing page replaced the generic product pages.",
    results:
      "Achieved 7.9X ROAS through systematic creative testing and full-funnel optimization — the highest verified ROAS across our portfolio.",
    metrics: [
      { label: "ROAS", value: "7.9X", description: "Return on Ad Spend", verified: true },
      { label: "Channel", value: "Meta Ads", verified: true },
    ],
    services: ["Meta Ads", "Performance Creative", "Landing Pages & CRO"],
    featured: true,
    imageColor: "#7415FD",
  },
  {
    id: "healthcare-wellness",
    slug: "healthcare-wellness-7-7x-roas",
    client: "Healthcare & Wellness Brand",
    industry: "Healthcare & Wellness",
    category: "Paid Media",
    challenge:
      "The client faced increasing CPAs in a highly regulated healthcare advertising environment and had no system for re-engaging leads.",
    strategy:
      "Developed a HIPAA-conscious creative strategy with educational content leading to conversion pages, combined with email and WhatsApp automation for lead nurturing.",
    results:
      "Achieved 7.7X ROAS by combining compliant creative execution with a systematic lead-to-customer journey.",
    metrics: [
      { label: "ROAS", value: "7.7X", description: "Return on Ad Spend", verified: true },
      { label: "Channel", value: "Meta Ads", verified: true },
    ],
    services: ["Meta Ads", "Performance Creative", "CRM & Automation"],
    featured: true,
    imageColor: "#A838FD",
  },
  {
    id: "beauty-d2c",
    slug: "beauty-d2c-3x-roas",
    client: "Beauty D2C Brand",
    industry: "E-commerce & D2C",
    category: "Paid Media",
    challenge:
      "Saturated market with high CPMs and reliance on influencer content that wasn't converting at the bottom of funnel.",
    strategy:
      "Shifted from influencer-heavy creative to performance UGC and product demonstration content. Built a structured A/B testing framework and optimized the checkout funnel.",
    results:
      "Delivered 3X+ ROAS while simultaneously reducing creative production cost by consolidating the testing process.",
    metrics: [
      { label: "ROAS", value: "3X+", description: "Return on Ad Spend", verified: true },
      { label: "Channel", value: "Meta Ads", verified: true },
    ],
    services: ["Meta Ads", "Performance Creative", "Landing Pages & CRO"],
    featured: false,
    imageColor: "#3D5BFD",
  },
  {
    id: "commercial-real-estate",
    slug: "commercial-real-estate-90-percent-cpl-reduction",
    client: "Commercial Real Estate Developer",
    industry: "Real Estate",
    category: "Lead Generation",
    challenge:
      "High cost per lead from generic real estate ads, with unqualified leads flooding the sales team and wasting follow-up resources.",
    strategy:
      "Rebuilt the campaign architecture with hyper-targeted audience segmentation, qualification-focused landing pages, and automated CRM routing to pre-qualify leads before human touchpoints.",
    results:
      "Reduced cost per lead by 90% through systematic qualification filtering and media efficiency improvements.",
    metrics: [
      { label: "CPL Reduction", value: "90%", description: "Cost Per Lead reduction", verified: true },
      { label: "Channel", value: "Meta + Google", verified: true },
    ],
    services: ["Meta Ads", "Google Ads", "Landing Pages & CRO", "CRM & Automation"],
    featured: true,
    imageColor: "#0A94FD",
  },
  {
    id: "automobile-dealership",
    slug: "automobile-dealership-500-leads",
    client: "Automobile Dealership Group",
    industry: "Automobile & Dealerships",
    category: "Lead Generation",
    challenge:
      "Dealership relying on walk-ins and referrals with no digital acquisition system. Test drive bookings were low and seasonal.",
    strategy:
      "Designed a multi-platform paid media strategy targeting in-market car buyers, with dedicated landing pages per model and an automated follow-up sequence for enquiries.",
    results:
      "Generated 500+ qualified leads, with a significant increase in test drive bookings and showroom visits.",
    metrics: [
      { label: "Leads Generated", value: "500+", description: "Qualified enquiries", verified: true },
      { label: "Channel", value: "Meta + Google", verified: true },
    ],
    services: ["Meta Ads", "Google Ads", "Landing Pages & CRO"],
    featured: false,
    imageColor: "#36C2FE",
  },
  {
    id: "travel-tours",
    slug: "travel-tours-5900-enquiries",
    client: "Travel & Tours Operator",
    industry: "Travel, Events & Hospitality",
    category: "Lead Generation",
    challenge:
      "Seasonal peaks and troughs in lead flow, high dependency on OTAs, and no owned digital channel for customer acquisition.",
    strategy:
      "Launched a year-round paid media strategy across Meta and Google targeting intent-rich travel audiences. Built a custom enquiry funnel with WhatsApp integration for instant follow-up.",
    results:
      "Generated 5,900+ enquiries at ₹12.67 CPE, demonstrating the power of a systematic acquisition approach over OTA dependency.",
    metrics: [
      { label: "Enquiries", value: "5,900+", description: "Total enquiries generated", verified: true },
      { label: "Cost Per Enquiry", value: "₹12.67", description: "CPE", verified: true },
    ],
    services: ["Meta Ads", "Google Ads", "Landing Pages & CRO", "WhatsApp Marketing"],
    featured: true,
    imageColor: "#7415FD",
  },
  {
    id: "home-fragrance-d2c",
    slug: "home-fragrance-d2c",
    client: "Home Fragrance D2C Brand",
    industry: "E-commerce & D2C",
    category: "Paid Media",
    challenge:
      "Low brand awareness and a premium pricing position that made conversion difficult without a strong brand story in the creative.",
    strategy:
      "Developed brand-story performance creative combining lifestyle content with direct-response hooks. Implemented a structured retargeting architecture to capture high-intent site visitors.",
    results:
      "Improved conversion rate and ROAS through a systematic creative testing and retargeting system. [Client metrics pending — content to be updated with verified data]",
    metrics: [
      { label: "Channel", value: "Meta Ads", verified: true },
    ],
    services: ["Meta Ads", "Performance Creative", "Landing Pages & CRO"],
    featured: false,
    imageColor: "#A838FD",
  },
  {
    id: "residential-real-estate",
    slug: "residential-real-estate",
    client: "Residential Real Estate Developer",
    industry: "Real Estate",
    category: "Lead Generation",
    challenge:
      "Competitive residential market with high CPLs and poor lead quality from generic advertising platforms.",
    strategy:
      "Built a hyper-local targeting strategy with neighbourhood-specific creative and a CRM-integrated lead qualification funnel.",
    results:
      "Significantly improved lead quality and reduced cost per qualified lead. [Client metrics pending — content to be updated with verified data]",
    metrics: [
      { label: "Channel", value: "Meta + Google", verified: true },
    ],
    services: ["Meta Ads", "Google Ads", "CRM & Automation"],
    featured: false,
    imageColor: "#3D5BFD",
  },
  {
    id: "k12-education",
    slug: "k12-education",
    client: "K-12 Education Institution",
    industry: "Education",
    category: "Lead Generation",
    challenge:
      "High cost per admission enquiry during peak academic seasons with untargeted parent-facing campaigns.",
    strategy:
      "Developed a parent-persona targeting framework with school value proposition creative, seasonal campaign management, and automated follow-up for admissions enquiries.",
    results:
      "Improved admission enquiry volume at reduced cost. [Client metrics pending — content to be updated with verified data]",
    metrics: [
      { label: "Channel", value: "Meta + Google", verified: true },
    ],
    services: ["Meta Ads", "Google Ads", "Landing Pages & CRO"],
    featured: false,
    imageColor: "#0A94FD",
  },
  {
    id: "events-decor",
    slug: "events-decor",
    client: "Events & Décor Company",
    industry: "Travel, Events & Hospitality",
    category: "Lead Generation",
    challenge:
      "Business driven by word-of-mouth with no consistent digital enquiry channel and heavy dependence on wedding season peaks.",
    strategy:
      "Year-round paid media strategy targeting engaged couples and event planners, with portfolio-led creative and a seamless enquiry-to-quote automation.",
    results:
      "Built a consistent off-season pipeline. [Client metrics pending — content to be updated with verified data]",
    metrics: [
      { label: "Channel", value: "Meta Ads", verified: true },
    ],
    services: ["Meta Ads", "Performance Creative", "WhatsApp Marketing"],
    featured: false,
    imageColor: "#36C2FE",
  },
  {
    id: "fine-jewellery",
    slug: "fine-jewellery",
    client: "Fine Jewellery Brand",
    industry: "Jewellery, Furniture & Retail",
    category: "Paid Media",
    challenge:
      "High average order value product requiring significant trust-building before purchase, with creative not communicating craftsmanship.",
    strategy:
      "Developed high-quality product creative highlighting craftsmanship, combined with a multi-touch retargeting strategy and email retention sequences for repeat purchase.",
    results:
      "Improved purchase conversion rate and customer lifetime value. [Client metrics pending — content to be updated with verified data]",
    metrics: [
      { label: "Channel", value: "Meta Ads", verified: true },
    ],
    services: ["Meta Ads", "Performance Creative", "Email Marketing"],
    featured: false,
    imageColor: "#7415FD",
  },
  {
    id: "furniture-home",
    slug: "furniture-home",
    client: "Furniture & Home Décor Brand",
    industry: "Jewellery, Furniture & Retail",
    category: "Paid Media",
    challenge:
      "Long consideration cycle for high-ticket furniture purchases and poor tracking of offline-influenced purchases.",
    strategy:
      "Implemented a full attribution setup, home-inspiration creative strategy, and a lead qualification funnel combining paid media with WhatsApp consultation.",
    results:
      "Improved attribution visibility and sales pipeline value. [Client metrics pending — content to be updated with verified data]",
    metrics: [
      { label: "Channel", value: "Meta + Google", verified: true },
    ],
    services: ["Meta Ads", "Google Ads", "Tracking & Analytics", "WhatsApp Marketing"],
    featured: false,
    imageColor: "#A838FD",
  },
];

export const featuredCaseStudies = caseStudies.filter((cs) => cs.featured);
export const caseStudyCategories = Array.from(new Set(caseStudies.map((cs) => cs.category)));
export const caseStudyIndustries = Array.from(new Set(caseStudies.map((cs) => cs.industry)));
