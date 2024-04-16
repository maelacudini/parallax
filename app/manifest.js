export default function manifest() {
    return {
        name: "Parallax - Framer Motion",
        description: "Parallax effect built with Next.js, Framer Motion and Lenis. Super quick, super fast.",
        short_name: 'Parallax',
        start_url: '/',
        display: 'standalone',
        background_color: '#c9cbd4',
        theme_color: '#c9cbd4',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}