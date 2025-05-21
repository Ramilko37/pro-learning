import {
  BookOpen,
  Code,
  Download,
  Edit3,
  Eye,
  Plus,
  RefreshCw,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import CourseStepsList from "../components/course/CourseStepsList";
import StepContentForm from "../components/course/StepContentForm";
import TelegramPreview from "../components/course/TelegramPreview";
import Card from "../components/ui/Card";
import Tab from "../components/ui/Tab";
import { useCourseStore } from "../store/courseStore";
import { Course, CourseStep, TelegramCourse } from "../types/course";
import {
  convertCourseToTelegramFormat,
  exportCourseToJson,
} from "../utils/courseExport";

const CourseBuilder = () => {
  const [activeTab, setActiveTab] = useState("design");
  const [activeStepId, setActiveStepId] = useState<string | null>(null);
  const [telegramData, setTelegramData] = useState<TelegramCourse | null>(null);

  // Получаем данные и методы из стора
  const {
    courses,
    currentCourseId,
    setCurrentCourse,
    getCurrentCourse,
    createCourse,
    updateCourse,
    addStep,
    updateStep,
    removeStep,
    reorderSteps,
    deleteCourse,
  } = useCourseStore();

  // Получаем текущий курс из стора
  const currentCourse = getCurrentCourse();

  // Находим текущий активный шаг
  const activeStep =
    activeStepId && currentCourse
      ? currentCourse.steps.find((step) => step.id === activeStepId)
      : null;

  const handleSetActiveCourse = (courseId: string) => {
    setCurrentCourse(courseId);
    setActiveStepId(null);
  };

  // Обработчик добавления нового шага
  const handleAddStep = useCallback(() => {
    if (!currentCourseId) return;

    addStep(currentCourseId);

    // Если это первый шаг, выбираем его
    if (currentCourse && currentCourse.steps.length === 0) {
      // После добавления шага получаем обновленный курс
      const updatedCourse = getCurrentCourse();
      if (updatedCourse && updatedCourse.steps.length > 0) {
        setActiveStepId(updatedCourse.steps[0].id);
      }
    }
  }, [currentCourse, currentCourseId, addStep, getCurrentCourse]);

  // Обработчик удаления шага
  const handleRemoveStep = useCallback(
    (stepId: string) => {
      if (!currentCourseId) return;

      removeStep(currentCourseId, stepId);

      // Если удалили активный шаг, сбрасываем выбор
      if (activeStepId === stepId && currentCourse) {
        const updatedCourse = getCurrentCourse();
        if (updatedCourse && updatedCourse.steps.length > 0) {
          setActiveStepId(updatedCourse.steps[0].id);
        } else {
          setActiveStepId(null);
        }
      }
    },
    [
      currentCourseId,
      activeStepId,
      currentCourse,
      getCurrentCourse,
      removeStep,
    ],
  );

  // Обработчик изменения порядка шагов
  const handleReorderSteps = useCallback(
    (reorderedSteps: CourseStep[]) => {
      if (!currentCourseId) return;
      reorderSteps(currentCourseId, reorderedSteps);
    },
    [currentCourseId, reorderSteps],
  );

  // Обработчик изменения заголовка шага
  const handleStepTitleChange = useCallback(
    (title: string) => {
      if (!currentCourseId || !activeStepId) return;
      updateStep(currentCourseId, activeStepId, { title });
    },
    [currentCourseId, activeStepId, updateStep],
  );

  // Обработчик изменения заголовка и описания курса
  const handleCourseDetailsChange = useCallback(
    (title: string, description: string) => {
      if (!currentCourseId) return;
      updateCourse(currentCourseId, { title, description });
    },
    [currentCourseId, updateCourse],
  );

  // Генерация Telegram-формата для предпросмотра
  const generateTelegramPreview = useCallback(() => {
    if (!currentCourse) return;

    const data = convertCourseToTelegramFormat(currentCourse);
    setTelegramData(data);
    setActiveTab("preview");
  }, [currentCourse, setTelegramData, setActiveTab]);

  // Экспорт в JSON формат для Telegram бота
  const exportToTelegramBot = useCallback(() => {
    if (!currentCourse) return;

    const jsonData = exportCourseToJson(currentCourse);

    // Создаем blob и ссылку для скачивания
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Создаем временную ссылку для скачивания
    const a = document.createElement("a");
    a.href = url;
    a.download = `telegram_course_${currentCourse.id.substring(0, 8)}.json`;
    document.body.appendChild(a);
    a.click();

    // Очищаем ресурсы
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }, [currentCourse]);

  // Создаем новый курс, если список пуст
  useEffect(() => {
    if (courses.length === 0) {
      createCourse();
    } else if (!currentCourseId) {
      setCurrentCourse(courses[0].id);
    }
  }, [courses, currentCourseId, createCourse, setCurrentCourse]);

  // Выбираем первый шаг при инициализации, если он есть
  useEffect(() => {
    if (currentCourse && currentCourse.steps.length > 0 && !activeStepId) {
      setActiveStepId(currentCourse.steps[0].id);
    }
  }, [currentCourse, activeStepId]);

  const tabs = [
    { id: "design", label: "Конструктор курса", icon: <Edit3 size={16} /> },
    { id: "preview", label: "Предпросмотр", icon: <Eye size={16} /> },
    { id: "export", label: "Экспорт", icon: <Code size={16} /> },
  ];

  const content = useMemo(() => {
    switch (activeTab) {
      case "design":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-3 mb-6">
              <Card>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Название курса
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Введите название курса"
                      value={currentCourse?.title || ""}
                      onChange={(e) =>
                        handleCourseDetailsChange(
                          e.target.value,
                          currentCourse?.description || "",
                        )
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Описание курса
                    </label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md min-h-[80px] focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Введите описание курса"
                      value={currentCourse?.description || ""}
                      onChange={(e) =>
                        handleCourseDetailsChange(
                          currentCourse?.title || "",
                          e.target.value,
                        )
                      }
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="md:col-span-1 flex flex-col gap-4">
              <Card>
                <CourseStepsList
                  steps={currentCourse?.steps || []}
                  activeStepId={activeStepId}
                  onSelectStep={setActiveStepId}
                  onAddStep={handleAddStep}
                  onRemoveStep={handleRemoveStep}
                  onReorderSteps={handleReorderSteps}
                />
              </Card>
              {courses.length > 1 && (
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  onClick={() => deleteCourse(currentCourseId!)}
                >
                  Удалить курс
                </button>
              )}
            </div>

            <div className="md:col-span-2">
              <Card>
                {activeStep ? (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium text-gray-900">
                        Редактор содержимого
                      </h3>
                      <div className="flex items-center space-x-2">
                        <button
                          className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-md hover:bg-green-200"
                          onClick={() => generateTelegramPreview()}
                        >
                          Предпросмотр
                        </button>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 mb-4">
                      <input
                        type="text"
                        className="w-full p-2 border-0 border-b-2 border-transparent focus:ring-0 focus:border-blue-500 text-xl font-medium"
                        placeholder="Название шага"
                        value={activeStep.title}
                        onChange={(e) => handleStepTitleChange(e.target.value)}
                      />
                    </div>

                    <StepContentForm
                      contents={activeStep.contents}
                      courseId={currentCourseId!}
                      stepId={activeStep.id}
                    />
                  </div>
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    <BookOpen size={48} className="mx-auto mb-4 opacity-20" />
                    <h3 className="font-medium text-lg mb-2">
                      Нет выбранного шага
                    </h3>
                    <p className="mb-4">
                      Выберите шаг слева или создайте новый
                    </p>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                      onClick={handleAddStep}
                    >
                      Создать шаг
                    </button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        );

      case "preview":
        return <TelegramPreview />;

      case "export":
        return (
          <div>
            <Card>
              <h3 className="font-medium text-gray-900 mb-4">Экспорт курса</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Download size={18} className="mr-2" />
                    Экспорт для Telegram бота
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Экспортируйте курс в формат JSON, который можно
                    импортировать в Telegram бота.
                  </p>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    onClick={exportToTelegramBot}
                  >
                    Экспортировать в JSON
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Code size={18} className="mr-2" />
                    Предпросмотр формата данных
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Просмотр структуры данных в формате JSON для Telegram бота.
                  </p>
                  <div className="bg-gray-800 text-gray-200 p-4 rounded-md text-sm overflow-x-auto">
                    <pre>
                      {JSON.stringify(
                        telegramData ||
                          convertCourseToTelegramFormat(
                            currentCourse as Course,
                          ),
                        null,
                        2,
                      )}
                    </pre>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  }, [
    activeTab,
    currentCourse,
    currentCourseId,
    telegramData,
    generateTelegramPreview,
    exportToTelegramBot,
    handleCourseDetailsChange,
    handleStepTitleChange,
    handleAddStep,
    handleRemoveStep,
    handleReorderSteps,
    activeStepId,
    activeStep,
    deleteCourse,
    courses,
  ]);

  if (!currentCourse) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center py-10">
          <RefreshCw
            size={48}
            className="mx-auto mb-4 text-blue-500 animate-spin"
          />
          <h3 className="font-medium text-lg mb-2">Загрузка курса...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Конструктор курсов
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Создание курсов для Telegram бота
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-3">
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center"
            onClick={() => createCourse()}
          >
            <Plus size={16} className="mr-2" />
            <span>Новый курс</span>
          </button>
        </div>
      </div>

      {courses.length > 1 && (
        <div
          className="bg-white rounded-lg shadow p-4"
          style={{ border: "1px solid red" }}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900">Выберите курс:</h3>
            <div className="flex space-x-2">
              {courses.map((course) => (
                <button
                  key={course.id}
                  className={`px-3 py-1 text-sm rounded-md ${
                    currentCourseId === course.id
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => handleSetActiveCourse(course.id)}
                >
                  {course.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                id={tab.id}
                label={tab.label}
                icon={tab.icon}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>

        <div className="p-6">{content}</div>
      </div>
    </div>
  );
};

export default CourseBuilder;
