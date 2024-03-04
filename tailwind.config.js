/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:{
           main:"#222222"
        },
        secondary:{
          one : {
            main:"#B8CABA"
          },
          two : {
            main:"#FCE2AD"
          }
        },
        divider:{
          main:"#999999"
        },
        text:{
          primary:"#fff",
          secondary:"#111"
        }
      }
    },
  },
  plugins: [],
}

