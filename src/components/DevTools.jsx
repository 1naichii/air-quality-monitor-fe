import { useState } from 'react'
import { PlayCircle, StopCircle, Settings } from 'lucide-react'
import { sensorAPI } from '../services/api'

const DevTools = ({ onDataAdded }) => {
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulationInterval, setSimulationInterval] = useState(null)

  const generateRandomData = () => {
    const rawValue = Math.floor(Math.random() * 1000) + 200 // 200-1200
    const aqi = Math.floor(rawValue / 10) // Simple conversion for demo
    
    return {
      air_quality_raw: rawValue,
      aqi: Math.min(aqi, 500) // Cap at 500
    }
  }

  const startSimulation = async () => {
    if (isSimulating) return

    setIsSimulating(true)
    
    const interval = setInterval(async () => {
      try {
        const data = generateRandomData()
        const result = await sensorAPI.createSensorData(data)
        console.log('Simulated data sent:', result)
        
        if (onDataAdded) {
          onDataAdded(result)
        }
      } catch (error) {
        console.error('Failed to send simulated data:', error)
      }
    }, 10000) // Every 10 seconds

    setSimulationInterval(interval)
  }

  const stopSimulation = () => {
    if (simulationInterval) {
      clearInterval(simulationInterval)
      setSimulationInterval(null)
    }
    setIsSimulating(false)
  }

  const sendSingleData = async () => {
    try {
      const data = generateRandomData()
      const result = await sensorAPI.createSensorData(data)
      console.log('Single data sent:', result)
      
      if (onDataAdded) {
        onDataAdded(result)
      }
    } catch (error) {
      console.error('Failed to send data:', error)
    }
  }

  // Only show in development
  if (import.meta.env.PROD) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 bg-gray-900 text-white rounded-lg p-4 shadow-lg z-40">
      <div className="flex items-center space-x-2 mb-3">
        <Settings className="h-4 w-4" />
        <span className="text-sm font-medium">Dev Tools</span>
      </div>
      
      <div className="space-y-2">
        <button
          onClick={sendSingleData}
          className="w-full bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded text-sm transition-colors"
        >
          Send Test Data
        </button>
        
        <button
          onClick={isSimulating ? stopSimulation : startSimulation}
          className={`w-full flex items-center justify-center space-x-2 px-3 py-2 rounded text-sm transition-colors ${
            isSimulating 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isSimulating ? (
            <>
              <StopCircle className="h-4 w-4" />
              <span>Stop Simulation</span>
            </>
          ) : (
            <>
              <PlayCircle className="h-4 w-4" />
              <span>Start Simulation</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default DevTools
