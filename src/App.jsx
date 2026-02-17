import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import KPICard from './components/KPICard';
import SalesChart from './components/SalesChart';
import WalletChart from './components/WalletChart';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  ShoppingCart, 
  PieChart, 
  BarChart3,
  Package
} from 'lucide-react';

function App() {
  const [dashboardData, setDashboardData] = useState({
    previousSeasonSales: 2450000,
    currentSeasonAgreedSales: 2890000,
    sellInPurchased: 2150000,
    salesTarget: 3200000,
    shareOfWallet: 42.5,
    sellOutToSellInRatio: 0.85
  });

  // Calculate derived metrics
  const growthVsPrevious = ((dashboardData.currentSeasonAgreedSales - dashboardData.previousSeasonSales) / dashboardData.previousSeasonSales * 100).toFixed(1);
  const targetAchievement = ((dashboardData.currentSeasonAgreedSales / dashboardData.salesTarget) * 100).toFixed(1);
  
  // Inventory status based on sell-out to sell-in ratio
  const getInventoryStatus = (ratio) => {
    if (ratio >= 0.9) return { status: 'Healthy', color: 'success' };
    if (ratio >= 0.7) return { status: 'Moderate', color: 'warning' };
    return { status: 'High Stock', color: 'danger' };
  };

  const inventoryStatus = getInventoryStatus(dashboardData.sellOutToSellInRatio);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--lmnt-theme-surface-variant)' }}>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Previous Season Sales"
            value={formatCurrency(dashboardData.previousSeasonSales)}
            icon={<BarChart3 size={24} />}
            color="secondary"
            subtitle="2023 Season Total"
          />
          
          <KPICard
            title="Current Season Agreed"
            value={formatCurrency(dashboardData.currentSeasonAgreedSales)}
            icon={<DollarSign size={24} />}
            color="secondary"
            trend={growthVsPrevious > 0 ? 'up' : 'down'}
            trendValue={`${Math.abs(growthVsPrevious)}%`}
            subtitle="2024 Season"
          />
          
          <KPICard
            title="Sell-In Purchased"
            value={formatCurrency(dashboardData.sellInPurchased)}
            icon={<ShoppingCart size={24} />}
            color="secondary"
            subtitle="Products Ordered"
          />
          
          <KPICard
            title="Sales Target"
            value={formatCurrency(dashboardData.salesTarget)}
            icon={<Target size={24} />}
            color="secondary"
            subtitle={`${targetAchievement}% Achieved`}
            progress={parseFloat(targetAchievement)}
          />
        </div>

        {/* Middle KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <KPICard
            title="Growth vs Previous Season"
            value={`${growthVsPrevious}%`}
            icon={growthVsPrevious >= 0 ? <TrendingUp size={24} /> : <TrendingDown size={24} />}
            color={growthVsPrevious >= 0 ? 'success' : 'danger'}
            trend={growthVsPrevious >= 0 ? 'up' : 'down'}
            trendValue={formatCurrency(dashboardData.currentSeasonAgreedSales - dashboardData.previousSeasonSales)}
            subtitle="Year-over-Year"
          />
          
          <KPICard
            title="Share of Wallet"
            value={`${dashboardData.shareOfWallet}%`}
            icon={<PieChart size={24} />}
            color="secondary"
            subtitle="Bayer vs Total Spend"
          />
          
          <KPICard
            title="Sell-Out to Sell-In Ratio"
            value={dashboardData.sellOutToSellInRatio.toFixed(2)}
            icon={<Package size={24} />}
            color={inventoryStatus.color}
            subtitle={`Inventory: ${inventoryStatus.status}`}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesChart 
            previousSeason={dashboardData.previousSeasonSales}
            currentSeason={dashboardData.currentSeasonAgreedSales}
            target={dashboardData.salesTarget}
          />
          
          <WalletChart 
            shareOfWallet={dashboardData.shareOfWallet}
            sellOutRatio={dashboardData.sellOutToSellInRatio}
          />
        </div>
      </main>
    </div>
  );
}

export default App;