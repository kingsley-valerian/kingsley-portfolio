
export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  projectUrl: string;
  projectLabel: string;
  tools: string[];
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-more-dollar",
    category: "Full-Stack Development",
    title: "Building More Dollar: From a Career Problem to a Digital Product",
    excerpt:
      "The story behind building a career platform for job seekers, bringing job discovery, AI-assisted applications, authentication, and subscription payments into one product.",
    date: "2026-10-21",
    readTime: "8 min read",
    projectUrl: "https://more-dollar.vercel.app/",
    projectLabel: "Explore More Dollar",
    tools: ["Next.js", "React", "TypeScript", "Supabase", "Gemini AI", "Flutterwave"],
    sections: [
      {
        heading: "The problem worth solving",
        paragraphs: [
          "Searching for work involves more than finding a vacancy. Job seekers also need to organize their career information, prepare application documents, and manage the process of applying to different opportunities.",
          "More Dollar is my attempt to bring useful parts of that journey into one digital platform. The goal is to make career tools easier to access while keeping the application process practical and understandable."
        ]
      },
      {
        heading: "Designing the product",
        paragraphs: [
          "The product brings together job discovery, career profile management, CV support, and subscription-based features. Its design needs to balance a straightforward experience for new users with more advanced tools for people who want additional assistance.",
          "Building the product means thinking about both sides of the experience: what a job seeker sees on the screen and what the application must reliably do behind the scenes."
        ]
      },
      {
        heading: "The technology behind it",
        paragraphs: [
          "The application uses Next.js and React for its web experience, TypeScript for typed application code, and Supabase for authentication and data services. AI-assisted document features use Google's Gemini technology, while Flutterwave handles subscription checkout.",
          "These integrations introduce important engineering responsibilities: validating requests, protecting user data, handling failed payments, and ensuring that subscription access reflects a verified transaction."
        ],
        bullets: [
          "Frontend interfaces built with React and Next.js",
          "Authentication and database integration through Supabase",
          "AI-assisted CV and application-document workflows",
          "Subscription checkout and payment verification",
          "A responsive experience for users on different devices"
        ]
      },
      {
        heading: "Working through real implementation challenges",
        paragraphs: [
          "Payment integration has been an important lesson in the difference between making a checkout page appear and building a dependable payment flow. A complete implementation must account for provider responses, transaction references, verification, and subscription activation.",
          "International checkout also requires attention to payment methods supported by the payment provider. Testing the actual customer journey is essential because a successful API request does not, by itself, prove that the entire subscription experience works."
        ]
      },
      {
        heading: "What I learned",
        paragraphs: [
          "Building More Dollar has reinforced the importance of treating a web application as a connected system rather than a collection of screens. Authentication, data, payments, user experience, and error handling all influence whether a product feels trustworthy.",
          "The work is ongoing. My priority is to keep improving reliability, usability, and the quality of the tools offered to job seekers."
        ]
      }
    ]
  },
  {
    slug: "building-fleettrack",
    category: "SaaS & Web Applications",
    title: "Building FleetTrack: Organizing Fleet Operations Through Software",
    excerpt:
      "A look at the thinking behind a fleet management product with owner and driver experiences, vehicle management, and subscription-based access.",
    date: "2026-10-21",
    readTime: "6 min read",
    projectUrl: "https://fleet-track-ehve.vercel.app/",
    projectLabel: "Explore FleetTrack",
    tools: ["Next.js", "React", "Web Applications", "Subscription Systems"],
    sections: [
      {
        heading: "The business problem",
        paragraphs: [
          "Managing vehicles involves coordinating information, people, and day-to-day operations. When these details are scattered across disconnected processes, it becomes harder to maintain a clear picture of fleet activity.",
          "FleetTrack is a fleet management application built around the idea of bringing important fleet workflows into a structured digital experience."
        ]
      },
      {
        heading: "Designing around different users",
        paragraphs: [
          "Fleet operations involve people with different responsibilities. Fleet owners need management tools, while drivers interact with the parts of the system relevant to their work.",
          "Supporting owner and driver roles requires deliberate thinking about user experiences, access boundaries, and how information should be presented to each type of user."
        ]
      },
      {
        heading: "Product and subscription structure",
        paragraphs: [
          "FleetTrack includes subscription-based access and vehicle-related plan limits. This means the application needs to consider not only its interface, but also how plan rules affect the features available to an account.",
          "A dependable subscription experience requires consistent rules across the user interface and the backend, with clear feedback when an action falls outside a plan's limits."
        ]
      },
      {
        heading: "Lessons from the project",
        paragraphs: [
          "Building a business application involves translating operational needs into understandable workflows. The most useful interface is not necessarily the one with the most features, but the one that helps people complete their work with less confusion.",
          "FleetTrack continues to represent my interest in building practical software around real business needs."
        ]
      }
    ]
  },
  {
    slug: "building-kingsize-beverages",
    category: "Business Websites",
    title: "KINGSIZE Beverages: Building a Digital Presence for a Brand",
    excerpt:
      "The thinking behind presenting a beverage business online through a dedicated website and a focused digital experience.",
    date: "2026-10-21",
    readTime: "4 min read",
    projectUrl: "https://kingsize-beverages.vercel.app/",
    projectLabel: "Visit KINGSIZE Beverages",
    tools: ["Web Development", "Responsive Design", "User Experience"],
    sections: [
      {
        heading: "Why a business website matters",
        paragraphs: [
          "A business website gives a brand a dedicated place to present itself online. It can help visitors understand the business, discover relevant information, and form a clearer impression of the brand.",
          "For KINGSIZE Beverages, the objective is to create an accessible online presence that brings the brand and its business information together."
        ]
      },
      {
        heading: "Thinking about the visitor",
        paragraphs: [
          "A useful business website should make it easy for visitors to understand what the business offers and where to go next. Visual presentation matters, but so do readable content, clear navigation, and usability on mobile devices.",
          "The project reflects my interest in applying web development to business communication rather than building interfaces purely for appearance."
        ]
      },
      {
        heading: "The bigger lesson",
        paragraphs: [
          "Different projects require different priorities. A business website focuses on brand presentation and clarity, while a complex web application must also address authentication, data, and application workflows.",
          "Understanding that distinction helps me choose an approach that fits the purpose of the project."
        ]
      }
    ]
  },
  {
    slug: "freshdesk-customer-support-system",
    category: "IT & Customer Support",
    title: "Setting Up a Freshdesk Support System: Knowledge, Tickets, and Communication",
    excerpt:
      "A practical case study of organizing customer support through a knowledge base, support widget, ticket workflow, and email communication.",
    date: "2026-10-21",
    readTime: "5 min read",
    projectUrl: "https://zohomail6649.freshdesk.com/a/solutions/articles/158000460296",
    projectLabel: "View Freshdesk Support Project",
    tools: ["Freshdesk", "Knowledge Base", "Ticket Management", "Email"],
    sections: [
      {
        heading: "The need for organized support",
        paragraphs: [
          "Customer support works best when inquiries can be received, organized, answered, and followed through consistently. Without a clear process, important questions can be difficult to track and customers may struggle to find answers.",
          "This project involved configuring support tools for Stylex Systems Limited, with an emphasis on making customer assistance easier to organize."
        ]
      },
      {
        heading: "The support workflow",
        paragraphs: [
          "The setup included a knowledge base for self-service information, a support widget for access to assistance, ticket management, and customer email communication.",
          "Each component serves a different purpose. Knowledge-base articles can help customers find answers independently, while tickets provide a structured way to manage inquiries that need direct attention."
        ],
        bullets: [
          "Knowledge-base organization",
          "Support widget setup",
          "Ticket-management workflow",
          "Customer email communication configuration"
        ]
      },
      {
        heading: "Why documentation matters",
        paragraphs: [
          "A support system is more useful when its information is clear and its processes are repeatable. Well-organized documentation can reduce unnecessary back-and-forth and help support teams provide more consistent answers.",
          "This project connects my technical interests with customer experience, troubleshooting, and operational organization."
        ]
      }
    ]
  },
  {
    slug: "airtable-job-application-workflow",
    category: "CRM & Workflow Automation",
    title: "Building an Airtable Job Application System to Organize Candidate Information",
    excerpt:
      "How a structured form and records workflow can help collect candidate details, organize CV submissions, and support application review.",
    date: "2026-10-21",
    readTime: "5 min read",
    projectUrl: "https://airtable.com/appDrQHlMv1L7W1Wy/shrpFz6glawzBZxao",
    projectLabel: "View Airtable Project",
    tools: ["Airtable", "Forms", "Structured Records", "Workflow Design"],
    sections: [
      {
        heading: "The challenge of collecting applications",
        paragraphs: [
          "When application details arrive through different channels or in inconsistent formats, organizing them can take unnecessary time. A structured collection process helps make information easier to review and maintain.",
          "This project focused on organizing candidate information and CV submissions through an Airtable-based workflow."
        ]
      },
      {
        heading: "From form submission to organized records",
        paragraphs: [
          "Forms provide a consistent way to collect information, while structured records make it easier to review and organize submissions. A thoughtfully designed workflow can also make the next steps in an application process clearer.",
          "The important part is not simply storing information. It is deciding which information matters, how it should be organized, and how people will use it."
        ]
      },
      {
        heading: "Practical workflow lessons",
        paragraphs: [
          "Productivity tools can solve meaningful problems when their structure reflects the process they support. Clear field names, sensible organization, and consistent review steps all contribute to a more manageable workflow.",
          "This project demonstrates my interest in combining digital tools, data organization, and administrative processes to make everyday work easier."
        ]
      }
    ]
  }
];
