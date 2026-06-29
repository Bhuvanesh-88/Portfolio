import { ResumeData } from "./types";

export const resumeData: ResumeData = {
  basics: {
    name: "Bhuvanesh Thangappa",
    title: "Java Full Stack Developer | Certified Software Engineer | Spring Boot & React | GenAI | Open to Mumbai, Chennai, Coimbatore & Tirunelveli",
    summary: "I am a Certified Software Engineering Professional with a specialized focus on Java Full Stack Development and Generative AI. Through my comprehensive training at NIIT, I have built enterprise-level microservices applications using Spring Boot, React, and MySQL, while integrating modern GenAI tools like the GROQ API. I am actively seeking Full Stack or Backend Developer roles and am open to working on-site or hybrid in Mumbai, Chennai, Coimbatore, and Tirunelveli.",
    location: "Mumbai, Maharashtra, India",
    fullAddress: "Anna Nagar, Nehru Chawl, Kumbhar Wada Cross Road, Dharavi, Mumbai, Maharashtra 400017.",
    email: "bhuvaneshlb300@gmail.com",
    phone: "91 83692 51323",
    openTo: ["Open to Hybrid", "Open to On-Site", "Open to Mumbai, Chennai, Coimbatore & Tirunelveli"],
    links: [
      {
        label: "LinkedIn Profile",
        url: "https://www.linkedin.com/in/bhuvanesh-thangappa-7767733b1",
      },
      {
        label: "GitHub",
        url: "https://github.com/bhuvaneshlb300",
      },
    ],
  },
  experience: [
    {
      company: "Porter India (MNC)",
      role: "Business Executive",
      dates: "September 2021 — February 2026",
      duration: "4 years 6 months",
      location: "Mumbai, Maharashtra, India",
      bullets: [
        "Resolved over 1,000 monthly Salesforce billing issues maintaining 99% system uptime / Resolved 1,000+ monthly Salesforce billing issues while maintaining 99% operational accuracy.",
        "Developed Excel MIS dashboards that reduced errors by 35% and supported 50,000+ transactions / Developed Excel MIS dashboards that reduced reporting errors by 35% and supported large-scale transaction monitoring.",
        "Collaborated with cross-functional teams to streamline billing processes and improve data accuracy / Collaborated with multiple teams to improve billing workflows and enhance data accuracy.",
        "Managed high-volume operational activities with strong analytical and problem-solving skills.",
      ],
    },
    {
      company: "Teleperformance (MNC)",
      role: "Customer Service Executive",
      dates: "July 2019 — August 2021",
      duration: "2 years 2 months",
      location: "Mumbai, Maharashtra, India",
      bullets: [
        "Handled 200+ customer interactions daily with a strong focus on service quality and issue resolution / Handled 200+ daily customer queries achieving 95% satisfaction rate.",
        "Achieved high customer satisfaction through effective communication and timely support.",
        "Improved resolution speed by 25% through process enhancements and effective communication / Improved resolution efficiency by streamlining support workflows and escalation handling.",
      ],
    },
  ],
  achievements: [
    {
      id: "salesforce-uptime",
      metric: "99%",
      text: "Salesforce billing system uptime & operational accuracy maintained",
      context: "Resolved 1,000+ monthly billing issues at Porter India.",
      category: "metrics",
    },
    {
      id: "mis-reduction",
      metric: "35%",
      text: "Reduction in reporting and data errors via Excel MIS dashboards",
      context: "Supported transaction monitoring of 50,000+ scale at Porter India.",
      category: "wins",
    },
    {
      id: "csat-tp",
      metric: "95%",
      text: "Customer satisfaction rate achieved during 200+ daily interactions",
      context: "Delivered top-tier customer service and issue resolution at Teleperformance.",
      category: "delivery",
    },
    {
      id: "speed-tp",
      metric: "25%",
      text: "Improvement in resolution speed and support workflow efficiency",
      context: "Streamlined communication and Escalation Handling at Teleperformance.",
      category: "delivery",
    },
  ],
  projects: [
    {
      title: "Stayease - Full-Stack Booking Service, NIIT",
      stack: ["React", "Spring Boot", "Generative AI", "REST APIs", "MySQL", "TypeScript"],
      bullets: [
        "Built a modern full-stack web application using React and Spring Boot to handle end-to-end property reservations and user management.",
        "Integrated Generative AI capabilities to offer smart, personalized property recommendations based on user search patterns and preferences.",
        "Developed secure REST APIs and optimized database queries to ensure high performance and scalability during peak booking traffic.",
      ],
      links: [
        {
          label: "Project Link",
          url: "https://github.com/bhuvaneshlb300",
        },
      ],
      location: "Mumbai, Maharashtra, India",
    },
    {
      title: "Spendsense-Viewer - Expense Tracker Capstone",
      stack: ["React", "Spring Boot", "MySQL", "TypeScript", "REST APIs"],
      bullets: [
        "Developed the Spendsense-Viewer capstone project featuring full-stack CRUD operations and responsive design.",
        "Created an elegant, responsive interface to track, view, and analyze personal financial spends with comprehensive CRUD operations.",
      ],
      links: [
        {
          label: "Project Link",
          url: "https://github.com/bhuvaneshlb300",
        },
      ],
      location: "Mumbai, Maharashtra, India",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "TypeScript", "HTML/CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "REST APIs", "Node.js"],
    },
    {
      category: "Database",
      items: ["MySQL", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", "Maven", "JUnit", "VS Code", "IntelliJ IDEA", "npm"],
    },
    {
      category: "GenAI",
      items: ["LLM integration", "GROQ API"],
    },
    {
      category: "Other",
      items: ["Salesforce billing", "Advanced Excel"],
    },
    {
      category: "Top Skills & Certifications",
      items: [
        "Customer Service",
        "Certified Software Quality Engineer",
        "Integration Engineering",
        "Certified Software Engineering Professional",
      ],
    },
  ],
  education: [
    {
      institution: "NIIT Limited (Honours Program)",
      degree: "Full Stack Development with GenAI Honours Program / Certified Software Engineering Professional",
      dates: "January 2025 — February 2026 (July 2025 — April 2026)",
      location: "Mumbai, India",
      bullets: [
        "Focused on React frontend, Spring Boot backend, MySQL, MongoDB, and TypeScript.",
        "Capstone project: Spendsense-Viewer expense tracker with full-stack CRUD functionality and responsive design.",
      ],
    },
    {
      institution: "University of Mumbai (Bhartiya Gramin Punaarachana Sanstha's Mumbai College / Bhartiya Urban)",
      degree: "Bachelor of Commerce (B.Com) in Commerce, Accounting and Business/Management",
      dates: "July 2022 — May 2025 (June 2022 — October 2025)",
      location: "Mumbai, India",
      bullets: [
        "Completed rigorous coursework in Financial Accounting, Economics, and Statistics, developing strong analytical and quantitative problem-solving skills.",
        "Gained a solid foundation in business operations and financial logic, enhancing the ability to build commercially viable software solutions.",
      ],
    },
  ],
  certifications: [
    "Certified Software Engineering Professional (Full Stack Development with GenAI Honours)",
  ],
  awards: [],
  extra: [
    "Open to Hybrid & On-Site opportunities.",
    "Enrolled in NIIT's GenAI Honours Program specializing in LLM integrations.",
    "Experienced in MNC environments (Porter, Teleperformance) delivering high system uptime and process enhancements.",
  ],
};
