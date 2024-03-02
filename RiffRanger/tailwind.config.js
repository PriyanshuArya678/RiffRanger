/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        'navy': "#265073",
        'light-green':'#9AD0C2',
        primary:"#ffc001",
        secondary:"#E92B1A",
      }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm:"3rem",
      },
    },
  },
  plugins: [],
}

