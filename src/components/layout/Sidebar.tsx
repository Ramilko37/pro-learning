import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Edit3, 
  BarChart2, 
  MessageSquare, 
  BrainCircuit,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentPage, setCurrentPage }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'learning', label: 'Learning', icon: <BookOpen size={20} /> },
    { id: 'course-builder', label: 'Course Builder', icon: <Edit3 size={20} /> },
    { id: 'statistics', label: 'Statistics', icon: <BarChart2 size={20} /> },
    { id: 'messaging', label: 'Messaging', icon: <MessageSquare size={20} /> },
    { id: 'ai-tools', label: 'AI Tools', icon: <BrainCircuit size={20} /> },
  ];

  return (
    <div 
      className={`${
        isOpen ? 'w-64' : 'w-0 md:w-20'
      } bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col z-10 h-full`}
    >
      <div className="p-6">
        <div className={`flex items-center ${!isOpen && 'md:justify-center'}`}>
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 text-white font-bold text-xl">
            L
          </div>
          <span className={`ml-3 text-xl font-bold text-gray-900 ${!isOpen && 'md:hidden'}`}>
            LearningPro
          </span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center px-3 py-3 rounded-lg transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center justify-center">
                  {item.icon}
                </span>
                <span className={`ml-3 ${!isOpen && 'md:hidden'}`}>{item.label}</span>
                {currentPage === item.id && isOpen && (
                  <ChevronRight size={16} className="ml-auto" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 mt-auto">
        <div className={`flex items-center ${!isOpen && 'md:justify-center'}`}>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-700">
            AB
          </div>
          <div className={`ml-3 ${!isOpen && 'md:hidden'}`}>
            <p className="text-sm font-medium text-gray-700">Admin User</p>
            <p className="text-xs text-gray-500">admin@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;