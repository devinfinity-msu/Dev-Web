import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const PageContainer = ({ children }) => {
  return (
    <div className="page-wrapper bg-grid-pattern">
      <Navbar />
      <main className="main-content animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
};
