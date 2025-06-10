import { useState, useEffect } from 'react'
import { Wifi, WifiOff, Radio } from 'lucide-react'

const WebSocketStatus = () => {
  const [wsStatus, setWsStatus] = useState('disconnected') // disconnected, connecting, connected
  const [lastMessage, setLastMessage] = useState(null)

  useEffect(() => {
    const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:3000'
    let ws = null
    let reconnectTimeout = null

    const connect = () => {
      try {
        setWsStatus('connecting')
        ws = new WebSocket(WS_URL)

        ws.onopen = () => {
          setWsStatus('connected')
          console.log('WebSocket connected')
        }

        ws.onmessage = (event) => {
          const message = JSON.parse(event.data)
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
      default: return 'text-red-600'
    }
  }

  const getStatusIcon = () => {
    switch (wsStatus) {
      case 'connected': return <Radio className="h-4 w-4" />
      case 'connecting': return <Wifi className="h-4 w-4 animate-pulse" />
      default: return <WifiOff className="h-4 w-4" />
    }
  }

  const getStatusText = () => {
    switch (wsStatus) {
      case 'connected': return 'Live'
      case 'connecting': return 'Connecting...'
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
