import { Wind, Moon, Sun } from 'lucide-react'

const Header = ({ darkMode, toggleDarkMode }) => {
  const appName = import.meta.env.VITE_APP_NAME || 'Air Quality Monitor'
  const enableDarkMode = import.meta.env.VITE_ENABLE_DARK_MODE !== 'false'
  
  return (
    <header 
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        darkMode 
          ? 'border-gray-700/50 bg-gray-900/80' 
          : 'border-gray-200/50 bg-white/80'
      }`}
      style={{
        backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderBottomColor: darkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(229, 231, 235, 0.5)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-3 rounded-xl shadow-md">
              <Wind className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>            <div>
              <h1 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {appName}
              </h1>
              <p className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Real-time IoT Monitoring
              </p>
            </div>
          </div>          <div className="flex items-center space-x-2 sm:space-x-4">
            {enableDarkMode && (
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                  aria-label="Toggle dark mode"
                  title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {darkMode ? (
                  <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                ) : (
                  <Moon className={`h-4 w-4 sm:h-5 sm:w-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                )}
              </button>
              )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
