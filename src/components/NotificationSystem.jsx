import { useState, useEffect } from 'react'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([])

  const addNotification = (message, type = 'info', duration = 5000) => {
    const id = Date.now()
    const notification = { id, message, type, duration }
    
    setNotifications(prev => [...prev, notification])
    
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, duration)
    }
  }

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return CheckCircle
      case 'error':
        return AlertCircle
      case 'info':
      default:
        return Info
    }
  }
  const getColors = (type) => {
    // Check if dark mode is active by looking at the HTML element
    const isDarkMode = document.documentElement.classList.contains('dark')
    
    switch (type) {
      case 'success':
        return isDarkMode 
          ? 'bg-green-900/20 border-green-800 text-green-200' 
          : 'bg-green-50 border-green-200 text-green-800'
      case 'error':
        return isDarkMode 
          ? 'bg-red-900/20 border-red-800 text-red-200' 
          : 'bg-red-50 border-red-200 text-red-800'
      case 'info':
      default:
        return isDarkMode 
          ? 'bg-blue-900/20 border-blue-800 text-blue-200' 
          : 'bg-blue-50 border-blue-200 text-blue-800'
    }
  }

  // Expose addNotification globally
  useEffect(() => {
    window.showNotification = addNotification
    return () => {
      delete window.showNotification
    }
  }, [])

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => {
        const Icon = getIcon(notification.type)
        const colors = getColors(notification.type)
        
        return (
          <div
            key={notification.id}
            className={`${colors} border rounded-lg p-4 shadow-lg animate-slide-up`}
          >
            <div className="flex items-start space-x-3">
              <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium flex-1">{notification.message}</p>
              <button
                onClick={() => removeNotification(notification.id)}
                className="text-current hover:opacity-70 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NotificationSystem
