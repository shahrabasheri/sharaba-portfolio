export interface ProjectGapTab {
  label: string;
  painPoints: string[];
}

export interface HeuristicRow {
  reference: string;
  referenceImage?: string;
  observation: string;
  issue: string;
  recommendation: string;
}

export interface JourneyStage {
  stage: string;
  interactions?: string | string[];
  actions?: string | string[];
  goals?: string | string[];
  feelings?: string | string[];
  painPoints?: string | string[];
  opportunities?: string | string[];
}

export interface UserPersona {
  name: string;
  role: string;
}

export interface VisionPillar {
  title: string;
  description: string;
}

export interface ProjectDetail {
  roles: string[];
  duration: string;
  introduction?: string;
  challenge?: string;
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
  userPersona?: UserPersona;
  userGoals?: string[];
  journeyMap?: JourneyStage[];
  comparison?: {
    before: string;
    after?: string;
    beforeLabel?: string;
    afterLabel?: string;
    caption?: string;
  };
  designHighlights?: { title: string; description: string; image?: string | string[] }[];
  designSections?: {
    image?: string;
    imageAlt?: string;
    highlights: { title: string; description: string }[];
  }[];
  takeaways?: {
    intro?: string;
    items: { title: string; description: string }[];
  };
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
    role: "Product Designer",
    title: "Unified Product Catalogue",
    problem:
      "PMs were making errors and losing time in a portal that had no clear flow.",
    outcome:
      "6 heuristic findings, a 4-stage journey map, and 5 design changes that replaced the raw list with offer cards and a step-by-step creation flow.",
    description:
      "PMs were making errors and losing time because the system had no clear flow. I started with a heuristic evaluation to figure out exactly what was broken. Then I replaced the raw list view with offer cards (so a PM can see everything they need at a glance) and built a step-by-step flow for creating new offers.",
    tags: ["Heuristic Evaluation", "IA", "Enterprise SaaS"],
    image: "/images/project-upc.svg",
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
          referenceImage: "/images/upc-heuristic/row-1.png",
          observation:
            "Users receive an error message when trying to create a new product offer without selecting a product family and offer group.",
          issue:
            "Users are not informed about the required steps before attempting to create a new product offer.",
          recommendation:
            "Use conditional validation to ensure required fields are filled out before allowing users to proceed.",
        },
        {
          reference: "User control & freedom",
          referenceImage: "/images/upc-heuristic/row-2.png",
          observation:
            "Users are required to navigate away from the current task to create or manage related entities like product families or offer groups.",
          issue:
            "Workflow disruption: users lose progress when navigating away. Once they leave, there's no quick way to return.",
          recommendation:
            "Implement inline creation features or modals so users can create related entities without leaving the current task.",
        },
        {
          reference: "Consistency & standards",
          referenceImage: "/images/upc-heuristic/row-3.png",
          observation:
            "The portal uses inconsistent terminologies across different sections, leading to confusion.",
          issue:
            "Variations in how different sections are structured cause confusion and increase the learning curve.",
          recommendation:
            "Standardize the design patterns and navigation structures across all sections of the portal.",
        },
        {
          reference: "Flexibility & efficiency",
          referenceImage: "/images/upc-heuristic/row-4.png",
          observation:
            "The portal lacks shortcuts or advanced options for experienced users.",
          issue:
            "Experienced users may find the step-by-step process frustrating when they want to complete tasks quickly.",
          recommendation:
            "Allow users to save templates for frequently used configurations, batch-create multiple offers, and import/export product data.",
        },
        {
          reference: "Aesthetic & minimalist design",
          referenceImage: "/images/upc-heuristic/row-5.png",
          observation:
            "Two-level overlays contribute to visual clutter and can overwhelm users.",
          issue:
            "Multiple overlays create a crowded interface, making it challenging to navigate and understand the workflow.",
          recommendation:
            "Ensure any overlay is clearly associated with the primary task, with a clear option to close or return without losing progress.",
        },
        {
          reference: "Recognition over recall",
          referenceImage: "/images/upc-heuristic/row-6.png",
          observation:
            'The "+" button is used for multiple actions (modify, duplicate, delete) and the "<<" icon for product offer versioning is not intuitive.',
          issue:
            "The icons do not visually communicate their intended function, making it difficult to understand what they do.",
          recommendation:
            "Replace the ambiguous Add button with a More Options button. Redesign the View Version icon to better represent versioning.",
        },
      ],
      userPersona: {
        name: "Alex",
        role: "Product Manager at a telecom company responsible for managing and launching new product offers.",
      },
      userGoals: [
        "Efficiently create, manage, and launch product offers.",
        "Ensure that product offers are accurately configured and approved on time.",
        "Minimize errors and reduce the time spent on administrative tasks.",
        "Collaborate with cross-functional teams (e.g., finance, marketing) to ensure offers meet business objectives.",
      ],
      journeyMap: [
        {
          stage: "Login & Navigation",
          actions:
            'Alex logs into the UPC portal and navigates to the "Product Catalogue" via the left panel menu.',
          painPoints:
            "Confusing dropdown menu with multiple submenus, making it difficult to find the correct starting point.",
          opportunities:
            "Simplify navigation by grouping related actions and providing a clear entry point for creating new product offers.",
        },
        {
          stage: "Navigate to Product Offer Creation",
          actions:
            'Searches for the relevant section, clicks on "Create New Product Offer".',
          painPoints:
            "Difficult to find the section, unclear labeling. Encounters errors when trying to add a new offer without setting the filters first.",
          opportunities:
            "Integrate filter selections into a unified screen. Offer inline creation options without requiring navigation.",
        },
        {
          stage: "Creating a New Product Offer",
          actions:
            "Starts filling in required details such as basic info, eligible offers, pricing, etc.",
          painPoints:
            "Multi-step navigation is cumbersome and prone to errors, with users often forgetting to attach entities. Complex forms; mandatory fields not clearly indicated.",
          opportunities:
            "Provide contextual guidance and real-time validation within the creation screen to assist users and prevent common errors. Simplify forms, use clear and concise labels.",
        },
        {
          stage: "Attaching Related Entities",
          actions:
            "Navigates to the left panel menu to create new Product Offer Groups, etc. while attaching.",
          painPoints:
            "Users are forced to navigate away to create or attach related entities, disrupting the workflow.",
          opportunities:
            "Allow inline creation and attachment of related entities directly within the offer creation screen to maintain workflow continuity.",
        },
        {
          stage: "Submitting for Approval",
          actions:
            "Submits the new product offer for approval by the finance or marketing teams.",
          painPoints:
            "The approval process is unclear, leading to delays and miscommunication about the offer's status.",
          opportunities:
            "Integrate a clear and streamlined approval workflow within the same screen, with status indicators and automatic notifications.",
        },
      ],
      vision:
        "Redesign the catalogue with offer cards, a step-by-step creation flow, and clear status tracking, so PMs can spend their time on the offers themselves and not on figuring out the tool.",
      comparison: {
        before: "/images/upc-screens/old-view.png",
        after: "/images/upc-screens/card-view.png",
        beforeLabel: "Before",
        afterLabel: "After",
        caption:
          "From a dense list view with scattered filters and inconsistent tabs to a scannable card grid grouped by Active, Inactive, and Drafts.",
      },
      designSections: [
        {
          image: "/images/upc-screens/card-view.png",
          imageAlt: "Redesigned product offer list with card-based view",
          highlights: [
            {
              title: "Card-based offer view",
              description:
                "The old scrollable list of raw entries was replaced with offer cards organised by status (Active, Inactive, Drafts). Each card mirrors how the offer will appear to the end customer, with the plan name, network, price, validity, and feature highlights all visible at a glance.",
            },
            {
              title: "Quick create and duplicate",
              description:
                "A prominent Create New Product Offer tile sits at the start of the card grid, so creation is one click away. For variants, the More Details button on any card opens the offer for duplication and editing, so PMs aren't starting from scratch.",
            },
          ],
        },
        {
          image: "/images/upc-screens/create-flow.png",
          imageAlt: "Create Product Offer flow with step indicator, live preview, and modular add-on sections",
          highlights: [
            {
              title: "Step indicator",
              description:
                "Define, Customise Offer, Preview & Submit. A three-step bar at the top of the create flow tells the PM exactly where they are and what is left, replacing the old tab-soup interface where progress was invisible.",
            },
            {
              title: "Live preview panel",
              description:
                "A preview panel pinned to the right of the create screen renders the offer card in real time as the form is filled. PMs can see the final customer-facing view without leaving the page or submitting first.",
            },
            {
              title: "Modular add-ons",
              description:
                "Optional sections (Eligibility Offers, Bucket & Counter, Usage Rate, Contract, Availability Rules, and Product Specification) sit at the bottom as add tiles. They stay collapsed unless the PM needs them, so the core form stays focused.",
            },
          ],
        },
      ],
      takeaways: {
        intro:
          "A two-week sprint pushed me to be deliberate about where to spend research time and where to lean on patterns. Three things I am taking from this project:",
        items: [
          {
            title: "Heuristic evaluation as a starting tool, not the final word",
            description:
              "Without direct PM access at the start, the heuristic eval did the heavy lifting and surfaced concrete patterns to act on. Next time I would still push to get at least one PM conversation in before locking the create flow, so the eval can validate instead of replace user input.",
          },
          {
            title: "Visual choices are information architecture choices",
            description:
              "Switching from raw list rows to offer cards looks like a visual update, but it solved an IA problem first. The card layout let PMs scan, group, and recognise offers in seconds, which the old form-style list never allowed.",
          },
          {
            title: "Designing for power users is about removing decisions",
            description:
              "PMs use this tool every day. The wins were sensible defaults, clear states (Active, Inactive, Drafts), and a visible step indicator, not new capabilities. The fewer micro-decisions on screen, the faster they can move.",
          },
        ],
      },
    },
  },
  {
    slug: "chatbot",
    company: "6D Technologies",
    role: "Product Designer",
    title: "AI Chatbot for the Telecom Industry",
    problem:
      "Customers got stuck in scripted bot loops, and agents had to keep asking them to repeat everything.",
    outcome:
      "Interviewed 10+ people across 4 personas, mapped 10+ scenarios, and designed the chat, knowledge base, agent dashboard, and admin views.",
    description:
      "An AI chatbot for customer support, over text and voice. I mapped out 10+ conversation scenarios and made sure each one either resolves the issue or hands off cleanly to a human agent, with the full chat history attached.",
    tags: ["Conversational UI", "Journey Mapping", "Voice + Text"],
    image: "/images/project-chatbot.svg",
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
      userPersona: {
        name: "Anjali",
        role: "First-time visitor planning a trip to Chennai. She wants help comparing travel options, staying within budget, and getting personalised guidance from an AI travel assistant.",
      },
      userGoals: [
        "Compare and select the most suitable travel arrangements within time and budget constraints.",
        "Get personalised guidance for the destination when local knowledge is limited.",
        "Communicate with the assistant in her preferred language.",
        "Move from exploration to booking with the full itinerary intact, and be able to revisit the conversation later.",
      ],
      journeyMap: [
        {
          stage: "User before entering Chatbot",
          actions: [
            "Exploring destination and possible travel options and arrangements",
          ],
          goals: [
            "To take help from an AI chatbot with the travel activities and arrangements",
          ],
          feelings: ["Confused", "Curious", "Nervous", "Frustrated"],
          painPoints: [
            "Lacking knowledge about the destination and the facilities available",
            "Lack of personal guidance in Chennai",
            "Language barrier",
            "Time and budget constraints",
          ],
          opportunities: [
            "Expecting a detailed and proper itinerary",
            "Get the best offers",
            "Get the best facilities within budget",
            "Travel assistance",
            "Personalised suggestions",
          ],
        },
        {
          stage: "Starting the conversation",
          actions: [
            "Providing basic information about the trip and then asking for a suitable schedule and travel arrangements",
          ],
          goals: [
            "To compare and then select the most suitable arrangements",
            "To get personalised guidance",
          ],
          feelings: ["Curious", "Nervous", "Hopeful"],
          painPoints: [
            "Understanding the system's language",
            "Doubtful of getting desired response by providing basic information",
          ],
          opportunities: [
            "Proper navigation",
            "Language preferred by user",
            "Get best offers and discounts",
          ],
        },
        {
          stage: "AI Response",
          actions: [
            "Analysing the response",
            "Comparing potential options",
            "Regeneration of response in case of dissatisfactory initial response",
          ],
          goals: [
            "Forming a decision for the best option with the provided constraints",
            "Collecting detailed information about each step",
            "Getting the complete schedule with detailed steps",
          ],
          feelings: ["Contemplation", "Confident", "Curious"],
          painPoints: [
            "Dissatisfactory response",
            "Lack of enough information",
            "The user gets frustrated due to the response given by AI not being upto the user's expectations",
          ],
          opportunities: [
            "Direct links for booking",
            "Collecting more info from the user for personalised suggestions",
            "Collaboration with influencers and giving their recommendations and ratings to gain trust of the user",
          ],
        },
        {
          stage: "Resolution",
          actions: [
            "In case of dissatisfactory response, asking AI to regenerate the response",
            "Modifying prompt",
          ],
          goals: ["To get an improved response"],
          feelings: ["Hopeful", "Satisfied"],
          painPoints: [
            "Compromising due to the constraints",
            "Un-achieved goals",
          ],
          opportunities: [
            "Personalised suggestions",
            "Alternate options for the unresolved goals",
            "Escalation",
          ],
        },
        {
          stage: "Ending the conversation",
          actions: [
            "Proceeding with the suggestions and making the bookings",
            "Making preparations for the trip",
          ],
          goals: ["Revisit the conversation for future"],
          feelings: ["Satisfied", "Happy"],
          painPoints: [
            "Due to narrowed-down, personalised suggestions, lacking knowledge of facilities or amenities which might have been appropriate for the user's exploration",
          ],
          opportunities: [
            "Offer assistance for actions that would follow the trip",
          ],
        },
      ],
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
      designSections: [
        {
          image: "/images/chatbot-screens/customer-chat.png",
          imageAlt: "Customer-facing AI chat interface with troubleshooting flow",
          highlights: [
            {
              title: "AI chat interface",
              description:
                "The customer-facing chat walks the user through structured troubleshooting steps and surfaces relevant knowledge base articles inline. When the bot cannot resolve the issue, escalation is offered as clear options: Chat with Agent, Call with Agent, Explore KB, or close out. The full conversation hands off to the agent intact, so the user never has to repeat themselves.",
            },
          ],
        },
        {
          image: "/images/chatbot-screens/knowledge-library.png",
          imageAlt: "Knowledge library article view with steps, comments, and related topics",
          highlights: [
            {
              title: "Knowledge library, not hidden FAQs",
              description:
                "Articles are categorised, searchable, and have a community layer on top. Users can comment on articles, get replies from support, and jump back into chat at any point with a Continue on Chat action. Related topics appear below each article so people stay in flow instead of starting a new search.",
            },
          ],
        },
        {
          image: "/images/chatbot-screens/operator-dashboard.png",
          imageAlt: "CRM agent dashboard with conversation analytics and incoming call queue",
          highlights: [
            {
              title: "CRM Agent Dashboard",
              description:
                "A working dashboard for support agents. At a glance: conversation summary, resolution rate, issue volume by category, and a live queue of incoming chats and calls. Escalations pop up as alerts that can be accepted or declined inline, without losing the context of the work already in progress.",
            },
          ],
        },
        {
          image: "/images/chatbot-screens/agent-workspace.png",
          imageAlt: "CRM agent live workspace with customer profile, chat transcript, and KB suggestions",
          highlights: [
            {
              title: "CRM Agent live workspace",
              description:
                "When a conversation reaches an agent, everything is in one view: the customer profile (account status, recent issues), the full chat transcript with a quick summary, and a KB Suggestions panel that updates as the conversation continues. Agents can take notes or open a ticket without leaving the screen.",
            },
          ],
        },
        {
          image: "/images/chatbot-screens/admin-dashboard.png",
          imageAlt: "Admin dashboard with performance metrics for the bot and knowledge base",
          highlights: [
            {
              title: "Admin controls",
              description:
                "Admins see the system's health in one place: chat volume over time, user satisfaction trends, knowledge base usage by category, escalation and abandonment rates, and a feed of raw user feedback. The view is built so the team can spot where the bot is helping and where it is failing.",
            },
          ],
        },
      ],
      flowImage: "/images/chatbot-flow.png",
      flowImageCaption:
        "The full conversation architecture. 10+ scenarios, each branching based on user intent, emotion, and query type. Every path leads to either a resolved answer or a smooth handoff to a live agent.",
      takeaways: {
        intro:
          "A few things this project taught me that I am carrying into the next one:",
        items: [
          {
            title: "Talk to every role the system touches, not just the end user",
            description:
              "The chatbot served customers, CSRs, technicians, and sales. Interviewing all four surfaced shared problems (handoff context, KB visibility) and conflicting priorities (speed vs depth). The brief sharpened the moment those four perspectives were on the same page.",
          },
          {
            title: "Conversation flows are infrastructure, not artefacts",
            description:
              "The 10+ branched scenarios I mapped early became the foundation everything else plugged into: voice, language, escalation rules, KB suggestions. Time spent on the flow paid back across every feature that came after.",
          },
          {
            title: "The handoff is the product, not the chat",
            description:
              "What makes the bot trustworthy is not how clever it sounds, but how cleanly it lets go. Carrying the full conversation context to the agent removed the one thing customers hated most: being asked to repeat themselves after escalation.",
          },
        ],
      },
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
    image: "/images/project-nbtc.svg",
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
      comparison: {
        before: "/images/nbtc-screens/old-homepage.png",
        beforeLabel: "Before",
        caption:
          "The original homepage stacked services, news, leadership, partners, and content blocks with no clear hierarchy. Visitors scrolled past the same elements multiple times to find what they were looking for.",
      },
      designSections: [
        {
          image: "/images/nbtc-screens/homepage.png",
          imageAlt: "Redesigned NBTC homepage with services, milestones, awards, and clients",
          highlights: [
            {
              title: "Service-first information architecture",
              description:
                "Rebuilt the site around the four service lines (Heavy Equipment Leasing, Engineering & Construction, Fabrication, Inspection). The services band sits directly under the hero, before anything else, so prospects can pick their use case in one click.",
            },
            {
              title: "Track record up front",
              description:
                "Pulled NBTC's scale into a strip at the top of the homepage: 35+ years, 147+ projects, 60+ countries, 10K+ workforce, 100+ clients. Followed by Special Projects, Milestones, Awards Received, and Affiliates, so the depth of work is the first thing a visitor sees.",
            },
          ],
        },
        {
          image: "/images/nbtc-screens/service-line.png",
          imageAlt: "Heavy Equipment Leasing & Logistics service-line landing page",
          highlights: [
            {
              title: "A consistent template for every service line",
              description:
                "Each service line gets its own landing page: a focused hero, key numbers, Featured Equipment cards, a How It Works strip, and Most Popular Equipment. Same template across all four lines, so the site feels consistent without feeling repeated.",
            },
          ],
        },
        {
          image: "/images/nbtc-screens/equipment-detail.png",
          imageAlt: "Equipment detail page with specifications and related products",
          highlights: [
            {
              title: "A browsable equipment catalogue with detail pages",
              description:
                "Replaced the old flat list with a structured catalogue. Each item has its own page with imagery, model specifications, an Overview / Service and Support / Reviews / Photos tab system, and Related Equipment at the bottom. Prospects can shortlist or request a quote from any item, instead of being sent to a generic contact form.",
            },
          ],
        },
      ],
      takeaways: {
        intro:
          "Working solo on a one-month redesign for a 35-year industrial group taught me a few things:",
        items: [
          {
            title: "Brand work, sometimes, is surfacing what is already true",
            description:
              "An established company usually does not need a new identity. NBTC's 35 years of work, 147 projects, and global reach were already the brand. My job was to bring them to the front of the page instead of burying them.",
          },
          {
            title: "At small scope, templates beat bespoke",
            description:
              "I had one month and four service lines to design. The only way to do it well was to build one strong template and let each business plug into it. Designing each page from scratch would not have fit the timeline, and the constraint actually made the system stronger.",
          },
          {
            title: "Information architecture is the brand decision",
            description:
              "The biggest brand decision on this project was not about colour or typography. It was organising the site around what customers were looking for, instead of how the company is structured internally. Good navigation says more about a company than any visual choice.",
          },
        ],
      },
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
    image: "/images/project-gallery.png",
    bgColor: "bg-[#8B6914]",
    nextProject: "upc",
    detail: {
      roles: ["Visual Design", "Brand Identity", "Typography"],
      duration: "Ongoing",
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
            "A smart home control app. Soft gradient palette and a calm layout where each control group feels like its own room. The AC controller view zooms into a single device with a temperature dial and quick mode switches.",
          image: [
            "/images/gallery-smarthome.png",
            "/images/gallery-smarthome-ac.png",
          ],
        },
        {
          title: "Hyper Local Delivery",
          description:
            "An idea for an app that brings the local-store shopping experience online. Warm, food-led visuals across the home, store, and order flow. Customers can also build ready-to-cook recipe kits with adjustable ingredient quantities.",
          image: [
            "/images/gallery-hyperlocal.png",
            "/images/gallery-recipe-kits.png",
          ],
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
