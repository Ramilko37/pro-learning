import React, { ReactNode } from 'react';

interface TabProps {
  id: string;
  label: string;
  icon?: ReactNode;
  active: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ id, label, icon, active, onClick }) => {
  return (
    <button
      className={`px-4 py-3 font-medium text-sm focus:outline-none ${
        active
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </div>
    </button>
  );
};

export default Tab;