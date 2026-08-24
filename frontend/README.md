# Dev Infinity Frontend (React + Vite)

Official frontend web application for the **Dev Infinity Web Development Club** (Department of CSE, FTE, MSU Baroda).

## 🚀 Quick Setup

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Production build test
npm run build
```

## 📁 Component Directory Guidelines for Web Team

- `src/components/common/`: Shared generic UI elements (`Button`, `Card`, `Badge`, `Modal`, `SectionTitle`, `Logo`, `Loader`, `EmptyState`).
- `src/components/layout/`: Global navigation bars (`Navbar`, `Footer`, `PageContainer`, `AdminLayout`, `AdminSidebar`, `AdminHeader`).
- `src/components/[feature]/`: Modular section components for `home`, `events`, `projects`, `blog`, `learning`, `achievements`, `team`, `contact`, `admin`.
- `src/data/mockData.js`: Centralized mock data structure designed for straightforward future connection to REST APIs (Node.js/Express + Supabase).

## 🎨 Design Tokens

Style variables are located in `src/styles/variables.css` & `src/styles/globals.css`.
