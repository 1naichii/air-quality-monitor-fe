import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart, ReferenceLine } from 'recharts'
import { format } from 'date-fns'
import { TrendingUp } from 'lucide-react'
import { getAQIColor } from '../utils/aqi'

const AQIChart = ({ data, darkMode }) => {
  if (!data || data.length === 0) return null

  // Get more data points for scrollable chart
  const maxDataPoints = data.length > 50 ? 50 : data.length
  const chartData = data
    .slice(-maxDataPoints)
    .reverse() // Show chronological order
    .map(item => ({
      time: format(new Date(item.reading_time), 'HH:mm'),
      aqi: item.aqi,
      raw: item.air_quality_raw,
      fullTime: new Date(item.reading_time).toLocaleString('id-ID'),
      color: getAQIColor(item.aqi)
    }))

  // Calculate chart width based on data points
  const minChartWidth = Math.max(800, chartData.length * 60) // Minimum 800px, or 60px per data point
  const shouldScroll = chartData.length > 10 // Enable scroll if more than 10 data points

  // Reference lines for AQI categories
  const aqiThresholds = [
    { value: 50, label: "Good", color: "#22c55e" },
    { value: 100, label: "Moderate", color: "#eab308" },
    { value: 150, label: "USG", color: "#f97316" },
    { value: 200, label: "Unhealthy", color: "#ef4444" },
    { value: 300, label: "Very Unhealthy", color: "#a855f7" },
  ]

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (        <div className={`glass-effect border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} rounded-xl p-4 shadow-medium`}>
          <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>{data.fullTime}</p>
          <div className="space-y-1">
            <p className="flex items-center justify-between">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>AQI:</span>
              <span className={`font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{data.aqi}</span>
            </p>
            <p className="flex items-center justify-between">
              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Raw Value:</span>
              <span className={`font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>{data.raw}</span>
            </p>
          </div>
        </div>
      )
    }
    return null
  }

  return (    
    <div className={`glass-effect border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} rounded-xl p-6 sm:p-8 shadow-soft`}>
      <div className="flex items-center justify-between mb-6">
        <div>          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className={`h-5 w-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>AQI Trend Analysis</h3>
            {shouldScroll && (
              <div className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
                Scrollable
              </div>
            )}
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Last {chartData.length} readings • Real-time monitoring
            {shouldScroll && (
              <span className={`ml-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                ← Scroll horizontal untuk melihat semua data →
              </span>
            )}
          </p>
        </div>
      </div>      <div className={`chart-scroll-container ${shouldScroll ? 'overflow-x-auto scrollbar-thin' : ''}`}>
        <div 
          className="h-80 sm:h-96 mb-4" 
          style={{ 
            minWidth: shouldScroll ? `${minChartWidth}px` : '100%',
            width: shouldScroll ? `${minChartWidth}px` : '100%'
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="aqiGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
                </linearGradient>
              </defs><CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#e5e7eb" 
              strokeOpacity={0.6}
              vertical={false}
            />
            <XAxis 
              dataKey="time" 
              stroke="#6b7280"
              fontSize={12}
              tick={{ fill: '#6b7280' }}
              tickLine={{ stroke: '#d1d5db' }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
              tick={{ fill: '#6b7280' }}
              tickLine={{ stroke: '#d1d5db' }}
              axisLine={{ stroke: '#d1d5db' }}
              label={{ 
                value: 'AQI Level', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fill: '#6b7280' }
              }}
            />
            {/* Reference lines for AQI thresholds */}
            {aqiThresholds.map((threshold, index) => (
              <ReferenceLine 
                key={index}
                y={threshold.value} 
                stroke={threshold.color}
                strokeDasharray="2 2"
                strokeOpacity={0.7}
                label={{
                  value: threshold.label,
                  position: 'topRight',
                  fill: threshold.color,
                  fontSize: 10
                }}
              />
            ))}
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="aqi" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fill="url(#aqiGradient)"
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ 
                r: 6, 
                stroke: '#3b82f6', 
                strokeWidth: 2, 
                fill: '#ffffff',
                drop: true 
              }}            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
      
      {/* Chart Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
        {aqiThresholds.map((threshold, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full border border-white" 
              style={{ backgroundColor: threshold.color }}
            ></div>            <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {threshold.label} ({index === 0 ? '0-' : `${aqiThresholds[index-1]?.value + 1}-`}{threshold.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AQIChart
