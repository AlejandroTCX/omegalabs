/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pantone-2020": "#0F4C81",
        classicBlue: "#0F4C81",
        whiteSoft: "#F5F5F5",
        grayLight: "#E0E0E0",
        grayDark: "#333333",
        grayMedium: "#666666",
        grayDarkText: "#4D4D4D",
        orangeLight: "#FFA500",
        greenSoft: "#32CD32",
        grayBlue: "#5A7D9A",
        turquoise: "#40E0D0",
      },
    },
  },
  plugins: [],
};
