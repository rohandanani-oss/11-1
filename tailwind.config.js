tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary-pink': '#FF69B4', // Hot Pink
                'rose-red': '#E11D48',    // Deep Red
                'soft-pink': '#FFF0F5',   // Background Light Pink
                'love-red': '#E84545',
            },
            fontFamily: {
                script: ['Dancing Script', 'cursive'],
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                },
                typewriter: {
                    from: { width: '0' },
                    to: { width: '100%' },
                },
                fadeIn: {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                heartbeat: 'heartbeat 3s infinite ease-in-out',
                fadeIn: 'fadeIn 1s ease-out forwards',
            },
        }
    }
}
