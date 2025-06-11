import { getAQICategory, getAQITextColor, getAQIBgColor, getAQIBorderColor, getAQIAccentColor, getAQIDescription, getAQIIcon, getAQISymbol } from '../utils/aqi'

const AQICard = ({ data, darkMode }) => {
  if (!data) return null

  const { aqi, air_quality_raw, reading_time } = data
  const category = getAQICategory(aqi)
  const bgColor = getAQIBgColor(aqi)
  const borderColor = getAQIBorderColor(aqi)
  const accentColor = getAQIAccentColor(aqi)
  const textColor = getAQITextColor(aqi)
  const description = getAQIDescription(aqi)
  const icon = getAQIIcon(aqi)
  const symbol = getAQISymbol(aqi)

  return (
    <div className={`card-hover ${bgColor} ${accentColor} border-l-4 ${borderColor} border rounded-xl p-6 sm:p-8 shadow-soft animate-appear`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl mb-1">{icon}</span>
            <span className={`text-lg font-bold ${textColor}`}>{symbol}</span>
          </div>          <div>            <h3 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              AQI Saat Ini
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {new Date(reading_time).toLocaleString('id-ID')}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">        <div className="flex items-baseline space-x-3 flex-wrap">
          <span className={`text-5xl sm:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{aqi}</span>
          <div className="flex flex-col space-y-2">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${textColor} ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} shadow-sm`}>
              {category}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={`${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-lg p-4 border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
            <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>Nilai Sensor Raw</p>
            <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{air_quality_raw}</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>PPM</p>
          </div>
          <div className={`${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-lg p-4 border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
            <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>Level AQI</p>
            <p className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{aqi}</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>0-500 Scale</p>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-lg p-4 sm:p-5 border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Saran Kesehatan</p>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default AQICard
