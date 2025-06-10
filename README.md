# 🌬️ Air Quality Monitor - Frontend

> Frontend aplikasi monitoring kualitas udara real-time dengan sensor MQ135 menggunakan React + Vite dan PWA support

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com)
[![Deployment Status](https://img.shields.io/badge/Deployment-Ready-brightgreen.svg)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-38B2AC.svg)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Enabled-orange.svg)](https://web.dev/progressive-web-apps/)

**Repository**: [1naichii/air-quality-monitor-fe](https://github.com/1naichii/air-quality-monitor-fe) | **Author**: 1naichii | **License**: MIT

---

## ✨ Fitur Utama

- 📱 **Progressive Web App** - Dapat diinstall di Android/iOS
- 🔄 **Real-time Monitoring** - WebSocket connection untuk data live sensor MQ135
- 📊 **Interactive Dashboard** - Visualisasi AQI dengan charts interaktif
- 🎨 **Modern UI/UX** - Design system dengan Tailwind CSS + Dark mode
- 🔔 **Smart Notifications** - Alert otomatis untuk kualitas udara buruk
- 📈 **Historical Analytics** - Tracking dan analisis data historis
- ⚡ **Performance Optimized** - Bundle size 211.67 kB gzipped
- 🌐 **SEO Ready** - Meta tags dan structured data lengkap

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
- Backend API server (untuk data sensor MQ135)

### Installation & Development

```bash
# 1. Clone repository
git clone https://github.com/1naichii/air-quality-monitor-fe.git
cd air-quality-monitor-fe

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env
# Edit .env dengan konfigurasi API Anda

# 4. Start development server
npm run dev

# 5. Akses aplikasi di http://localhost:5173
```

### Environment Variables
```env
# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000
VITE_APP_NAME=Air Quality Monitor

# Optional Features
VITE_ENABLE_PWA=true
VITE_ENABLE_NOTIFICATIONS=true
VITE_ENABLE_DARK_MODE=true
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AQICard.jsx     # Kartu tampilan AQI dengan color coding
│   ├── AQIChart.jsx    # Chart real-time dengan Recharts
│   ├── Dashboard.jsx   # Main dashboard layout
│   ├── Header.jsx      # Navigation dengan dark mode toggle
│   ├── Statistics.jsx  # Statistical analysis display
│   └── ...             # Other components
├── services/
│   └── api.js         # HTTP client & WebSocket configuration
├── utils/
│   └── aqi.js        # AQI calculation & color utilities
├── assets/           # Static assets (logos, icons)
└── App.jsx          # Main app component with routing
```

## 🔧 Configuration Files

**Key configurations:**
- `vercel.json` - Deployment & routing config
- `vite.config.js` - Vite build & PWA settings
- `tailwind.config.js` - Tailwind CSS customization
- `package.json` - Dependencies & scripts

## 🛠️ Tech Stack

| Kategori | Teknologi | Versi | Purpose |
|----------|-----------|-------|---------|
| **Framework** | React | 19.1.0 | UI library |
| **Build Tool** | Vite | 6.x | Fast development & build |
| **Styling** | Tailwind CSS | 4.1.8 | Utility-first CSS |
| **Charts** | Recharts | 2.15.3 | Data visualization |
| **Routing** | React Router | 7.6.2 | Client-side routing |
| **HTTP Client** | Axios | 1.9.0 | API requests |
| **Icons** | Lucide React | 0.513.0 | Modern icon set |
| **Date Utils** | date-fns | 4.1.0 | Date formatting |

## ⚙️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:5173) |
| `npm run build` | Build untuk production (~12s) |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint untuk code quality |

## 📊 Air Quality Index (AQI) Levels

| AQI Range | Level | Color | Status | Action |
|-----------|-------|-------|--------|--------|
| 0-50 | Good | 🟢 Green | Aman | Normal activity |
| 51-100 | Moderate | 🟡 Yellow | Sedang | Sensitive groups consider reducing outdoor activities |
| 101-150 | Unhealthy for Sensitive | 🟠 Orange | Tidak sehat untuk sensitif | Sensitive groups avoid outdoor activities |
| 151-200 | Unhealthy | 🔴 Red | Tidak sehat | Everyone limit outdoor activities |
| 201-300 | Very Unhealthy | 🟣 Purple | Sangat tidak sehat | Everyone avoid outdoor activities |
| 301+ | Hazardous | 🟤 Maroon | Berbahaya | Emergency conditions, stay indoors |

## 🚀 Deployment ke Vercel

### ✅ Status: READY FOR DEPLOYMENT

**Quick Deploy:**
1. Push ke GitHub ✅ (sudah selesai)
2. Buka [vercel.com](https://vercel.com) dan login dengan GitHub
3. Import repository: `1naichii/air-quality-monitor-fe`
4. Set environment variables production:
   ```env
   VITE_API_URL=https://your-backend-api.vercel.app/api
   VITE_WS_URL=wss://your-backend-api.vercel.app
   VITE_APP_NAME=Air Quality Monitor
   ```
5. Deploy! (2-3 menit)

**Vercel CLI Alternative:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

**Expected Result:**
- 🌍 Live URL: `https://air-quality-monitor-fe.vercel.app`
- ⚡ Performance: 211.67 kB gzipped
- 📱 PWA: Installable di mobile/desktop
- 🔄 Real-time: WebSocket ready

## 🚨 Troubleshooting

### Common Issues & Solutions

**Build Fails:**
```bash
npm run build  # Test build locally
npm run lint   # Check code quality
```

**Environment Variables Not Working:**
- Ensure `VITE_` prefix on all variables
- Restart dev server: `npm run dev`
- Debug: `console.log(import.meta.env)`

**WebSocket Connection Issues:**
- Use `wss://` for HTTPS environments
- Check backend CORS configuration
- Verify WebSocket endpoint accessibility

**PWA Not Installing:**
- Test on HTTPS (required for PWA)
- Check browser console for service worker errors
- Verify `manifest.json` accessibility

## 📊 Performance Metrics

- **Bundle Size**: 719.73 kB (211.67 kB gzipped)
- **Build Time**: ~12-13 seconds
- **Lighthouse Score**: PWA ready
- **Load Time**: < 3 seconds on 3G

## 🎯 Features After Deployment

- ✅ **Real-time AQI monitoring** from MQ135 sensor
- ✅ **PWA installation** on mobile/desktop
- ✅ **Dark/Light mode** with system preference
- ✅ **Responsive design** for all screen sizes
- ✅ **WebSocket real-time updates**
- ✅ **Chart visualization** with Recharts
- ✅ **Notification system** for air quality alerts
- ✅ **Service Worker caching** for offline support

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
