/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 13px #b8d3ff,0 0 22px #4287f5,0 0 48px #4287f5,0 0 53px #4287f5",
          },
          "3%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 15px #b8d3ff,0 0 26px #4287f5,0 0 53px #4287f5,0 0 60px #4287f5",
          },
          "5%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 13px #b8d3ff,0 0 22px #4287f5,0 0 48px #4287f5,0 0 53px #4287f5",
          },
          "30%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 15px #b8d3ff,0 0 26px #4287f5,0 0 53px #4287f5,0 0 60px #4287f5",
          },
          "33%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 13px #b8d3ff,0 0 22px #4287f5,0 0 48px #4287f5,0 0 53px #4287f5",
          },
          "35%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 15px #b8d3ff,0 0 26px #4287f5,0 0 53px #4287f5,0 0 60px #4287f5",
          },
          "38%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 13px #b8d3ff,0 0 22px #4287f5,0 0 48px #4287f5,0 0 53px #4287f5",
          },
          "41%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 15px #b8d3ff,0 0 26px #4287f5,0 0 53px #4287f5,0 0 60px #4287f5",
          },
          "43%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 13px #b8d3ff,0 0 22px #4287f5,0 0 48px #4287f5,0 0 53px #4287f5",
          },
          "91%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 15px #b8d3ff,0 0 26px #4287f5,0 0 53px #4287f5,0 0 60px #4287f5",
          },
          "100%": {
            textShadow:
              "0 0 4px #b8d3ff,0 0 9px #b8d3ff,0 0 13px #b8d3ff,0 0 22px #4287f5,0 0 48px #4287f5,0 0 53px #4287f5",
          },
        },
        sliding: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        slideL: {
          "0%": { left: "60%" },
          "25%": { left: "0%" },
          "50%": { left: "-60%" },
          "75%": { left: "0%" },
          "100%": { left: "60%" },
        },
        slideR: {
          "0%": { right: "60%" },
          "25%": { right: "0%" },
          "50%": { right: "-60%" },
          "75%": { right: "0%" },
          "100%": { right: "60%" },
        },
      },
      animation: {
        "flicker-text": "flicker 3s infinite",
        "sliding-bg": "sliding 10s ease infinite",
        wave: "wave 2s linear infinite",
        "slide-l": "slideL 3s linear infinite",
        "slide-r": "slideR 3s linear infinite",
      },
    },
  },
  plugins: [],
};
