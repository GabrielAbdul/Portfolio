/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: ["./index.html", "./styles.css", "./*"],
  daisyui : {
    themes: [
        {
          custom: {
            "primary": "#0A192F",
            "secondary": "#A2ADCA",
            "accent": "#68FFE1",
            "neutral": "#ffffff",
            "base-100": "#0A192F",
            "info": "#1e40af",
            "success": "#3f6212",
            "warning": "#92400e",
            "error": "#991b1b",
            },
          },
        ],
  },
  plugins: [require('daisyui'),],
}

