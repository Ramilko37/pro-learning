import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { Course, CourseStep, CourseStepContent } from "../types/course";

interface CourseState {
  courses: Course[];
  currentCourseId: string | null;

  createCourse: () => void;
  updateCourse: (
    courseId: string,
    data: Partial<Omit<Course, "id" | "steps" | "createdAt">>,
  ) => void;
  deleteCourse: (courseId: string) => void;
  setCurrentCourse: (courseId: string | null) => void;
  getCurrentCourse: () => Course | null;

  // Методы для шагов курса
  addStep: (courseId: string) => void;
  updateStep: (
    courseId: string,
    stepId: string,
    data: Partial<Omit<CourseStep, "id" | "contents">>,
  ) => void;
  removeStep: (courseId: string, stepId: string) => void;
  reorderSteps: (courseId: string, reorderedSteps: CourseStep[]) => void;

  // Методы для содержимого шагов
  updateStepContents: (
    courseId: string,
    stepId: string,
    contents: CourseStepContent[],
  ) => void;
}

export const useCourseStore = create<CourseState>()(
  devtools(
    persist(
      (set, get) => ({
        courses: [],
        currentCourseId: null,

        // Методы для курсов
        createCourse: () => {
          const newCourse: Course = {
            id: uuidv4(),
            title: "Новый курс",
            description: "Описание нового курса",
            steps: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isPublished: false,
          };

          set((state) => ({
            courses: [...state.courses, newCourse],
            currentCourseId: newCourse.id,
          }));
        },

        updateCourse: (courseId, data) => {
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === courseId
                ? {
                    ...course,
                    ...data,
                    updatedAt: new Date().toISOString(),
                  }
                : course,
            ),
          }));
        },

        deleteCourse: (courseId) => {
          set((state) => ({
            courses: state.courses.filter((course) => course.id !== courseId),
            currentCourseId:
              state.currentCourseId === courseId ? null : state.currentCourseId,
          }));
        },

        setCurrentCourse: (courseId) => {
          set({ currentCourseId: courseId });
        },

        getCurrentCourse: () => {
          const { courses, currentCourseId } = get();
          return (
            courses.find((course) => course.id === currentCourseId) || null
          );
        },

        // Методы для шагов курса
        addStep: (courseId) => {
          set((state) => {
            const course = state.courses.find((c) => c.id === courseId);
            if (!course) return state;

            const newStep: CourseStep = {
              id: uuidv4(),
              title: `Шаг ${course.steps.length + 1}`,
              contents: [],
              order: course.steps.length,
            };

            return {
              courses: state.courses.map((c) =>
                c.id === courseId
                  ? {
                      ...c,
                      steps: [...c.steps, newStep],
                      updatedAt: new Date().toISOString(),
                    }
                  : c,
              ),
            };
          });
        },

        updateStep: (courseId, stepId, data) => {
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === courseId
                ? {
                    ...course,
                    steps: course.steps.map((step) =>
                      step.id === stepId ? { ...step, ...data } : step,
                    ),
                    updatedAt: new Date().toISOString(),
                  }
                : course,
            ),
          }));
        },

        removeStep: (courseId, stepId) => {
          set((state) => {
            const course = state.courses.find((c) => c.id === courseId);
            if (!course) return state;

            const updatedSteps = course.steps
              .filter((step) => step.id !== stepId)
              .map((step, index) => ({ ...step, order: index }));

            return {
              courses: state.courses.map((c) =>
                c.id === courseId
                  ? {
                      ...c,
                      steps: updatedSteps,
                      updatedAt: new Date().toISOString(),
                    }
                  : c,
              ),
            };
          });
        },

        reorderSteps: (courseId, reorderedSteps) => {
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === courseId
                ? {
                    ...course,
                    steps: reorderedSteps,
                    updatedAt: new Date().toISOString(),
                  }
                : course,
            ),
          }));
        },

        // Методы для содержимого шагов
        updateStepContents: (courseId, stepId, contents) => {
          set((state) => ({
            courses: state.courses.map((course) =>
              course.id === courseId
                ? {
                    ...course,
                    steps: course.steps.map((step) =>
                      step.id === stepId ? { ...step, contents } : step,
                    ),
                    updatedAt: new Date().toISOString(),
                  }
                : course,
            ),
          }));
        },
        deleteStep: (courseId: string) => {
          set((state) => ({
            courses: state.courses.filter((course) => course.id !== courseId),
          }));
        },
      }),
      {
        name: "course-storage",
      },
    ),
  ),
);
