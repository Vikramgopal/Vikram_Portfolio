/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg3: "url('src/assets/images/bg8.jpg')",
      },

      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        prosima: ["Proxima Nova", "sans-serif"],
        nunito: ["Nunito", " sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#f8f9fa",
        black: "#000",
        white: "#fff",
        green: "#16f2b3",
        "shade-green": "#3ccf91",
        "slate-black": "#212529",
        "slate-gray": "#868e96 ",
        "slate-white": "#e5e7eb",
        "linkedin-color": "#0072b1",
        "email-color": "#EA4335",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
