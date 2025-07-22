import { API_CONFIG } from "../config/api";
import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "../types/auth";

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new ApiError(response.status, errorText || "Произошла ошибка");
  }
  return response.json();
};

export const authApi = {
  // Регистрация пользователя
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.AUTH.REGISTER}`,
      {
        method: "POST",
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify(data),
      },
    );
    return handleResponse(response);
  },

  // Вход пользователя
  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.AUTH.LOGIN}`,
      {
        method: "POST",
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify(data),
      },
    );
    return handleResponse(response);
  },

  // Получение профиля пользователя с JWT
  getProfile: async (token: string): Promise<User> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.AUTH.PROFILE}`,
      {
        method: "GET",
        headers: {
          ...API_CONFIG.HEADERS,
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return handleResponse(response);
  },

  // Проверка существования пользователя
  checkUser: async (username: string): Promise<User | null> => {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.AUTH.CHECK_USER}`,
      {
        method: "GET",
        headers: API_CONFIG.HEADERS,
        body: JSON.stringify({ username }),
      },
    );

    if (response.status === 404) {
      return null;
    }

    return handleResponse(response);
  },
};

export { ApiError };
