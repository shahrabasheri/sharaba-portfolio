export interface ProjectGapTab {
  label: string;
  painPoints: string[];
}

export interface HeuristicRow {
  reference: string;
  observation: string;
  issue: string;
  recommendation: string;
}

export interface JourneyStage {
  stage: string;
  goals: string;
  painPoints: string;
  emotion: string;
  opportunities: string;
}

export interface VisionPillar {
  title: string;
  description: string;
}

export interface ProjectDetail {
  roles: string[];
  duration: string;
  introduction?: string;
  challenge: string;
  challengeQuote?: string;
  challengeBullets?: string[];
  gaps?: {
    description: string;
    tabs: ProjectGapTab[];
  };
  vision?: string;
  visionPillars?: VisionPillar[];
  approachIntro?: string;
  heuristicEval?: HeuristicRow[];
  journeyMap?: JourneyStage[];
  designHighlights?: { title: string; description: string; image?: string }[];
  flowImage?: string;
  flowImageCaption?: string;
  walkthroughImage?: string;
  walkthroughCaption?: string;
}

export interface Project {
  slug: string;
  company: string;
  role: string;
  title: string;
  subtitle?: string;
  year?: string;
  problem: string;
  outcome: string;
  description: string;
  tags: string[];
  image: string;
  bgColor: string;
  link?: string;
  comingSoon?: boolean;
  conceptProject?: boolean;
  detail?: ProjectDetail;
  nextProject?: string;
}

export const projects: Project[] = [
  {
    slug: "upc",
    company: "6D Technologies",
    role: "Product Designer · Lead",
    title: "Unified Product Catalogue",
    problem:
      "PMs were making errors and losing time in a portal that had no clear flow.",
    outcome:
      "6 heuristic findings, a 4-stage journey map, and 5 design changes that replaced the raw list with offer cards and a step-by-step creation flow.",
    description:
      "PMs were making errors and losing time because the system had no clear flow. I started with a heuristic evaluation to figure out exactly what was broken. Then I replaced the raw list view with offer cards (so a PM can see everything they need at a glance) and built a step-by-step flow for creating new offers.",
    tags: ["Heuristic Evaluation", "IA", "Enterprise SaaS"],
    image: "/images/project-upc.jpg",
    bgColor: "bg-[#0e5a8a]",
    nextProject: "chatbot",
    detail: {
      roles: ["Heuristic Evaluation", "Visual Design"],
      duration: "2 weeks",
      introduction:
        "UPC is the platform 6D Technologies' clients use to manage telecom product offers, families, offer groups, specifications, and prices. The version that existed had navigation issues that were costing product managers time and causing real errors. The brief was straightforward: clean up the navigation, simplify the offer creation flow, and reduce the number of places a PM has to look.",
      challenge:
        "PMs were spending too much time clicking around a confusing interface, and the system had no clear flow. The result was errors, wasted time, and frustration.",
      challengeBullets: [
        "Fragmented navigation: users had to switch between multiple menus to create a product offer.",
        "Complex forms: essential fields were scattered across different tabs.",
        "Lack of visual hierarchy: the interface lacked structure, making it hard to track progress.",
        "Manual dependencies: certain mandatory filters had to be pre-selected, adding unnecessary steps.",
      ],
      approachIntro:
        "Before doing anything visual, I ran a heuristic evaluation of the existing interface to find what was actually broken and what just felt off.",
      heuristicEval: [
        {
          reference: "Error prevention",
          observation:
            "Users receive an error message when trying to create a new product offer without selecting a product family and offer group.",
          issue:
            "Users are not informed about the required steps before attempting to create a new product offer.",
          recommendation:
            "Use conditional validation to ensure required fields are filled out before allowing users to proceed.",
        },
        {
          reference: "User control & freedom",
          observation:
            "Users are required to navigate away from the current task to create or manage related entities like product families or offer groups.",
          issue:
            "Workflow disruption: users lose progress when navigating away. Once they leave, there's no quick way to return.",
          recommendation:
            "Implement inline creation features or modals so users can create related entities without leaving the current task.",
        },
        {
          reference: "Consistency & standards",
          observation:
            "The portal uses inconsistent terminologies across different sections, leading to confusion.",
          issue:
            "Variations in how different sections are structured cause confusion and increase the learning curve.",
          recommendation:
            "Standardize the design patterns and navigation structures across all sections of the portal.",
        },
        {
          reference: "Flexibility & efficiency",
          observation:
            "The portal lacks shortcuts or advanced options for experienced users.",
          issue:
            "Experienced users may find the step-by-step process frustrating when they want to complete tasks quickly.",
          recommendation:
            "Allow users to save templates for frequently used configurations, batch-create multiple offers, and import/export product data.",
        },
        {
          reference: "Aesthetic & minimalist design",
          observation:
            "Two-level overlays contribute to visual clutter and can overwhelm users.",
          issue:
            "Multiple overlays create a crowded interface, making it challenging to navigate and understand the workflow.",
          recommendation:
            "Ensure any overlay is clearly associated with the primary task, with a clear option to close or return without losing progress.",
        },
        {
          reference: "Recognition over recall",
          observation:
            'The "+" button is used for multiple actions (modify, duplicate, delete) and the "<<" icon for product offer versioning is not intuitive.',
          issue:
            "The icons do not visually communicate their intended function, making it difficult to understand what they do.",
          recommendation:
            "Replace the ambiguous Add button with a More Options button. Redesign the View Version icon to better represent versioning.",
        },
      ],
      journeyMap: [
        {
          stage: "Login & Setup",
          goals: "Quickly access the portal and the right context.",
          painPoints: "Multiple steps before any productive work begins.",
          emotion: "Frustrated",
          opportunities: "Streamline entry; persist context across sessions.",
        },
        {
          stage: "Browse & Find",
          goals: "Locate an existing offer or template to work from.",
          painPoints: "No clear hierarchy; searching is inefficient.",
          emotion: "Confused",
          opportunities: "Card-based layout with status, type, and quick actions.",
        },
        {
          stage: "Create New Offer",
          goals: "Build a new product offer end to end.",
          painPoints: "Fields scattered across tabs; high cognitive load.",
          emotion: "Overwhelmed",
          opportunities: "Step-by-step flow with progress indicator and live preview.",
        },
        {
          stage: "Review & Publish",
          goals: "Confirm the offer matches what the customer will see.",
          painPoints: "No way to preview the final state.",
          emotion: "Uncertain",
          opportunities: "Real-time preview panel mirroring the live offer.",
        },
      ],
      vision:
        "Redesign the catalogue with offer cards, a step-by-step creation flow, and clear status tracking, so PMs can spend their time on the offers themselves and not on figuring out the tool.",
      designHighlights: [
        {
          title: "Card-based offer view",
          description:
            "Each card looks the way the offer will look once it's live, so PMs see the finished thing instead of a form. You can scan a list of cards in a few seconds.",
        },
        {
          title: "Quick create and duplicate",
          description:
            "Creating a new offer is now easy to find. For similar offers, PMs can duplicate an existing one and edit, instead of starting from scratch.",
        },
        {
          title: "Step indicator",
          description:
            "Define, Customise Offer, Preview & Submit. The step bar tells you where you are in the flow.",
        },
        {
          title: "Live preview panel",
          description:
            "A preview panel on the right shows the offer updating as you fill in details. You don't have to imagine what it'll look like.",
        },
        {
          title: "Modular add-ons",
          description:
            "Optional sections like Eligibility Offers, Bucket & Counter, and Usage Rate are tucked behind an Add button instead of taking up space upfront.",
        },
      ],
      walkthroughImage: "/images/upc-designs.png",
      walkthroughCaption:
        "Old design and new design side by side, plus the new step-by-step creation flow.",
    },
  },
  {
    slug: "chatbot",
    company: "6D Technologies",
    role: "Product Designer · Lead",
    title: "AI Chatbot for the Telecom Industry",
    problem:
      "Customers got stuck in scripted bot loops, and agents had to keep asking them to repeat everything.",
    outcome:
      "Interviewed 10+ people across 4 personas, mapped 10+ scenarios, and designed the chat, knowledge base, agent dashboard, and admin views.",
    description:
      "An AI chatbot for customer support, over text and voice. I mapped out 10+ conversation scenarios and made sure each one either resolves the issue or hands off cleanly to a human agent, with the full chat history attached.",
    tags: ["Conversational UI", "Journey Mapping", "Voice + Text"],
    image: "/images/project-chatbot.jpg",
    bgColor: "bg-[#1a2a3a]",
    nextProject: "nbtc",
    detail: {
      roles: [
        "User Research",
        "User Journey Mapping",
        "Information Architecture",
        "Visual Design",
      ],
      duration: "3 months",
      introduction:
        "Imagine this: you're a frustrated telecom customer facing yet another internet outage. You open the support chatbot, hoping for a quick fix, but instead you're trapped in an endless loop of scripted responses. Finally, after exhausting your patience, the issue gets escalated to a human agent who asks you to repeat everything.",
      challenge:
        "Telecom customer support was failing on both sides. Customers got stuck in scripted bot loops with no escape. Agents inherited those conversations with zero context and had to re-ask everything. The result: long waits, frustrated customers, exhausted agents, and unresolved issues.",
      challengeQuote:
        "What if customer support felt less like battling a machine and more like having an actual conversation?",
      gaps: {
        description:
          "I interviewed 10+ people across the product and sales teams to understand each role: what they do day to day, what frustrates them, and what would help.",
        tabs: [
          {
            label: "Customers",
            painPoints: [
              "Long Wait Times",
              "Repetitive Information",
              "Limited Self-service Options",
              "Lack of Context",
              "Inconsistent Support",
              "Language Barriers",
            ],
          },
          {
            label: "Customer Service Reps",
            painPoints: [
              "High Volume of Inquiries",
              "Communication Gaps",
              "Inefficient Tools",
              "Time Constraints",
              "Limited Customer Engagement",
              "Inter-department Communication",
            ],
          },
          {
            label: "Technicians",
            painPoints: [
              "Complex Procedures",
              "Repetitive Tasks",
              "Limited Customer Data",
              "Time-consuming Data Entry",
              "Manual Lookups",
            ],
          },
          {
            label: "Sales Teams",
            painPoints: [
              "Inefficient Lead Generation",
              "Navigation Issues",
              "Limited Customer Insights",
              "Manual Lead Qualification",
              "Cross-department Silos",
            ],
          },
        ],
      },
      vision:
        "Design a support platform where users find answers fast, agents resolve cases without repeating themselves, and the bot can hand off to a human cleanly when it needs to. Across text and voice.",
      visionPillars: [
        {
          title: "Conversational UI",
          description:
            "Understand user intent. Provide quick, consistent responses to common queries.",
        },
        {
          title: "Natural Language Processing",
          description:
            "Detect intent and language, route accordingly, and adapt to phrasing.",
        },
        {
          title: "Machine Learning, Continuous Improvement",
          description:
            "Continuously refine responses based on user interactions and feedback.",
        },
        {
          title: "Contextual Understanding & Memory",
          description:
            "Maintain user profiles and interaction history so handoffs carry full context.",
        },
        {
          title: "Multilingual + Sentiment",
          description:
            "Auto-detect preferred language. Read emotional cues to tailor tone and escalation.",
        },
        {
          title: "Voice + Knowledge Base Integration",
          description:
            "Voice interaction. CRM, billing, and KBS integrations for real-time data.",
        },
      ],
      designHighlights: [
        {
          title: "AI chat interface",
          description:
            "From simple cases (password reset) to complex ones (network outage), every flow is mapped. When the bot hands a conversation to an agent, the full chat history goes with it.",
        },
        {
          title: "Knowledge library, not hidden FAQs",
          description:
            "Categorised articles for users, real-time suggestions for agents, and a community layer on top: comments, follow-up questions, upvotes.",
        },
        {
          title: "CRM agent dashboard",
          description:
            "Escalation alerts, customer context (transcripts + suggested articles in one view), and chatbot-assist during live calls.",
        },
        {
          title: "Admin controls",
          description:
            "Performance metrics for both bot and KB; KBS management; user permissions and activity monitoring.",
        },
      ],
      flowImage: "/images/chatbot-flow.png",
      flowImageCaption:
        "The full conversation architecture. 10+ scenarios, each branching based on user intent, emotion, and query type. Every path leads to either a resolved answer or a smooth handoff to a live agent.",
      walkthroughImage: "/images/chatbot-designs.png",
      walkthroughCaption:
        "AI chat interface, the knowledge library, and the CRM agent dashboard.",
    },
  },
  {
    slug: "nbtc",
    company: "Freelance · NBTC Group",
    role: "Sole Designer",
    title: "NBTC Group Website Redesign",
    subtitle: "Engineering & Contracting",
    problem:
      "A 35+ year industrial group with 147+ projects and offices in six countries had a website that hid all of it.",
    outcome:
      "Rebuilt the site around 4 service lines with a structured equipment catalogue and a clearer track-record story. Now live.",
    description:
      "A full website redesign for a large industrial group. The new site shows the scale of their work across the Gulf, USA, and India, and makes their services easy to navigate.",
    tags: ["Web Redesign", "IA", "Live"],
    image: "/images/project-nbtc.jpg",
    bgColor: "bg-[#1a3a6a]",
    nextProject: "gallery",
    detail: {
      roles: ["Heuristic Evaluation", "User Journey Mapping", "Visual Design"],
      duration: "1 month",
      introduction:
        "NBTC Group, a leading provider of engineering, construction, and equipment leasing services in Kuwait with operations across Saudi Arabia, UAE, Bahrain, USA, and India, approached me to redesign their website. Their existing site faced challenges with navigation complexity, outdated design, and difficulty in effectively communicating their diverse service offerings. The site is now live.",
      challenge:
        "A 35+ year industrial group with 147+ projects and offices in six countries, on a website that hid all of it. Navigation was complicated, the design was old, and the range of services was buried.",
      vision:
        "Build a digital presence that matches the excellence of a company that has completed 147+ projects across 60+ countries.",
      visionPillars: [
        {
          title: "Easier to navigate",
          description:
            "Build a clear navigation system so people can find what they need without hunting for it.",
        },
        {
          title: "Elevate brand image",
          description:
            "Develop a modern and visually appealing design that reflects NBTC's professionalism and expertise.",
        },
        {
          title: "Clearly communicate services",
          description:
            "Showcase NBTC's diverse service offerings and their value proposition to potential clients.",
        },
      ],
      designHighlights: [
        {
          title: "The old design",
          description:
            "The original interface had no visual hierarchy, so every element was competing for attention. Users were scanning the same page multiple times before finding what they needed.",
        },
        {
          title: "Service-first IA",
          description:
            "Restructured the site around the four service lines (Heavy Equipment Leasing, Engineering & Construction, Fabrication, Inspection) so prospects can find their use case in one click.",
        },
        {
          title: "Equipment catalogue",
          description:
            "A browsable equipment catalogue with detail pages for each item: overview, specifications, service and support. Replaced the old flat list.",
        },
        {
          title: "Track record up front",
          description:
            "Pulled the 35+ year history, awards, and milestones onto the homepage so prospects can see the firm's track record in a few seconds.",
        },
      ],
      walkthroughImage: "/images/nbtc-designs.png",
      walkthroughCaption:
        "Old homepage, new homepage, and the page system across services, equipment detail, and projects.",
    },
  },
  {
    slug: "gallery",
    company: "CodeCraft Technologies",
    role: "Visual Designer",
    title: "Visual Design Gallery",
    subtitle: "Selected explorations",
    problem:
      "Side projects where I get to push on craft outside of client constraints.",
    outcome:
      "3 app concepts: Music, Smart Home, and Hyper Local Delivery.",
    description:
      "Side projects where I get to play with visual identity, typography, colour, and composition outside of client work.",
    tags: ["Visual Design", "Mobile App", "Brand"],
    image: "/images/project-gallery.jpg",
    bgColor: "bg-[#8B6914]",
    nextProject: "upc",
    detail: {
      roles: ["Visual Design", "Brand Identity", "Typography"],
      duration: "Ongoing",
      challenge:
        "Client work pays the bills, but it doesn't always let you push on craft. This gallery is where I do that. No brief, no stakeholders, just visual identity, typography, colour, and composition.",
      vision:
        "A small set of design explorations to show range outside of client work.",
      designHighlights: [
        {
          title: "Music App",
          description:
            "A music streaming app exploration. Dark theme, accent colours that match the rhythm of the section, and an album-first layout.",
          image: "/images/gallery-music.png",
        },
        {
          title: "Smart Home App",
          description:
            "A smart home control app. Soft gradient palette and a calm layout where each control group feels like its own room.",
          image: "/images/gallery-smarthome.png",
        },
        {
          title: "Hyper Local Delivery",
          description:
            "An idea for an app that brings the local-store shopping experience online. Ready-to-cook recipe kits you can customise. Warm, food-led visuals.",
          image: "/images/gallery-hyperlocal.png",
        },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project | undefined {
  const current = getProjectBySlug(slug);
  if (current?.nextProject) {
    return getProjectBySlug(current.nextProject);
  }
  return undefined;
}
