import { BookOpen } from "lucide-react";
import { Card } from "../../../../components/ui";
import { Course } from "../../../../types/course";
import CourseStepsList from "./course-steps-list";
import StepContentForm from "./step-content-form";

interface DesignProps {
  currentCourse: Course;
  activeStepId: string;
  setActiveStepId: (id: string) => void;
  handleCourseDetailsChange: (title: string, description: string) => void;
  handleAddStep: () => void;
}
    
export const Design = ({
  currentCourse,
  activeStepId,
  setActiveStepId,
  handleCourseDetailsChange,
  handleAddStep,
export const Design = () => {
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
              <h3 className="font-medium text-lg mb-2">Нет выбранного шага</h3>
              <p className="mb-4">Выберите шаг слева или создайте новый</p>
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
};
