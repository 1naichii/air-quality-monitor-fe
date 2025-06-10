# Air Quality Monitor - Development Setup

## Environment Variables

Copy `.env.example` to `.env` and update with your configuration:

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

## Development Notes

- Backend API expected at `localhost:3000`
- WebSocket connection for real-time data
- PWA service worker enabled in production
- Hot reload enabled for development

## Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
