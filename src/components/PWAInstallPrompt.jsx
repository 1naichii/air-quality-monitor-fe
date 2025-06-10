import { useState, useEffect } from 'react'
import { Download, X } from 'lucide-react'

const PWAInstallPrompt = ({ darkMode }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null)
      setShowPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    // Remember user dismissed, don't show again for this session
    sessionStorage.setItem('pwa-prompt-dismissed', 'true')
  }

  // Don't show if already dismissed or not available
  if (!showPrompt || sessionStorage.getItem('pwa-prompt-dismissed')) {
    return null
  }

  return (
    <div className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-lg shadow-lg p-4 z-50`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Download className="h-5 w-5 text-blue-600" />
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Install App</h3>
        </div>
        <button
          onClick={handleDismiss}
          className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
        Install Air Quality Monitor untuk akses yang lebih cepat dan notifikasi push.
      </p>
      
      <div className="flex space-x-2">
        <button
          onClick={handleInstall}
          className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Install
        </button>
        <button
          onClick={handleDismiss}
          className={`flex-1 ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} px-3 py-2 rounded-md text-sm font-medium transition-colors`}
        >
          Nanti
        </button>
      </div>
    </div>
  )
}

export default PWAInstallPrompt
