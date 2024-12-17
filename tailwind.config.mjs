/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/**.{ts,js,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sfRegular: [
          "SF Pro Display",
          "SF Pro Icon",
          "SF Pro Text",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "ai-gradient":
          "linear-gradient(97deg, #0096ff, #bb64ff 42%, #f2416b 74%, #eb7500)",
      },
      colors: {
        "apple-blue": "#0071e3",
        "apple-bg-gray": "#161617",
        "apple-text-gray": "#86868B",
        "apple-text-white": "#f5f5f7",
        "apple-teal": "#43B9B9",
        "apple-purple": "#a972ff",
        "apple-blue": "#2997ff",
      },
    },
  },
  plugins: [],
};
