import { create } from "zustand";
import { AuthState, LoginRequest, RegisterRequest } from "../types/auth";
import { ApiError, authApi } from "../utils/api";

interface AuthActions {
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => void;
  checkAuth: () => Promise<void>;
  clearError: () => void;
}

type AuthStore = AuthState & AuthActions;

// Получаем токен из localStorage при инициализации
const getInitialToken = () => {
  try {
    return localStorage.getItem("token");
  } catch {
    return null;
  }
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  // Начальное состояние
  user: null,
  token: getInitialToken(),
  isAuthenticated: false,
  isLoading: false,
  error: null,

  // Вход пользователя
  login: async (data: LoginRequest) => {
    set({ isLoading: true, error: null });

    try {
      const response = await authApi.login(data);

      if (response.token) {
        localStorage.setItem("token", response.token);
        set({
          user: response.user || { username: data.username },
          token: response.token,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } else {
        throw new Error("Токен не получен");
      }
    } catch (error) {
      const errorMessage =
        error instanceof ApiError ? error.message : "Ошибка входа в систему";

      set({
        isLoading: false,
        error: errorMessage,
        isAuthenticated: false,
      });
      throw error;
    }
  },

  // Регистрация пользователя
  register: async (data: RegisterRequest) => {
    set({ isLoading: true, error: null });

    try {
      const response = await authApi.register(data);

      if (response.token) {
        localStorage.setItem("token", response.token);
        set({
          user: response.user || { username: data.username },
          token: response.token,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } else {
        // Если токен не возвращается при регистрации, просто показываем успех
        set({
          isLoading: false,
          error: null,
        });
      }
    } catch (error) {
      const errorMessage =
        error instanceof ApiError ? error.message : "Ошибка регистрации";

      set({
        isLoading: false,
        error: errorMessage,
        isAuthenticated: false,
      });
      throw error;
    }
  },

  // Выход пользователя
  logout: () => {
    try {
      localStorage.removeItem("token");
    } catch {
      // Игнорируем ошибки localStorage
    }
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      error: null,
    });
  },

  // Проверка аутентификации при загрузке приложения
  checkAuth: async () => {
    const token = get().token;

    if (!token) {
      set({ isAuthenticated: false, isLoading: false });
      return;
    }

    set({ isLoading: true });

    try {
      const user = await authApi.getProfile(token);
      set({
        user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        console.log(error.message);
      }
      // Токен недействителен
      try {
        localStorage.removeItem("token");
      } catch {
        // Игнорируем ошибки localStorage
      }
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      });
    }
  },

  // Очистка ошибки
  clearError: () => {
    set({ error: null });
  },
}));
