// app/about/page.js
// This is a Server Component by default.

import aboutStyles from './about.module.css';
// import Link from 'next/link'; // Tidak diperlukan di sini

export default function About() {
  return (
    <div className={aboutStyles.container}>
      <h1 className={aboutStyles.title}>Tentang Aplikasi ResepKu</h1>
      <p className={aboutStyles.description}>
        Aplikasi mini ini adalah platform yang didedikasikan untuk berbagi
        berbagai resep masakan yang lezat dan mudah diikuti, cocok untuk
        inspirasi kuliner Anda sehari-hari.
        Ini dibangun sebagai bagian dari tugas Hands-on 2 Front-End Engineering
        Sisters in Tech by RISTEK Fasilkom UI 2025.
        Tujuannya adalah untuk mendemonstrasikan pemahaman tentang konsep dasar
        pengembangan aplikasi web modern berbasis komponen menggunakan React
        dan Next.js App Router.
      </p>
      <p className={aboutStyles.description}>
        Fitur-fitur yang diimplementasikan meliputi:
      </p>
      <ul className={aboutStyles.featuresList}>
        <li>Halaman Daftar Resep dengan komponen kartu.</li>
        <li>Halaman Detail Resep dengan routing dinamis berdasarkan ID.</li>
        <li>Penggunaan komponen modular seperti Header, Layout, ContentCard, dan Tag.</li>
        <li>Pengelolaan data menggunakan Props dan State.</li>
        <li>Fitur filter resep berdasarkan kategori/tag.</li>
        <li>Fitur interaktif tombol <i>suka</i> pada setiap resep.</li>
      </ul>
      <p className={aboutStyles.contact}>
        Dibuat oleh [Nama Lengkapmu] untuk SISTECH 2025.
      </p>
      {/* Jika ada link kembali ke home, gunakan Link dari next/link */}
      {/* <Link href="/" className={aboutStyles.backLink}>Kembali ke Daftar Resep</Link> */}
    </div>
  );
}
