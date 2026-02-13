import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Playfair Display', ...defaultTheme.fontFamily.serif], // Added this
            },
            colors: {
                'satva-yellow': '#F4C430', // Royal Yellow
                'satva-saffron': '#FF9933', // Deep Saffron
                'satva-dark': '#2D2424', // Softer, brownish charcoal (less harsh than pure black)
                'satva-cream': '#FDFBF7', // The "Creamy" luxury background you asked for
                'satva-gold': '#D4AF37', // Metallic Gold for accents
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};