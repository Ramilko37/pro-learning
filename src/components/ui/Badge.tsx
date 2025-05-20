import React, { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  color?: 'blue' | 'green' | 'red' | 'amber' | 'purple' | 'gray';
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'gray' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    amber: 'bg-amber-100 text-amber-800',
    purple: 'bg-purple-100 text-purple-800',
    gray: 'bg-gray-100 text-gray-800',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]}`}>
      {children}
    </span>
  );
};

export default Badge;