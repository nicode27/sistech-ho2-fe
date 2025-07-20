// app/about/page.js
// This is a Server Component by default.

import aboutStyles from './about.module.css';
// import Link from 'next/link'; // Tidak diperlukan di sini

export default function About() {
  return (
    <div className={aboutStyles.container}>
      <h1 className={aboutStyles.title}>Tentang Aplikasi ResepKu</h1>
      <p className={aboutStyles.description}>
        ResepKu adalah sebuah platform mini yang didedikasikan untuk berbagi berbagai resep masakan rumahan yang lezat, sederhana, dan mudah diikuti. Aplikasi ini hadir untuk menjadi teman memasak Anda, baik untuk menu sehari-hari maupun inspirasi kuliner di waktu luang.

Di dalamnya, Anda dapat menemukan beragam resep dengan berbagai kategori, mulai dari makanan utama, camilan, hingga dessert. Setiap resep dilengkapi dengan informasi seperti bahan-bahan, langkah memasak, serta ringkasan singkat yang membantu Anda memilih menu sesuai selera.

Dengan tampilan yang sederhana dan rapi, ResepKu dirancang agar mudah digunakan oleh siapa saja yang ingin mulai memasak atau menambah koleksi resep favoritnya.

Selamat mencoba dan semoga menginspirasi dapur Anda!


      </p>
      {/* Jika ada link kembali ke home, gunakan Link dari next/link */}
      {/* <Link href="/" className={aboutStyles.backLink}>Kembali ke Daftar Resep</Link> */}
    </div>
  );
}
