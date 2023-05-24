/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
    "./src/index.html",
    "./src/artists.html",
  ],
  theme: {
    colors: {

      white1: "#F3F4F7",
      white2: "#E2E4E9",
      white3: "#C7CAD1",
      black: "#0D0C0C",
      black1: "#808080",
      black2: "#525252",
      black3: "#3D3D3D",
      orange: "#F79E1B",
      orange1: "#FFC100",
      orange2: "#FF7400",
      orange3: "#FF4D00",
      grey: "#3D3D3D",
    },
    extend: {
      fontFamily: {
        PlusJakartaSans: ["PlusJakartaSans", "sans-serif"],
        PlayFairDisplay: ["PlayFairDisplay", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
