/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#868E96",

                    secondary: "#ADB5BD",

                    accent: "#CED4DA",

                    neutral: "#1A141F",

                    "base-100": "#EEEAF5",

                    info: "#71A2D6",

                    success: "#54DEB0",

                    warning: "#FABC1E",

                    error: "#F04328",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
