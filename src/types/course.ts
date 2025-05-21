export interface CourseStepContent {
  id: string;
  type: "text" | "image" | "video" | "file" | "quiz";
  content: string;
  name?: string;
  fileUrl?: string;
}

export interface CourseQuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface CourseQuizQuestion {
  id: string;
  question: string;
  options: CourseQuizOption[];
  explanation?: string;
}

export interface CourseStep {
  id: string;
  title: string;
  contents: CourseStepContent[];
  order: number;
  quiz?: CourseQuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  steps: CourseStep[];
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
}

// Структура данных для экспорта в Telegram бот
export interface TelegramCourseStep {
  step_id: string;
  title: string;
  messages: TelegramMessage[];
  quiz?: TelegramQuiz[];
}

export interface TelegramMessage {
  message_id: string;
  type: "text" | "photo" | "video" | "document";
  content: string; // Для текста - сам текст, для медиа - URL или file_id
  fileUrl?: string; // URL файла в формате base64 или внешний URL
  caption?: string; // Подпись для медиа
}

export interface TelegramQuiz {
  question_id: string;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correct_option_id: string;
  explanation?: string;
}

export interface TelegramCourse {
  course_id: string;
  title: string;
  description: string;
  steps: TelegramCourseStep[];
}
