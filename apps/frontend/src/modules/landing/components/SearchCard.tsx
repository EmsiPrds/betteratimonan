import { Search, FolderOpen, PieChart, FileText, Database } from 'lucide-react';
import { quickLinks } from '../data/mock-data';

const iconMap: Record<string, React.ReactNode> = {
  FolderOpen: <FolderOpen className="w-4 h-4" />,
  PieChart: <PieChart className="w-4 h-4" />,
  FileText: <FileText className="w-4 h-4" />,
  Database: <Database className="w-4 h-4" />,
};

export function SearchCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 w-full max-w-md">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Find a Service or Information
      </h2>

      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="search"
          placeholder="Search projects, ordinances, budgets, reports..."
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm
                     focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent
                     placeholder:text-gray-400"
          aria-label="Search transparency data"
        />
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-3">
        {quickLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 hover:bg-primary-50 
                       rounded-lg text-sm font-medium text-gray-700 hover:text-primary-800 
                       transition-colors group"
          >
            <span className="text-gray-400 group-hover:text-primary-800 transition-colors">
              {iconMap[link.icon]}
            </span>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
