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
        primary:"#300979",
        secondary:"#cd00ff",
        color1:"hsl(228, 53%, 2%)"
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
      animation: {
        typing: 'typing 2s steps(20) infinite alternate',
      },
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

