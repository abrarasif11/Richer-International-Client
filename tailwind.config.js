/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#84cc16",
          "secondary": "#36f7ea",
        },
      },
    ],
  },
  theme: {
    extend: {
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    }
  },
  plugins: [require("daisyui")],
}
