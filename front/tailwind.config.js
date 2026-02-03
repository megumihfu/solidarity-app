import colors from "tailwindcss/colors"

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        secondary: colors.slate, 
        error: colors.rose,  
        success: colors.emerald,
      },
    },
  },
  plugins: [],
}