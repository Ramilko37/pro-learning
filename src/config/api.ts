// Конфигурация API
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  ENDPOINTS: {
    AUTH: {
      REGISTER: "/auth/register",
      LOGIN: "/auth/login",
      PROFILE: "/auth/profile",
      CHECK_USER: "/auth/login",
    },
  },
  HEADERS: {
    "Content-Type": "application/json",
  },
} as const;
