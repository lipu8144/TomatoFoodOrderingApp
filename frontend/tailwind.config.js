/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { outfit: ["Outfit", "sans-serif"] },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      backgroundImage: {
        "custom-image": "url('./src/assets/frontend_assets/header_img.png')",
      },
      gridTemplateColumns: {
        displayItems: "repeat(auto-fill,minmax(240px,1fr))",
      },
    },
    animation: {
      "fadeIn-Anim": "fadeIn 3s",
      rotate: "",
    },
  },
  plugins: [],
};

