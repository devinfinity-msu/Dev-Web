# Services & API Integration Layer

This directory is reserved for future API integration with the **Node.js + Express.js backend** and **Supabase database**.

## Future Architecture

```
React Component -> Custom Hooks -> Services/API Client -> Express.js API -> Supabase DB
```

## Setup Guidelines for Web Team

1. Keep mock data imports isolated in page/component files or custom hooks.
2. When backend APIs are ready, replace mock imports with API client functions defined in this directory (`eventsApi.js`, `projectsApi.js`, `blogApi.js`, etc.).
3. Base URL environment variable should be configured in `.env` (e.g. `VITE_API_BASE_URL=http://localhost:5000/api`).
