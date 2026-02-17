import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

const SalesChart = ({ previousSeason, currentSeason, target }) => {
  const data = [
    {
      name: 'Previous Season',
      value: previousSeason,
      fill: 'var(--bayer-secondary-400)',
    },
    {
      name: 'Current Season',
      value: currentSeason,
      fill: 'var(--lmnt-theme-secondary)',
    },
    {
      name: 'Target',
      value: target,
      fill: 'var(--bayer-secondary-800)',
    },
  ];

  const formatYAxis = (value) => {
    return `$${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div 
      className="rounded-lg shadow-md p-6"
      style={{ backgroundColor: 'var(--lmnt-theme-surface)' }}
    >
      <h3 
        className="text-xl font-bold mb-6"
        style={{ color: 'var(--lmnt-theme-on-surface)' }}
      >
        Sales Performance Overview
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--lmnt-theme-surface-variant)" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: 'var(--lmnt-theme-on-surface)' }}
          />
          <YAxis 
            tickFormatter={formatYAxis}
            tick={{ fill: 'var(--lmnt-theme-on-surface)' }}
          />
          <Tooltip 
            formatter={(value) => `$${value.toLocaleString()}`}
            contentStyle={{
              backgroundColor: 'var(--lmnt-theme-surface)',
              border: '1px solid var(--lmnt-theme-surface-variant)',
              borderRadius: '8px',
            }}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;