/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui"],
        robotoFlex: ["Roboto Flex", "ui-sans-serif", "system-ui"],
        lexend: ["Lexend", "ui-sans-serif", "system-ui"],
      },
      keyframes: {
        scalePulse: {
          "0%, 40%": { transform: "scale(1)" },
          "50%": { transform: "translateX(4px)" },
          "60%, 100%": { transform: "scale(1)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        scalePulse1: "scalePulse 4s ease-in-out infinite",
        scalePulse2: "scalePulse 4s ease-in-out infinite 0.3s",
        scalePulse3: "scalePulse 4s ease-in-out infinite 0.6s",
        scalePulse4: "scalePulse 4s ease-in-out infinite 0.9s",
        spin: "spin 20s linear infinite",
      },
    },
    // screens: {
    //   xs: "375px", // Custom breakpoint between 320 and 425
    //   ...defaultTheme.screens,
    // },
  },
  plugins: [],
}
