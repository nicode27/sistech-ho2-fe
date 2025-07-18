// app/layout.js
import { Inter } from 'next/font/google'; // Menggunakan font Inter untuk konsistensi
import './globals.css';
import Layout from './components/Layout'; // Import komponen Layout yang baru dibuat

const inter = Inter({ subsets: ['latin'] }); // Inisialisasi font Inter

export const metadata = {
  title: 'SISTECH 2025 - Hands On 2 FE',
  description: 'Mini Aplikasi Front-End dengan Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Terapkan font Inter ke body */}
      <body className={inter.className}>
        {/* Bungkus children (konten halaman) dengan komponen Layout */}
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
