import {
  ChevronDown,
  ChevronRight,
  GripVertical,
  Plus,
  Trash2,
} from "lucide-react";
import React from "react";
import { CourseStep } from "../../types/course";

interface CourseStepsListProps {
  steps: CourseStep[];
  activeStepId: string | null;
  onSelectStep: (stepId: string) => void;
  onAddStep: () => void;
  onRemoveStep: (stepId: string) => void;
  onReorderSteps: (steps: CourseStep[]) => void;
}

const CourseStepsList: React.FC<CourseStepsListProps> = ({
  steps,
  activeStepId,
  onSelectStep,
  onAddStep,
  onRemoveStep,
  onReorderSteps,
}) => {
  // Обработчик для перетаскивания и перестановки шагов
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number,
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetIndex: number,
  ) => {
    e.preventDefault();
    const draggedIndex = Number(e.dataTransfer.getData("text/plain"));

    if (draggedIndex === targetIndex) return;

    // Создаем копию массива шагов
    const newSteps = [...steps];

    // Извлекаем перемещаемый элемент
    const movedStep = newSteps[draggedIndex];

    // Удаляем элемент из старой позиции
    newSteps.splice(draggedIndex, 1);

    // Вставляем элемент на новую позицию
    newSteps.splice(targetIndex, 0, movedStep);

    // Обновляем порядковые номера
    const reorderedSteps = newSteps.map((step, index) => ({
      ...step,
      order: index,
    }));

    // Отправляем измененный массив
    onReorderSteps(reorderedSteps);
  };

  return (
    <div>
      <h3 className="font-medium text-gray-900 mb-4">Структура курса</h3>
      <div className="space-y-2">
        {steps.length === 0 ? (
          <div className="p-4 bg-gray-50 rounded-md text-gray-500 text-center">
            Добавьте первый шаг курса
          </div>
        ) : (
          steps.map((step, index) => (
            <div
              key={step.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              style={{ border: "1px solid red" }}
              className={`p-2 ${
                activeStepId === step.id
                  ? "bg-blue-50 border-l-4 border-blue-500"
                  : "border-l-4 border-gray-200"
              } rounded flex items-center`}
            >
              <div className="text-gray-400 cursor-move mr-2">
                <GripVertical size={16} />
              </div>
              <div
                className="flex-1 cursor-pointer"
                onClick={() => onSelectStep(step.id)}
              >
                <div className="flex items-center">
                  {activeStepId === step.id ? (
                    <ChevronDown size={16} className="mr-2 text-blue-600" />
                  ) : (
                    <ChevronRight size={16} className="mr-2 text-gray-400" />
                  )}
                  <span
                    className={`font-medium ${
                      activeStepId === step.id ? "text-blue-600" : ""
                    }`}
                  >
                    {step.title || `Раздел ${index + 1}`}
                  </span>
                </div>
              </div>
              <button
                className="text-red-500 hover:text-red-700 p-1"
                onClick={() => onRemoveStep(step.id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}

        <button
          className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
          onClick={onAddStep}
        >
          <Plus size={16} className="mr-2" />
          <span>Добавить шаг</span>
        </button>
      </div>
    </div>
  );
};

export default CourseStepsList;
