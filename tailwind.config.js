/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        colors: {
            green: 'hsl(75, 94%, 57%)',
            white: 'hsl(0, 0%, 100%)',
            grey: {
                DEFAULT: 'hsl(0, 0%, 20%)',
                dark: 'hsl(0, 0%, 12%)',
            },
            'off-black': 'hsl(0, 0%, 8%)',
        },
        fontFamily: {
          'inter': 'Inter'
        }
    },
    plugins: [],
}
