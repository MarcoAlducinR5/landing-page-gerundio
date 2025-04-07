/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    localPatterns: [
      {
        pathname: './public/images/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
