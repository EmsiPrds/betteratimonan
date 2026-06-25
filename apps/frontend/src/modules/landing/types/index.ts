export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface ServiceCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface StatCard {
  id: string;
  label: string;
  value: string;
  icon: string;
  suffix?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface FactCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface LeadershipCard {
  id: string;
  name: string;
  position: string;
  title: string;
  email: string;
  phone: string;
  imageUrl?: string;
}

export interface ContactInfo {
  id: string;
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export interface UpdateItem {
  id: string;
  title: string;
  category: 'announcement' | 'project' | 'ordinance';
  date: string;
  excerpt: string;
}

export interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  forecast: WeatherForecast[];
}

export interface WeatherForecast {
  day: string;
  high: number;
  low: number;
  condition: string;
}

export interface QuickLink {
  label: string;
  href: string;
  icon: string;
}
