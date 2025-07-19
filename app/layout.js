// app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from './components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SISTECH 2025 - Aplikasi Resep Masakan', // New title for recipe app
  description: 'Kumpulan resep masakan lezat dan mudah untuk inspirasi kuliner Anda.', // New description for recipe app
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
