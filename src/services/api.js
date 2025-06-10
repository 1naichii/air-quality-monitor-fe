import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
const API_KEY = import.meta.env.VITE_API_KEY || 'oxF5Wdpx2KuRi5QK0OmIqJgHz4OMzAkz.Cnkzj9Qjd9SdREw3V'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
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
