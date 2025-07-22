import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Header, Sidebar } from "./components/layout";
import AITools from "./pages/AITools";
import Auth from "./pages/Auth";
import CourseBuilderPage from "./pages/CourseBuilder";
import Dashboard from "./pages/Dashboard";
import Learning from "./pages/Learning";
import Messaging from "./pages/Messaging";
import Statistics from "./pages/Statistics";
import { useAuthStore } from "./store/authStore";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { isAuthenticated, isLoading, checkAuth } = useAuthStore();

  // Проверяем аутентификацию при загрузке приложения
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />;
      case "learning":
        return <Learning />;
      case "course-builder":
        return <CourseBuilderPage />;
      case "statistics":
        return <Statistics />;
      case "messaging":
        return <Messaging />;
      case "ai-tools":
        return <AITools />;
      default:
        return <Dashboard />;
    }
  };

  // Показываем загрузку при проверке аутентификации
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка...</p>
        </div>
      </div>
    );
  }

  // Если пользователь не аутентифицирован, показываем страницу входа
  if (isAuthenticated) {
    return <Auth />;
  }

  // Если пользователь аутентифицирован, показываем основное приложение
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
