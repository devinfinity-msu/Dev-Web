import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Public Pages
import { LoadingPage } from '../pages/Loading/LoadingPage';
import { HomePage } from '../pages/Home/HomePage';
import { EventsPage } from '../pages/Events/EventsPage';
import { ProjectsPage } from '../pages/Projects/ProjectsPage';
import { BlogPage } from '../pages/Blog/BlogPage';
import { LearningHubPage } from '../pages/LearningHub/LearningHubPage';
import { AchievementsPage } from '../pages/Achievements/AchievementsPage';
import { TeamPage } from '../pages/Team/TeamPage';
import { ContactPage } from '../pages/Contact/ContactPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

// Admin Layout & Pages
import { AdminLayout } from '../components/layout/AdminLayout';
import { AdminDashboard } from '../pages/Admin/AdminDashboard';
import { AdminEvents } from '../pages/Admin/AdminEvents';
import { AdminProjects } from '../pages/Admin/AdminProjects';
import { AdminBlogs } from '../pages/Admin/AdminBlogs';
import { AdminResources } from '../pages/Admin/AdminResources';
import { AdminAchievements } from '../pages/Admin/AdminAchievements';
import { AdminTeam } from '../pages/Admin/AdminTeam';
import { AdminCertificates } from '../pages/Admin/AdminCertificates';
import { AdminMessages } from '../pages/Admin/AdminMessages';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Loading Page Route */}
      <Route path="/loading" element={<LoadingPage />} />

      {/* Main Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/learning" element={<LearningHubPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Admin Route Hierarchy */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="events" element={<AdminEvents />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="blogs" element={<AdminBlogs />} />
        <Route path="resources" element={<AdminResources />} />
        <Route path="achievements" element={<AdminAchievements />} />
        <Route path="team" element={<AdminTeam />} />
        <Route path="certificates" element={<AdminCertificates />} />
        <Route path="messages" element={<AdminMessages />} />
      </Route>

      {/* 404 Fallback Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
