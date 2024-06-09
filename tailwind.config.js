/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      grayscale: {
        50: "50%",
      },
      colors: {
        lightGreen: "#E0EFDB",
        darkGreen: "#35861C",
        menuGreen: "#B3DCA6",
        secondaryGreen: "#3B9A1E",
        primaryBlack: "#171717",
        primarygray: "#6A6A6A",
      },
      screens: {
        laptop: "1140",
        tablg: "900px",
      },
      fontFamily: {
        plusJakarta: ["var(--font-plus-jakarta-sans)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
