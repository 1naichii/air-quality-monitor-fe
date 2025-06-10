import axios from 'axios'

const API_BASE_URL = __API_URL__ // Injected securely via Vite define, not exposed
const API_KEY = __API_KEY__ // Injected securely via Vite define, not exposed

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    ...(API_KEY && { 'X-API-Key': API_KEY })
  }
})

export const sensorAPI = {
  // Get all sensor data
  getAllSensorData: async () => {
    try {
      const response = await api.get('/sensor/mq135')
      return response.data
    } catch (error) {
      console.error('Error fetching sensor data:', error)
      throw error
    }
  },

  // Get latest sensor data since a specific timestamp
  getLatestSensorData: async (sinceTimestamp = null) => {
    try {
      const url = sinceTimestamp 
        ? `/sensor/mq135/latest?since=${encodeURIComponent(sinceTimestamp)}`
        : '/sensor/mq135/latest'
      const response = await api.get(url)
      return response.data
    } catch (error) {
      console.error('Error fetching latest sensor data:', error)
      throw error
    }
  },

  // Send new sensor data (for testing)
  createSensorData: async (data) => {
    try {
      const response = await api.post('/sensor/mq135', data)
      return response.data
    } catch (error) {
      console.error('Error creating sensor data:', error)
      throw error
    }
  }
}

export default api
