/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      animation: {
        "pulse-right-to-left":
          "pulse-right-to-left 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-right-to-left": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "1" },
        },
        "wave-fade": {
          "0%": { opacity: "0" },
          "20%": { opacity: "0.2" },
          "40%": { opacity: "0.4" },
          "60%": { opacity: "0.6" },
          "80%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
