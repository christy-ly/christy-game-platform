// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a1a1a1", // Gray
        secondary: "#ffc800", // Yellow
        accent:"#a1a1a1",
      },
    },
  },
  plugins: [],
};
