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
      <div className={headerStyles.logo}>
        <Link href="/">
          {/* Updated logo text for recipe app */}
          <span className={headerStyles.logoText}>ResepKu</span>
        </Link>
      </div>

      <nav className={headerStyles.nav}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <Link href="/">Resep</Link> {/* Updated navigation text */}
          </li>
          <li className={headerStyles.navItem}>
            <Link href="/about">Tentang</Link> {/* Updated navigation text */}
          </li>
        </ul>
      </nav>

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
