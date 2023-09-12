/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default  withMT({
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-color": "#dba765",
                "secondory-color": "#F8F5F0",
                "pale-yellow": "#F6F4EB",
                filter: "rgba(0, 0, 0, 0.7)",
                "card-filter": "#323232E6",
                heading: {
                    dark: "#000000",
                    light: "#4d4d4d",
                },
            },
            fontSize: {
                h1: [
                    "3rem",
                    {
                        lineHeight: "2rem",
                        fontWeight: "700",
                    },
                ],
                h2: [
                    "1.75rem",
                    {
                        lineHeight: "1rem",
                        fontWeight: "600",
                    },
                ],
                h3: [
                    "1.1rem",
                    {
                        lineHeight: "1rem",
                        fontWeight: "400",
                    },
                ],
                p: [
                    "1.125rem",
                    {
                        lineHeight: "1.625rem",
                        fontWeight: "400",
                    },
                ],
            },
            fontFamily: {},
        },
    },
    plugins: [],
    darkMode: "class",
});