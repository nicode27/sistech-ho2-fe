// app/components/ContentCard.js
"use client"; // Menandakan ini adalah Client Component
import Link from 'next/link'; // Import Link untuk navigasi ke halaman detail
import Tag from './Tag'; // Import komponen Tag
import contentCardStyles from './ContentCard.module.css'; // Menggunakan CSS Modules untuk styling
import { useState } from 'react'; // Untuk mengelola state 'liked' di dalam kartu

// Komponen ContentCard menerima props:
// - content: objek yang berisi data konten (id, title, summary, tags, liked)
// - onTagClick: fungsi callback saat tag diklik (untuk filter)
// - onLikeToggle: fungsi callback saat tombol like diklik
export default function ContentCard({ content, onTagClick, onLikeToggle }) {
  // Menggunakan state internal untuk 'liked' agar bisa diubah secara lokal
  // Namun, untuk tugas ini, kita akan mengelola liked dari parent (page.js)
  // Jadi, kita akan menerima 'liked' dari props dan memanggil 'onLikeToggle'
  const [isLiked, setIsLiked] = useState(content.liked);

  // Fungsi untuk menangani klik tombol like
  const handleLikeClick = () => {
    // Memanggil fungsi onLikeToggle yang diteruskan dari parent
    // dan meneruskan ID konten serta status liked yang baru
    onLikeToggle(content.id, !isLiked);
    setIsLiked(!isLiked); // Update state lokal juga
  };

  return (
    <div className={contentCardStyles.card}>
      {/* Link ke halaman detail konten */}
      <Link href={`/konten/${content.id}`} className={contentCardStyles.titleLink}>
        <h3 className={contentCardStyles.title}>{content.title}</h3>
      </Link>
      <p className={contentCardStyles.summary}>{content.summary}</p>

      <div className={contentCardStyles.tagsContainer}>
        {/* Render setiap tag menggunakan komponen Tag */}
        {content.tags.map((tag) => (
          <Tag
            key={tag} // Key unik untuk setiap tag
            text={tag}
            onClick={() => onTagClick(tag)} // Meneruskan tag yang diklik ke parent
          />
        ))}
      </div>

      <div className={contentCardStyles.actions}>
        {/* Tombol Like/Bookmark */}
        <button
          className={`${contentCardStyles.likeButton} ${isLiked ? contentCardStyles.liked : ''}`}
          onClick={handleLikeClick}
        >
          {/* Menggunakan emoji untuk ikon like/bookmark */}
          {isLiked ? '❤️ Disukai' : '🤍 Suka'}
        </button>
      </div>
    </div>
  );
}
