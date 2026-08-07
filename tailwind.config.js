/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0D5EAF',        // Traditional Cobalt Blue
        'primary-dark': '#094B8F',   // Darker Cobalt Blue
        'primary-light': '#3388D4', // Lighter Cobalt Blue
        accent: '#00A3E0',          // Terracotta Gold
        'accent-dark': '#0083B5',    // Accent dark
        background: '#FDFBF7',      // Warm Village Stone / Cream Off-white
        surface: '#FFFFFF',
        ink: '#241C15',             // Warm Charcoal
        muted: '#746A5F',           // Warm Earthy Gray
        divider: '#EFEAE2',         // Warm Light Plaster Divider
        deep: '#12181C',            // Deep Midnight Blue/Black
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '4rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}