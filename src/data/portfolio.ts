export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'backend' | 'frontend' | 'tools';
}

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const skills: Skill[] = [
  { name: 'Java', level: 95, category: 'backend' },
  { name: 'Spring Boot', level: 92, category: 'backend' },
  { name: 'Spring Security', level: 88, category: 'backend' },
  { name: 'Hibernate/JPA', level: 90, category: 'backend' },
  { name: 'Angular', level: 93, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'RxJS', level: 85, category: 'frontend' },
  { name: 'NgRx', level: 82, category: 'frontend' },
  { name: 'Docker', level: 85, category: 'tools' },
  { name: 'Kubernetes', level: 78, category: 'tools' },
  { name: 'PostgreSQL', level: 88, category: 'tools' },
  { name: 'MongoDB', level: 80, category: 'tools' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with microservices architecture, payment integration, and real-time inventory management.',
    technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Redis', 'Docker'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
    link: '#',
  },
  {
    id: 2,
    title: 'Healthcare Management System',
    description:
      'HIPAA-compliant healthcare platform with patient records, appointment scheduling, and telemedicine features.',
    technologies: ['Spring Boot', 'Angular', 'MongoDB', 'WebRTC', 'AWS'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
    link: '#',
  },
  {
    id: 3,
    title: 'Financial Analytics Dashboard',
    description:
      'Real-time financial data visualization with advanced charting, portfolio tracking, and automated reporting.',
    technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Kafka', 'Grafana'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    link: '#',
  },
  {
    id: 4,
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, Kanban boards, and team collaboration features.',
    technologies: ['Spring Boot', 'Angular', 'WebSocket', 'PostgreSQL', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600',
    link: '#',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'TechCorp Solutions',
    role: 'Senior Full-Stack Developer',
    period: '2022 - Present',
    description:
      'Leading development of enterprise applications using Spring Boot and Angular. Architecting microservices and mentoring junior developers.',
  },
  {
    id: 2,
    company: 'InnovateTech Inc.',
    role: 'Full-Stack Developer',
    period: '2020 - 2022',
    description:
      'Developed scalable web applications with Java Spring Boot backend and Angular frontend. Implemented CI/CD pipelines and automated testing.',
  },
  {
    id: 3,
    company: 'StartupHub',
    role: 'Junior Developer',
    period: '2018 - 2020',
    description:
      'Built RESTful APIs and responsive web interfaces. Collaborated with cross-functional teams to deliver high-quality software solutions.',
  },
];
