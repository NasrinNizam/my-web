/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage:{
      'photo':"url('/image/bgone.png')",

    },
    extend: {},
    container:{
      center:true,
      padding:'40px'
    }
  },
  plugins: [],
}