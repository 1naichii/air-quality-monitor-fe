# 🌬️ Air Quality Monitor - Frontend

> Aplikasi monitoring kualitas udara real-time dengan teknologi modern dan Progressive Web App (PWA) support.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-38B2AC.svg)](https://tailwindcss.com/)

## 📋 Deskripsi

Frontend aplikasi monitoring kualitas udara real-time yang menggunakan sensor MQ135 untuk mengukur Air Quality Index (AQI). Aplikasi ini dibangun dengan React + Vite dan mendukung PWA untuk pengalaman mobile yang optimal.

## ✨ Fitur Utama

- 📱 **Responsive Design** - Optimized untuk mobile dan desktop
- 🔄 **Real-time Monitoring** - WebSocket connection untuk data live
- 📊 **Interactive Dashboard** - Visualisasi data AQI dengan charts
- 🎨 **Modern UI/UX** - Design system dengan Tailwind CSS
- 📱 **Progressive Web App** - Dapat diinstall di Android/iOS
- 🌙 **Dark Mode Support** - Theme switching otomatis
- 🔔 **Push Notifications** - Alert untuk kualitas udara buruk
- 📈 **Historical Data** - Tracking data historis dengan charts
- 🌐 **SEO Optimized** - Meta tags dan structured data lengkap
- ⚡ **Performance Optimized** - Fast loading dengan Vite

## 🛠️ Teknologi

| Kategori | Teknologi | Versi |
|----------|-----------|-------|
| **Framework** | React | 19.1.0 |
| **Build Tool** | Vite | 6.x |
| **Styling** | Tailwind CSS | 4.1.8 |
| **Charts** | Recharts | 2.15.3 |
| **Routing** | React Router | 7.6.2 |
| **HTTP Client** | Axios | 1.9.0 |
| **Icons** | Lucide React | 0.513.0 |
| **Date Utils** | date-fns | 4.1.0 |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ dan npm/yarn
- Backend API server (untuk data sensor)

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/1naichii/air-quality-monitor-fe.git
   cd air-quality-monitor-fe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment**
   ```bash
   cp .env.example .env
   # Edit .env dengan konfigurasi API Anda
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Akses aplikasi**
   ```
   http://localhost:5173
   ```

## 📁 Struktur Proyek

```
src/
├── components/          # React components
│   ├── AQICard.jsx     # Kartu tampilan AQI
│   ├── AQIChart.jsx    # Chart visualisasi data
│   ├── Dashboard.jsx   # Main dashboard
│   ├── Header.jsx      # Navigation header
│   └── ...
├── services/           # API services
│   └── api.js         # HTTP client configuration
├── utils/             # Utility functions
│   └── aqi.js        # AQI calculation utilities
├── assets/           # Static assets
└── App.jsx          # Main app component
```

## ⚙️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Konfigurasi

### Environment Variables
```env
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
VITE_APP_NAME=Air Quality Monitor
```

### API Configuration
Edit `src/services/api.js`:
```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'
const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:3000'
```

## 🌐 Deployment

### Deploy ke Vercel

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "feat: initial air quality monitor application"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Buka [vercel.com](https://vercel.com)
   - Import project dari GitHub
   - Set environment variables
   - Deploy!

3. **Deploy via Vercel CLI**
   ```bash
   npm i -g vercel
   vercel --prod
   ```

## 📊 Fitur AQI

### Air Quality Index Levels
| AQI Range | Level | Color | Description |
|-----------|-------|-------|-------------|
| 0-50 | Good | 🟢 Green | Kualitas udara baik |
| 51-100 | Moderate | 🟡 Yellow | Kualitas udara sedang |
| 101-150 | Unhealthy for Sensitive | 🟠 Orange | Tidak sehat untuk sensitif |
| 151-200 | Unhealthy | 🔴 Red | Tidak sehat |
| 201-300 | Very Unhealthy | 🟣 Purple | Sangat tidak sehat |
| 301+ | Hazardous | 🟤 Maroon | Berbahaya |

## 🔔 Notifications

Aplikasi mendukung notifikasi push untuk:
- ⚠️ AQI level mencapai "Unhealthy"
- 📈 Trend peningkatan polusi
- 🔄 Status koneksi sensor
- 📊 Laporan harian/mingguan

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**1naichii**
- GitHub: [@1naichii](https://github.com/1naichii)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI framework
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Vercel](https://vercel.com/) - Deployment platform
