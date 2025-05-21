import { Download, Eye, MessageSquare } from "lucide-react";
import React from "react";
import { useCourseStore } from "../../store/courseStore";
import { CourseStepContent } from "../../types/course";

const TelegramPreview: React.FC = () => {
  const { getCurrentCourse } = useCourseStore();
  const currentCourse = getCurrentCourse();

  if (!currentCourse) {
    return (
      <div className="text-center py-10">
        <Eye size={48} className="mx-auto mb-4 text-gray-300" />
        <h3 className="font-medium text-lg mb-2">
          Нет данных для предпросмотра
        </h3>
        <p className="mb-4 text-gray-500">
          Нажмите кнопку для генерации предпросмотра
        </p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          onClick={() => {}}
        >
          Сгенерировать предпросмотр
        </button>
      </div>
    );
  }

  // Функция для отображения сообщения в зависимости от типа
  const rendercontent = (message: CourseStepContent) => {
    console.log(message, "content");
    switch (message.type) {
      case "text":
        return (
          <div className="whitespace-pre-wrap text-sm">{message.content}</div>
        );
      case "image":
        return (
          <div className="space-y-2">
            <img
              src={message.fileUrl}
              alt="Preview"
              className="max-w-full max-h-60 rounded-md"
            />

            {message.name && (
              <div className="text-sm text-gray-700">{message.name}</div>
            )}
          </div>
        );
      case "video":
        return (
          <div className="space-y-2">
            {message.fileUrl && message.fileUrl.startsWith("data:video") ? (
              <video
                src={message.fileUrl}
                controls
                className="max-w-full max-h-60 rounded-md"
              >
                Ваш браузер не поддерживает видео
              </video>
            ) : (
              <div className="bg-gray-200 p-2 rounded-md w-full text-center text-gray-700">
                [Видео: {message.name || "Без названия"}]
              </div>
            )}
          </div>
        );
      case "file":
        return (
          <div className="bg-gray-200 p-3 rounded-md flex items-center space-x-2">
            <div className="bg-blue-500 text-white p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">
                {message.name || "Документ"}
              </div>
              <div className="text-xs text-gray-500">Файл</div>
            </div>
            {message.fileUrl && (
              <a
                href={message.fileUrl}
                download={message.name || "document"}
                className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} />
              </a>
            )}
          </div>
        );
      default:
        return <div>Неизвестный тип сообщения</div>;
    }
  };

  console.log(currentCourse, "currentCourse");

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
      <div className="bg-[#5682a3] text-white p-3 flex items-center">
        <div className="font-semibold">Предпросмотр Telegram</div>
      </div>

      <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
        {currentCourse.steps.map((step) => (
          <div key={step.id} className="p-4">
            <div className="font-medium text-gray-900 mb-2">{step.title}</div>

            <div className="space-y-4">
              {step.contents.map((content) => (
                <div key={content.id} className="flex">
                  <div className="flex-shrink-0 mr-3">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                      <MessageSquare size={16} />
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                    {rendercontent(content)}
                  </div>
                </div>
              ))}

              {step.quiz && step.quiz.length > 0 && (
                <div className="mt-4">
                  {step.quiz.map((quiz) => (
                    <div key={quiz.id} className="space-y-3">
                      <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                          <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                            <Download size={16} />
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                          <div className="font-medium">{quiz.question}</div>
                        </div>
                      </div>

                      <div className="space-y-2 ml-11">
                        {quiz.options.map((option) => (
                          <div
                            key={option.id}
                            className="bg-white p-2 rounded-md border border-gray-200 cursor-pointer hover:bg-gray-50"
                          >
                            {option.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelegramPreview;
