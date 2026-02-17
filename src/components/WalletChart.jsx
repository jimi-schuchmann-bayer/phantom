import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const WalletChart = ({ shareOfWallet, sellOutRatio }) => {
  const walletData = [
    { name: 'Bayer Products', value: shareOfWallet, fill: 'var(--lmnt-theme-secondary)' },
    { name: 'Other Products', value: 100 - shareOfWallet, fill: 'var(--lmnt-theme-surface-variant)' },
  ];

  const inventoryData = [
    { name: 'Sold Out', value: sellOutRatio * 100, fill: 'var(--lmnt-theme-success)' },
    { name: 'In Stock', value: (1 - sellOutRatio) * 100, fill: 'var(--bayer-secondary-200)' },
  ];

  return (
    <div 
      className="rounded-lg shadow-md p-6"
      style={{ backgroundColor: 'var(--lmnt-theme-surface)' }}
    >
      <h3 
        className="text-xl font-bold mb-6"
        style={{ color: 'var(--lmnt-theme-on-surface)' }}
      >
        Share of Wallet & Inventory Status
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 
            className="text-sm font-semibold mb-3 text-center"
            style={{ color: 'var(--lmnt-theme-on-surface)' }}
          >
            Share of Wallet
          </h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={walletData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {walletData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `${value.toFixed(1)}%`}
                contentStyle={{
                  backgroundColor: 'var(--lmnt-theme-surface)',
                  border: '1px solid var(--lmnt-theme-surface-variant)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div>
          <h4 
            className="text-sm font-semibold mb-3 text-center"
            style={{ color: 'var(--lmnt-theme-on-surface)' }}
          >
            Sell-Out vs Sell-In
          </h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={inventoryData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {inventoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => `${value.toFixed(1)}%`}
                contentStyle={{
                  backgroundColor: 'var(--lmnt-theme-surface)',
                  border: '1px solid var(--lmnt-theme-surface-variant)',
                  borderRadius: '8px',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WalletChart;