/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        screens: {
            'vsm': '250px', // => @media (min-width: 250px) { very small screen }
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        lineHeight: {
            'banner': '4rem',
            'banner-small': '3.5rem',
        }
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('tailwind-scrollbar'),
    ],
    important: '#root', // Permet de forcer Tailwind CSS à intervenir sur le CSS d'un composant de Material UI. Root => id à la racine du projet
};
