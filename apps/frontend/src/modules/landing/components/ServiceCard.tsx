import {
  FolderOpen,
  PieChart,
  FileText,
  ShieldCheck,
  ClipboardCheck,
  Database,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import type { ServiceCard as ServiceCardType } from '../types';

const iconMap: Record<string, React.ReactNode> = {
  FolderOpen: <FolderOpen className="w-7 h-7" />,
  PieChart: <PieChart className="w-7 h-7" />,
  FileText: <FileText className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  ClipboardCheck: <ClipboardCheck className="w-7 h-7" />,
  Database: <Database className="w-7 h-7" />,
  MessageSquare: <MessageSquare className="w-7 h-7" />,
  ArrowRight: <ArrowRight className="w-7 h-7" />,
};

interface ServiceCardProps {
  service: ServiceCardType;
}

export function ServiceCardComponent({ service }: ServiceCardProps) {
  const isViewAll = service.id === '8';

  return (
    <a
      href={service.href}
      className={`card p-6 flex flex-col items-center text-center group transition-all duration-200 ${
        isViewAll
          ? 'bg-primary-800 hover:bg-primary-900 border-primary-800'
          : 'hover:border-primary-200'
      }`}
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
          isViewAll
            ? 'bg-white/20 text-white'
            : 'bg-primary-50 text-primary-800 group-hover:bg-primary-800 group-hover:text-white'
        }`}
      >
        {iconMap[service.icon]}
      </div>
      <h3
        className={`font-semibold mb-2 ${
          isViewAll ? 'text-white' : 'text-foreground'
        }`}
      >
        {service.title}
      </h3>
      <p
        className={`text-sm leading-relaxed ${
          isViewAll ? 'text-white/80' : 'text-gray-500'
        }`}
      >
        {service.description}
      </p>
    </a>
  );
}
