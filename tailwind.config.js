/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-color": "#dba765",
                "secondory-color": "#F8F5F0",
                "pale-yellow": "#F6F4EB",
                "filter": "rgba(0, 0, 0, 0.7)",
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
                        // letterSpacing: "-0.01em",
                        fontWeight: "700",
                    },
                ],
                h2: [
                    "1.75rem",
                    {
                        lineHeight: "1rem",
                        // letterSpacing: "-0.02em",
                        fontWeight: "600",
                    },
                ],
                h3: [
                    "1.06rem",
                    {
                        lineHeight: "1rem",
                        letterSpacing: "0.125em",
                        fontWeight: "400",
                    },
                ],
                p: [
                    "1.125rem",
                    {
                        lineHeight: "1.625rem",
                        letterSpacing: "0.125em",
                        fontWeight: "400",
                    },
                ],
            },
            fontFamily:{
                
            }
        },
    },
    plugins: [],
};