export const profile = {
  name: 'Rishabh Mehra',
  lookingFor:
    "I'm looking for a software engineering role — backend or full-stack — where I can keep learning and ship things that actually get used.",
  proof: [
    'University of Alberta · Class of 2026',
    'Backend & full-stack',
    'Open to relocation',
  ],
}

export const education = [
  {
    school: 'University of Alberta',
    credential: 'B.Sc. Specialization in Computer Science',
    period: 'Graduated April 2026',
    location: 'Edmonton, Alberta',
    highlights: ['CGPA 3.5', 'Graduated with Distinction'],
    detail:
      'Focused on data structures, algorithms, artificial intelligence, machine learning, databases, software engineering, and application development.',
  },
  {
    school: 'La Martiniere College',
    credential: 'High school',
    period: 'Before university',
    location: '',
    highlights: [],
    detail:
      'The school where I built the foundation that eventually led me toward computer science.',
  },
]

export const about = `I’m a Computer Science graduate from the University of Alberta. Most of my recent work has been APIs, databases, and the glue between them — a bank ledger, a companion-matching app for seniors, and a small federated social network.

I've also done co-ops in research computing and IT, so I'm used to messy real systems, not just school projects. I like reading the code, writing a test, and figuring it out.`

export const featuredProject = {
  title: 'Care Companion',
  repoName: 'Notty',
  context: 'University capstone · 2025',
  role: 'Backend developer on a seven-person team',
  description:
    'A mobile platform that helps seniors find vetted companions and volunteers, book time together, stay in touch, and share safety information with family.',
  tech: ['React Native', 'Expo', 'Django', 'PostgreSQL', 'AWS'],
  link: 'https://github.com/rishabh2727/f25project-Notty',
  decisions: [
    {
      title: 'Domain-based backend',
      detail:
        'Profiles, matching, bookings, payments, reviews, notifications, and safety live in separate Django modules instead of one large API layer.',
    },
    {
      title: 'Safety inside the core flow',
      detail:
        'Safe zones, incident reporting, and family oversight sit alongside booking and messaging rather than in a separate tool.',
    },
    {
      title: 'Built for production constraints',
      detail:
        'The React Native client connects to a Django REST API, PostgreSQL, Stream Chat, Stripe, maps, push notifications, and an AWS deployment.',
    },
  ],
}

export const projects = [
  {
    title: 'Core Banking Ledger',
    context: 'Backend systems',
    description:
      "A small version of how a bank tracks money. Transfers are double-entry, balances are calculated from history instead of a number you overwrite, and the same request can't go through twice.",
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    link: 'https://github.com/rishabh2727/core-ledger-service',
    detail: 'Double-entry accounting · Idempotent transfers',
  },
  {
    title: 'Social Distribution',
    context: 'Federated web',
    description:
      'A federated social network from a web course. People can post, follow, like, and comment — and servers can talk to other servers over a REST API, not just their own users.',
    tech: ['Python', 'Django', 'JavaScript', 'PostgreSQL'],
    link: 'https://github.com/rishabh2727/cmput404-Project-Archive',
    detail: 'Federated nodes · REST API',
  },
  {
    title: 'AI Document Chat',
    context: 'Applied AI',
    description:
      'Ask questions about a PDF. It chunks the file, pulls the relevant parts, then a small agent loop drafts an answer and checks it against the source before showing it to you.',
    tech: ['Python', 'LangChain', 'LangGraph', 'RAG'],
    link: 'https://github.com/rishabh2727/DocumentChat',
    detail: 'Hybrid retrieval · Verification loop',
  },
]

export const experience = [
  {
    role: 'Volunteer Software Engineer Intern',
    company: 'Atria Community',
    location: 'Vancouver, BC',
    period: 'Sep 15, 2026 — Present',
    detail:
      'Contributing to ERD documentation and Python/Django backend work, while coordinating tasks with the team through Notion and Jira.',
  },
  {
    role: 'Junior Research Analyst Co-op',
    company: 'University of Alberta',
    location: 'Edmonton, AB',
    period: 'May — Aug 2025',
    detail:
      'Automated diagnostics across 50+ Linux systems and provisioned OpenStack VMs for research workloads.',
  },
  {
    role: 'Desktop Support Engineer Co-op',
    company: 'Elk Valley Resources',
    location: 'Elkford, BC',
    period: 'Sep 2024 — Apr 2025',
    detail:
      'Built an inventory tool used across five mine sites and automated ServiceNow work orders.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Marquee Equity',
    location: 'New Delhi, India',
    period: 'May — Jul 2023',
    detail:
      'Used Python and SQL to clean and analyze more than one million investor and startup records.',
  },
]

export const certifications = [
  {
    title: 'Sample-based Learning Methods',
    issuer: 'University of Alberta · Alberta Machine Intelligence Institute',
    date: 'March 2026',
    link: 'https://coursera.org/verify/CAILI9O8BJY5',
    theme: 'blue',
  },
  {
    title: 'Prediction and Control with Function Approximation',
    issuer: 'University of Alberta · Alberta Machine Intelligence Institute',
    date: 'April 2026',
    link: 'https://coursera.org/verify/GSN2P7ZXBQI1',
    theme: 'violet',
  },
]

export const skills = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    label: 'Frontend',
    items: ['React', 'React Native', 'HTML', 'CSS'],
  },
  {
    label: 'Backend',
    items: ['Django', 'Spring Boot', 'Node.js', 'REST APIs'],
  },
  {
    label: 'Tools',
    items: ['PostgreSQL', 'Docker', 'AWS', 'Git', 'Linux'],
  },
]

export const contact = {
  email: 'rishabhmehra2710@gmail.com',
  github: 'https://github.com/rishabh2727',
  linkedin: 'https://www.linkedin.com/in/rishabhh27',
  instagram: 'https://www.instagram.com/rishabh.2.7/',
  resume: '/documents/rishabh-mehra-resume.pdf',
}
