import { useState } from 'react'
import { Plus, RefreshCw, Download, Share, Settings } from 'lucide-react'

const FloatingActionButton = ({ onRefresh, onExport, onShare }) => {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: RefreshCw,
      label: 'Refresh Data',
      onClick: onRefresh,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Download,
      label: 'Export Data',
      onClick: onExport,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: Share,
      label: 'Share Report',
      onClick: onShare,
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ]
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Action buttons */}
      <div className={`absolute bottom-16 sm:bottom-16 right-0 space-y-2 sm:space-y-3 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {actions.map((action, index) => (
          <div key={index} className="flex items-center space-x-2 sm:space-x-3">
            <span className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap hidden sm:block">
              {action.label}
            </span>            <button
              onClick={action.onClick}
              className={`${action.color} text-white p-3 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              title={action.label}
            >
              <action.icon className="h-5 w-5 sm:h-5 sm:w-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Main FAB */}      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 sm:p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
        title={isOpen ? 'Close menu' : 'Open menu'}
      >
        <Plus className="h-6 w-6 sm:h-6 sm:w-6" />
      </button>
    </div>
  )
}

export default FloatingActionButton
