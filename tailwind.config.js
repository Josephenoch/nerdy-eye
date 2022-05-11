module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      fontFamily:{
        montserrat:"Montserrat, sans-serif"
      },
     
      colors:{
        theme:"#D23432",
        textTheme:"#3C3A3A"
      },
      backgroundImage:{
        industries:"url('Assets/Images/logistics.png')"
      }
    },
  },
  plugins: [],
}
