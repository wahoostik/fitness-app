/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
        require('tailwind-scrollbar'),
    ],
    important: '#root', // Permet de forcer Tailwind CSS à intervenir sur le CSS d'un composant de Material UI. Root => id à la racine du projet
};
