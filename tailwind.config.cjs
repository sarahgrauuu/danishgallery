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
      alertred: "#eb001b",
    },
    extend: {
      fontFamily: {
        PlusJakartaSans: ["PlusJakartaSans", "sans-serif"],
        PlayFairDisplay: ["PlayFairDisplay", "serif"],
      },
      spacing: {
        spacing10: "0.625rem",
        spacing12: "0.75rem",
        spacing14: "0.875rem",
        spacing20: "1.25rem",
        spacing22: "1.375rem",
        spacing24: "1.5rem",
        spacing40: "2.5rem",
        spacing80: "5rem",
        spacing100: "6.25rem",
        spacing200: "12.5rem",
      },
      lineHeight: {
        3: "3%",
        5: "5%",
      },
      borderRadius:{
        hard:"1px",
        soft:"3px",
      },
      boxShadow: {
        dropshadow1: "0 1px 4px rgba(0, 0, 0,.4)",
        dropshadow2: "2px 2px 4px 3px rgba(0, 0, 0, .1)",
      },

    letterSpacing: {
      bodytextletterspacing:"1%",
    }


    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
