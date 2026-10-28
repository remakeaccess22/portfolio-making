// Event facts come from Jude's account. Add only verified credit relationships.
// A credit group looks like: { label: "Partners", logos: [{ name, src, url }] }.
// Keep organizers, sponsors, and partners in separate, accurately labeled groups.
const scaleArtwork = "/images/events/architecting-scale-2026.jpg";
const spotlightArtwork = "/images/events/startup-spotlight-2026.jpg";

export const initiatives = [
  {
    slug: "startup-and-technology-summit-2026",
    name: "Startup and Technology Summit 2026",
    listingRole: "Project Coordinator & Startup Spotlight Speaker",
    year: "2026",
    category: "Startup & technology",
    minimalHeader: true,
    dateLabel: "September 22–23, 2026",
    role: "Project Coordinator & Co-Organizer",
    additionalRole: "Startup Spotlight Speaker",
    location: "City Hall Atrium, Tagum City",
    summary: "Coordinating the summit in Tagum City, and sharing FarmIQ at its Startup Spotlight.",
    description: "I helped coordinate the Startup and Technology Summit 2026 in Tagum City and represented FarmIQ as a speaker at Startup Spotlight.",
    sections: [
      {
        heading: "Organizing the Startup and Technology Summit 2026",
        role: "Project Coordinator & Co-Organizer",
        paragraphs: ["I helped lead the planning, coordination, and execution of the Startup and Technology Summit 2026, held on September 22–23 at the Tagum City Hall Atrium. The regional innovation event was led by DOST Davao del Norte and the City Government of Tagum through the Tagum City Business and Incentive Center."],
      },
      {
        heading: "Speaking at Startup Spotlight",
        role: "Startup Founder & Speaker",
        paragraphs: ["I represented FarmIQ at Startup Spotlight on September 23, 2026, pitching our agricultural technology platform and sharing entrepreneurial insights with aspiring founders and innovators. My role combined event coordination with speaking about startup building and agricultural innovation."],
      },
    ],
    photo: { src: spotlightArtwork, alt: "FarmIQ being presented at Startup Spotlight, with the original RSTW event artwork", caption: "Startup Spotlight · FarmIQ presentation", width: 1440, height: 960 },
    credits: [{ label: "Event program & institutional marks", logos: [
      { name: "Regional Science and Technology Week 2026 — Davao del Norte", src: "/images/events/rstw-2026-davao-del-norte.png", width: "14rem" },
      { name: "Department of Science and Technology — Davao Region", src: "/images/events/dost-davao-region.png", width: "8rem" },
    ] }],
    sources: [{ label: "Tagum Startup Week — official event details", url: "https://axontickets.online/events/tagum-startup-week-rol9w" }, { label: "City Government of Tagum — Summit report", url: "https://www.facebook.com/tagumcity/posts/pfbid021wNHcpqFP6j2LpH4izE3JQg1Bk1rZYUDvFmzgin59vdndoviov6aVXeqb4hUHSwSl" }, { label: "My reflection on the Summit and Startup Spotlight", url: "https://www.facebook.com/Alayacyacjude22/posts/pfbid0Qj2fnjXwwegxrvCu1tiR2sgqspkHEoPSFgQyPefzp1fnhQbrfYMt9SKuZKNbHykyl" }],
  },
  {
    slug: "run-for-love-2026",
    name: "Run for Love 2026",
    listingRole: "Organizer",
    year: "2026",
    category: "Community event",
    minimalHeader: true,
    role: "Organizer & Marketing Head",
    location: "Anflo Industrial Estate",
    dateLabel: "April 26, 2026",
    summary: "A fun run at Anflo Industrial Estate, with more than 500 runners.",
    description: "Led the marketing strategy and creative direction for Run for Love 2026, a community fun run held at Anflo Industrial Estate, attracting over 500 runners. Directed promotional campaigns, participant acquisition, and sponsor visibility initiatives while contributing to the event’s overall execution.",
    statistic: { value: "500+", label: "runners" },
    sections: [
      {
        heading: "Leading Marketing and Creative Direction",
        role: "Marketing Head",
        paragraphs: ["Spearheaded the event’s marketing strategy, overseeing the creative team, social media campaigns, sponsorship promotions, and participant acquisition. Led the development and execution of marketing initiatives that strengthened event visibility and drove community engagement."],
      },
      {
        heading: "Organizing Run for Love 2026",
        role: "Event Organizer",
        paragraphs: ["Collaborated with the organizing team in planning and executing Run for Love 2026, contributing to event coordination, stakeholder engagement, and the successful delivery of a community running event."],
      },
    ],
    photo: { src: "/images/events/run-for-love-2026-start.png", alt: "Run for Love 2026 start arch at Anflo Industrial Estate at night", caption: "Run for Love 2026 · Anflo Industrial Estate", width: 2048, height: 1365 },
    credits: [{ label: "Sponsors & partners", logos: [
      { name: "ANFLO Industrial Estate", src: "/images/events/run-for-love/anflo.png", width: "8rem" },
      { name: "DITO Telecommunity", src: "/images/events/run-for-love/dito.png", width: "5.5rem" },
      { name: "Gatorade", src: "/images/events/run-for-love/gatorade.png", width: "3.5rem" },
      { name: "Acacia Hotel Davao", src: "/images/events/run-for-love/acacia.png", width: "6.5rem" },
      { name: "Grab", src: "/images/events/run-for-love/grab.png", width: "6rem" },
      { name: "Security Bank", src: "/images/events/run-for-love/security-bank.png", width: "4rem" },
      { name: "McDonald’s", src: "/images/events/run-for-love/mcdonalds.png", width: "3.5rem" },
      { name: "Made Lucid Studio", src: "/images/events/run-for-love/made-lucid.png", width: "7rem" },
    ] }],
    sources: [{ label: "Run for Love — official event page", url: "https://www.facebook.com/runforlove.run" }, { label: "Official sponsor & partner acknowledgements", url: "https://www.facebook.com/runforlove.run/posts/pfbid025QeAh7AnXSJNdy2Vj7ZGGzty4sPLtNcYHRVQpKFJiMtVqFhPmUNEds5Dv2zgf8kHl" }],
  },
  {
    slug: "architecting-scale-2026",
    name: "Architecting Scale 2026",
    listingRole: "Organizer",
    subtitle: "The startup corporate architecture and banking system",
    year: "2026",
    dateLabel: "March 13, 2026",
    location: "FairCrown Suite, Matina, Davao City",
    category: "Startup initiative",
    minimalHeader: true,
    role: "Organizer & Marketing",
    initiative: "Pacepoint Entertainment",
    summary: "A Pacepoint Entertainment initiative on startup corporate architecture and banking.",
    description: "Contributed to the planning and execution of Architecting Scale 2026, a startup-focused initiative held on March 13, 2026, at FairCrown Suite in Matina, Davao City. Led creative direction and marketing efforts, supporting an event that brought together over 40 entrepreneurs and four partner organizations to foster business connections and collaboration.",
    sections: [
      {
        heading: "Leading Marketing and Creative Direction",
        role: "Marketing Lead",
        paragraphs: ["Directed the event’s creative and promotional efforts, supervising the creative team, managing social media campaigns, and overseeing marketing materials. Ensured consistent event branding and partner visibility across promotional channels."],
      },
      {
        heading: "Organizing Architecting Scale 2026",
        role: "Event Organizer",
        paragraphs: ["Contributed to event planning, logistics, and on-site execution, collaborating with the organizing team to deliver a startup-focused initiative that connected entrepreneurs with industry stakeholders."],
      },
    ],
    photo: { src: scaleArtwork, alt: "Group photograph from Architecting Scale at FairCrown Suite, with the event’s original partner credits", caption: "Architecting Scale", width: 2048, height: 1152 },
    credits: [
      { label: "Partners", logos: [
        { name: "FairCrown Suite", src: "/images/events/architecting-scale/faircrown.png", width: "5rem" },
        { name: "Security Bank — Davao North Diversion", src: "/images/events/architecting-scale/security-bank.png", width: "5rem" },
        { name: "Sploop", src: "/images/events/architecting-scale/sploop.png", width: "5rem" },
        { name: "Aevo Bleu", src: "/images/events/architecting-scale/aevo-bleu.png", width: "8rem" },
      ] },
    ],
    sources: [{ label: "Pacepoint — official event recap and partner credits", url: "https://www.facebook.com/pacepoint.offical/posts/pfbid02jWwmGuFToFs87vH7SzH5BV45xLSFAGHprk6qU9C7cMAuTkGmtBzneuXDfvGwSw4il" }],
  },
  {
    slug: "mindanao-dairy-congress-2025",
    name: "Mindanao Dairy Congress 2025",
    listingName: "Mindanao Dairy Congress",
    listingRole: "Speaker",
    year: "2025",
    category: "Speaking",
    minimalHeader: true,
    dateLabel: "September 4–5, 2025",
    role: "Startup Founder & Speaker",
    location: "KCC Mall, General Santos City",
    summary: "Presenting MooManage at a gathering of dairy farmers and industry experts.",
    description: "Represented MooManage at Mindanao Dairy Congress 2025, held at KCC Mall in General Santos City. Pitched the dairy management platform to approximately 1,000 farmers, industry experts, and stakeholders, generating interest, industry connections, and potential partnership opportunities.",
    sections: [
      {
        heading: "Pitching MooManage",
        role: "Startup Founder & Speaker",
        paragraphs: ["Led MooManage’s startup pitch, presenting its vision for digital dairy farm management to industry stakeholders. Showcased the platform’s potential to modernize farm operations and support technology adoption in the dairy sector."],
      },
      {
        heading: "Building Industry Connections",
        role: "Industry Engagement & Business Development",
        paragraphs: ["Engaged with dairy farmers, industry experts, and potential partners, generating interest in MooManage and establishing valuable industry contacts for future collaboration and business development."],
      },
    ],
    photo: { src: "/images/events/mindanao-dairy-congress-2025.jpg", alt: "Presenter on stage in front of a MooManage screen at Mindanao Dairy Congress 2025", caption: "Mindanao Dairy Congress 2025 · MooManage", width: 4032, height: 3024 },
    credits: [],
    sources: [{ label: "Mindanao Dairy Congress — Department of Agriculture", url: "https://rfo12.da.gov.ph/?p=14511" }],
  },
  {
    slug: "umsdc-project-showcase",
    name: "UMSDC Project Showcase",
    listingRole: "Speaker",
    subtitle: "University of Mindanao Student Developers Community",
    category: "Speaking",
    minimalHeader: true,
    role: "Startup Founder & Speaker",
    summary: "Sharing MooManage, a dairy management platform, at the UMSDC Project Showcase.",
    description: "Invited as a startup founder to present MooManage at the University of Mindanao Student Developers Community (UMSDC) Project Showcase. Shared the platform’s journey from identifying challenges in dairy farming to developing a technology-driven solution, inspiring aspiring developers and entrepreneurs.",
    sections: [
      {
        heading: "Showcasing MooManage",
        role: "Startup Founder & Speaker",
        paragraphs: ["Delivered a startup pitch highlighting real-world challenges in dairy farm management and how MooManage was designed to address them through digital innovation. Demonstrated the connection between problem identification, product development, and entrepreneurial thinking."],
      },
      {
        heading: "Inspiring Future Innovators",
        role: "Technology & Entrepreneurship Advocacy",
        paragraphs: ["Engaged with IT students, sharing insights into building technology-driven solutions for real-world problems. Received positive feedback and inspired students to explore entrepreneurship and apply their technical skills beyond the classroom."],
      },
    ],
    photo: { src: "/images/events/umsdc-project-showcase.jpg", alt: "Presenter discussing MooManage beside a projected mobile app at the UMSDC Project Showcase", caption: "UMSDC Project Showcase · MooManage", width: 2048, height: 1155 },
    credits: [],
    sources: [],
  },
];

export function getInitiative(slug) {
  return initiatives.find((initiative) => initiative.slug === slug);
}

export function initiativeHref(slug) {
  return `/initiatives/${encodeURIComponent(slug)}/`;
}
