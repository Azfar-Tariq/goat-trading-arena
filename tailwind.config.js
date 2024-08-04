/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0085ff",
        secondary: "#ffb528",
        title: "#fcfcfd",
        text: "#fdfdfd",
        primaryHover: "#1761c1",
        bg: "#111111",
        bg2: "#0a0a0b",
        bgCard: "#262626",
        accent: "#99ceff",
      },
      backgroundImage: {
        "gradient-gr5":
          "linear-gradient(180deg, #319cff 10.17%, #0176e2 54.82%, #0264be 92.86%)",
      },
    },
  },
  plugins: [],
};
