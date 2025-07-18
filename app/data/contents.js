// app/data/contents.js

// Ini adalah array lokal yang berisi data konten mock.
// Setiap objek merepresentasikan satu konten (artikel/produk).
const contents = [
  {
    id: '1', // ID unik untuk routing dinamis
    title: 'Mengenal Next.js App Router',
    summary: 'Ringkasan singkat tentang fitur dan keunggulan App Router di Next.js.',
    description: 'Next.js App Router adalah pendekatan baru untuk membangun aplikasi React dengan Next.js, menawarkan performa lebih baik dan pengalaman developer yang ditingkatkan. Ini memungkinkan penggunaan Server Components secara default, nested layouts, dan streaming.',
    tags: ['Next.js', 'React', 'Frontend'],
    liked: false, // Untuk fitur "like"
  },
  {
    id: '2',
    title: 'Dasar-Dasar Penggunaan Props dan State di React',
    summary: 'Memahami bagaimana data mengalir antar komponen menggunakan props dan state.',
    description: 'Props (properties) digunakan untuk meneruskan data dari komponen induk ke anak, sedangkan state digunakan untuk mengelola data internal komponen yang dapat berubah seiring waktu. Keduanya fundamental dalam membangun aplikasi React yang interaktif.',
    tags: ['React', 'State Management', 'Komponen'],
    liked: true,
  },
  {
    id: '3',
    title: 'Panduan Styling dengan CSS Modules',
    summary: 'Cara efektif mengelola CSS agar tidak terjadi konflik styling antar komponen.',
    description: 'CSS Modules adalah cara untuk meng-scope CSS secara lokal ke komponen, mencegah konflik nama kelas global. Setiap kelas CSS yang didefinisikan dalam file .module.css akan di-hash secara unik, memastikan gaya hanya berlaku pada komponen tersebut.',
    tags: ['CSS', 'Styling', 'Frontend'],
    liked: false,
  },
  {
    id: '4',
    title: 'Pentingnya Struktur Proyek yang Rapi',
    summary: 'Manfaat memiliki struktur folder yang terorganisir dalam pengembangan proyek besar.',
    description: 'Struktur proyek yang rapi memudahkan kolaborasi tim, meningkatkan maintainability, dan mempercepat proses debugging. Penempatan file yang logis seperti memisahkan komponen, halaman, dan data sangat direkomendasikan.',
    tags: ['Best Practice', 'Proyek', 'Pengembangan'],
    liked: false,
  },
  {
    id: '5',
    title: 'Fitur Interaktif: Filter dan Like',
    summary: 'Bagaimana mengimplementasikan fitur filter dan tombol like sederhana.',
    description: 'Fitur filter memungkinkan pengguna menyaring daftar konten berdasarkan kriteria tertentu (misalnya tag). Tombol like adalah contoh interaksi sederhana yang mengubah status UI berdasarkan input pengguna, seringkali diimplementasikan dengan state lokal.',
    tags: ['Interaktif', 'State Management', 'Fitur'],
    liked: true,
  },
];

export default contents; // Export array ini agar bisa diimpor di halaman lain
