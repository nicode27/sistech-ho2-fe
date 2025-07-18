// app/components/Tag.js
"use client"; // Menandakan ini adalah Client Component karena akan ada interaksi klik

import tagStyles from './Tag.module.css'; // Menggunakan CSS Modules untuk styling

// Komponen Tag menerima props 'text' untuk menampilkan nama tag,
// dan 'onClick' untuk menangani event klik pada tag.
export default function Tag({ text, onClick, isActive }) {
  return (
    // Tambahkan kelas 'active' jika tag sedang aktif (untuk styling filter)
    <span
      className={`${tagStyles.tag} ${isActive ? tagStyles.active : ''}`}
      onClick={onClick} // Meneruskan fungsi onClick dari parent
    >
      {text}
    </span>
  );
}
