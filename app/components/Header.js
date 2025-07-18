// app/components/Header.js
"use client"; // Menandakan ini adalah Client Component karena kita akan menggunakan Link dari next/link

import Link from 'next/link'; // Import Link untuk navigasi
import { useState } from 'react'; // Untuk fitur interaktif sederhana di header (opsional, bisa dihapus jika tidak perlu)
import headerStyles from './Header.module.css'; // Menggunakan CSS Modules untuk styling

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Contoh state untuk menu mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={headerStyles.header}>
      {/* Logo atau Nama Aplikasi */}
      <div className={headerStyles.logo}>
        <Link href="/">
          {/* Menggunakan <span> untuk teks logo agar bisa di-styling */}
          <span className={headerStyles.logoText}>SISTECH HO2</span>
        </Link>
      </div>

      {/* Navigasi Utama */}
      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <Link href="/">Home</Link>
          </li>
          {/* Contoh link lain, bisa ditambahkan sesuai kebutuhan */}
          <li className={headerStyles.navItem}>
            <Link href="/about">About</Link> {/* Buat halaman about.js nanti jika perlu */}
          </li>
        </ul>
      </nav>

      {/* Tombol untuk menu mobile (opsional, untuk responsivitas) */}
      <button className={headerStyles.menuButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Menu mobile yang muncul/sembunyi */}
      {isMenuOpen && (
        <div className={headerStyles.mobileMenu}>
          <ul className={headerStyles.mobileNavList}>
            <li className={headerStyles.mobileNavItem}>
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li className={headerStyles.mobileNavItem}>
              <Link href="/about" onClick={toggleMenu}>About</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
