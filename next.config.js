/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'skills-yard.vercel.app',
                port: '',
                pathname: '/images/**',
            },
        ],
    },
}

module.exports = nextConfig
