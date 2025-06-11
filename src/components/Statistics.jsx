import { TrendingUp, TrendingDown, BarChart3, Clock, Activity, Target } from 'lucide-react'

const Statistics = ({ data, darkMode }) => {
  if (!data || data.length === 0) return null

  const calculateStats = () => {
    // Hanya gunakan 10 data terbaru untuk kalkulasi
    const latestData = data.slice(0, 10)
    const aqiValues = latestData.map(item => item.aqi)
    const latest = latestData[0]
    const previous = latestData[1]
    
    const avg = Math.round(aqiValues.reduce((sum, val) => sum + val, 0) / aqiValues.length)
    const max = Math.max(...aqiValues)
    const min = Math.min(...aqiValues)
    
    const trend = previous ? latest.aqi - previous.aqi : 0
    const trendPercent = previous ? Math.round(((latest.aqi - previous.aqi) / previous.aqi) * 100) : 0

    return { avg, max, min, trend, trendPercent, latest, dataCount: latestData.length }
  }

  const stats = calculateStats()
  const getTrendColor = (trend) => {
    if (trend > 0) return {
      bg: darkMode ? "bg-red-900/20" : "bg-red-50",
      text: darkMode ? "text-red-300" : "text-red-700",
      border: darkMode ? "border-red-800" : "border-red-200",
      icon: darkMode ? "text-red-400" : "text-red-600",
      accent: darkMode ? "bg-red-800/30" : "bg-red-100"
    }
    if (trend < 0) return {
      bg: darkMode ? "bg-green-900/20" : "bg-green-50",
      text: darkMode ? "text-green-300" : "text-green-700",
      border: darkMode ? "border-green-800" : "border-green-200",
      icon: darkMode ? "text-green-400" : "text-green-600",
      accent: darkMode ? "bg-green-800/30" : "bg-green-100"
    }
    return {
      bg: darkMode ? "bg-gray-800/50" : "bg-gray-50",
      text: darkMode ? "text-gray-300" : "text-gray-700",
      border: darkMode ? "border-gray-700" : "border-gray-200",
      icon: darkMode ? "text-gray-400" : "text-gray-600",
      accent: darkMode ? "bg-gray-700/50" : "bg-gray-100"
    }  }
  // eslint-disable-next-line no-unused-vars
  const StatCard = ({ icon: Icon, title, value, subtitle, colorScheme, trend = null }) => (
    <div className={`card-hover glass-effect border ${colorScheme.border} rounded-xl p-5 sm:p-6 shadow-soft`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorScheme.accent}`}>
          <Icon className={`h-6 w-6 ${colorScheme.icon}`} />
        </div>
        {trend !== null && (
          <div className="flex items-center space-x-1">
            {trend > 0 ? (
              <TrendingUp className="h-4 w-4 text-red-500" />
            ) : trend < 0 ? (
              <TrendingDown className="h-4 w-4 text-green-500" />
            ) : (
              <Activity className="h-4 w-4 text-gray-400" />
            )}            <span className={`text-sm font-medium ${trend > 0 ? (darkMode ? 'text-red-400' : 'text-red-600') : trend < 0 ? (darkMode ? 'text-green-400' : 'text-green-600') : 'text-gray-500'}`}>
              {trend > 0 ? `+${trend}` : trend}
            </span>
          </div>
        )}
      </div>
      <div>        <p className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>{title}</p>
        <p className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>{value}</p>
        {subtitle && (
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{subtitle}</p>
        )}
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Ringkasan Statistik</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">        <StatCard
          icon={BarChart3}          title="Rata-rata AQI"
          value={stats.avg}
          subtitle={`${stats.dataCount} pembacaan terbaru`}
          colorScheme={{
            bg: darkMode ? "bg-blue-900/20" : "bg-blue-50",
            text: darkMode ? "text-blue-300" : "text-blue-700",
            border: darkMode ? "border-blue-800" : "border-blue-200",
            icon: darkMode ? "text-blue-400" : "text-blue-600",
            accent: darkMode ? "bg-blue-800/30" : "bg-blue-100"
          }}
        />
        
        <StatCard
          icon={Target}          title="AQI Tertinggi"
          value={stats.max}
          subtitle="Level puncak tercatat"
          colorScheme={{
            bg: darkMode ? "bg-red-900/20" : "bg-red-50",
            text: darkMode ? "text-red-300" : "text-red-700",
            border: darkMode ? "border-red-800" : "border-red-200",
            icon: darkMode ? "text-red-400" : "text-red-600",
            accent: darkMode ? "bg-red-800/30" : "bg-red-100"
          }}
        />

        <StatCard
          icon={TrendingDown}          title="AQI Terendah"
          value={stats.min}
          subtitle="Level terbaik tercatat"
          colorScheme={{
            bg: darkMode ? "bg-green-900/20" : "bg-green-50",
            text: darkMode ? "text-green-300" : "text-green-700",
            border: darkMode ? "border-green-800" : "border-green-200",
            icon: darkMode ? "text-green-400" : "text-green-600",
            accent: darkMode ? "bg-green-800/30" : "bg-green-100"
          }}
        />

        <StatCard
          icon={Clock}          title="Tren"
          value={Math.abs(stats.trend)}
          subtitle={`${stats.trend > 0 ? 'Meningkat' : stats.trend < 0 ? 'Menurun' : 'Stabil'} dari pembacaan terakhir`}
          colorScheme={getTrendColor(stats.trend)}
          trend={stats.trend}
        />
      </div>
    </div>
  )
}

export default Statistics
