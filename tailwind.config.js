/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#fdf4ff',
                    100: '#fae8ff',
                    200: '#f3d0fe',
                    300: '#e9a8fd',
                    400: '#d874f8',
                    500: '#c147ef',
                    600: '#a527d3',
                    700: '#8b1cb0',
                    800: '#731b8f',
                    900: '#5f1871',
                    950: '#3d0549',
                },
                accent: {
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea6c10',
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s ease-in-out infinite',
                'gradient': 'gradient 8s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                }
            },
        },
    },
    plugins: [],
}
