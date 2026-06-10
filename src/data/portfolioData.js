// Portfolio data - All personal info, projects, skills, experience, education

export const personal = {
  name: "Nilumi Dakshika",
  role: "IT Undergraduate",
  tagline: "Full-Stack & Mobile App Developer",
  location: "Sri Lanka",
  email: "nilumidakshika5@gmail.com",
  github: "https://github.com/nilumi-d",
  linkedin: "https://www.linkedin.com/in/nilumi-dakshika",
  portfolio: "https://nilumi-d.github.io/Portfolio",
  cvUrl: "https://drive.google.com/file/d/1EaY_M-lVUpLyn36MJ_Wuafq6xXktQ5Db/view?usp=sharing",
  initials: "ND",
  about: `I'm Nilumi Dakshika, an IT undergraduate at SLIIT with a CGPA of 3.88 and hands-on experience in full-stack web and mobile application development.

I have worked on real-world academic projects using technologies such as React, Next.js, Spring Boot, Node.js, Express.js, Kotlin, MySQL, MongoDB, and PostgreSQL. My project experience includes building RESTful APIs, admin dashboards, resource booking systems, job management workflows, inventory tracking modules, and Android mobile applications.

I enjoy creating responsive user interfaces, connecting frontend and backend systems, debugging issues, and developing practical software solutions through collaborative team projects.`,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Engineering", href: "#qa" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  Languages: [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Kotlin", level: 80 },
    { name: "PHP", level: 70 },
    { name: "SQL", level: 85 },
    { name: "C", level: 70 },
    { name: "C++", level: 70 },
  ],
  Frontend: [
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 75 },
    { name: "Vite", level: 80 },
    { name: "React Router", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 90 },
  ],
  Backend: [
    { name: "Spring Boot", level: 80 },
    { name: "Spring MVC", level: 75 },
    { name: "Spring Data JPA", level: 75 },
    { name: "Hibernate", level: 70 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 80 },
    { name: "Java EE", level: 75 },
    { name: "JSP & Servlets", level: 75 },
    { name: "tRPC", level: 70 },
  ],
  Mobile: [
    { name: "Android (Kotlin)", level: 80 },
    { name: "Android SDK", level: 75 },
    { name: "Material Design 3", level: 70 },
    { name: "ConstraintLayout", level: 70 },
    { name: "AndroidX", level: 70 },
    { name: "Espresso UI Testing", level: 75 },
  ],
  Databases: [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 70 },
    { name: "JDBC", level: 75 },
    { name: "Prisma ORM", level: 70 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "VS Code", level: 90 },
    { name: "Android Studio", level: 85 },
    { name: "Eclipse", level: 75 },
    { name: "Gradle", level: 75 },
    { name: "Apache Tomcat", level: 75 },
    { name: "Vercel", level: 80 },
    { name: "phpMyAdmin", level: 75 },
    { name: "Figma", level: 70 },
    { name: "JUnit 5", level: 80 },
  ],
  Concepts: [
    { name: "RESTful APIs", level: 85 },
    { name: "MVC Architecture", level: 85 },
    { name: "JWT Authentication", level: 75 },
    { name: "Session Management", level: 75 },
    { name: "Responsive UI Design", level: 85 },
    { name: "AI Integration", level: 70 },
    { name: "PDF/CSV Export", level: 70 },
    { name: "QR-based Scanning", level: 70 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Vertex",
    subtitle: "Campus Operations & Resource Booking Platform",
    description:
      "A campus resource management platform with booking and incident management modules. Led the development team and owned the Resource Management module end-to-end, including admin CRUD flows, search and filtering, live availability indicators, validations, and frontend-backend integration through REST APIs.",
    techStack: ["React", "Vite", "React Router", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "MySQL", "REST API"],
    github: "https://github.com/SandaniChamoda/SandaniChamoda-it3030-paf-2026-smart-campus-group49",
    liveUrl: "https://smartcampus-mu.vercel.app",
    highlight: true,
    category: "Full-Stack",
    icon: "🏛️",
    color: "from-cyan-500 to-blue-600",
    image: "/Portfolio/photos/vertex.png",
    badge: "Team Lead",
  },
  {
    id: 2,
    title: "HireSmart",
    subtitle: "Internship & Job Preparation Platform",
    description:
      "A recruitment and job preparation platform supporting candidate and job management workflows. Led a team of 4 and developed the company registration and job management module end-to-end. Integrated Gemini AI to help companies review and improve job posts before publishing.",
    techStack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "REST API", "AI Integration"],
    github: "https://github.com/chami48/Internship-and-Job-preparation-platform",
    liveUrl: null,
    highlight: true,
    category: "Full-Stack",
    icon: "💼",
    color: "from-indigo-500 to-violet-600",
    image: "/Portfolio/photos/HireSmart.png",
    badge: "Team Lead",
  },
  {
    id: 3,
    title: "CocoSmart",
    subtitle: "Agricultural Management Platform",
    description:
      "A full-stack MERN application for coconut farming, designed to manage farm operations, inventory, and vehicle tracking. Contributed to the Inventory Management module by implementing fertilizers and insecticides tracking, supplier validation, QR-based item scanning, and automated PDF/CSV reporting.",
    techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Leaflet", "JWT", "REST API", "Vercel"],
    githubFrontend: "https://github.com/nilumi-d/cocosmart-frontend",
    githubBackend: "https://github.com/nilumi-d/cocosmart-backend",
    liveUrl: "https://cocosmart.vercel.app",
    highlight: false,
    category: "Full-Stack",
    icon: "🥥",
    color: "from-emerald-500 to-teal-600",
    image: "/Portfolio/photos/coco.png",
  },
  {
    id: 4,
    title: "SnapFlix",
    subtitle: "Online Movie Ticket Booking System",
    description:
      "A full-stack cinema booking web application with seat selection, real-time availability tracking, and payment processing. Developed the Admin Dashboard for managing users, movies, bookings, and customer inquiries with role-based access control and notifications.",
    techStack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "phpMyAdmin", "Git", "JUnit"],
    github: "https://github.com/nilumi-d/SnapFlix",
    liveUrl: null,
    highlight: false,
    category: "Web App",
    icon: "🎬",
    color: "from-rose-500 to-pink-600",
    image: "/Portfolio/photos/SnapFlix .png",
  },
  {
    id: 5,
    title: "School Management System",
    subtitle: "Java EE School Management Web Application",
    description:
      "A full-stack Java EE web application for managing students, events, exams, assignments, and subjects. Developed the Assignment Management module with PDF upload and storage, subject code validation, late submission tracking, and duplicate detection.",
    techStack: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "JSTL", "HTML", "CSS", "JavaScript", "Tomcat", "MVC"],
    github:
      "https://github.com/nilumi-d/Online-School-Information-Management-System-OOP-project-",
    liveUrl: null,
    highlight: false,
    category: "Web App",
    icon: "🏫",
    color: "from-blue-500 to-indigo-600",
    image: "/Portfolio/photos/school.png",
  },
  {
    id: 6,
    title: "DailyWell",
    subtitle: "Android Wellness Tracker App",
    description:
      "An Android wellness tracker application that helps users maintain healthy daily habits. Features include habit logging, mood tracking, hydration reminders, and personal wellness analytics — all with a clean, intuitive mobile UI.",
    techStack: ["Kotlin", "Android SDK", "Android Studio", "Material Design 3", "Room DB", "Firebase", "Espresso"],
    github: "https://github.com/nilumi-d/DailyWell",
    liveUrl: null,
    highlight: false,
    category: "Mobile App",
    icon: "🌿",
    color: "from-violet-500 to-purple-600",
    image: "/Portfolio/photos/dailywell.png",
  },
  {
    id: 7,
    title: "TaleGo",
    subtitle: "Reading & Writing Mobile Application",
    description:
      "A native Android application for social reading, writing, story discovery, and audiobook playback. Developed all features independently, including user authentication, library management, user profiles, social interactions, and a dual-mode reading interface with Material Design 3 and dark mode support.",
    techStack: ["Kotlin", "Android SDK", "Android Studio", "Gradle", "Material Design 3", "ConstraintLayout", "AndroidX", "JUnit", "Espresso"],
    github:
      "https://github.com/nilumi-d/TaleGo_Reading_and_Writing_mobile_application",
    liveUrl: null,
    highlight: false,
    category: "Mobile App",
    icon: "📚",
    color: "from-amber-500 to-orange-600",
    image: "/Portfolio/photos/Talego.png",
  },
];

export const qaSkills = [
  {
    title: "Manual Testing",
    description:
      "Executing structured manual test cases to validate UI flows, edge cases, and user journeys against requirements.",
    icon: "🧪",
    items: [
      "Functional testing",
      "Regression testing",
      "Exploratory testing",
      "UAT support",
    ],
  },
  {
    title: "Test Case Design",
    description:
      "Designing comprehensive, reusable test cases using techniques like equivalence partitioning, boundary value analysis, and decision tables.",
    icon: "📋",
    items: [
      "Equivalence partitioning",
      "Boundary value analysis",
      "Decision table testing",
      "Test scenario planning",
    ],
  },
  {
    title: "Unit Testing (JUnit 5)",
    description:
      "Writing maintainable unit tests for Java backend services ensuring individual components behave as expected.",
    icon: "🔬",
    items: [
      "JUnit 5 framework",
      "Mockito mocking",
      "Assertion strategies",
      "Code coverage analysis",
    ],
  },
  {
    title: "UI Testing (Espresso)",
    description:
      "Automating Android UI interactions using the Espresso framework to ensure consistent user experience across devices.",
    icon: "📱",
    items: [
      "Espresso UI automation",
      "View matchers & actions",
      "Idling resources",
      "Screenshot testing",
    ],
  },
  {
    title: "API Integration & Testing",
    description:
      "Connecting frontend and backend systems through RESTful APIs with validation and structured data handling. Tested using Postman across all projects.",
    icon: "🔗",
    items: [
      "REST API integration",
      "Postman testing",
      "Frontend-backend validation",
      "Error handling",
    ],
  },
  {
    title: "Authentication & Security",
    description:
      "Implementing secure user flows using JWT authentication, session management, and role-based access control.",
    icon: "🔐",
    items: [
      "JWT authentication",
      "Session management",
      "Role-based access control",
      "Input validation",
    ],
  },
];

export const experience = [
  {
    id: 1,
    company: "Bank of Ceylon",
    role: "Trainee Intern",
    period: "Jul 2023 – Dec 2023",
    location: "Sri Lanka",
    type: "Internship",
    description:
      "Completed a trainee internship at Bank of Ceylon, supporting digital banking services, customer assistance, account processing, and front-office banking operations.",
    highlights: [
      "Assisted customers with digital banking registration, mobile app setup, and troubleshooting",
      "Contributed to a 15–20% increase in digital service adoption",
      "Performed account processing, data entry, and transaction handling with 99% accuracy",
      "Supported customer inquiries and front-office operations for 100+ customers daily",
      "Promoted banking products and helped improve customer engagement",
    ],
    icon: "🏦",
    color: "from-primary-600 to-primary-800",
  },
];

export const education = [
  {
    id: 1,
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "Bachelor of Science (Hons) in Information Technology",
    period: "2023 – Present",
    cgpa: "3.88",
    highlight: true,
    achievements: [
      "Dean's List — 4 Consecutive Semesters",
      "CGPA: 3.88 / 4.00",
      "Faculty of Computing",
    ],
    modules: [
      "Object-Oriented Programming",
      "Database Management Systems",
      "Data Structures & Algorithms",
      "Web Application Development",
      "Mobile Application Development",
      "Software Engineering",
    ],
    icon: "🎓",
  },
];

export const achievements = [
  {
    title: "Dean's List",
    subtitle: "4 Consecutive Semesters",
    description:
      "Recognized on the Dean's List for 4 consecutive semesters at SLIIT, reflecting sustained academic excellence across all modules.",
    icon: "🏆",
    stat: "4×",
    statLabel: "Semesters",
    color: "from-amber-400 to-yellow-500",
  },
  {
    title: "CGPA 3.88",
    subtitle: "Faculty of Computing",
    description:
      "Maintaining an exceptional CGPA of 3.88 out of 4.00, demonstrating consistency and depth across technical and theoretical subjects.",
    icon: "⭐",
    stat: "3.88",
    statLabel: "out of 4.00",
    color: "from-primary-400 to-accent-500",
  },
  {
    title: "MongoDB Data Modeling Path",
    subtitle: "MongoDB, Inc.",
    description:
      "Completed MongoDB Data Modeling Path, strengthening knowledge of NoSQL schema design and database modeling best practices.",
    icon: "🍃",
    stat: "✓",
    statLabel: "Certified",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "CMJD Program",
    subtitle: "IJSE Institute",
    description:
      "Following the Comprehensive Master Java Developer program to strengthen Java, software engineering, and enterprise application development skills.",
    icon: "☕",
    stat: "▶",
    statLabel: "In Progress",
    color: "from-orange-400 to-amber-500",
  },
];

export const leadership = [
  {
    id: 1,
    title: "Active Member",
    organization: "Leo Club of SLIIT",
    description:
      "Participated in community service projects, fundraising events, and social initiatives while developing teamwork and leadership skills.",
    icon: "🦁",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 2,
    title: "Member",
    organization: "IEEE Student Chapter — SLIIT",
    description:
      "Engaged in technical learning sessions, workshops, and stayed updated with emerging technology trends through the IEEE network.",
    icon: "⚡",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Participant",
    organization: "UI/UX Bootcamp — Benchmark 3.0",
    description:
      "Designed and prototyped an AI chatbot interface using user-centered design principles, applying Figma for wireframing and interaction design.",
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
  },
];
