export const profile = {
  name: 'Priyanshu Agarwal',
  role: 'Full Stack Developer',
  tagline:
    'I build and run full-stack products — from the interface down to the server they run on.',
  summary:
    'Full stack developer with production experience across React/Next.js frontends, Node.js/Express APIs, and RHEL Linux infrastructure — currently exploring LLM-integrated applications.',
  status: 'Currently: System Engineer at Infosys, Pune — open to SDE-1 / Frontend / Backend / Full Stack roles',
  email: 'priyanshuagarwal1008@gmail.com',
  phone: '+91 7892500783',
  github: 'https://github.com/priyanshu-101',
  linkedin: 'https://www.linkedin.com/in/priyanshu-agrwl/',
}

export const skills = [
  { label: 'Languages', value: 'Python, JavaScript (ES6+), Java, C, Bash/Shell, SQL' },
  { label: 'Frontend', value: 'React.js, Next.js, HTML5, CSS3, Tailwind CSS, Responsive Design' },
  { label: 'Backend', value: 'Node.js, Express.js, REST APIs, JWT Authentication, OAuth 2.0' },
  { label: 'Databases', value: 'MongoDB, PostgreSQL, SQL' },
  { label: 'System Design', value: 'Low-Level Design (LLD), High-Level Design (HLD)' },
  { label: 'AI / LLM', value: 'OpenAI API integration, prompt engineering, JSON-structured output handling' },
  { label: 'DevOps & OS', value: 'RHEL Linux, Ansible, configuration & patch management, system administration' },
  { label: 'Cloud', value: 'AWS, Vercel, Heroku, Docker' },
  { label: 'Tools', value: 'Git, GitHub, Postman, VS Code, Agile, SDLC, MVC' },
]

export const experience = [
  {
    title: 'System Engineer',
    org: 'Infosys',
    meta: 'Aug 2025 – Present · Pune, Maharashtra',
    points: [
      'Administer 50+ RHEL Linux servers — user/group permissions and service troubleshooting — sustaining 99.9% uptime in production.',
      'Automated log parsing, file operations, and scheduled maintenance with Bash/Shell scripts, cutting manual infra effort by 45%.',
      'Resolved 100+ live incidents for enterprise clients with cross-functional teams, cutting average escalation time by 30%.',
    ],
  },
  {
    title: 'Full Stack Developer',
    org: 'Freelance',
    meta: 'Jan 2024 – Present · Remote',
    points: [
      'Delivered 10+ end-to-end web projects across fintech, e-commerce, and SaaS using MERN and Next.js, sustaining 95%+ client satisfaction.',
      'Architected REST APIs with Node.js/Express, JWT auth, and query optimization, deployed to AWS/Vercel — cut page load times by 40%.',
      'Owned the full lifecycle across 10+ engagements — requirements through post-launch support — 100% on-time and within budget.',
    ],
  },
]

export const projects = [
  {
    title: 'AI-Powered Resume Builder',
    meta: 'Apr 2026 – Present',
    stack: 'React · Node.js · Express · MongoDB · OpenAI API · JWT',
    points: [
      'Integrated the OpenAI API with prompt engineering to auto-generate job-tailored resume content, cutting manual drafting time by 70% for 50+ pilot users.',
      'Built a validation pipeline for JSON-structured LLM output, reaching 98% schema compliance.',
      'Shipped 15+ REST endpoints for auth, resume CRUD, and AI prompt handling, secured with JWT middleware.',
      'Built a React SPA with real-time preview and one-click PDF export, cutting time-to-download 3x.',
    ],
  },
  {
    title: 'Telenet Client — Linux Server Monitoring & Patch Management',
    meta: 'Feb 2026 – Present',
    stack: 'RHEL Linux · Ansible · Bash',
    points: [
      'Automated OS patching across 20+ RHEL servers with Ansible playbooks — 60% less manual effort, zero unplanned downtime across 12+ cycles.',
      'Monitored CPU/memory/disk via custom Shell scripts, flagging bottlenecks up to 24 hours ahead of impact.',
      'Ran pre/post-patch health checks and maintained runbooks, sustaining 99.5% SLA compliance.',
    ],
  },
  {
    title: 'Task Manager Web Application',
    meta: 'Jan 2025 – Feb 2025',
    stack: 'Next.js · Supabase · PostgreSQL · Tailwind CSS',
    points: [
      'Built real-time sync and full CRUD supporting 50+ concurrent sessions on Next.js + Supabase.',
      'Implemented RBAC with protected, session-aware routes — zero unauthorized access across all test cases.',
      'Built a 10+ component reusable UI library, cutting new-feature dev time by 35%.',
    ],
  },
  {
    title: 'STC Student Portal',
    meta: 'Nov 2023 – Apr 2024',
    stack: 'React · Node.js · Express · MongoDB',
    points: [
      'Co-built a student records and admin workflow portal in a 6-person Agile team (MERN + MVC) across 20+ sprints.',
      'Rolled out 12+ reusable components with React Router, standardizing navigation across 8 modules.',
      'Overhauled form validation and flow, cutting submission errors 50% for 500+ monthly submissions.',
    ],
  },
  {
    title: 'Research Paper — Bone Fracture Detection Using YOLOv8',
    meta: '2025',
    stack: 'Python · YOLOv8 · Computer Vision',
    points: [
      'Trained a YOLOv8 model on 2,000+ annotated X-ray images to localize bone fractures.',
      'Applied transfer learning on medical imaging data, lifting precision 15% over the from-scratch baseline.',
      'Reached 92.4% detection accuracy, published as a case for AI-assisted diagnostics in radiology.',
    ],
  },
]

export const education = [
  {
    school: 'KIET Group of Institutions',
    detail: 'B.Tech, Computer Science and Engineering',
    meta: 'Graduated May 2025',
    extra: 'CGPA 8.5/10',
  },
  {
    school: 'Sanfort Public School',
    detail: 'Class XII',
    meta: 'Apr 2021',
    extra: '80%',
  },
]

export const navItems = [
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' },
  { id: 'contact', label: 'contact' },
]
