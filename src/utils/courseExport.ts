import {
  Course,
  CourseStep,
  CourseStepContent,
  TelegramCourse,
  TelegramCourseStep,
  TelegramMessage,
  TelegramQuiz,
} from "../types/course";

/**
 * Преобразует содержимое шага курса в формат сообщения Telegram
 */
export const mapContentToTelegramMessage = (
  content: CourseStepContent,
): TelegramMessage => {
  // Преобразуем типы контента в типы сообщений Telegram
  let telegramType: "text" | "photo" | "video" | "document";

  switch (content.type) {
    case "text":
      telegramType = "text";
      break;
    case "image":
      telegramType = "photo";
      break;
    case "video":
      telegramType = "video";
      break;
    case "file":
    case "quiz":
      telegramType = "document";
      break;
  }

  return {
    message_id: content.id,
    type: telegramType,
    content: content.type === "text" ? content.content : content.fileUrl || "",
    caption: content.type !== "text" ? content.content : undefined,
  };
};

/**
 * Преобразует структуру викторины курса в формат викторины Telegram
 */
export const mapQuizToTelegramQuiz = (step: CourseStep): TelegramQuiz[] => {
  if (!step.quiz) return [];

  return step.quiz.map((question) => ({
    question_id: question.id,
    question: question.question,
    options: question.options.map((option) => ({
      id: option.id,
      text: option.text,
    })),
    correct_option_id:
      question.options.find((option) => option.isCorrect)?.id || "",
    explanation: question.explanation,
  }));
};

/**
 * Преобразует шаг курса в формат шага Telegram
 */
export const mapStepToTelegramStep = (step: CourseStep): TelegramCourseStep => {
  return {
    step_id: step.id,
    title: step.title,
    messages: step.contents.map(mapContentToTelegramMessage),
    quiz: mapQuizToTelegramQuiz(step),
  };
};

/**
 * Преобразует весь курс в формат для Telegram бота
 */
export const convertCourseToTelegramFormat = (
  course: Course,
): TelegramCourse => {
  return {
    course_id: course.id,
    title: course.title,
    description: course.description,
    steps: course.steps
      .sort((a, b) => a.order - b.order)
      .map(mapStepToTelegramStep),
  };
};

/**
 * Экспортирует курс в JSON формат для Telegram бота
 */
export const exportCourseToJson = (course: Course): string => {
  const telegramCourse = convertCourseToTelegramFormat(course);
  return JSON.stringify(telegramCourse, null, 2);
};
