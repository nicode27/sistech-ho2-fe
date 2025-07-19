// /** @type {import('next').NextConfig} */
// const nextConfig = {};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Daftar hostname (domain) tempat gambar Anda berasal.
    // Next.js memerlukan ini untuk mengoptimalkan gambar eksternal.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'asset.kompas.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'static.promediateknologi.id',
      },
      {
        protocol: 'https',
        hostname: 'buckets.sasa.co.id',
      },
      {
        protocol: 'https',
        hostname: 'assets.unileversolutions.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dapurkobe.co.id',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co', // Tambahkan ini untuk gambar fallback
      },
      {
        protocol: 'https',
        hostname: 'aslimasako.com', // Tambahkan hostname baru ini
      },
    ],
  },
};

export default nextConfig;
