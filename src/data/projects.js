export const PROJECT_CATEGORIES = [
  { id: 'all', labelKey: 'portfolio.filterAll' },
  { id: 'fullstack', labelKey: 'portfolio.filterFullstack' },
  { id: 'security', labelKey: 'portfolio.filterSecurity' },
  { id: 'tools', labelKey: 'portfolio.filterTools' },
];

export const projects = [
  {
  slug: 'geneshenpro',
  category: 'fullstack',
  status: 'completed',
  title: 'GeneshenPro',
  subtitle: 'Digital Services & Virtual Number Platform',
  summary:
    'A full-stack platform providing virtual numbers, digital services, social media growth solutions, account management, wallet functionality, and secure user authentication.',
  stack: ['Next.js', 'Node.js', 'MongoDB', 'Google OAuth', 'REST API'],
  outcomes: [
    'Built secure authentication with email and Google login',
    'Developed wallet and order management system',
    'Created a centralized dashboard for users to manage digital services',
  ],
  role: 'Full-stack developer — frontend, backend, authentication, database design',
  links: {
    demo: 'https://geneshenpro.com',
    repo: null,
  },
},

{
  slug: 'camctax',
  category: 'web',
  status: 'completed',
  title: 'CamcTax',
  subtitle: 'Business Registration & Tax Assistance Platform',
  summary:
    'A professional business and compliance platform that connects entrepreneurs with consultants for business registration, tax assistance, declarations, and compliance services in Cameroon.',
  stack: ['Next.js', 'React', 'Node.js', 'SEO'],
  outcomes: [
    'Designed a professional service marketplace experience',
    'Simplified consultant discovery and client onboarding',
    'Improved accessibility to tax and compliance services',
  ],
  role: 'Frontend & full-stack developer',
  links: {
    demo: 'https://camctax.com',
    repo: null,
  },
},

{
  slug: 'localnk',
  category: 'fullstack',
  status: 'completed',
  title: 'Localnk',
  subtitle: 'Local Business Discovery Platform',
  summary:
    'A platform designed to help users discover local businesses, services, and opportunities while providing businesses with increased online visibility.',
  stack: ['React Native', 'Node.js', 'MongoDB', 'REST API'],
  outcomes: [
    'Created business listing and discovery features',
    'Built scalable backend APIs',
    'Implemented user-friendly mobile experiences',
  ],
  role: 'Full-stack developer',
  links: {
    demo: 'https://localnk.com',
    repo: null,
  },
},

{
  slug: 'anexiums',
  category: 'fullstack',
  status: 'completed',
  title: 'AneXiums',
  subtitle: 'Corporate Technology Solutions Website',
  summary:
    'Developed and maintained modern web solutions for a technology company while contributing to software development projects and client solutions.',
  stack: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
  outcomes: [
    'Delivered production-ready web applications',
    'Improved user experience and platform performance',
    'Collaborated with development teams on client projects',
  ],
  role: 'Full-stack Developer',
  links: {
    demo: 'https://anexiums.com',
    repo: null,
  },
},

{
  slug: 'calebrain',
  category: 'web',
  status: 'completed',
  title: 'Calebrain',
  subtitle: 'Business & Digital Solutions Platform',
  summary:
    'A modern business website focused on presenting digital solutions, services, and professional online presence for clients and organizations.',
  stack: ['React', 'Next.js', 'JavaScript'],
  outcomes: [
    'Designed responsive user interfaces',
    'Optimized website performance and SEO',
    'Created modern service-focused user journeys',
  ],
  role: 'Frontend Developer',
  links: {
    demo: 'https://calebrain.com',
    repo: null,
  },
},

{
  slug: 'ajresidence',
  category: 'web',
  status: 'completed',
  title: 'AJ Residence',
  subtitle: 'Hospitality & Property Booking Website',
  summary:
    'A professional hospitality platform showcasing accommodations, amenities, property information, and booking services.',
  stack: ['React', 'JavaScript', 'Responsive Design'],
  outcomes: [
    'Created a premium hospitality user experience',
    'Improved online visibility for property bookings',
    'Implemented mobile-friendly booking interfaces',
  ],
  role: 'Frontend Developer',
  links: {
    demo: 'https://ajresidence.com',
    repo: null,
  },
},

{
  slug: 'youli-foods',
  category: 'web',
  status: 'completed',
  title: 'Youli-Foods',
  subtitle: 'Food & Restaurant Brand Website',
  summary:
    'A modern food business website designed to showcase products, services, menus, and brand identity while improving customer engagement.',
  stack: ['React', 'JavaScript', 'UI/UX Design'],
  outcomes: [
    'Developed an engaging food brand experience',
    'Improved mobile responsiveness',
    'Enhanced customer interaction and product visibility',
  ],
  role: 'Frontend Developer',
  links: {
    demo: 'https://youli-foods.com',
    repo: null,
  },
},

{
  slug: 'acastem',
  category: 'web',
  status: 'completed',
  title: 'ACASTEM',
  subtitle: 'Educational & Technology Platform',
  summary:
    'An education-focused platform designed to provide information, resources, and digital experiences for students, educators, and organizations.',
  stack: ['React', 'JavaScript', 'Responsive Design'],
  outcomes: [
    'Developed a clean and accessible educational platform',
    'Improved content organization and navigation',
    'Created a responsive learning-focused experience',
  ],
  role: 'Frontend Developer',
  links: {
    demo: 'https://acastem.com',
    repo: null,
  },
},
{
  slug: 'trimly237',
  category: 'fullstack',
  status: 'inProgress',
  title: 'Trimly237',
  subtitle: 'Barber Booking Platform',
  summary:
    'A full-stack barber booking platform built to connect clients with barbers and make appointment scheduling, service discovery, and booking management simple and efficient.',
  stack: ['React Native', 'Expo', 'FastAPI', 'PostgreSQL', 'REST API'],
  outcomes: [
    'Built separate mobile applications for clients and barber partners',
    'Implemented barber discovery, service browsing, bookings, profiles, reviews, and appointment management',
    'Connected the applications to a FastAPI backend hosted on a VPS',
  ],
  role: 'Full-stack developer — mobile apps, backend integration, UI/UX, API connection, deployment',
  links: { demo: null, repo: null },
},

{
  slug: 'docfinder',
  category: 'fullstack',
  status: 'inProgress',
  title: 'DocFinder',
  subtitle: 'AI-Powered Lost Document Recovery Platform',
  summary:
    'A smart document recovery and digital storage platform designed to help users securely store important documents and find lost or found documents using AI-assisted matching.',
  stack: ['React', 'Python', 'MongoDB', 'OCR', 'OpenCV', 'AI'],
  outcomes: [
    'Developed a secure Vault for storing important personal documents',
    'Designed a Find system for matching lost and found document records',
    'Integrated OCR, document classification, fuzzy matching, and similarity scoring for intelligent search',
  ],
  role: 'Lead developer — system architecture, frontend, backend, AI integration, database design',
  links: { demo: null, repo: null },
},

{
  slug: 'calendar-weather-dress',
  category: 'mobile',
  status: 'completed',
  title: 'Calendar Weather & Dress App',
  subtitle: 'Weather-Based Outfit Recommendation App',
  summary:
    'A React Native mobile application that combines calendar planning with real-time weather information and helps users decide what to wear based on current weather conditions.',
  stack: ['React Native', 'Expo', 'JavaScript', 'WeatherAPI', 'REST API'],
  outcomes: [
    'Integrated real-time weather data using WeatherAPI',
    'Displayed weather conditions alongside calendar information',
    'Provided outfit recommendations based on temperature and weather conditions',
  ],
  role: 'Mobile developer — application design, API integration, UI development',
  links: {
    demo: null,
    repo: 'https://github.com/HabibChris03/Calendar-WeatherDress-App',
  },
},

{
  slug: 'todo-mobile-app',
  category: 'mobile',
  status: 'completed',
  title: 'Task Management App',
  subtitle: 'Mobile To-Do and Productivity Application',
  summary:
    'A mobile productivity application designed to help users create, organize, track, and manage daily tasks through a clean and simple interface.',
  stack: ['React Native', 'Node.js', 'MongoDB', 'JavaScript', 'REST API'],
  outcomes: [
    'Implemented task creation, viewing, history, and profile functionality',
    'Connected the mobile application to a Node.js and MongoDB backend',
    'Designed a simple mobile-first interface for managing daily activities',
  ],
  role: 'Full-stack developer — mobile frontend, backend API, database integration',
  links: { demo: null, repo: null },
},

{
  slug: 'personal-portfolio',
  category: 'web',
  status: 'inProgress',
  title: 'Personal Portfolio',
  subtitle: 'Professional Developer & Cybersecurity Portfolio',
  summary:
    'A professional personal website created to showcase my software engineering experience, projects, cybersecurity skills, services, achievements, and technical content.',
  stack: ['React', 'JavaScript', 'HTML', 'CSS', 'REST API'],
  outcomes: [
    'Created a responsive mobile-app-inspired portfolio experience',
    'Organized projects, skills, work experience, services, and professional achievements',
    'Designed the website for recruiters, clients, startups, and technology companies',
  ],
  role: 'Designer & developer — branding, UI/UX, frontend development, deployment',
  links: { demo: null, repo: null },
},

{
  slug: 'trimly-admin',
  category: 'fullstack',
  status: 'inProgress',
  title: 'Trimly Admin Dashboard',
  subtitle: 'Platform Administration & Management System',
  summary:
    'A secure web-based administration platform for managing the Trimly ecosystem, including users, bookings, barbers, services, application data, and system activity.',
  stack: ['React', 'FastAPI', 'PostgreSQL', 'REST API', 'VPS'],
  outcomes: [
    'Designed a large multi-page administrative dashboard',
    'Connected dashboard features directly to the production backend with no mock data',
    'Implemented centralized management for application and database operations',
  ],
  role: 'Full-stack developer — dashboard architecture, API integration, security, deployment',
  links: { demo: null, repo: null },
},
{
  slug: 'passwordguardian',
  category: 'security',
  status: 'completed',
  title: 'PasswordGuardian',
  subtitle: 'Password Security Analysis & Management Platform',
  summary:
    'A cybersecurity-focused application designed to help users evaluate password strength, identify weak credentials, follow security best practices, and improve overall account protection.',
  stack: [
    'React',
    'Node.js',
    'JavaScript',
    'MongoDB',
    'Cybersecurity'
  ],
  outcomes: [
    'Implemented password strength analysis and scoring',
    'Provided security recommendations based on password complexity',
    'Helped users identify weak and reused passwords',
    'Promoted cybersecurity awareness through practical security guidance',
  ],
  role: 'Full-stack developer — application design, security logic, frontend development, backend integration',
  links: {
    demo: null,
    repo: null,
  },
},
];
