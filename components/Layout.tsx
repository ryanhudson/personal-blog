import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col selection:bg-primary/30 selection:text-white">
      <Header />
      <main className="flex-grow pt-24 px-6 w-full max-w-7xl mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;