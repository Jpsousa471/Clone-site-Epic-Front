import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  extend: {
    width: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    height: {
      fi: '100vh',
    }
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
