// app/about/page.js
// Ini adalah Server Component secara default.

import aboutStyles from './about.module.css'; // Menggunakan CSS Modules untuk styling

export default function About() {
  return (
    <div className={aboutStyles.container}>
      <h1 className={aboutStyles.title}>Tentang Aplikasi Ini</h1>
      <p className={aboutStyles.description}>
        Aplikasi mini ini dibangun sebagai bagian dari tugas Hands-on 2
        Front-End Engineering Sisters in Tech by RISTEK Fasilkom UI 2025.
        Tujuannya adalah untuk mendemonstrasikan pemahaman tentang konsep dasar
        pengembangan aplikasi web modern berbasis komponen menggunakan React
        dan Next.js App Router.
      </p>
      <p className={aboutStyles.description}>
        Fitur-fitur yang diimplementasikan meliputi:
      </p>
      <ul className={aboutStyles.featuresList}>
        <li>Halaman Daftar Konten dengan komponen kartu.</li>
        <li>Halaman Detail Konten dengan routing dinamis berdasarkan ID.</li>
        <li>Penggunaan komponen modular seperti Header, Layout, ContentCard, dan Tag.</li>
        <li>Pengelolaan data menggunakan Props dan State.</li>
        <li>Fitur filter konten berdasarkan tag.</li>
        <li>Fitur interaktif tombol "like" pada setiap konten.</li>
      </ul>
      <p className={aboutStyles.contact}>
        Dibuat oleh [Nama Lengkapmu] untuk SISTECH 2025.
      </p>
    </div>
  );
}
