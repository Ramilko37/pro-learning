import React from 'react';
import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import CourseBuilder from './pages/CourseBuilder';
import Statistics from './pages/Statistics';
import Messaging from './pages/Messaging';
import AITools from './pages/AITools';
import { Menu } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'learning':
        return <Learning />;
      case 'course-builder':
        return <CourseBuilder />;
      case 'statistics':
        return <Statistics />;
      case 'messaging':
        return <Messaging />;
      case 'ai-tools':
        return <AITools />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        isOpen={sidebarOpen} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header>
          <button 
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </Header>
        
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;