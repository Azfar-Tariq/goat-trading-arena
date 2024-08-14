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
        colorGR4:
          "linear-gradient(205deg, #616161 9.15%, #676767 48.67%, #595959 87.16%)",
        colorGR5:
          "linear-gradient(270deg, #319cff 10.17%, #0176e2 54.82%, #0264be 92.86%)",
      },
      backgroundImage: {
        "gradient-gr5":
          "linear-gradient(180deg, #319cff 10.17%, #0176e2 54.82%, #0264be 92.86%)",
        colorGR1:
          "linear-gradient(270deg, #eaf5ff 10.17%, #b7ddff 37.87%, #6bb8ff 66.4%, #005fb6 92.86%)",
        colorGR2:
          "linear-gradient(270deg, rgba(255, 255, 255, 0.8) 10.17%, rgba(226, 226, 226, 0.9) 52.06%, #888 92.86%)",
        colorGR3:
          "linear-gradient(270deg, #55c4f4 10.17%, #0085ff 52.76%, #005fb6 92.86%)",
        colorGR4:
          "linear-gradient(205deg, #616161 9.15%, #676767 48.67%, #595959 87.16%)",
        colorGR5:
          "linear-gradient(270deg, #319cff 10.17%, #0176e2 54.82%, #0264be 92.86%)",
      },
      boxShadow: {
        shadowGlow: "0px 0px 24px 0px rgba(51, 157, 255, 0.32)",
      },
      fontSize: {
        fontTitle1: "clamp(40px, calc(70 / var(--viewDesktop) * 100vw), 70px)",
        fontTitle2: "clamp(34px, calc(60 / var(--viewDesktop) * 100vw), 60px)",
        fontTitle3: "clamp(22px, calc(49 / var(--viewDesktop) * 100vw), 49px)",
        fontTitle4: "clamp(18px, calc(39 / var(--viewDesktop) * 100vw), 39px)",
        fontTitle5: "clamp(28px, calc(31 / var(--viewDesktop) * 100vw), 31px)",
        fontTitle6: "clamp(1rem, calc(25 / var(--viewDesktop) * 100vw), 25px)",
        fontBodyBig: "clamp(16px, calc(18 / var(--viewDesktop) * 100vw), 18px)",
        fontBody: "clamp(14px, calc(16 / var(--viewDesktop) * 100vw), 16px)",
        fontItemMenu:
          "clamp(14px, calc(16 / var(--viewDesktop) * 100vw), 16px)",
        fontButton: "18px",
        fontTable: "16px",
        fontLabel: "14px",
      },
      screens: {
        viewDesktop: "1272px",
        viewDesktopSmall: "993px",
        viewTablet: "768px",
        viewMobile: "400px",
      },
      fontFamily: {
        sans: ["Mona Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
