import { Info, Shield, AlertTriangle } from 'lucide-react'
import { getAQISymbol } from '../utils/aqi'

const AQILegend = ({ darkMode }) => {  const aqiLevels = [    { 
      range: '0-50', 
      label: 'Baik', 
      color: 'bg-green-500', 
      textColor: darkMode ? 'text-green-300' : 'text-green-700', 
      bgColor: darkMode ? 'bg-green-900/20' : 'bg-green-50',
      borderColor: darkMode ? 'border-green-800' : 'border-green-200',
      icon: '😊', 
      symbol: getAQISymbol(25),
      description: 'Kualitas udara memuaskan'
    },
    { 
      range: '51-100', 
      label: 'Sedang', 
      color: 'bg-yellow-500', 
      textColor: darkMode ? 'text-yellow-300' : 'text-yellow-700', 
      bgColor: darkMode ? 'bg-yellow-900/20' : 'bg-yellow-50',
      borderColor: darkMode ? 'border-yellow-800' : 'border-yellow-200',
      icon: '🙂', 
      symbol: getAQISymbol(75),
      description: 'Dapat diterima sebagian besar orang'
    },
    { 
      range: '101-150', 
      label: 'Tidak Sehat untuk Sensitif', 
      color: 'bg-orange-500', 
      textColor: darkMode ? 'text-orange-300' : 'text-orange-700', 
      bgColor: darkMode ? 'bg-orange-900/20' : 'bg-orange-50',
      borderColor: darkMode ? 'border-orange-800' : 'border-orange-200',
      icon: '😐', 
      symbol: getAQISymbol(125),
      description: 'Individu sensitif mungkin mengalami masalah'
    },
    { 
      range: '151-200', 
      label: 'Tidak Sehat', 
      color: 'bg-red-500', 
      textColor: darkMode ? 'text-red-300' : 'text-red-700', 
      bgColor: darkMode ? 'bg-red-900/20' : 'bg-red-50',
      borderColor: darkMode ? 'border-red-800' : 'border-red-200',
      icon: '☹️', 
      symbol: getAQISymbol(175),
      description: 'Semua orang mungkin mengalami efek kesehatan'
    },
    { 
      range: '201-300', 
      label: 'Sangat Tidak Sehat', 
      color: 'bg-purple-500', 
      textColor: darkMode ? 'text-purple-300' : 'text-purple-700', 
      bgColor: darkMode ? 'bg-purple-900/20' : 'bg-purple-50',
      borderColor: darkMode ? 'border-purple-800' : 'border-purple-200',
      icon: '😷', 
      symbol: getAQISymbol(250),
      description: 'Peringatan kesehatan untuk semua'
    },
    { 
      range: '301+', 
      label: 'Berbahaya', 
      color: 'bg-red-900', 
      textColor: darkMode ? 'text-red-200' : 'text-red-800', 
      bgColor: darkMode ? 'bg-red-900/30' : 'bg-red-100',
      borderColor: darkMode ? 'border-red-700' : 'border-red-300',
      icon: '💀', 
      symbol: getAQISymbol(350),
      description: 'Kondisi darurat'
    }
  ]

  return (    <div className={`glass-effect border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} rounded-xl p-6 sm:p-8 shadow-soft`}>
      <div className="flex items-center space-x-3 mb-6">
        <div className={`p-2 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'} rounded-lg`}>
          <Info className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
        <div>          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Referensi Skala AQI</h3>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Memahami tingkat kualitas udara</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {aqiLevels.map((level, index) => (
          <div 
            key={index} 
            className={`${level.bgColor} ${level.borderColor} border rounded-xl p-4 transition-all duration-200 hover:shadow-md hover:-translate-y-1`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">{level.icon}</span>
                <span className={`text-sm font-bold ${level.textColor}`}>{level.symbol}</span>
              </div>              <div className={`w-4 h-4 rounded-full ${level.color} border-2 ${darkMode ? 'border-gray-800' : 'border-white'} shadow-sm`}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'} text-sm`}>{level.range}</span>
                </div>
                <span className={`text-sm font-semibold ${level.textColor} block mb-1`}>
                  {level.label}
                </span>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {level.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} border ${darkMode ? 'border-blue-800' : 'border-blue-200'} rounded-xl p-4`}>
          <div className="flex items-center space-x-2 mb-2">
            <Shield className={`h-4 w-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />            <h4 className={`font-semibold ${darkMode ? 'text-blue-100' : 'text-blue-900'}`}>Tentang AQI</h4>
          </div>
          <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
            Air Quality Index (AQI) adalah indeks standar untuk melaporkan kualitas udara harian. 
            Semakin tinggi nilai AQI, semakin buruk kualitas udara dan semakin besar risiko kesehatan.
          </p>
        </div>
        
        <div className={`${darkMode ? 'bg-amber-900/20' : 'bg-amber-50'} border ${darkMode ? 'border-amber-800' : 'border-amber-200'} rounded-xl p-4`}>
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className={`h-4 w-4 ${darkMode ? 'text-amber-400' : 'text-amber-600'}`} />
            <h4 className={`font-semibold ${darkMode ? 'text-amber-100' : 'text-amber-900'}`}>Rekomendasi Kesehatan</h4>
          </div>
          <p className={`text-sm ${darkMode ? 'text-amber-200' : 'text-amber-800'}`}>
            Pada AQI 100, batasi aktivitas outdoor. Pada AQI 200, hindari aktivitas outdoor dan gunakan masker 
            jika harus keluar rumah.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AQILegend
