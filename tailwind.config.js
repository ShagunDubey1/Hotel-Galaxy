/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
                "primary-color": "#dba765",
                "secondory-color": "#F8F5F0",
                "heading":{
                  "dark": "#000000",
                  "light": "#4d4d4d"
                }
        },
        
      },
    },
    plugins: [],
};