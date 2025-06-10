import { useState, useEffect } from 'react'
import { RefreshCw, AlertTriangle } from 'lucide-react'
import { sensorAPI } from '../services/api'
import { getAQICategory } from '../utils/aqi'
import AQICard from './AQICard'
import AQIChart from './AQIChart'
import Statistics from './Statistics'
import LoadingSkeleton from './LoadingSkeleton'
import AQILegend from './AQILegend'
import FloatingActionButton from './FloatingActionButton'

const Dashboard = ({ darkMode }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  // Debug log untuk dark mode
  useEffect(() => {
    console.log('Dashboard received darkMode prop:', darkMode)
  }, [darkMode])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await sensorAPI.getAllSensorData()
      setData(response)
      setLastUpdated(new Date())
      window.showNotification?.('Data refreshed successfully!', 'success')
    } catch (err) {
      setError('Failed to fetch sensor data. Please check your connection.')
      window.showNotification?.('Failed to fetch data. Please check your connection.', 'error')
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    
    // Auto refresh every 30 seconds
    const interval = setInterval(fetchData, 30000)
    
    return () => clearInterval(interval)
  }, [])  // WebSocket connection for real-time updates
  useEffect(() => {
    const enableWebSocket = import.meta.env.VITE_ENABLE_WEBSOCKET !== 'false'
    if (!enableWebSocket) return
    
    const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:3000'
    
    try {
      const ws = new WebSocket(WS_URL)
      
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data)
        if (message.type === 'newData') {
          setData(prevData => [message.payload, ...prevData])
          setLastUpdated(new Date())
        }
      }

      ws.onerror = (error) => {
        console.error('WebSocket error:', error)
      }

      return () => {
        ws.close()
      }
    } catch (error) {
      console.error('WebSocket connection failed:', error)
    }
  }, [])

  const exportData = () => {
    if (data.length === 0) return
    
    const csvContent = [
      ['Timestamp', 'AQI', 'Raw Value', 'Category'],
      ...data.map(item => [
        new Date(item.reading_time).toLocaleString('id-ID'),
        item.aqi,
        item.air_quality_raw,
        getAQICategory(item.aqi)
      ])
    ]
    .map(row => row.join(','))
    .join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `air-quality-data-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
    window.showNotification?.('Data exported successfully!', 'success')
  }

  const shareData = async () => {
    if (!data.length) return
    
    const latestData = data[0]
    const shareText = `🌬️ Air Quality Update\nCurrent AQI: ${latestData.aqi} (${getAQICategory(latestData.aqi)})\nReading Time: ${new Date(latestData.reading_time).toLocaleString('id-ID')}\n\n#AirQuality #IoT #EnvironmentalMonitoring`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Air Quality Monitor Report',
          text: shareText,
          url: window.location.href
        })
        window.showNotification?.('Report shared successfully!', 'success')
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      navigator.clipboard.writeText(shareText)
      window.showNotification?.('Data copied to clipboard!', 'info')
      alert('Data copied to clipboard!')
    }
  }

  if (loading && data.length === 0) {
    return <LoadingSkeleton />
  }

  if (error && data.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center">
          <AlertTriangle className="h-8 w-8 mx-auto text-red-600 mb-4" />
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={fetchData}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }
  const latestData = data[0]
  return (
    <div className={`space-y-8 animate-fade-in ${darkMode ? 'dark' : ''}`}>
      {/* Header with refresh button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">        <div className="space-y-2">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Air Quality Dashboard
          </h2>
          {lastUpdated && (
            <p className={`text-sm flex items-center space-x-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></span>
              <span>Last updated: {lastUpdated.toLocaleString('id-ID')}</span>
            </p>
          )}
        </div>
          <button
          onClick={fetchData}
          disabled={loading}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
          <span className="font-medium">Refresh Data</span>
        </button>
      </div>      {/* Error banner */}
      {error && (
        <div className={`${darkMode ? 'bg-red-900/20' : 'bg-red-50'} border ${darkMode ? 'border-red-800' : 'border-red-200'} rounded-xl p-4 animate-slide-up`}>
          <div className="flex items-center space-x-3">
            <AlertTriangle className={`h-5 w-5 ${darkMode ? 'text-red-400' : 'text-red-600'} flex-shrink-0`} />
            <p className={`${darkMode ? 'text-red-200' : 'text-red-800'} font-medium`}>{error}</p>
          </div>
        </div>
      )}{/* Current AQI Card */}
      {latestData && (
        <div className="animate-appear">
          <AQICard data={latestData} darkMode={darkMode} />
        </div>
      )}      {/* Statistics */}
      {data.length > 0 && (
        <div className="animate-appear" style={{ animationDelay: '0.1s' }}>
          <Statistics data={data} darkMode={darkMode} />
        </div>
      )}

      {/* Chart */}
      {data.length > 1 && (
        <div className="animate-appear" style={{ animationDelay: '0.2s' }}>
          <AQIChart data={data} darkMode={darkMode} />
        </div>
      )}

      {/* AQI Legend */}
      <div className="animate-appear" style={{ animationDelay: '0.3s' }}>
        <AQILegend darkMode={darkMode} />
      </div>      {/* No data message */}
      {data.length === 0 && !loading && (
        <div className="text-center py-16 animate-appear">
          <div className="max-w-md mx-auto">
            <div className={`w-16 h-16 mx-auto mb-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full flex items-center justify-center`}>
              <AlertTriangle className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>No Data Available</h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>No sensor data available yet.</p>
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Make sure your IoT device is connected and sending data.
            </p>
          </div>
        </div>
      )}      {/* Floating Action Button */}
      <FloatingActionButton 
        onRefresh={fetchData} 
        onExport={exportData}
        onShare={shareData}
        darkMode={darkMode}
      />
    </div>
  )
}

export default Dashboard
