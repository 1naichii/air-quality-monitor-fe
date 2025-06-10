import { useState, useEffect } from 'react'
import { Wifi, WifiOff, Radio } from 'lucide-react'

const WebSocketStatus = () => {
  const [wsStatus, setWsStatus] = useState('disconnected') // disconnected, connecting, connected
  const [lastMessage, setLastMessage] = useState(null)

  useEffect(() => {
    const enableWebSocket = import.meta.env.VITE_ENABLE_WEBSOCKET !== 'false'
    if (!enableWebSocket) {
      setWsStatus('disabled')
      return
    }
    
    const WS_URL = __WS_URL__ // Use injected constant for better security
    let ws = null
    let reconnectTimeout = null

    const connect = () => {try {
        setWsStatus('connecting')
        ws = new WebSocket(WS_URL)
        
        ws.onopen = () => {
          setWsStatus('connected')
          console.log('WebSocket connected')
        }
        
        ws.onmessage = () => {
          setLastMessage(new Date())
        }

        ws.onclose = () => {
          setWsStatus('disconnected')
          console.log('WebSocket disconnected')
          
          // Auto reconnect after 5 seconds
          reconnectTimeout = setTimeout(connect, 5000)
        }

        ws.onerror = (error) => {
          console.error('WebSocket error:', error)
          setWsStatus('disconnected')
        }
      } catch (error) {
        console.error('WebSocket connection failed:', error)
        setWsStatus('disconnected')
      }
    }

    connect()

    return () => {
      if (reconnectTimeout) {
        clearTimeout(reconnectTimeout)
      }
      if (ws) {
        ws.close()
      }
    }
  }, [])
  const getStatusColor = () => {
    switch (wsStatus) {
      case 'connected': return 'text-green-600'
      case 'connecting': return 'text-yellow-600'
      case 'disabled': return 'text-gray-500'
      default: return 'text-red-600'
    }
  }

  const getStatusIcon = () => {
    switch (wsStatus) {
      case 'connected': return <Radio className="h-4 w-4" />
      case 'connecting': return <Wifi className="h-4 w-4 animate-pulse" />
      case 'disabled': return <WifiOff className="h-4 w-4 opacity-50" />
      default: return <WifiOff className="h-4 w-4" />
    }
  }

  const getStatusText = () => {
    switch (wsStatus) {
      case 'connected': return 'Live'
      case 'connecting': return 'Connecting...'
      case 'disabled': return 'Disabled'
      default: return 'Offline'
    }
  }

  return (
    <div className={`flex items-center space-x-1 text-xs ${getStatusColor()}`}>
      {getStatusIcon()}
      <span>{getStatusText()}</span>
      {lastMessage && wsStatus === 'connected' && (
        <span className="text-gray-500">
          • {lastMessage.toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </span>
      )}
    </div>
  )
}

export default WebSocketStatus
