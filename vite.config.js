import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig(({ mode }) => {
  // Load env file based on the current mode (e.g. .env, .env.development, .env.production)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), svgr()],
    define: {
      // Make env variables available in your app code
      'process.env': env,
    },
    server: {
      port: parseInt(env.VITE_PORT || '5173'),
    },
  }
})