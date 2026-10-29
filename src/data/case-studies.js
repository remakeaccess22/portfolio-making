import { projects } from "./portfolio";

function projectDetails(id, slug, focus) {
  const project = projects.find(project => project.id === id);
  return {
    slug,
    title: project.title,
    role: project.role,
    focus,
    cover: project.image ? { ...project.image, caption: `${project.title} overview` } : null,
  };
}

export const caseStudies = {
  farmiq: {
    ...projectDetails("farmiq", "farmiq", "Agriculture Technology"),
    title: "FarmIQ",
    stage: "Working MVP; redesign in Figma",
    introduction: "Farmers often rely on scattered notebooks, spreadsheets, and manual records to manage livestock information.",
    problem: [
      "Testing FarmIQ’s working MVP with five farms revealed that while digital recordkeeping was valuable, navigating the platform and completing routine entries could be challenging.",
    ],
    contribution: [
      "I led FarmIQ’s product strategy, priorities, requirements, and UX direction, translating farmer feedback into actionable design improvements.",
      "I shaped the product experience, prioritized usability, and guided design decisions to better align the platform with farmers’ needs.",
    ],
    decisionsTitle: "Key Product Decisions",
    decisions: [
      {
        title: "01 — Simplify Core Workflows",
        choice: "Prioritize essential livestock-recording activities.",
        reasoning: "Focusing on frequently performed tasks helps reduce unnecessary steps and makes the platform easier to navigate.",
      },
      {
        title: "02 — Design Around User Needs",
        choice: "Introduce more focused interfaces based on user responsibilities.",
        reasoning: "Presenting relevant information and actions can reduce cognitive overload and improve usability.",
      },
      {
        title: "03 — Prioritize Usability",
        choice: "Refine the core experience before introducing additional complexity.",
        reasoning: "A focused product experience provides a stronger foundation for supporting everyday farm operations.",
      },
    ],
    evaluationTitle: "Testing & Findings",
    evaluation: ["FarmIQ’s working MVP was tested with five separate farms."],
    findings: [
      { label: "What worked", text: "Farmers recognized the value of centralized livestock records." },
      { label: "What needed improvement", text: "Navigation and data-entry experiences required simplification." },
      { label: "What changed", text: "Feedback informed a more focused UX direction and revised interface designs." },
    ],
    evaluationNote: "The redesigned experience is documented in Figma and has not yet undergone full usability validation.",
    nextIntroduction: "Evaluate the redesigned experience through three areas:",
    nextTests: [
      { title: "Usability", text: "Assess how easily users navigate essential workflows." },
      { title: "Task efficiency", text: "Identify opportunities to reduce unnecessary actions and errors." },
      { title: "User experience", text: "Gather feedback on clarity, accessibility, and ease of use." },
    ],
    learning: "A valuable product must also be practical to use.",
    reflection: "Working with farmers reinforced the importance of aligning product decisions with real user experiences and prioritizing usability over unnecessary complexity.",
  },
  "axon-tickets": {
    ...projectDetails("axon", "axon-tickets", "Event Technology"),
    stage: "Working application; UX refinements in development",
    introduction: "Event organizers often depend on manual processes to manage participant information, registration, and event-day operations.",
    problem: [
      "Research and observations from a fun run and a seminar highlighted challenges in coordinating participant records, managing check-ins, and maintaining visibility over event activities.",
    ],
    contribution: [
      "I led product research, UX design, coordination, testing, and reporting, translating real event observations and competitive research into product requirements and design improvements.",
      "My work focused on understanding operational challenges, evaluating existing workflows, and refining the platform’s user experience.",
    ],
    decisionsTitle: "Key Product Decisions",
    decisions: [
      {
        title: "01 — Focus on Organizer Experience",
        choice: "Design workflows around the needs of event organizers.",
        reasoning: "Centralizing essential event-management activities helps create a more organized and manageable experience.",
      },
      {
        title: "02 — Simplify Participant Interactions",
        choice: "Refine registration interfaces and user inputs.",
        reasoning: "Clearer forms and straightforward interactions can reduce friction and make registration easier to complete.",
      },
      {
        title: "03 — Improve Workflow Efficiency",
        choice: "Prioritize improvements to existing user journeys.",
        reasoning: "Refining essential interactions helps create a more consistent experience before introducing additional complexity.",
      },
    ],
    evaluationTitle: "Testing & Findings",
    evaluation: ["Axon Tickets has a working application that has been used in actual events."],
    findings: [
      { label: "What worked", text: "Qualitative feedback indicated easier check-in and fewer participant follow-ups." },
      { label: "What needed improvement", text: "Some user interactions required additional clarity and guidance." },
      { label: "What changed", text: "Event observations and user feedback informed further UX refinements." },
    ],
    evaluationNote: "Additional design improvements are documented in Figma and remain under development. Their impact has not yet been formally measured.",
    nextIntroduction: "Evaluate the user experience through three areas:",
    nextTests: [
      { title: "Usability", text: "Assess how easily organizers and participants complete essential tasks." },
      { title: "Workflow efficiency", text: "Identify unnecessary steps and opportunities for simplification." },
      { title: "User satisfaction", text: "Gather feedback on clarity, accessibility, and overall experience." },
    ],
    learning: "Digital transformation is about improving workflows, not simply replacing manual processes.",
    reflection: "Working with real events reinforced the importance of understanding operational needs and designing experiences that make existing processes easier to manage.",
  },
  resguard: {
    ...projectDetails("resguard", "resguard", "Financial Technology"),
    stage: "In development",
    introduction: "Individuals and businesses often struggle to manage scattered receipts, retrieve transaction records, and organize information for expense reviews.",
    problem: [
      "Research into existing receipt-management solutions helped identify opportunities to make organizing, finding, and reviewing records more straightforward.",
    ],
    contribution: [
      "I led ResGuard’s product research, strategy, requirements, and planning, translating competitor analysis and problem research into a defined product direction.",
      "I developed the Business Requirements Document (BRD), Product Requirements Document (PRD), and implementation plan to guide development priorities and align the product with its intended users.",
    ],
    decisionsTitle: "Key Product Decisions",
    decisions: [
      {
        title: "01 — Define the Core Experience",
        choice: "Focus the product around essential receipt-management activities.",
        reasoning: "Establishing clear user workflows helps create a more intuitive experience and avoids unnecessary complexity.",
      },
      {
        title: "02 — Translate Research into Requirements",
        choice: "Develop structured business and product requirements based on research findings.",
        reasoning: "Clear documentation connects identified problems with product objectives, feature priorities, and implementation needs.",
      },
      {
        title: "03 — Establish a Focused Product Direction",
        choice: "Define a manageable initial scope aligned with the product’s broader vision.",
        reasoning: "Prioritizing essential capabilities creates a clearer foundation for development and future improvements.",
      },
    ],
    evaluationTitle: "Progress & Findings",
    evaluation: ["ResGuard is currently in development, with its product direction and initial requirements established through research and planning."],
    findings: [
      { label: "What was established", text: "Product requirements, development priorities, and an implementation plan." },
      { label: "What informed the direction", text: "Competitor analysis, problem research, and professional domain feedback." },
      { label: "What remains to be validated", text: "The usability and effectiveness of the proposed product experience." },
    ],
    evaluationNote: "The product’s end-to-end user experience has not yet undergone planned validation.",
    nextIntroduction: "Evaluate the product experience through three areas:",
    nextTests: [
      { title: "Usability", text: "Assess how easily users manage and navigate their receipt records." },
      { title: "Accessibility", text: "Evaluate how efficiently users locate relevant information." },
      { title: "Workflow effectiveness", text: "Determine whether the experience supports users’ receipt-management needs." },
    ],
    learning: "Strong product decisions begin with understanding the problem and defining clear priorities.",
    reflection: "Developing ResGuard reinforced the importance of research-driven planning, structured requirements, and maintaining a focused product direction throughout development.",
  },
};

export const caseStudyOrder = ["farmiq", "axon-tickets", "resguard"];
