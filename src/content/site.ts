export type PortfolioProject = {
  name: string;
  description: string;
  tags: readonly string[];
  links: {
    live?: string;
    github?: string;
  };
};

export type WorkExperience = {
  company: string;
  role: string;
  period: string;
  highlights: readonly string[];
};

export type EducationItem = {
  school: string;
  period: string;
  details: readonly string[];
};

export type SiteContent = {
  person: {
    fullName: string;
    location: string;

    // Placeholders you can change later:
    headshotSrc: string; // put your photo in /public and update this
    resumeUrl: string; // put Google Drive link or /resume.pdf in /public
  };

  contact: {
    email: string; // you can keep this or replace with a placeholder
    phone?: string; // optional
    linkedinUrl: string;
    githubUrl: string;

    // placeholder for anything sensitive you don't want public yet
    bookingUrl?: string;
  };

  hero: {
    headline: string;
    subheadline: string;
  };

  about: {
    paragraphs: readonly string[];
  };

  projects: readonly PortfolioProject[];
  skills: readonly string[];
  work: readonly WorkExperience[];
  education: readonly EducationItem[];
};

export const siteContent: SiteContent = {
  person: {
    fullName: "Ogochukwu Okpala, Stephen",
    location: "Lagos, Nigeria",
    headshotSrc: "/headshot-placeholder.jpg",
    resumeUrl: "https://YOUR_RESUME_LINK_HERE",
  },

  contact: {
    email: "okpalaogochukwu76@gmail.com",
    phone: "+234 906 691 2965",
    linkedinUrl: "https://www.linkedin.com/in/ogochukwu-okpala",
    githubUrl: "https://github.com/Okpala76",
    bookingUrl: "https://PLACEHOLDER_BOOKING_LINK",
  },

  hero: {
    headline: "Software Developer building practical, scalable products",
    subheadline:
      "Full-stack JavaScript + Python, with an engineering background and a focus on real-world solutions.",
  },

  about: {
    paragraphs: [
      "I’m a passionate, results-driven software developer with a strong engineering foundation. I build impactful products across web and mobile—focusing on clean architecture, reliability, and user outcomes.",
      "I enjoy integrating engineering thinking with modern software stacks, and I’m especially interested in products that solve everyday problems at scale.",
    ],
  },

  projects: [
    {
      name: "Propi",
      description:
        "A platform connecting individuals with real estate professionals.",
      tags: ["Next.js", "FastAPI", "Supabase", "Railway"],
      links: {
        live: "https://PLACEHOLDER_PROPI_LIVE_URL",
        github: "https://PLACEHOLDER_PROPI_GITHUB_URL",
      },
    },
    {
      name: "NSO (No Seed Oil)",
      description:
        "An app that helps users evaluate and find healthier oil products.",
      tags: ["React Native", "Firebase"],
      links: {
        live: "https://PLACEHOLDER_NSO_LIVE_URL",
        github: "https://PLACEHOLDER_NSO_GITHUB_URL",
      },
    },
    {
      name: "MaMeds",
      description:
        "A medication reminder app that sends scheduled reminders to users.",
      tags: ["Node.js", "Firebase"],
      links: {
        live: "https://PLACEHOLDER_MAMEDS_LIVE_URL",
        github: "https://PLACEHOLDER_MAMEDS_GITHUB_URL",
      },
    },
    {
      name: "Gochi’s FPL Calendar",
      description:
        "A fantasy football scheduling tool with fixture analysis and difficulty insights.",
      tags: ["Python", "Automation"],
      links: {
        live: "https://PLACEHOLDER_FPL_LIVE_URL",
        github: "https://PLACEHOLDER_FPL_GITHUB_URL",
      },
    },
    {
      name: "PathFindAI",
      description:
        "AI-powered project management and team collaboration platform.",
      tags: ["AI Tools", "Full-stack"],
      links: {
        live: "https://PLACEHOLDER_PATHFINDAI_LIVE_URL",
        github: "https://PLACEHOLDER_PATHFINDAI_GITHUB_URL",
      },
    },
  ],

  skills: [
    "JavaScript",
    "Python",
    "SQL",
    "React Native",
    "Expo",
    "React Query",
    "Node.js",
    "Firebase",
    "FastAPI",
    "NestJS",
    "Firestore",
    "GitHub",
    "Bitbucket",
    "Jest",
    "Cypress",
    "Storybook",
  ],

  work: [
    {
      company: "Lagos State Independent Electoral Commission (LASIEC)",
      role: "IT Personnel (NYSC)",
      period: "2024 – 2025",
      highlights: [
        "Provided IT support across departments, improving system efficiency and network reliability.",
        "Led maintenance and troubleshooting of hardware and network systems.",
      ],
    },
    {
      company: "Self-Employed",
      role: "Python Programmer",
      period: "2023",
      highlights: [
        "Built Gochi’s FPL Calendar for generating schedules and analyzing fixture difficulty.",
        "Automated data extraction from .txt files and produced dynamic schedules.",
      ],
    },
    {
      company: "EcoHacks Studios",
      role: "Engineer & Developer",
      period: "2024 – Present",
      highlights: [
        "Propi: Full-stack development using Next.js (frontend) and FastAPI (backend).",
        "Integrated Supabase for data and Railway for deployment automation.",
        "Implemented testing with Jest, Cypress, and Storybook to improve reliability.",
      ],
    },
  ],

  education: [
    {
      school: "PHCN Staff Secondary School",
      period: "2010 – 2016",
      details: ["WAECE (West African Examination Council Examination)"],
    },
    {
      school: "Michael Okpara University of Agriculture, Umudike",
      period: "2016 – 2023",
      details: [
        "B.Eng Electrical and Electronics Engineering (Second Class Upper).",
      ],
    },
  ],
};
