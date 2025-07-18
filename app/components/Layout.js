// app/components/Layout.js
import Header from './Header'; // Import komponen Header

// Komponen Layout akan membungkus semua halaman
// Ini menerima 'children' sebagai props, yang merupakan konten dari halaman yang dibungkusnya.
export default function Layout({ children }) {
  return (
    <div>
      {/* Header akan selalu ada di setiap halaman yang menggunakan Layout ini */}
      <Header />
      {/* Konten halaman akan dirender di sini */}
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        {children}
      </main>
      {/* Kamu bisa menambahkan Footer di sini jika diperlukan */}
      {/* <Footer /> */}
    </div>
  );
}
