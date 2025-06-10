import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import PWAInstallPrompt from './components/PWAInstallPrompt'
import DevTools from './components/DevTools'
import NotificationSystem from './components/NotificationSystem'
import './App.css'

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [forceRender, setForceRender] = useState(0) // For forcing re-render

  // Apply dark mode on mount and when changed
  useEffect(() => {
    const htmlElement = document.documentElement
    const bodyElement = document.body
    
    // Clear all theme classes first
    htmlElement.classList.remove('dark', 'light')
    bodyElement.classList.remove('dark', 'light')
    
    if (darkMode) {
      htmlElement.classList.add('dark')
      htmlElement.setAttribute('data-theme', 'dark')
      bodyElement.classList.add('dark')
      bodyElement.style.backgroundColor = '#0f172a'
      bodyElement.style.color = '#f1f5f9'
    } else {
      htmlElement.classList.add('light')
      htmlElement.setAttribute('data-theme', 'light')
      bodyElement.classList.add('light')
      bodyElement.style.backgroundColor = '#ffffff'
      bodyElement.style.color = '#1f2937'
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    setForceRender(prev => prev + 1) // Force re-render
  }

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <Router>
      <div 
        key={`app-${darkMode}-${forceRender}`} 
        style={{
          minHeight: '100vh',
          backgroundColor: darkMode ? '#0f172a' : '#f8fafc',
          color: darkMode ? '#f1f5f9' : '#1f2937',
          transition: 'all 0.3s ease'
        }}
        className={`${darkMode ? 'dark' : ''}`}
      >
        <Header isOnline={isOnline} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-7xl">
          <Routes>
            <Route path="/" element={<Dashboard key={`dashboard-${darkMode}`} darkMode={darkMode} />} />
          </Routes>
        </main>
        <NotificationSystem />
        <PWAInstallPrompt darkMode={darkMode} />
        {/* DevTools only for development testing */}
        {/* <DevTools /> */}
      </div>
    </Router>
  )
}

export default App
