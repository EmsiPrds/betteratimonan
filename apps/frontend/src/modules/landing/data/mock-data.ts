import type {
  NavLink,
  ServiceCard,
  StatCard,
  TimelineEvent,
  FactCard,
  LeadershipCard,
  ContactInfo,
  UpdateItem,
  WeatherData,
  QuickLink,
} from '../types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'About Atimonan', href: '/about' },
  { label: 'Transparency', href: '/transparency' },
  { label: 'Projects', href: '/projects' },
  { label: 'Budget', href: '/budget' },
  { label: 'Ordinances', href: '/ordinances' },
  { label: 'Open Data', href: '/open-data' },
  { label: 'Contact', href: '/contact' },
];

export const quickLinks: QuickLink[] = [
  { label: 'Projects', href: '/projects', icon: 'FolderOpen' },
  { label: 'Budget', href: '/budget', icon: 'PieChart' },
  { label: 'Ordinances', href: '/ordinances', icon: 'FileText' },
  { label: 'Open Data', href: '/open-data', icon: 'Database' },
];

export const services: ServiceCard[] = [
  {
    id: '1',
    icon: 'FolderOpen',
    title: 'Projects Tracker',
    description: 'Free-ranging and consolidated municipal project tracking and updates.',
    href: '/projects',
  },
  {
    id: '2',
    icon: 'PieChart',
    title: 'Budget Transparency',
    description: 'Explore budgets, expenditures, and financial reports of the LGU.',
    href: '/budget',
  },
  {
    id: '3',
    icon: 'FileText',
    title: 'Ordinances & Resolutions',
    description: 'Complete repository of municipal ordinances, resolutions, and legal documents.',
    href: '/ordinances',
  },
  {
    id: '4',
    icon: 'ShieldCheck',
    title: 'Procurement Monitoring',
    description: 'Track public bidding and procurement activities in real-time.',
    href: '/procurement',
  },
  {
    id: '5',
    icon: 'ClipboardCheck',
    title: 'COA Reports',
    description: 'Commission on Audit reports and supplementary documents.',
    href: '/coa-reports',
  },
  {
    id: '6',
    icon: 'Database',
    title: 'Open Data Portal',
    description: 'All data in open, machine-readable formats for public access.',
    href: '/open-data',
  },
  {
    id: '7',
    icon: 'MessageSquare',
    title: 'Citizen Feedback',
    description: 'Submit suggestions, reports, and feedback directly to the LGU.',
    href: '/feedback',
  },
  {
    id: '8',
    icon: 'ArrowRight',
    title: 'View All Services',
    description: 'Explore all available public services and resources.',
    href: '/services',
  },
];

export const stats: StatCard[] = [
  {
    id: '1',
    label: 'Population',
    value: '45,231',
    icon: 'Users',
  },
  {
    id: '2',
    label: 'Barangays',
    value: '38',
    icon: 'MapPin',
  },
  {
    id: '3',
    label: 'Municipality Class',
    value: '4th Class',
    icon: 'Award',
  },
  {
    id: '4',
    label: 'Land Area',
    value: '160.45',
    icon: 'Map',
    suffix: 'km²',
  },
];

export const timeline: TimelineEvent[] = [
  {
    id: '1',
    year: '1619',
    title: 'Foundation',
    description: 'Atimonan was founded by the Augustinian missionaries as San Luis de Atimonan.',
  },
  {
    id: '2',
    year: '1700s',
    title: 'Spanish Colonial Era',
    description: 'It became a municipio under the Spanish colonial government.',
  },
  {
    id: '3',
    year: '1901',
    title: 'American Period',
    description: 'Atimonan was recognized as a municipality under the jurisdiction of Quezon Province.',
  },
  {
    id: '4',
    year: '1942',
    title: 'Japanese Occupation',
    description: 'The town played a role during the Japanese occupation in World War II.',
  },
  {
    id: '5',
    year: 'Present',
    title: 'Modern Development',
    description: 'Continued development and progress in governance and community growth in the Atimonanos.',
  },
];

export const facts: FactCard[] = [
  {
    id: '1',
    title: 'One of the Oldest Towns in Quezon',
    description: 'Atimonan is among the earliest settlements established during the Spanish era.',
    icon: 'Landmark',
  },
  {
    id: '2',
    title: 'Rich in History and Culture',
    description: 'Home to historical landmarks, traditions, and a vibrant community.',
    icon: 'BookOpen',
  },
];

export const leadership: LeadershipCard[] = [
  {
    id: '1',
    name: 'Hon. Ferdinand A. Bertuque',
    position: 'Municipal Mayor',
    title: 'Municipal Mayor',
    email: 'mayor@atimonan.gov.ph',
    phone: '(042) 717-1234',
  },
  {
    id: '2',
    name: 'Hon. Gilbert B. Galindo',
    position: 'Vice Mayor',
    title: 'Vice Mayor',
    email: 'vicemayor@atimonan.gov.ph',
    phone: '(042) 717-5678',
  },
];

export const contactInfo: ContactInfo[] = [
  {
    id: '1',
    icon: 'Phone',
    label: 'Phone',
    value: '(042) 717-1234',
    href: 'tel:0427171234',
  },
  {
    id: '2',
    icon: 'Mail',
    label: 'Email',
    value: 'atimonanlgu@gmail.com',
    href: 'mailto:atimonanlgu@gmail.com',
  },
  {
    id: '3',
    icon: 'MapPin',
    label: 'Address',
    value: 'Atimonan Municipal Hall, Quezon Ave., Atimonan, Quezon',
  },
];

export const updates: UpdateItem[] = [
  {
    id: '1',
    title: 'Municipal Budget Report 2025 Released',
    category: 'announcement',
    date: '2025-01-15',
    excerpt: 'The annual financial transparency report has been published for public review.',
  },
  {
    id: '2',
    title: 'Road Improvement Project Phase 2',
    category: 'project',
    date: '2025-01-12',
    excerpt: 'Updates on the ongoing road improvement project in Barangay Maligaya.',
  },
  {
    id: '3',
    title: 'New Ordinance on Environmental Protection',
    category: 'ordinance',
    date: '2025-01-10',
    excerpt: 'Municipal ordinance no. 2025-001 regarding coastal environmental protection.',
  },
  {
    id: '4',
    title: 'Infrastructure Development Updates',
    category: 'project',
    date: '2025-01-08',
    excerpt: 'Monthly progress on various infrastructure projects across the municipality.',
  },
  {
    id: '5',
    title: 'Transparency Seal Updated',
    category: 'announcement',
    date: '2025-01-05',
    excerpt: 'The official transparency seal page has been updated with 2025 documents.',
  },
];

export const weatherData: WeatherData = {
  temperature: 30,
  condition: 'Partly Cloudy',
  icon: 'CloudSun',
  forecast: [
    { day: 'Mon', high: 32, low: 25, condition: 'Sunny' },
    { day: 'Tue', high: 31, low: 24, condition: 'Cloudy' },
    { day: 'Wed', high: 29, low: 23, condition: 'Rain' },
    { day: 'Thu', high: 30, low: 24, condition: 'Partly Cloudy' },
    { day: 'Fri', high: 31, low: 25, condition: 'Sunny' },
  ],
};
