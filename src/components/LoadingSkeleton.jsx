const LoadingSkeleton = () => {
  // Check if dark mode is active by looking at the HTML element
  const isDarkMode = document.documentElement.classList.contains('dark')
  
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Skeleton */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="space-y-2">
          <div className={`h-8 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-lg w-64 animate-pulse`}></div>
          <div className={`h-4 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-48 animate-pulse`}></div>
        </div>
        <div className={`h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-xl w-32 animate-pulse`}></div>
      </div>

      {/* AQI Card Skeleton */}
      <div className={`glass-effect border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} rounded-xl p-6 sm:p-8 shadow-soft`}>        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full animate-pulse mb-2`}></div>
              <div className={`w-8 h-4 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded animate-pulse`}></div>
            </div>
            <div>
              <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-32 mb-2 animate-pulse`}></div>
              <div className={`h-4 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-40 animate-pulse`}></div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-baseline space-x-3">
            <div className={`h-16 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-28 animate-pulse`}></div>
            <div className={`h-10 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded-full w-36 animate-pulse`}></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} rounded-lg p-4 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
              <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-28 mb-2 animate-pulse`}></div>
              <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-16 mb-1 animate-pulse`}></div>
              <div className={`h-3 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-12 animate-pulse`}></div>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} rounded-lg p-4 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
              <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-20 mb-2 animate-pulse`}></div>
              <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-12 mb-1 animate-pulse`}></div>
              <div className={`h-3 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-16 animate-pulse`}></div>
            </div>
          </div>

          <div className={`${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} rounded-lg p-5 border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
            <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-28 mb-3 animate-pulse`}></div>            <div className="space-y-2">
              <div className={`h-4 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-full animate-pulse`}></div>
              <div className={`h-4 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-3/4 animate-pulse`}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Skeleton */}
      <div className="space-y-6">
        <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-48 animate-pulse`}></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`glass-effect border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} rounded-xl p-5 sm:p-6 shadow-soft`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-xl animate-pulse`}></div>
                <div className={`w-6 h-6 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded animate-pulse`}></div>
              </div>
              <div>
                <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-20 mb-2 animate-pulse`}></div>
                <div className={`h-8 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-16 mb-1 animate-pulse`}></div>
                <div className={`h-3 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-24 animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart Skeleton */}
      <div className={`glass-effect border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} rounded-xl p-6 sm:p-8 shadow-soft`}>        <div className="flex items-center justify-between mb-6">
          <div>
            <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-40 mb-2 animate-pulse`}></div>
            <div className={`h-4 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-56 animate-pulse`}></div>
          </div>
        </div>
        <div className={`h-80 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg animate-pulse mb-4`}></div>
        <div className="flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center space-x-2">
              <div className={`w-3 h-3 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full animate-pulse`}></div>
              <div className={`h-3 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-16 animate-pulse`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend Skeleton */}
      <div className={`glass-effect border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} rounded-xl p-6 sm:p-8 shadow-soft`}>
        <div className="flex items-center space-x-3 mb-6">
          <div className={`w-10 h-10 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-lg animate-pulse`}></div>
          <div>
            <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-40 mb-2 animate-pulse`}></div>
            <div className={`h-4 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-48 animate-pulse`}></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} rounded-xl p-4`}>
              <div className="flex items-center space-x-3 mb-3">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded animate-pulse mb-1`}></div>
                  <div className={`w-4 h-3 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded animate-pulse`}></div>
                </div>
                <div className={`w-4 h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full animate-pulse`}></div>
                <div className="flex-1">
                  <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded w-16 mb-1 animate-pulse`}></div>
                  <div className={`h-4 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-24 mb-1 animate-pulse`}></div>
                  <div className={`h-3 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded w-32 animate-pulse`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeleton
