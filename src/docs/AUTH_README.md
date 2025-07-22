# Система аутентификации

## Обзор

Система аутентификации реализована с использованием JWT токенов и включает в себя:

- Регистрацию пользователей
- Вход в систему
- Автоматическую проверку токена при загрузке
- Выход из системы
- Защищенные маршруты

## Структура файлов

```
src/
├── types/auth.ts              # Типы для аутентификации
├── store/authStore.ts         # Zustand store для управления состоянием
├── utils/api.ts              # API функции для работы с сервером
├── config/api.ts             # Конфигурация API
├── components/auth/          # Компоненты аутентификации
│   ├── LoginForm.tsx         # Форма входа
│   ├── RegisterForm.tsx      # Форма регистрации
│   └── index.ts             # Экспорты
└── pages/Auth.tsx           # Главная страница аутентификации
```

## API Эндпоинты

### POST /auth/register

Регистрация нового пользователя

```json
{
  "username": "nick",
  "password": "2525"
}
```

### POST /auth/login

Вход пользователя

```json
{
  "username": "nick",
  "password": "2525"
}
```

### GET /auth/profile

Получение данных пользователя (требует JWT токен)

```bash
headers: {
  'Authorization': 'Bearer ${jwt}'
}
```

### GET /auth/login

Проверка существования пользователя

```json
{
  "username": "nick"
}
```

## Использование

### Настройка API URL

Создайте файл `.env` в корне проекта:

```env
VITE_API_URL=http://localhost:3000
```

### Использование в компонентах

```tsx
import { useAuthStore } from "../store/authStore";

const MyComponent = () => {
  const { user, isAuthenticated, login, logout } = useAuthStore();

  // Ваш код
};
```

## Функции

### useAuthStore

- `user` - данные текущего пользователя
- `token` - JWT токен
- `isAuthenticated` - статус аутентификации
- `isLoading` - состояние загрузки
- `error` - ошибки аутентификации
- `login(data)` - функция входа
- `register(data)` - функция регистрации
- `logout()` - функция выхода
- `checkAuth()` - проверка токена
- `clearError()` - очистка ошибок

## Безопасность

- JWT токены хранятся в localStorage
- Автоматическая проверка токена при загрузке приложения
- Обработка ошибок API
- Защищенные маршруты

## Стилизация

Компоненты используют Tailwind CSS для современного и отзывчивого дизайна.
