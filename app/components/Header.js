// app/components/Header.js
"use client";

import Link from 'next/link';
import { useState } from 'react';
import headerStyles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={headerStyles.header}>
      {/* Wrapper untuk konten header agar bisa dipusatkan */}
      <div className={headerStyles.headerContentWrapper}>
        {/* Logo atau Nama Aplikasi */}
        <div className={headerStyles.logo}>
          <Link href="/">
            {/* Menggunakan <span> untuk teks logo agar bisa di-styling */}
            <span className={headerStyles.logoText}>ResepKu</span>
          </Link>
        </div>

        <nav className={headerStyles.nav}>
          <ul className={headerStyles.navList}>
            <li className={headerStyles.navItem}>
              <Link href="/">Resep</Link>
            </li>
            {/* Contoh link lain, bisa ditambahkan sesuai kebutuhan */}
            <li className={headerStyles.navItem}>
              <Link href="/about">Tentang</Link> {/* Buat halaman about.js nanti jika perlu */}
            </li>
          </ul>
        </nav>
      </div>

      <button className={headerStyles.menuButton} onClick={toggleMenu}>
        ☰
      </button>

      {isMenuOpen && (
        <div className={headerStyles.mobileMenu}>
          <ul className={headerStyles.mobileNavList}>
            <li className={headerStyles.mobileNavItem}>
              <Link href="/" onClick={toggleMenu}>Resep</Link>
            </li>
            <li className={headerStyles.mobileNavItem}>
              <Link href="/about" onClick={toggleMenu}>Tentang</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
