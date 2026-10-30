import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2026-09-29',

    devtools: { enabled: true },

    css: ['~/assets/css/main.css'],

    app: {
        head: {
            script: [
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js', defer: true },
                { src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js', defer: true }
            ]
        }
    },

    vite: {
        plugins: [
            tailwindcss() as any,
        ],
    },
})