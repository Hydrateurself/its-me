/** @type {import('tailwindcss').Config} */
import tailwindScrollbarHide from "tailwind-scrollbar-hide";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    color: {
      "peach-red": "#FF3319",
    },

    extend: {
      fontFamily: {
        lekton: ["Lekton", "monospace"],
        barcode: ['"Libre Barcode 128"', "monospace"],
        roboto: ["Roboto", "sans - serif"],
        monoone: ["Rubik Mono One", "monospace"],
        ultra: ["Ultra", "serif"],

        boxShadow: {
          "custom-lg": "0 4px 30px rgba(0, 0, 0, 0.1)",
        },
        fontSize: {
          clamp: "clamp(1rem, -1.2727rem + 9.697vw, 5rem)",
        },
      },
    },
  },
  plugins: [tailwindScrollbarHide],
};
