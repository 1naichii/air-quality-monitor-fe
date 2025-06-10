# 🌬️ Air Quality Monitor - Complete Project Documentation

> Frontend aplikasi monitoring kualitas udara real-time dengan sensor MQ135 menggunakan React + Vite dan PWA support

[![Deployment Status](https://img.shields.io/badge/Deployment-Ready-brightgreen.svg)](https://vercel.com)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF.svg)](https://vitejs.dev/)
[![PWA](https://img.shields.io/badge/PWA-Enabled-orange.svg)](https://web.dev/progressive-web-apps/)

---

## 📋 Project Overview

**Repository**: [1naichii/air-quality-monitor-fe](https://github.com/1naichii/air-quality-monitor-fe)  
**Author**: 1naichii  
**Version**: 1.0.0  
**License**: MIT  

### Tech Stack
- **Frontend**: React 19.1.0 + Vite 6.x
- **Styling**: Tailwind CSS 4.1.8
- **Charts**: Recharts 2.15.3
- **PWA**: Vite PWA Plugin
- **Deployment**: Vercel
- **Linting**: ESLint 9.25.0

---

## 🚀 Development Setup

### Prerequisites
- Node.js 18.x atau 20.x
- npm atau yarn
- Git

### Installation
```bash
# Clone repository
git clone https://github.com/1naichii/air-quality-monitor-fe.git
cd air-quality-monitor-fe

# Install dependencies
npm install

# Run development server
npm run dev
```

### Environment Variables

Buat file `.env` di root project dengan konfigurasi berikut:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api
VITE_WS_URL=ws://localhost:3000

# App Configuration  
VITE_APP_NAME=Air Quality Monitor
VITE_APP_VERSION=1.0.0

# Features
VITE_ENABLE_PWA=true
VITE_ENABLE_NOTIFICATIONS=true
VITE_ENABLE_DARK_MODE=true
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server (localhost:5173)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

### Development Notes
- Backend API diharapkan berjalan di `localhost:3000`
- WebSocket connection untuk real-time data
- PWA service worker aktif di production
- Hot reload tersedia untuk development
- Dark mode support dengan toggle otomatis

---

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── AQICard.jsx     # Air Quality Index display card
│   ├── AQIChart.jsx    # Real-time charts
│   ├── Dashboard.jsx   # Main dashboard
│   ├── Header.jsx      # App header with navigation
│   ├── Statistics.jsx  # Statistics display
│   └── ...
├── services/
│   └── api.js          # API service layer
├── utils/
│   └── aqi.js          # AQI calculation utilities
├── assets/             # Static assets
└── App.jsx            # Main app component

public/
├── manifest.json       # PWA manifest
├── pwa-*.png          # PWA icons
├── robots.txt         # SEO robots file
└── ...
```

---

## 🔧 Build & Performance

### Bundle Information
- **Build Size**: 719.73 kB (211.67 kB gzipped)
- **Build Time**: ~12-13 seconds
- **Framework**: Vite (fast HMR)
- **Bundle Analyzer**: Available via build logs

### Performance Optimizations
- ✅ Code splitting ready
- ✅ Tree shaking enabled
- ✅ CSS optimization
- ✅ PWA caching strategy
- ✅ Lazy loading components
- ⚠️ Bundle size warning (719KB) - consider code splitting

---

## 🚀 Deployment Guide

### ✅ Deployment Status: READY

#### Pre-Deployment Checklist
- [x] **Code Quality**: All ESLint issues resolved
- [x] **Build Process**: Successful (12.84s)
- [x] **Dependencies**: All resolved
- [x] **Git Repository**: Clean and up-to-date
- [x] **Vercel Configuration**: Ready (`vercel.json`)
- [x] **PWA Assets**: Complete (icons, manifest, service worker)
- [x] **Bundle Size**: Optimized (211.67 kB gzipped)

### Vercel Deployment (Recommended)

#### Method 1: Vercel Dashboard

1. **Setup Account**
   - Buka [vercel.com](https://vercel.com)
   - Login/Signup dengan GitHub account

2. **Import Project**
   - Klik "New Project"
   - Pilih "Import Git Repository"
   - Cari repository: `1naichii/air-quality-monitor-fe`
   - Klik "Import"

3. **Configure Project**
   - **Project Name**: `air-quality-monitor-fe`
   - **Framework**: Vite (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)

4. **Environment Variables**
   ```env
   VITE_API_URL = https://your-backend-api.vercel.app/api
   VITE_WS_URL = wss://your-backend-api.vercel.app
   VITE_APP_NAME = Air Quality Monitor
   ```

5. **Deploy**
   - Klik "Deploy"
   - Tunggu ~2-3 menit
   - ✅ Deployment berhasil!

#### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Production Environment Variables

```env
# Required for production
VITE_API_URL=https://your-backend-api.vercel.app/api
VITE_WS_URL=wss://your-backend-api.vercel.app
VITE_APP_NAME=Air Quality Monitor

# Optional features
VITE_ENABLE_PWA=true
VITE_ENABLE_NOTIFICATIONS=true
VITE_ENABLE_DARK_MODE=true
```

---

## 🔧 Configuration Files

### Vercel Configuration (`vercel.json`)
```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "env": {
    "VITE_API_URL": "",
    "VITE_WS_URL": "",
    "VITE_APP_NAME": "Air Quality Monitor"
  },
  "redirects": [
    {
      "source": "/(.*)",
      "destination": "/index.html",
      "permanent": false
    }
  ]
}
```

### PWA Configuration
- **Service Worker**: Auto-generated oleh Vite PWA
- **App Manifest**: Configured untuk installable PWA
- **Icons**: 192x192, 512x512 PNG + SVG formats
- **Caching Strategy**: Precache untuk assets statis

---

## 🧪 Testing & Quality Assurance

### Code Quality
```bash
# Linting
npm run lint              # ESLint check

# Build verification
npm run build             # Production build test
npm run preview           # Test production build locally
```

### Manual Testing Checklist
- [ ] Dashboard loads correctly
- [ ] Real-time data updates
- [ ] Dark/Light mode toggle
- [ ] PWA install prompt
- [ ] Mobile responsiveness
- [ ] WebSocket connection
- [ ] Chart rendering
- [ ] Notification system

---

## 🚨 Troubleshooting

### Common Issues

#### Build Fails
```bash
# Debug build locally
npm run build
npm run lint

# Check dependencies
npm install
```

#### Environment Variables Not Working
- Pastikan prefix `VITE_` pada semua variables
- Restart Vercel deployment setelah menambah env vars
- Debug dengan: `console.log(import.meta.env)`

#### PWA Not Installing
- Check service worker registration
- Verify manifest.json accessibility
- Test pada HTTPS (required for PWA)

#### WebSocket Connection Issues
- Verify WebSocket URL format (`wss://` untuk HTTPS)
- Check CORS configuration di backend
- Test WebSocket endpoint manually

### Deployment Issues
- Check Vercel deployment logs
- Verify `vercel.json` configuration
- Ensure all files committed to Git
- Test build locally before deploying

---

## 📊 Expected Features After Deployment

### Core Features
- ✅ **Real-time Air Quality Monitoring** - Live sensor data
- ✅ **PWA Installation** - Installable web app
- ✅ **Dark/Light Mode** - Theme switching
- ✅ **Responsive Design** - Mobile & desktop optimized
- ✅ **Service Worker Caching** - Offline capability
- ✅ **Performance Optimized** - Fast loading times

### Technical Features
- ✅ **WebSocket Real-time Updates**
- ✅ **Chart Visualization** (Recharts)
- ✅ **Notification System**
- ✅ **Loading States & Skeletons**
- ✅ **Error Handling**
- ✅ **SEO Optimized**

---

## 📈 Performance Metrics

- **Bundle Size**: 719.73 kB (211.67 kB gzipped)
- **Build Time**: ~12-13 seconds
- **Lighthouse Score**: Ready for testing
- **PWA Score**: Installable & cacheable
- **Mobile Performance**: Optimized

---

## 📞 Support & Maintenance

### Getting Help
1. Check deployment logs di Vercel dashboard
2. Test `npm run build` locally untuk debug
3. Verify environment variables configuration
4. Check browser console untuk client-side errors

### Repository Information
- **GitHub**: https://github.com/1naichii/air-quality-monitor-fe
- **Issues**: https://github.com/1naichii/air-quality-monitor-fe/issues
- **Latest Commit**: `4b29aa7` - "docs: add comprehensive Vercel deployment guide"

---

## 🎯 Deployment Status

**✅ PRODUCTION READY**  
**Deployment Method**: Vercel Direct Deployment  
**Estimated Deploy Time**: 2-3 minutes  
**Status**: All systems ready for production deployment

**Next Steps**: Deploy to Vercel following the guide above! 🚀
