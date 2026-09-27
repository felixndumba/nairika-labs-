import { Blocks, Brush, CloudCog, Code2, MessagesSquare, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  number: string;
  icon: LucideIcon;
  title: string;
  short: string;
  promise: string;
  overview: string;
  outcomes: string[];
  deliverables: string[];
  stages: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "system-development",
    number: "01",
    icon: Code2,
    title: "System Development",
    short: "Custom platforms that simplify operations and grow with your organisation.",
    promise: "Turn complex operations into one dependable system.",
    overview: "We design and engineer secure, maintainable business systems around the way your teams actually work. From internal tools to customer-facing platforms, every decision supports clarity, adoption and long-term growth.",
    outcomes: ["Fewer manual processes", "Reliable business data", "Faster team workflows", "A platform ready to scale"],
    deliverables: ["Product and workflow discovery", "Technical architecture", "Custom application development", "Integrations and data migration", "Testing, launch and ongoing support"],
    stages: [
      { title: "Map the operation", text: "We document users, workflows, data and the business outcomes the system must support." },
      { title: "Build in clear releases", text: "You review working software throughout the project, not only at the end." },
      { title: "Launch with confidence", text: "We test, train, document and support your team after release." },
    ],
  },
  {
    slug: "web-development",
    number: "02",
    icon: Blocks,
    title: "Web Development",
    short: "Fast, expressive websites and web applications engineered to perform.",
    promise: "A web presence that works as hard as your business does.",
    overview: "We build polished marketing websites, portals and web applications that communicate clearly, load quickly and turn attention into meaningful action on every screen.",
    outcomes: ["A stronger digital presence", "Fast and accessible pages", "Clear conversion journeys", "Simple content management"],
    deliverables: ["Content and experience strategy", "Responsive interface development", "CMS and business integrations", "Performance and accessibility testing", "Deployment and care plans"],
    stages: [
      { title: "Define the journey", text: "We align audiences, messages and actions before visual design begins." },
      { title: "Design and develop", text: "Interface and engineering progress together for a cohesive result." },
      { title: "Optimise and grow", text: "After launch, we monitor performance and support future improvements." },
    ],
  },
  {
    slug: "it-consultation",
    number: "03",
    icon: MessagesSquare,
    title: "IT Consultation",
    short: "Practical technology direction, architecture and guidance without the jargon.",
    promise: "Make better technology decisions with a trusted partner beside you.",
    overview: "We help leaders understand what to improve, what to invest in and what to avoid. Our advice connects technology choices to cost, risk, team readiness and business priorities.",
    outcomes: ["A practical technology roadmap", "Reduced delivery risk", "Better vendor decisions", "Clear priorities and budgets"],
    deliverables: ["Technology and workflow audit", "Architecture review", "Digital transformation roadmap", "Vendor and platform assessment", "Implementation oversight"],
    stages: [
      { title: "Listen and assess", text: "We understand your business context, current tools, constraints and ambitions." },
      { title: "Recommend clearly", text: "You receive prioritised, plain-language options with risks and trade-offs." },
      { title: "Support execution", text: "We can remain alongside your team to guide delivery and measure progress." },
    ],
  },
  {
    slug: "ui-ux-design",
    number: "04",
    icon: Brush,
    title: "UI/UX Design",
    short: "Useful, distinctive digital experiences shaped around real people.",
    promise: "Make every interaction feel considered, clear and unmistakably yours.",
    overview: "We translate business goals and user needs into intuitive journeys and confident visual systems. The result is a product people understand quickly and enjoy returning to.",
    outcomes: ["Simpler user journeys", "A consistent visual language", "Validated product decisions", "Design ready for development"],
    deliverables: ["User and stakeholder research", "Information architecture", "Wireframes and interactive prototypes", "Visual interface design", "Design system and developer handoff"],
    stages: [
      { title: "Understand people", text: "We study user goals, behaviours and friction across the current experience." },
      { title: "Prototype the answer", text: "Early flows make ideas tangible and testable before development investment." },
      { title: "Refine every detail", text: "We create a responsive visual system and document it for consistent delivery." },
    ],
  },
  {
    slug: "cloud-devops",
    number: "05",
    icon: CloudCog,
    title: "Cloud & DevOps",
    short: "Reliable infrastructure, automation and deployment for modern products.",
    promise: "Infrastructure that keeps your products available and your team moving.",
    overview: "We modernise infrastructure and delivery workflows so your applications can launch safely, recover quickly and scale without unnecessary operational complexity.",
    outcomes: ["More reliable releases", "Lower operational friction", "Improved visibility", "Infrastructure ready to scale"],
    deliverables: ["Cloud readiness assessment", "Infrastructure architecture", "Automated deployment pipelines", "Monitoring and alerting", "Migration and operational support"],
    stages: [
      { title: "Review the foundation", text: "We assess applications, infrastructure, release practices and operational risk." },
      { title: "Automate safely", text: "We introduce repeatable infrastructure and deployment workflows in controlled stages." },
      { title: "Operate with visibility", text: "Monitoring, documentation and support help your team respond confidently." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}