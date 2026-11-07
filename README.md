# Kopi Nusantara — Landing Page UMKM

Landing page modern premium untuk usaha kedai kopi, dibuat menggunakan HTML5, CSS3, JavaScript, dan Bootstrap 5. Project ini bersifat statis dan **tidak membutuhkan database**.

## Fitur
- Desain responsif untuk desktop, tablet, dan smartphone.
- Navigasi sticky dengan menu mobile Bootstrap.
- Hero section, cerita usaha, daftar menu, dan kontak.
- Tombol WhatsApp dengan pesan otomatis.
- Tahun copyright diperbarui otomatis menggunakan JavaScript.
- Ilustrasi lokal dalam folder `images/` berformat SVG.

## Struktur folder

```text
kopi-nusantara/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── hero-coffee.svg
    ├── coffee-beans.svg
    ├── menu-espresso.svg
    ├── menu-latte.svg
    └── menu-manual.svg
```

## Cara menjalankan
1. Ekstrak file ZIP.
2. Buka folder `kopi-nusantara` menggunakan Visual Studio Code.
3. Jalankan `index.html` menggunakan ekstensi **Live Server**, atau buka file `index.html` langsung di browser.
4. Pastikan koneksi internet tersedia untuk memuat Bootstrap CDN dan Google Fonts.

## Penyesuaian sebelum dipublikasikan
1. Buka `js/script.js`, lalu ganti `6280000000000` dengan nomor WhatsApp kedai. Gunakan format kode negara tanpa tanda `+`, spasi, atau tanda hubung.
2. Ganti alamat email dan lokasi pada bagian kontak di `index.html`.
3. Sesuaikan nama menu, deskripsi, dan harga dengan produk sebenarnya.
4. Ganti ilustrasi SVG di folder `images/` dengan foto produk/kedai jika sudah tersedia.
5. Jika ingin memakai domain sendiri, unggah seluruh isi folder project ke layanan hosting statis seperti Vercel atau Netlify.

## Teknologi
- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5.3.3 melalui CDN
- Google Fonts: DM Sans dan Playfair Display

## Catatan
Tautan WhatsApp, email, lokasi, nama menu, dan harga pada project ini merupakan konten contoh yang perlu disesuaikan. Formulir/database tidak digunakan.
