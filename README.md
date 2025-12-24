# Университетский рейтинг — Документация API (Swagger)

✅ Я добавил OpenAPI-спецификацию и страницу со Swagger UI для публикации документации онлайн.

## Что добавлено
- `public/openapi.yaml` — OpenAPI 3.0 спецификация для существующих эндпоинтов.
- `src/pages/ApiDocs.jsx` — страница с Swagger UI (`/docs`).
- Обновлён `src/App.jsx` — добавлен роут `/docs` и ссылка в шапке.
- Добавлены зависимости и скрипты для деплоя (`swagger-ui-react`, `gh-pages`).

---

## Локально
1. Установите зависимости:

```bash
npm install
```

2. Запустить dev-сервер:

```bash
npm run dev
```

3. Откройте документацию: http://localhost:5173/docs

> Swagger UI подгружает `openapi.yaml` из папки `public/`.

---

## Публикация онлайн
Есть два простых варианта:

1) GitHub Pages (через `gh-pages`):
   - Убедитесь, что в `package.json` добавлены `predeploy` и `deploy` (уже добавлено).
   - Запустите `npm run build && npm run deploy` (после `npm install`).
   - Если сайт будет доступен по пути `https://<user>.github.io/<repo>/`, возможно потребуется указать `base` в `vite.config.js` или `homepage` в `package.json`.

2) Netlify / Vercel:
   - Подключите репозиторий, укажите билд-команду `npm run build` и папку публикации `dist`.

---

## Важные замечания по "Try it out"
- Фронтенд использует cookies для сессий (в `src/api.js` указан `credentials: 'include'`). Для работы кнопки "Try it out" сервер должен:
  - устанавливать cookie с именем, указанным в `openapi.yaml` (свойство `components.securitySchemes.cookieAuth.name`),
  - разрешать CORS и credentials (заголовок `Access-Control-Allow-Credentials: true`),
  - работать по корректному протоколу (в проде желательно HTTPS).
- Для корректной работы в production установите `VITE_API_BASE` в `.env.production` на адрес вашего бэкенда (или используйте абсолютный сервер в `openapi.yaml`).

---

Если хотите, могу:
- расширить `openapi.yaml` более точными схемами ответов/ошибок;
- подготовить инструкцию по настройке CORS и cookie на стороне сервера.

---

## CI / Auto-deploy
- Добавлен workflow: `.github/workflows/deploy.yml` — при пуше в `main` автоматически собирает проект и деплоит `dist/` в GitHub Pages (права на Pages & Actions должны быть включены в репозитории).
- Если нужен другой поток (Netlify, Vercel, или deploy в ветку), могу настроить.

```