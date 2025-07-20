// app/konten/[id]/page.js
"use client"; // <--- TETAPKAN BARIS INI

import contentsData from '../../data/contents'; // Import mock content data
import detailStyles from './detail.module.css'; // Using CSS Modules for styling
import Link from 'next/link'; // Import Link untuk navigasi
import Image from 'next/image'; // Import Image untuk optimasi gambar

// Komponen halaman detail konten
// Next.js secara otomatis meneruskan 'params' sebagai props,
// yang berisi nilai dari segmen dinamis di URL (misalnya { id: '1' }).
export default function DetailPage({ params }) {
  const { id } = params; // Mengambil ID dari URL

  // Mencari konten yang cocok berdasarkan ID
  const content = contentsData.find(item => item.id === id);

  // Jika konten tidak ditemukan (misalnya ID tidak valid di URL)
  if (!content) {
    return (
      <div className={detailStyles.notFoundContainer}>
        <h1 className={detailStyles.notFoundTitle}>Resep Tidak Ditemukan</h1>
<p className={detailStyles.notFoundText}>Maaf, resep dengan ID &quot;{id}&quot; tidak ada.</p>        {/* Menggunakan Link untuk navigasi internal */}
        <Link href="/" className={detailStyles.backLink}>Kembali ke Daftar Resep</Link>
      </div>
    );
  }

  // Jika konten ditemukan, tampilkan detail lengkapnya
  return (
    <div className={detailStyles.container}>
      <h1 className={detailStyles.title}>{content.title}</h1>
      
      {/* Display recipe image using Next.js Image component */}
      {content.imageUrl && (
        <Image
          src={content.imageUrl}
          alt={content.title}
          width={600} // Tentukan lebar gambar
          height={400} // Tentukan tinggi gambar
          className={detailStyles.recipeImage}
          // onError prop tidak diperlukan lagi dengan Next.js Image karena sudah ada fallback internal
          // Jika Anda benar-benar butuh fallback khusus, Anda bisa menanganinya di level komponen
        />
      )}

      {/* Display preparation and cook times, and servings */}
      <div className={detailStyles.infoContainer}>
        {content.waktuPersiapan && (
          <p className={detailStyles.infoItem}>
            <strong>Waktu Persiapan:</strong> {content.waktuPersiapan}
          </p>
        )}
        {content.waktuMasak && (
          <p className={detailStyles.infoItem}>
            <strong>Waktu Masak:</strong> {content.waktuMasak}
          </p>
        )}
        {content.porsi && (
          <p className={detailStyles.infoItem}>
            <strong>Porsi:</strong> {content.porsi}
          </p>
        )}
      </div>

      <p className={detailStyles.description}>{content.description}</p>

      {/* Display Ingredients */}
      {content.bahan && content.bahan.length > 0 && (
        <div className={detailStyles.section}>
          <h2 className={detailStyles.sectionTitle}>Bahan-Bahan:</h2>
          <ol className={detailStyles.list}>
            {content.bahan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      )}

      {/* Display Instructions */}
      {content.caraMembuat && content.caraMembuat.length > 0 && (
        <div className={detailStyles.section}>
          <h2 className={detailStyles.sectionTitle}>Cara Membuat:</h2>
          <ol className={detailStyles.list}>
            {content.caraMembuat.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      <div className={detailStyles.tagsContainer}>
        {/* Display content tags */}
        {content.tags.map(tag => (
          <span key={tag} className={detailStyles.tag}>
            {tag}
          </span>
        ))}
      </div>
      {/* Menggunakan Link untuk navigasi internal */}
      <Link href="/" className={detailStyles.backLink}>Kembali ke Daftar Resep</Link>
    </div>
  );
}
