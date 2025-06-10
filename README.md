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
- 🔄 **Auto-refresh** - Polling data setiap 30 detik untuk monitoring sensor MQ135
- 📊 **Interactive Dashboard** - Visualisasi AQI dengan charts interaktif
- 🎨 **Modern UI/UX** - Design system dengan Tailwind CSS + Dark mode
- 🔔 **Smart Notifications** - Alert otomatis untuk kualitas udara buruk
- 📈 **Historical Analytics** - Tracking dan analisis data historis
- ⚡ **Performance Optimized** - Bundle size 211.67 kB gzipped
- 🌐 **SEO Ready** - Meta tags dan structured data lengkap
- 🔐 **Secure API Access** - API key authentication untuk backend integration

## 🔗 Backend Integration

### Endpoint Requirements
Frontend ini terhubung dengan backend API yang memerlukan:

| Endpoint | Method | Auth | Purpose |
|----------|--------|------|---------|
| `/api/sensor/mq135` | GET | API Key | Ambil semua data sensor |
| `/api/sensor/mq135` | POST | API Key | Kirim data sensor baru |

### API Response Format
```json
{
  "data": [
    {
      "id": "uuid",
      "timestamp": "2025-06-11T10:30:00Z",
      "ppm": 350,
      "aqi": 75,
      "temperature": 28.5,
      "humidity": 65.2
    }
  ],
  "meta": {
    "total": 1000,
    "page": 1,
    "limit": 50
  }
}
```

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
# API Configuration (secure variables without VITE_ prefix)
API_URL=http://localhost:3000/api
API_KEY=your-api-key-here

# App Configuration
VITE_APP_NAME=Air Quality Monitor
VITE_APP_VERSION=1.0.0
VITE_APP_URL=http://localhost:5173

# Feature Controls
VITE_ENABLE_PWA=true
VITE_ENABLE_NOTIFICATIONS=true
VITE_ENABLE_DARK_MODE=true
```

## 🔐 Enhanced Security Implementation

Aplikasi ini menggunakan **secure environment variable handling** untuk data sensitif:

### 🛡️ **Security Architecture**
- ✅ **`API_KEY`** - Tidak menggunakan prefix `VITE_`, tidak terekspos di client-side
- ✅ **`API_URL`** - Tidak menggunakan prefix `VITE_`, tidak terekspos di client-side  
- ✅ **Build-time injection** - Diinjeksi via Vite `define` saat build time
- ✅ **No browser exposure** - Tidak dapat diakses via developer tools atau network inspection
- ⚠️ **Public configs** - `VITE_*` variables tetap terekspos (sesuai kebutuhan UI)

### 🔧 **Implementation Details**
1. **Secure Variables (Server-side only):**
   ```env
   API_URL=https://your-backend-api.com/api  # 🔒 Not exposed
   API_KEY=your-secret-api-key    # 🔒 Not exposed
   ```

2. **Public Variables (Client-side accessible):**
   ```env
   VITE_APP_NAME=My App           # 🌐 Publicly accessible
   VITE_ENABLE_PWA=true          # 🌐 Publicly accessible
   ```

3. **Code Usage:**
   ```javascript
   // Secure access - injected as constants
   const apiUrl = __API_URL__     // Safe, not in import.meta.env
   const apiKey = __API_KEY__     // Safe, not in import.meta.env
   
   // Public access - standard Vite behavior
   const appName = import.meta.env.VITE_APP_NAME  // Exposed, as intended
   ```

### Setup API Configuration
1. **Dapatkan credentials** dari backend administrator
2. **Set environment variables** tanpa prefix VITE_:
   ```env
   API_URL=https://your-backend-api.com/api
   API_KEY=your-secret-api-key
   ```
3. **Variables diinjeksi** secara aman saat build time
4. **Tidak terekspos** di browser atau client-side inspection tools

### Security Features
- ✅ **Zero client exposure** - Credentials tidak dapat dilihat di browser
- ✅ **Secure build injection** - Diinjeksi via Vite define, bukan environment variables
- ✅ **Production-ready** - Tidak ada fallback localhost untuk keamanan maksimal
- ✅ **Type-safe** - TypeScript definitions untuk konstanta global
- ✅ **ESLint compatible** - Global constants terdefinisi dengan benar

### Implementation in Code
```javascript
// services/api.js - Secure API configuration
const API_URL = __API_URL__ // Injected securely, not in import.meta.env
const API_KEY = __API_KEY__ // Injected securely, not in import.meta.env

// vite.config.js - Build-time injection
define: {
  __API_URL__: JSON.stringify(env.API_URL || ''),
  __API_KEY__: JSON.stringify(env.API_KEY || '')
}
```

### 🧪 **Security Verification**

Untuk memverifikasi bahwa credentials tidak terekspos:

1. **Build aplikasi**: `npm run build`
2. **Buka browser dev tools** pada aplikasi yang ter-deploy
3. **Cek Console**: `console.log(import.meta.env)` - API_KEY tidak ada
4. **Cek Network tab**: Headers tidak terlihat di request
5. **Cek Source files**: Credentials tidak muncul di JavaScript bundle

**Expected Results:**
- ✅ `import.meta.env.VITE_APP_NAME` - Visible (intended)  
- ❌ `import.meta.env.API_KEY` - Not found (secure)
- ❌ `import.meta.env.API_URL` - Not found (secure)

## 🎛️ Environment Variable Controls

Aplikasi ini mendukung berbagai environment variables untuk mengontrol fitur:

### 📱 **Feature Toggle Variables**

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_ENABLE_PWA` | `true` | Enable/disable PWA functionality & install prompt |
| `VITE_ENABLE_NOTIFICATIONS` | `true` | Enable/disable notification system |
| `VITE_ENABLE_DARK_MODE` | `true` | Show/hide dark mode toggle button |

### 🎨 **Customization Variables**

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_APP_NAME` | `Air Quality Monitor` | Application name (shown in header & PWA) |
| `VITE_APP_VERSION` | `1.0.0` | Application version |
| `VITE_APP_URL` | `http://localhost:5173` | Base application URL |

### 🔧 **Usage Examples**

**Disable PWA untuk environment tertentu:**
```env
VITE_ENABLE_PWA=false
```

**Custom app name:**
```env
VITE_APP_NAME=My Custom Air Monitor
```

**Production-only notifications:**
```env
VITE_ENABLE_NOTIFICATIONS=true  # Production
VITE_ENABLE_NOTIFICATIONS=false # Development
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
│   └── api.js         # HTTP client & API key authentication
├── utils/
│   └── aqi.js        # AQI calculation & color utilities
├── assets/           # Static assets (logos, icons)
└── App.jsx          # Main app component with routing
```

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
   # Required API Configuration (NO VITE_ prefix - secure)
   API_URL=https://your-backend-api.vercel.app/api
   API_KEY=your-production-api-key
   
   # App Configuration (VITE_ prefix - public)
   VITE_APP_NAME=Air Quality Monitor
   VITE_ENABLE_PWA=true
   VITE_ENABLE_NOTIFICATIONS=true
   VITE_ENABLE_DARK_MODE=true
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
- 🔄 Auto-refresh: Data polling setiap 30 detik

## 🚨 Troubleshooting

### Common Issues & Solutions

**Build Fails:**
```bash
npm run build  # Test build locally
npm run lint   # Check code quality
```

**Environment Variables Not Working:**
- Ensure `VITE_` prefix hanya untuk public variables
- Restart dev server: `npm run dev`
- Debug: `console.log(import.meta.env)`

**API Authentication Issues:**
- Verify `API_KEY` is correctly set (without VITE_ prefix)
- Check backend logs for API key validation errors
- Ensure API key has proper permissions
- Test API endpoints with tools like Postman
- API key is injected securely and not visible in browser dev tools

**Feature Control Issues:**
- Feature toggles use string comparison: `!== 'false'`
- Set `VITE_ENABLE_FEATURE=false` to disable (any other value enables)
- PWA disabled: Install prompt won't show, service worker still active
- Notifications disabled: System won't render notification component

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
- ✅ **Auto-refresh polling** for latest sensor data
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
