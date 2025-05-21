import {
  AlignLeft,
  FileText,
  Film,
  Image,
  ListChecks,
  Plus,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCourseStore } from "../../store/courseStore";
import { CourseStepContent } from "../../types/course";

interface StepContentFormProps {
  contents: CourseStepContent[];
  courseId: string;
  stepId: string;
}

const StepContentForm: React.FC<StepContentFormProps> = ({
  contents,
  courseId,
  stepId,
}) => {
  const updateStepContents = useCourseStore(
    (state) => state.updateStepContents,
  );

  const [activeContentType, setActiveContentType] =
    useState<CourseStepContent["type"]>("text");
  const [textContent, setTextContent] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Функция для конвертации файла в base64
  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const addContent = async () => {
    if (isLoading) return;
    let newContent: CourseStepContent;

    try {
      setIsLoading(true);

      switch (activeContentType) {
        case "text": {
          if (!textContent.trim()) return;
          newContent = {
            id: uuidv4(),
            type: "text",
            content: textContent,
          };
          break;
        }
        case "image": {
          if (!currentFile || !currentName.trim()) return;
          // Конвертируем изображение в base64
          const base64Image = await convertFileToBase64(currentFile);
          newContent = {
            id: uuidv4(),
            type: "image",
            content: currentName.trim(),
            name: currentFile.name,
            fileUrl: base64Image,
          };
          break;
        }
        case "video": {
          if (!currentFile || !currentName.trim()) return;
          // Для видео также используем base64, но учитываем, что файлы могут быть большими
          const base64Video = await convertFileToBase64(currentFile);
          newContent = {
            id: uuidv4(),
            type: "video",
            content: currentName.trim(),
            name: currentFile.name,
            fileUrl: base64Video,
          };
          break;
        }
        case "file": {
          if (!currentFile || !currentName.trim()) return;
          // Конвертируем файл в base64
          const base64File = await convertFileToBase64(currentFile);
          newContent = {
            id: uuidv4(),
            type: "file",
            content: currentName.trim(),
            name: currentFile.name,
            fileUrl: base64File,
          };
          break;
        }
        case "quiz": {
          newContent = {
            id: uuidv4(),
            type: "quiz",
            content: "",
          };
          break;
        }
        default: {
          newContent = {
            id: uuidv4(),
            type: "text",
            content: "",
          };
          break;
        }
      }

      const updatedContents = [...contents, newContent];
      // Обновляем содержимое шага напрямую через хранилище
      updateStepContents(courseId, stepId, updatedContents);

      // Сброс формы
      setTextContent("");
      setCurrentName("");
      setCurrentFile(null);
    } catch (error) {
      console.error("Ошибка при добавлении контента:", error);
      alert(
        "Произошла ошибка при добавлении контента. Пожалуйста, попробуйте снова.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCurrentFile(e.target.files[0]);
    }
  };

  const removeContent = (id: string) => {
    const updatedContents = contents.filter((content) => content.id !== id);
    // Обновляем содержимое шага напрямую через хранилище
    updateStepContents(courseId, stepId, updatedContents);
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-1 border-b border-gray-200 mb-4">
        <button
          className={`px-3 py-2 text-sm font-medium ${
            activeContentType === "text"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent"
          }`}
          onClick={() => setActiveContentType("text")}
        >
          <AlignLeft size={16} className="inline mr-1" /> Текст
        </button>
        <button
          className={`px-3 py-2 text-sm font-medium ${
            activeContentType === "image"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent"
          }`}
          onClick={() => setActiveContentType("image")}
        >
          <Image size={16} className="inline mr-1" /> Изображение
        </button>
        <button
          className={`px-3 py-2 text-sm font-medium ${
            activeContentType === "video"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent"
          }`}
          onClick={() => setActiveContentType("video")}
        >
          <Film size={16} className="inline mr-1" /> Видео
        </button>
        <button
          className={`px-3 py-2 text-sm font-medium ${
            activeContentType === "file"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent"
          }`}
          onClick={() => setActiveContentType("file")}
        >
          <FileText size={16} className="inline mr-1" /> Файл
        </button>
        <button
          className={`px-3 py-2 text-sm font-medium ${
            activeContentType === "quiz"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 border-transparent"
          }`}
          onClick={() => setActiveContentType("quiz")}
        >
          <ListChecks size={16} className="inline mr-1" /> Тест
        </button>
      </div>

      <div className="mb-4">
        {activeContentType === "text" ? (
          <textarea
            className="w-full p-3 border border-gray-300 rounded-md min-h-[150px] focus:ring-blue-500 focus:border-blue-500"
            placeholder="Введите текстовое содержимое..."
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
          />
        ) : (
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Название
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Введите название..."
                value={currentName}
                onChange={(e) => setCurrentName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {activeContentType === "image"
                  ? "Изображение"
                  : activeContentType === "video"
                  ? "Видео"
                  : activeContentType === "file"
                  ? "Файл"
                  : "Файл теста"}
              </label>
              <input
                type="file"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
                onChange={handleFileChange}
                accept={
                  activeContentType === "image"
                    ? "image/*"
                    : activeContentType === "video"
                    ? "video/*"
                    : activeContentType === "file"
                    ? ".pdf,.doc,.docx,.xls,.xlsx,.txt"
                    : ".json"
                }
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <button
          className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={addContent}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="inline-block animate-spin mr-2">↻</span>
          ) : (
            <Plus size={16} className="mr-2" />
          )}
          <span>{isLoading ? "Добавление..." : "Добавить содержимое"}</span>
        </button>
      </div>

      {contents.length > 0 && (
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h4 className="font-medium text-gray-900 mb-2">
            Добавленное содержимое:
          </h4>
          <div className="space-y-2">
            {contents.map((content) => (
              <div
                key={content.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
              >
                <div className="flex items-center">
                  {content.type === "text" ? (
                    <AlignLeft size={16} className="text-gray-500 mr-2" />
                  ) : content.type === "image" ? (
                    <Image size={16} className="text-gray-500 mr-2" />
                  ) : content.type === "video" ? (
                    <Film size={16} className="text-gray-500 mr-2" />
                  ) : content.type === "file" ? (
                    <FileText size={16} className="text-gray-500 mr-2" />
                  ) : (
                    <ListChecks size={16} className="text-gray-500 mr-2" />
                  )}
                  <span className="text-sm truncate max-w-md">
                    {content.type === "text"
                      ? content.content.substring(0, 50) +
                        (content.content.length > 50 ? "..." : "")
                      : content.name || content.content}
                  </span>
                </div>
                <div className="flex items-center">
                  {content.type === "image" && content.fileUrl && (
                    <div className="mr-2 w-8 h-8 overflow-hidden rounded">
                      <img
                        src={content.fileUrl}
                        alt={content.name || "Изображение"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeContent(content.id)}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StepContentForm;
