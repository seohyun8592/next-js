/** @type {import('next').NextConfig} */
const API_KEY = process.env.KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/form',
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/movie',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
