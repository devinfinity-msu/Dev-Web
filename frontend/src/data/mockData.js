// Complete Mock Data Architecture for Dev Infinity Web Development Club
// Designed for seamless transition to REST APIs (Node.js/Express + Supabase)

export const clubInfo = {
  name: "Dev Infinity",
  department: "Department of Computer Science & Engineering",
  faculty: "Faculty of Technology and Engineering (FTE)",
  university: "The Maharaja Sayajirao University of Baroda (MSU Baroda)",
  location: "CSE Building, FTE Campus, Kalabhavan, Vadodara, Gujarat",
  tagline: "Build. Innovate. Inspire.",
  heroHeading: "Where Ideas Turn Into Innovation.",
  heroDescription: "Dev Infinity is the premier student-driven Web Development Club at CSE, FTE, MSU Baroda. We empower developers through hands-on workshops, hackathons, open-source projects, and peer collaboration.",
  contactEmail: "devinfinity.cse@msubaroda.ac.in",
  facultyCoordinator: {
    name: "Dr. Faculty Coordinator",
    designation: "Assistant Professor, CSE Dept",
    email: "faculty.cse@msubaroda.ac.in",
    location: "Department of CSE, FTE, MSU Baroda"
  },
  socials: {
    github: "https://github.com/devinfinity-msu",
    linkedin: "https://www.linkedin.com/company/devinfinity-cse/posts/?feedView=all",
    instagram: "https://instagram.com/devinfinity_msu",
    discord: "https://discord.gg/devinfinity"
  }
};

export const quickStats = [
  { label: "Active Members", value: "250+", icon: "Users" },
  { label: "Events & Workshops", value: "35+", icon: "Calendar" },
  { label: "Projects Built", value: "20+", icon: "Code2" },
  { label: "Hackathon Wins", value: "12+", icon: "Trophy" }
];

export const focusAreas = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Crafting interactive, high-performance web user interfaces using modern JavaScript frameworks and responsive design.",
    icon: "Layout",
    tags: ["React", "Vue", "Tailwind CSS", "TypeScript"]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Architecting robust server-side logic, RESTful APIs, microservices, and database layers for web applications.",
    icon: "Server",
    tags: ["Node.js", "Express", "Python", "Go"]
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description: "Combining frontend and backend mastery to build end-to-end scalable web applications from scratch.",
    icon: "Layers",
    tags: ["Next.js", "MERN Stack", "GraphQL", "TRPC"]
  },
  {
    id: "uiux",
    title: "UI/UX & Web Design",
    description: "Creating accessible, intuitive, user-centered digital interfaces and visual brand design systems.",
    icon: "Palette",
    tags: ["Figma", "Design Systems", "Accessibility", "Wireframing"]
  },
  {
    id: "database",
    title: "Database & Web Tech",
    description: "Designing efficient relational & NoSQL data architectures and real-time database integrations.",
    icon: "Database",
    tags: ["PostgreSQL", "Supabase", "MongoDB", "Redis"]
  },
  {
    id: "infrastructure",
    title: "Deployment & Web Infrastructure",
    description: "Automating CI/CD pipelines, containerization, cloud hosting, and server performance monitoring.",
    icon: "Cloud",
    tags: ["Docker", "Vercel", "AWS", "GitHub Actions"]
  }
];

export const liveEvent = {
  id: "live-1",
  isLive: true,
  title: "Full-Stack Web Dev Bootcamp 2026: Live Workshop",
  banner: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
  currentActivity: "Hands-on React Router & State Management Live Coding",
  speaker: "Aarav Patel (Web Lead)",
  date: "Today, Aug 24, 2026",
  time: "6:00 PM - 8:00 PM IST",
  venue: "Lab 3, CSE Department / Google Meet Live",
  joinUrl: "https://meet.google.com/dev-infinity-live",
  attendeesCount: 78
};

export const events = [
  {
    id: "evt-101",
    title: "React & Modern Frontend Architecture",
    description: "Learn state management, component composition, hooks, and clean UI engineering for large-scale web applications.",
    category: "Frontend",
    type: "Workshop",
    status: "Upcoming",
    date: "Aug 30, 2026",
    time: "4:00 PM IST",
    venue: "Auditorium B, FTE Kalabhavan",
    speaker: "Web Team Leads",
    registrationUrl: "#register",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "evt-102",
    title: "DevHack 2026: 24-Hour Web Hackathon",
    description: "Dev Infinity's annual flagship web hackathon. Build real-world solutions for university and community challenges.",
    category: "Full-Stack",
    type: "Hackathon",
    status: "Upcoming",
    date: "Sep 12-13, 2026",
    time: "10:00 AM IST Onwards",
    venue: "CSE Department Hall, MSU Baroda",
    speaker: "Industry Mentors & Alumni",
    registrationUrl: "#register",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "evt-103",
    title: "Node.js & API Engineering Deep Dive",
    description: "Master RESTful API design, authentication middlewares, database integration, and Express server optimization.",
    category: "Backend",
    type: "Workshop",
    status: "Upcoming",
    date: "Sep 22, 2026",
    time: "5:00 PM IST",
    venue: "Lab 2, CSE Department",
    speaker: "Backend Core Mentors",
    registrationUrl: "#register",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "evt-201",
    title: "Web Performance & Lighthouse Optimization",
    description: "Recap of our session on web vitals, asset optimization, lazy loading, and bundle size reduction.",
    category: "Frontend",
    type: "Workshop",
    status: "Past",
    date: "Aug 10, 2026",
    time: "3:00 PM IST",
    venue: "Online",
    speaker: "Priya Sharma",
    recapUrl: "#recap",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "evt-202",
    title: "UI/UX Prototyping in Figma",
    description: "Interactive session on wireframing, component auto-layout, design tokens, and developer handoff.",
    category: "UI/UX",
    type: "Workshop",
    status: "Past",
    date: "Jul 28, 2026",
    time: "4:00 PM IST",
    venue: "CSE Lab 1",
    speaker: "Rohan Mehta",
    recapUrl: "#recap",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80"
  }
];

export const projects = [
  {
    id: "proj-1",
    featured: true,
    title: "MSU Student Resource Portal",
    description: "A centralized platform for CSE students to access lecture notes, past exam papers, and workshop code repositories.",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    contributors: ["Dev Infinity Web Team", "Siddharth V."],
    githubUrl: "https://github.com/devinfinity-msu/student-portal",
    demoUrl: "https://student-portal.devinfinity.in",
    status: "Completed",
    longDescription: "The MSU Student Resource Portal is a centralized academic hub designed to streamline how CSE students access and share lecture notes, past examination papers, code repositories from workshops, and curated study materials. The platform features role-based access so faculty can upload official resources while students contribute community-driven content such as solved assignments and project templates.",
    features: [
      "Semester-wise categorized lecture notes and study material",
      "Searchable repository of past exam papers with solutions",
      "Workshop code repository linked to Dev Infinity sessions",
      "Role-based access control for students and faculty"
    ],
    challenge: "CSE students at MSU lacked a single reliable source for academic resources, often relying on scattered WhatsApp groups and personal drives. This led to fragmented, outdated, and hard-to-find materials — especially for juniors unfamiliar with the department's workflow.",
    solution: "The team built a full-stack MERN application with a clean folder hierarchy mirroring the university semester structure. An Express REST API handles authentication and CRUD operations, while MongoDB stores metadata and file references. React on the frontend provides instant search, filtering by semester and subject, and a responsive card-based UI that works well on both desktop and mobile devices."
  },
  {
    id: "proj-2",
    title: "Dev Infinity Club Website",
    description: "The official responsive web application for Dev Infinity, built with React, modular architecture, and modern CSS.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    techStack: ["React 18", "Vite", "Vanilla CSS", "React Router"],
    contributors: ["Web Team Leads"],
    githubUrl: "https://github.com/devinfinity-msu/Dev-Web",
    demoUrl: "https://devinfinity-msu.github.io/Dev-Web",
    status: "In Progress",
    longDescription: "The official Dev Infinity website serves as the digital identity of MSU Baroda's premier web development club. Built with React 19 and Vite for blazing-fast performance, it showcases events, projects, blogs, achievements, and team information through a dark-themed, glassmorphic interface that reflects the club's modern engineering standards.",
    features: [
      "Dark-themed glassmorphic UI with responsive design across all devices",
      "Dynamic event listings with live-event banner and registration links",
      "Interactive project showcase with search and category filtering",
      "Modular component architecture designed for easy contributor onboarding"
    ],
    challenge: "Dev Infinity needed a professional web presence that not only displayed club information but also served as a living portfolio of the team's frontend capabilities. The site had to be maintainable by rotating student teams each academic year without relying on heavy frameworks or paid services.",
    solution: "The team chose React with Vite for fast iteration and zero-cost static hosting on GitHub Pages. A modular component architecture with vanilla CSS ensures that incoming contributors can understand and extend the codebase without learning additional styling frameworks. Mock data layers are designed for seamless migration to a real backend when ready."
  },
  {
    id: "proj-3",
    title: "UniEvents Event Booking System",
    description: "Dynamic ticketing and real-time seat reservation portal for department seminars, hackathons, and cultural events.",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Express", "Supabase", "Tailwind CSS"],
    contributors: ["Aarav Patel", "Neha Joshi"],
    githubUrl: "https://github.com/devinfinity-msu/uni-events",
    demoUrl: "https://unievents.demo.com",
    status: "Beta",
    longDescription: "UniEvents is a real-time event booking system built for university departments to manage event creation, seat reservations, and attendee check-ins. The platform supports ticketing for seminars, hackathons, and cultural events, with Supabase real-time subscriptions providing instant seat availability updates to prevent overbooking.",
    features: [
      "Real-time seat availability with Supabase subscriptions",
      "QR-code-based digital ticket generation and check-in",
      "Admin dashboard for event creation, analytics, and attendee management",
      "Email confirmation and reminder notifications via webhooks"
    ],
    challenge: "University events were managed through manual Google Forms with no seat limits, leading to frequent overbooking, no-shows without notification, and zero visibility into actual attendance. Organizers needed a system that could handle concurrent registrations reliably.",
    solution: "The team leveraged Supabase's real-time capabilities to broadcast seat count changes instantly to all connected clients. An Express middleware validates registration requests against remaining capacity before confirming bookings. The React frontend displays live counters and generates unique QR-code tickets that can be scanned at the venue for fast check-in."
  },
  {
    id: "proj-4",
    title: "Algorithm Visualizer Web App",
    description: "Interactive web dashboard visualizing sorting algorithms, graph traversals, and pathfinding in real-time.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
    techStack: ["React", "Canvas API", "CSS Grid"],
    contributors: ["Karan Shah"],
    githubUrl: "https://github.com/devinfinity-msu/algo-visualizer",
    demoUrl: "https://algo.devinfinity.in",
    status: "Completed",
    longDescription: "The Algorithm Visualizer is an interactive educational tool that renders sorting algorithms, graph traversals, and pathfinding techniques as animated visualizations on an HTML5 Canvas. Students can adjust array sizes, animation speed, and obstacle placements to observe how algorithms behave under different conditions — making abstract DSA concepts tangible and intuitive.",
    features: [
      "Animated step-by-step visualization of 8+ sorting algorithms",
      "Interactive grid for pathfinding with draggable start/end nodes and walls",
      "Adjustable speed controls and array-size sliders for experimentation",
      "Side-by-side comparison mode to benchmark two algorithms simultaneously"
    ],
    challenge: "Second-year CSE students often struggle to internalize sorting and graph algorithm behavior from textbook pseudocode alone. Static diagrams fail to convey the dynamic, step-by-step nature of operations like partitioning in QuickSort or frontier expansion in A*.",
    solution: "Using the Canvas API for high-performance rendering, the visualizer draws each algorithmic step as an animation frame, color-coding comparisons, swaps, and visited nodes. React state manages algorithm selection and control parameters while requestAnimationFrame ensures smooth 60fps playback even for large datasets. CSS Grid handles responsive layout so the tool works equally well on lab desktops and personal laptops."
  }
];

export const blogs = [
  {
    id: "blog-1",
    featured: true,
    title: "Building Scalable Web Architecture in 2026",
    summary: "An in-depth guide on decoupling client-side React apps from Node.js microservices and Supabase data layers.",
    category: "Full-Stack",
    author: {
      name: "Aarav Patel",
      role: "Club President & Lead Dev",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "Aug 20, 2026",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "blog-2",
    featured: false,
    title: "Mastering CSS Grid and Subgrid for Complex Layouts",
    summary: "Stop fighting flexbox column wraps! Learn how CSS Grid subgrid simplifies nested card grids.",
    category: "Frontend",
    author: {
      name: "Priya Sharma",
      role: "UI/UX Mentor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "Aug 15, 2026",
    readTime: "4 min read",
    coverImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-3",
    featured: false,
    title: "Why Node.js + Express is Still the University Standard",
    summary: "Exploring asynchronous I/O, event loops, middleware patterns, and why Express remains unbeatable for modern backends.",
    category: "Backend",
    author: {
      name: "Siddharth V.",
      role: "Backend Lead",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    publishedDate: "Aug 02, 2026",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
  }
];

export const learningResources = [
  {
    id: "res-cat-1",
    category: "Web Development Roadmaps",
    icon: "Map",
    description: "Step-by-step career path guides for frontend, backend, and full-stack web engineers.",
    items: [
      { id: "res-101", title: "Complete Frontend Roadmap 2026", type: "Roadmap", link: "https://roadmap.sh/frontend", tag: "Essential" },
      { id: "res-102", title: "Node.js & Express Backend Roadmap", type: "Roadmap", link: "https://roadmap.sh/backend", tag: "Backend" },
      { id: "res-103", title: "Full-Stack MERN / Supabase Path", type: "Roadmap", link: "https://roadmap.sh/full-stack", tag: "Full-Stack" }
    ]
  },
  {
    id: "res-cat-2",
    category: "Frontend Core (HTML / CSS / JS / React)",
    icon: "Code",
    description: "Tutorials, cheatsheets, and interactive practice sites for client-side web technologies.",
    items: [
      { id: "res-201", title: "Modern JavaScript Info Book (javascript.info)", type: "Tutorial", link: "https://javascript.info", tag: "JS" },
      { id: "res-202", title: "Official React 18 Documentation & Interactive Labs", type: "Docs", link: "https://react.dev", tag: "React" },
      { id: "res-203", title: "Dev Infinity Clean CSS Cheatsheet", type: "PDF / Notes", link: "#notes", tag: "CSS" }
    ]
  },
  {
    id: "res-cat-3",
    category: "Backend & Database (Node.js / Express / Supabase)",
    icon: "Server",
    description: "Guides for building REST APIs, managing relational databases, and server security.",
    items: [
      { id: "res-301", title: "Express.js Routing & Middleware Guide", type: "Docs", link: "https://expressjs.com", tag: "Express" },
      { id: "res-302", title: "Supabase Quickstart & Postgres Basics", type: "Guide", link: "https://supabase.com/docs", tag: "Database" },
      { id: "res-303", title: "API Design Best Practices", type: "Article", link: "#api-guide", tag: "APIs" }
    ]
  },
  {
    id: "res-cat-4",
    category: "Workshop Materials & Dev Tools",
    icon: "Wrench",
    description: "Slides, starter templates, Git guides, and code repositories from Dev Infinity workshops.",
    items: [
      { id: "res-401", title: "Git & GitHub Collaboration Workflow Guide", type: "Workshop Slide", link: "#git-guide", tag: "Git" },
      { id: "res-402", title: "React + Vite Clean Starter Template", type: "Repository", link: "https://github.com/devinfinity-msu", tag: "Template" },
      { id: "res-403", title: "Dev Infinity Web Developer Toolkit 2026", type: "Curated Links", link: "#toolkit", tag: "Tools" }
    ]
  }
];

export const achievements = [
  {
    id: "ach-1",
    type: "Club Milestone",
    title: "1st Place - State Level Web Hackathon 2026",
    description: "Dev Infinity's representative team secured top honors building a smart urban governance portal.",
    date: "July 2026",
    members: "Aarav Patel, Siddharth V., Neha Joshi",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ach-2",
    type: "Member Win",
    title: "Best Open Source Contribution Award",
    description: "Member Rohan Mehta got 15+ pull requests merged into major React ecosystem repositories.",
    date: "June 2026",
    members: "Rohan Mehta (3rd Year CSE)",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "ach-3",
    type: "Club Milestone",
    title: "500+ University Students Trained in Web Development",
    description: "Successfully conducted 10 hands-on workshops on HTML, CSS, JavaScript, React, and Express.",
    date: "May 2026",
    members: "Dev Infinity Mentor Team",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
  }
];

export const teamMembers = [
  {
    id: "tm-0",
    section: "Faculty Coordinator",
    name: "Dr. CSE Faculty Coordinator",
    role: "Faculty Advisor",
    year: "Faculty",
    branch: "Dept. of Computer Science & Engineering",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "tm-1",
    section: "Core Team",
    name: "Aarav Patel",
    role: "President & Web Lead",
    year: "4th Year",
    branch: "B.E. Computer Science & Engineering",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "tm-2",
    section: "Core Team",
    name: "Priya Sharma",
    role: "Vice President & UI/UX Lead",
    year: "4th Year",
    branch: "B.E. Computer Science & Engineering",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "tm-3",
    section: "Web Team",
    name: "Siddharth Verma",
    role: "Backend Lead",
    year: "3rd Year",
    branch: "B.E. Computer Science & Engineering",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "tm-4",
    section: "Web Team",
    name: "Neha Joshi",
    role: "Frontend Developer",
    year: "3rd Year",
    branch: "B.E. Computer Science & Engineering",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "tm-5",
    section: "Web Team",
    name: "Rohan Mehta",
    role: "Full-Stack Engineer",
    year: "3rd Year",
    branch: "B.E. Computer Science & Engineering",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  }
];

export const adminSummary = {
  totalEvents: 12,
  totalProjects: 18,
  totalBlogs: 15,
  learningResources: 24,
  achievements: 8,
  teamMembers: 14,
  contactMessages: 9,
  certificatesGenerated: 142
};
