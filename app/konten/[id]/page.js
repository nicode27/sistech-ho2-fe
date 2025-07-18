// app/konten/[id]/page.js
// Next.js App Router secara default adalah Server Component,
// jadi kita tidak perlu "use client" kecuali ada interaksi client-side.

import contentsData from '../../data/contents'; // Import data konten mock
import detailStyles from './detail.module.css'; // Menggunakan CSS Modules untuk styling

// Fungsi generateStaticParams diperlukan untuk Next.js agar tahu
// ID mana saja yang mungkin ada saat build time.
// Ini penting untuk static site generation (SSG) atau server-side rendering (SSR)
// agar Next.js bisa pre-render halaman detail untuk setiap ID.
export async function generateStaticParams() {
  // Mengambil semua ID dari data konten
  return contentsData.map(content => ({
    id: content.id, // Pastikan nama properti cocok dengan nama folder dinamis ([id])
  }));
}

// Komponen halaman detail konten
// Next.js secara otomatis meneruskan 'params' sebagai props,
// yang berisi nilai dari segmen dinamis di URL (misalnya { id: '1' }).
export default function DetailPage({ params }) {
  const { id } = params; // Mengambil ID dari URL

  // Mencari konten yang cocok berdasarkan ID
  // Menggunakan find() karena kita hanya mencari satu objek
  const content = contentsData.find(item => item.id === id);

  // Jika konten tidak ditemukan (misalnya ID tidak valid di URL)
  if (!content) {
    return (
      <div className={detailStyles.notFoundContainer}>
        <h1 className={detailStyles.notFoundTitle}>Konten Tidak Ditemukan</h1>
        <p className={detailStyles.notFoundText}>Maaf, konten dengan ID "{id}" tidak ada.</p>
        <a href="/" className={detailStyles.backLink}>Kembali ke Daftar Konten</a>
      </div>
    );
  }

  // Jika konten ditemukan, tampilkan detail lengkapnya
  return (
    <div className={detailStyles.container}>
      <h1 className={detailStyles.title}>{content.title}</h1>
      <p className={detailStyles.description}>{content.description}</p>
      <div className={detailStyles.tagsContainer}>
        {/* Menampilkan tag-tag konten */}
        {content.tags.map(tag => (
          <span key={tag} className={detailStyles.tag}>
            {tag}
          </span>
        ))}
      </div>
      {/* Kamu bisa menambahkan lebih banyak detail di sini jika ada,
          misalnya tanggal publikasi, penulis, dll. */}
      <a href="/" className={detailStyles.backLink}>Kembali ke Daftar Konten</a>
    </div>
  );
}
