/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#343131",
        background: "#f1f1f1",
        primary: "#E9284C",
        secondary: "#EEAA5B",
        accent: "#F2B281",
      },
    },
  },
  plugins: [],
};
