export const profile = {
  name: "Jude Rafael Alayacyac",
  email: "alayacyacjude@gmail.com",
  location: "Davao City, Philippines",
  linkedin: "https://www.linkedin.com/in/jude-alayacyac/",
  instagram: "https://www.instagram.com/jude.rafael/",
  education: {
    institution: "University of Mindanao",
    degree: "Bachelor of Science in Information Technology",
    distinction: "Magna Cum Laude",
    graduated: "2026-09-08",
    graduatedLabel: "September 8, 2026",
  },
};

export const ventures = [
  { id: "farmiq", name: "FarmIQ Agricultural Technologies", role: "Founder & Chief Executive Officer", description: "Livestock management technology.", startYear: 2025, endYear: null },
  { id: "axon", name: "Axon Entertainment", role: "Founder & Operations Manager", description: "Events and ticketing.", startYear: 2026, endYear: null },
  { id: "nexus", name: "Nexus Publications", role: "Founder & Marketing Head", description: "Academic publishing and open-access research.", startYear: 2024, endYear: null },
  { id: "madelucid", name: "Made Lucid Studio", role: "Founder & Design Director", description: "Brand identities, websites, and campaigns.", startYear: 2026, endYear: null },
  { id: "pacepoint", name: "Pacepoint Entertainment", role: "Founder & Marketing Head", description: "Live event organization and marketing.", startYear: 2025, endYear: 2026 },
].sort((a, b) => Number(a.endYear !== null) - Number(b.endYear !== null) || b.startYear - a.startYear);

// Roles and periods supplied by Jude; group order separates work from organization roles.
export const experienceGroups = [
  {
    id: "work-internship",
    label: "Work & internship",
    roles: [
      {
        id: "aquila",
        organization: "Aquila Softwares Corporation",
        role: "Backend Developer Intern",
        location: "Davao City, Philippines",
        startYear: 2026,
        endYear: 2026,
        description: "Developed and integrated backend features using .NET Framework, supporting the core functionality of Cristina Foundation’s platform.",
      },
      {
        id: "up-plex",
        organization: "UP PLEX Multifamily Investments",
        role: "Graphics & Video Specialist",
        location: "Texas, USA",
        startYear: 2024,
        endYear: 2025,
        description: "Produced 50+ marketing videos and motion designs for UP PLEX, strengthening brand visibility and supporting digital marketing campaigns.",
      },
    ],
  },
  {
    id: "organizations",
    label: "Organizations",
    roles: [
      {
        id: "umal",
        organization: "UMAL Production",
        role: "Video & Motion Designer",
        location: "Davao City, Philippines",
        startYear: 2022,
        endYear: 2026,
        description: "Produced impactful video and motion graphics for University of Mindanao’s marketing and events, delivering same-day edits, the Lupang Hinirang video (still in use in 2026), and President’s Report teasers (2024–2026).",
        emphasis: "Lupang Hinirang",
      },
      {
        id: "umsdc",
        organization: "University of Mindanao Student Developer Community (UMSDC)",
        role: "Frontend Developer",
        location: "Davao City, Philippines",
        startYear: 2024,
        endYear: 2025,
        description: "Developed frontend components for the UMSDC Management Platform using React, enhancing the user interface and supporting a streamlined user experience.",
      },
      {
        id: "um-enigma",
        organization: "UM Enigma",
        role: "Creatives Lead",
        location: "Davao City, Philippines",
        startYear: 2023,
        endYear: 2024,
        description: "Led UM Enigma’s creative team in producing marketing materials and visual content, strengthening the organization’s brand identity and promotional efforts.",
      },
    ],
  },
];

export const projects = [
  {
    id: "farmiq", title: "FarmIQ Mobile Application", role: "Product Lead",
    caseStudy: "/work/farmiq/",
    description: "FarmIQ is a livestock management platform designed to simplify daily farm records, give owners clearer oversight, and support animal traceability.",
    contribution: "I lead FarmIQ’s product strategy, direction, and design, turning farmer insights into actionable product requirements, prioritizing features, and driving decisions that shape the platform’s development and growth.",
    image: { src: "/images/work/farmiq.webp", width: 3840, height: 2160, alt: "FarmIQ Mobile Application branding beside its My Farm livestock dashboard" },
  },
  {
    id: "axon", title: "Axon Tickets", role: "Product Research & Design",
    caseStudy: "/work/axon-tickets/",
    description: "Axon Tickets helps organizers prepare for their events and manage participants from registration to entry.",
    contribution: "I led the brand direction, shaping its visual identity and positioning to align with the target audience and industry, establishing a consistent brand presence across the website and event portfolio.",
    image: { src: "/images/work/axon-tickets.webp", width: 3840, height: 2160, alt: "Axon Tickets branding and its website for event organizers" },
  },
  {
    id: "resguard", title: "ResGuard", role: "Product Strategy Lead",
    caseStudy: "/work/resguard/",
    description: "ResGuard is a digital receipt organizer designed to turn scattered receipts into organized records that are easy to find, review and export.",
    contribution: "I lead ResGuard’s product strategy, direction, and design, translating user needs into actionable product requirements, prioritizing features, and shaping an intuitive experience that simplifies receipt organization, tracking, and export.",
    image: { src: "/images/work/resguard.webp", width: 3840, height: 2160, alt: "ResGuard branding beside a preview of its digital receipt organizer" },
  },
  {
    id: "moomanage", title: "MooManage", role: "UI/UX Designer",
    description: "Designed intuitive, user-friendly mobile interfaces for MooManage, a dairy farm management platform.",
    image: null,
  },
];
