// AQI utility functions with modern, accessible colors
export const getAQICategory = (aqi) => {
  if (aqi <= 50) return "Baik"
  else if (aqi <= 100) return "Sedang"
  else if (aqi <= 150) return "Tidak Sehat untuk Sensitif"
  else if (aqi <= 200) return "Tidak Sehat"
  else if (aqi <= 300) return "Sangat Tidak Sehat"
  else return "Berbahaya"
}

export const getAQIColor = (aqi) => {
  if (aqi <= 50) return "#22c55e"      // Green-500
  else if (aqi <= 100) return "#eab308" // Yellow-500
  else if (aqi <= 150) return "#f97316" // Orange-500
  else if (aqi <= 200) return "#ef4444" // Red-500
  else if (aqi <= 300) return "#a855f7" // Purple-500
  else return "#991b1b"                 // Red-800
}

export const getAQITextColor = (aqi) => {
  if (aqi <= 50) return "text-green-700 dark:text-green-300"
  else if (aqi <= 100) return "text-yellow-700 dark:text-yellow-300"
  else if (aqi <= 150) return "text-orange-700 dark:text-orange-300"
  else if (aqi <= 200) return "text-red-700 dark:text-red-300"
  else if (aqi <= 300) return "text-purple-700 dark:text-purple-300"
  else return "text-red-800 dark:text-red-200"
}

export const getAQIBgColor = (aqi) => {
  if (aqi <= 50) return "bg-green-50 dark:bg-green-900/20"
  else if (aqi <= 100) return "bg-yellow-50 dark:bg-yellow-900/20"
  else if (aqi <= 150) return "bg-orange-50 dark:bg-orange-900/20"
  else if (aqi <= 200) return "bg-red-50 dark:bg-red-900/20"
  else if (aqi <= 300) return "bg-purple-50 dark:bg-purple-900/20"
  else return "bg-red-100 dark:bg-red-900/30"
}

export const getAQIBorderColor = (aqi) => {
  if (aqi <= 50) return "border-green-200 dark:border-green-700"
  else if (aqi <= 100) return "border-yellow-200 dark:border-yellow-700"
  else if (aqi <= 150) return "border-orange-200 dark:border-orange-700"
  else if (aqi <= 200) return "border-red-200 dark:border-red-700"
  else if (aqi <= 300) return "border-purple-200 dark:border-purple-700"
  else return "border-red-300 dark:border-red-600"
}

export const getAQIAccentColor = (aqi) => {
  if (aqi <= 50) return "border-l-green-500"
  else if (aqi <= 100) return "border-l-yellow-500"
  else if (aqi <= 150) return "border-l-orange-500"
  else if (aqi <= 200) return "border-l-red-500"
  else if (aqi <= 300) return "border-l-purple-500"
  else return "border-l-red-700"
}

export const getAQIDescription = (aqi) => {
  if (aqi <= 50) return "Kualitas udara memuaskan dan risiko sangat kecil."
  else if (aqi <= 100) return "Kualitas udara dapat diterima untuk sebagian besar orang."
  else if (aqi <= 150) return "Individu sensitif mungkin mengalami masalah ringan."
  else if (aqi <= 200) return "Semua orang mungkin mulai mengalami efek kesehatan."
  else if (aqi <= 300) return "Peringatan kesehatan: semua orang mungkin mengalami efek serius."
  else return "Kondisi darurat: seluruh populasi berisiko."
}

export const getAQIIcon = (aqi) => {
  if (aqi <= 50) return "😊"
  else if (aqi <= 100) return "🙂"
  else if (aqi <= 150) return "😐"
  else if (aqi <= 200) return "☹️"
  else if (aqi <= 300) return "😷"
  else return "💀"
}

export const getAQISymbol = (aqi) => {
  if (aqi <= 50) return "✓"
  else if (aqi <= 100) return "!"
  else if (aqi <= 150) return "!!"
  else if (aqi <= 200) return "✗"
  else if (aqi <= 300) return "‼️"
  else return "⚠️"
}
