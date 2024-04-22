/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myCustomColor: '#f9f0ff', // Add your custom color
       
      },
    },
  },
  plugins: [],
}

