// Portfolio data - All personal info, projects, skills, experience, education

export const personal = {
  name: "Nilumi Dakshika",
  role: "IT Undergraduate",
  tagline: "QA Enthusiast",
  location: "Sri Lanka",
  email: "nilumidakshika5@gmail.com",
  github: "https://github.com/nilumi-d",
  linkedin: "https://lk.linkedin.com/in/nilumi-dakshika",
  cvUrl: "#", // Replace with actual CV URL
  initials: "ND",
  about: `I'm Nilumi Dakshika, an IT undergraduate at SLIIT with a passion for building quality software and breaking it beautifully. With a CGPA of 3.9 and consecutive Dean's List recognition, I balance strong academic performance with hands-on development experience across web, mobile, and backend systems. I care deeply about the intersection of development and quality assurance — writing clean code and ensuring it actually works the way it should. When I'm not building apps, I'm designing test cases, hunting bugs, or exploring new frameworks that make development more elegant and efficient.`,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "QA", href: "#qa" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  Languages: [
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Python", level: 75 },
    { name: "PHP", level: 70 },
    { name: "SQL", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "Kotlin", level: 75 },
  ],
  Frontend: [
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Bootstrap", level: 80 },
    { name: "Next.js", level: 70 },
    { name: "Thymeleaf", level: 75 },
  ],
  Backend: [
    { name: "Spring Boot", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 75 },
    { name: "REST APIs", level: 85 },
    { name: "PHP Laravel", level: 65 },
  ],
  Mobile: [
    { name: "Android (Kotlin)", level: 75 },
    { name: "React Native", level: 65 },
    { name: "Espresso UI Testing", level: 70 },
  ],
  Databases: [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Firebase", level: 70 },
    { name: "PostgreSQL", level: 65 },
  ],
  Tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "JUnit 5", level: 80 },
    { name: "Figma", level: 70 },
    { name: "IntelliJ IDEA", level: 85 },
    { name: "Android Studio", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Jira", level: 70 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "CocoSmart",
    subtitle: "Coconut Industry Intelligence Platform",
    description:
      "A full-stack smart agriculture platform designed for Sri Lanka's coconut industry. CocoSmart empowers farmers and stakeholders with data-driven insights, market analytics, and real-time monitoring to optimize coconut cultivation and trade.",
    techStack: ["React.js", "Spring Boot", "MySQL", "REST API", "Tailwind CSS"],
    githubFrontend: "https://github.com/nilumi-d/cocosmart-frontend",
    githubBackend: "https://github.com/nilumi-d/cocosmart-backend",
    liveUrl: null,
    highlight: true,
    category: "Full-Stack",
    icon: "🥥",
    color: "from-emerald-500 to-teal-600",
    image: "/Portfolio/photos/coco.png",
  },
  {
    id: 2,
    title: "SnapFlix",
    subtitle: "Online Movie Ticket Booking System",
    description:
      "A feature-rich online movie ticket booking system (IWT Project - Year 1, Semester 2). Users can browse movies, select seats, and book tickets seamlessly. Includes an admin panel for managing shows, cinemas, and bookings.",
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML/CSS"],
    github: "https://github.com/nilumi-d/SnapFlix",
    liveUrl: null,
    highlight: false,
    category: "Web App",
    icon: "🎬",
    color: "from-rose-500 to-pink-600",
    image: "/Portfolio/photos/SnapFlix .png",
  },
  {
    id: 3,
    title: "SchoolSync",
    subtitle: "Online School Information Management System",
    description:
      "An OOP-based school management system covering student records, teacher management, grade tracking, and administrative operations. Built with strong object-oriented principles for maintainability and scalability.",
    techStack: ["Java", "OOP Principles", "MySQL", "Swing/JavaFX"],
    github:
      "https://github.com/nilumi-d/Online-School-Information-Management-System-OOP-project-",
    liveUrl: null,
    highlight: false,
    category: "Desktop App",
    icon: "🏫",
    color: "from-blue-500 to-indigo-600",
    image: "/Portfolio/photos/school.png",
  },
  {
    id: 4,
    title: "DailyWell",
    subtitle: "Android Wellness Tracker App",
    description:
      "An Android wellness tracker application that helps users maintain healthy daily habits. Features include habit logging, mood tracking, hydration reminders, and personal wellness analytics — all with a clean, intuitive mobile UI.",
    techStack: ["Kotlin", "Android Studio", "Firebase", "Room DB", "Espresso"],
    github: "https://github.com/nilumi-d/DailyWell",
    liveUrl: null,
    highlight: false,
    category: "Mobile App",
    icon: "🌿",
    color: "from-violet-500 to-purple-600",
    image: "/Portfolio/photos/dailywell.png",
  },
  {
    id: 5,
    title: "TaleGo",
    subtitle: "Reading & Writing Mobile Application",
    description:
      "A mobile application that brings together readers and writers in a shared creative space. Users can publish original stories, discover new reads, follow authors, and engage with a growing community of literary enthusiasts.",
    techStack: ["Kotlin", "Android Studio", "Firebase", "Cloud Firestore"],
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
    title: "Debugging & Bug Tracking",
    description:
      "Systematic debugging using IDE tools, logs, and bug tracking workflows to identify, document, and resolve defects efficiently.",
    icon: "🐛",
    items: [
      "Root cause analysis",
      "Log analysis",
      "Bug lifecycle management",
      "Regression verification",
    ],
  },
];

export const experience = [
  {
    id: 1,
    company: "Bank of Ceylon",
    role: "IT Intern",
    period: "2024",
    location: "Sri Lanka",
    type: "Internship",
    description:
      "Completed an industry internship at one of Sri Lanka's premier state banks. Gained hands-on exposure to enterprise banking systems, IT infrastructure management, and software operations in a high-security, mission-critical environment.",
    highlights: [
      "Worked with enterprise banking software and internal IT systems",
      "Assisted in system maintenance and troubleshooting",
      "Collaborated with the IT department on operational tasks",
      "Gained insight into banking-grade security practices and compliance",
    ],
    icon: "🏦",
    color: "from-primary-600 to-primary-800",
  },
];

export const education = [
  {
    id: 1,
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "Bachelor of Science in Information Technology",
    period: "2023 – Present",
    cgpa: "3.90",
    highlight: true,
    achievements: [
      "Dean's List — 4 Consecutive Semesters",
      "CGPA: 3.90 / 4.00",
      "Faculty of Computing",
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
    title: "CGPA 3.90",
    subtitle: "Faculty of Computing",
    description:
      "Maintaining an exceptional CGPA of 3.90 out of 4.00, demonstrating consistency and depth across technical and theoretical subjects.",
    icon: "⭐",
    stat: "3.90",
    statLabel: "out of 4.00",
    color: "from-primary-400 to-accent-500",
  },
];
