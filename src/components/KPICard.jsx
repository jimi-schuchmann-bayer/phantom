import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const KPICard = ({ 
  title, 
  value, 
  icon, 
  color = 'primary', 
  trend, 
  trendValue, 
  subtitle,
  progress 
}) => {
  const colorMap = {
    primary: 'var(--lmnt-theme-primary)',
    secondary: 'var(--lmnt-theme-secondary)',
    success: 'var(--lmnt-theme-success)',
    danger: 'var(--lmnt-theme-danger)',
    warning: 'var(--bayer-primary-300)',
  };

  const bgColorMap = {
    primary: 'var(--bayer-primary-50)',
    secondary: 'var(--bayer-secondary-50)',
    success: 'var(--bayer-secondary-100)',
    danger: 'var(--bayer-primary-100)',
    warning: 'var(--bayer-primary-100)',
  };

  return (
    <div 
      className="rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
      style={{ backgroundColor: 'var(--lmnt-theme-surface)' }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p 
            className="text-sm font-medium mb-1"
            style={{ color: 'var(--lmnt-theme-on-surface)' }}
          >
            {title}
          </p>
          <h3 
            className="text-3xl font-bold"
            style={{ color: colorMap[color] }}
          >
            {value}
          </h3>
        </div>
        <div 
          className="p-3 rounded-lg"
          style={{ backgroundColor: bgColorMap[color], color: colorMap[color] }}
        >
          {icon}
        </div>
      </div>

      {trend && (
        <div className="flex items-center space-x-2 mb-2">
          {trend === 'up' ? (
            <TrendingUp size={16} style={{ color: 'var(--lmnt-theme-success)' }} />
          ) : (
            <TrendingDown size={16} style={{ color: 'var(--lmnt-theme-danger)' }} />
          )}
          <span 
            className="text-sm font-semibold"
            style={{ color: trend === 'up' ? 'var(--lmnt-theme-success)' : 'var(--lmnt-theme-danger)' }}
          >
            {trendValue}
          </span>
        </div>
      )}

      {subtitle && (
        <p 
          className="text-sm"
          style={{ color: 'var(--lmnt-theme-on-surface)' }}
        >
          {subtitle}
        </p>
      )}

      {progress !== undefined && (
        <div className="mt-4">
          <div 
            className="h-2 rounded-full overflow-hidden"
            style={{ backgroundColor: 'var(--lmnt-theme-surface-variant)' }}
          >
            <div 
              className="h-full rounded-full transition-all duration-500"
              style={{ 
                width: `${Math.min(progress, 100)}%`,
                backgroundColor: colorMap[color]
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default KPICard;