// app/page.js
"use client"; // Menandakan ini adalah Client Component karena menggunakan useState dan interaksi user

import { useState, useMemo } from 'react'; // Import useState dan useMemo untuk optimasi
import contentsData from './data/contents';
import ContentCard from './components/ContentCard';
import Tag from './components/Tag'; // Import komponen Tag
import homeStyles from './page.module.css'; // Menggunakan CSS Modules untuk styling halaman

export default function Home() {
  // State untuk menyimpan daftar konten yang bisa berubah (misalnya karena like)
  const [contents, setContents] = useState(contentsData);
  // State untuk menyimpan tag yang sedang aktif untuk filter
  const [activeTag, setActiveTag] = useState(null);

  // Fungsi untuk menangani klik pada tag (untuk filter)
  const handleTagClick = (tag) => {
    // Jika tag yang sama diklik lagi, nonaktifkan filter
    if (activeTag === tag) {
      setActiveTag(null);
    } else {
      setActiveTag(tag);
    }
  };

  // Fungsi untuk menangani perubahan status like pada konten
  const handleLikeToggle = (id, newLikedStatus) => {
    setContents(prevContents =>
      prevContents.map(content =>
        content.id === id ? { ...content, liked: newLikedStatus } : content
      )
    );
  };

  // Menggunakan useMemo untuk mengoptimalkan daftar konten yang difilter
  // Daftar ini hanya akan dihitung ulang jika 'contents' atau 'activeTag' berubah
  const filteredContents = useMemo(() => {
    if (!activeTag) {
      return contents; // Jika tidak ada filter, tampilkan semua konten
    }
    // Filter konten berdasarkan tag yang aktif
    return contents.filter(content => content.tags.includes(activeTag));
  }, [contents, activeTag]);

  // Mengambil semua tag unik dari seluruh konten untuk ditampilkan sebagai filter
  const allTags = useMemo(() => {
    const tags = new Set(); // Menggunakan Set untuk memastikan tag unik
    contents.forEach(content => {
      content.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags); // Konversi Set kembali ke Array
  }, [contents]);

  return (
    <div className={homeStyles.container}>
      <h1 className={homeStyles.pageTitle}>Daftar Konten Terbaru</h1>

      {/* Bagian Filter Tag */}
      <section className={homeStyles.filterSection}>
        <h2 className={homeStyles.filterTitle}>Filter Berdasarkan Kategori:</h2>
        <div className={homeStyles.tagsFilterContainer}>
          {allTags.map(tag => (
            <Tag
              key={tag}
              text={tag}
              onClick={() => handleTagClick(tag)}
              isActive={activeTag === tag} // Menandai tag yang aktif
            />
          ))}
          {activeTag && ( // Tampilkan tombol reset filter hanya jika ada filter aktif
            <button
              className={homeStyles.resetFilterButton}
              onClick={() => setActiveTag(null)}
            >
              Reset Filter
            </button>
          )}
        </div>
      </section>

      {/* Daftar Konten */}
      <section className={homeStyles.contentList}>
        {filteredContents.length === 0 ? (
          <p className={homeStyles.noContentMessage}>Tidak ada konten yang ditemukan untuk kategori ini.</p>
        ) : (
          filteredContents.map((content) => (
            <ContentCard
              key={content.id} // Key unik untuk setiap kartu konten
              content={content} // Meneruskan seluruh objek konten sebagai props
              onTagClick={handleTagClick} // Meneruskan fungsi handleTagClick ke ContentCard
              onLikeToggle={handleLikeToggle} // Meneruskan fungsi handleLikeToggle ke ContentCard
            />
          ))
        )}
      </section>
    </div>
  );
}
