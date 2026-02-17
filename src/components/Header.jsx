import React from 'react';
import { BarChart2 } from 'lucide-react';

const Header = () => {
  return (
    <header 
      className="shadow-sm"
      style={{ backgroundColor: 'var(--lmnt-theme-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div 
              className="p-2 rounded-lg"
              style={{ backgroundColor: 'var(--lmnt-on-secondary-stroke)' }}
            >
              <BarChart2 size={32} style={{ color: 'var(--lmnt-on-secondary-base)' }} />
            </div>
            <div>
              <h1 
                className="text-3xl font-bold"
                style={{ color: 'var(--lmnt-on-secondary-base)' }}
              >
                Sales Dashboard
              </h1>
              <p 
                className="text-sm mt-1"
                style={{ color: 'var(--lmnt-on-secondary-inactive)' }}
              >
                Real-time KPI tracking and performance metrics
              </p>
            </div>
          </div>
          <div 
            className="text-right hidden sm:block"
            style={{ color: 'var(--lmnt-on-secondary-base)' }}
          >
            <p className="text-sm" style={{ color: 'var(--lmnt-on-secondary-inactive)' }}>
              Last Updated
            </p>
            <p className="text-lg font-semibold">
              {new Date().toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;