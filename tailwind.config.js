/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#EEF5F1",
        background: "#040806",
        primary: "#1856CA",
        secondary: "#3F6A71",
        accent: "#6692AA",
      },
    },
  },
  plugins: [],
};
