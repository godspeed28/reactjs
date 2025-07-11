# 🚀 React Project Setup Guide

Panduan ini menjelaskan cara membuat project React menggunakan metode Vite (modern & cepat).

---

## 🔧 Persiapan

Pastikan kamu sudah menginstal:

- [Node.js](https://nodejs.org/) versi terbaru
- npm (biasanya otomatis terinstal bersama Node.js)

Cek versi dengan:

```bash
node -v
npm -v
```

## ✅ Cara 1: Membuat Project React dengan Vite (Rekomendasi)

### 1. Buat project baru

```bash
npm create vite@latest nama-project
```

📌 Alternatif jika perintah di atas tidak tersedia:

```bash
npm install -g create-vite
create-vite nama-project
```

Atau:

```bash
npm init vite@latest nama-project
```

📌 Catatan:

- Project name: isi dengan nama-project
- Select a framework: pilih React
- Select a variant: pilih JavaScript (atau TypeScript jika kamu ingin)

### 2. Masuk ke folder project

```bash
cd nama-project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Jalankan Project

```bash
npm run dev
```

Akses di browser: http://localhost:5173

## 📁 Struktur Folder (Vite)

```pgsql
nama-project/
├── public/
├── src/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 📦 Menambahkan Library Tambahan

Install library tambahan sesuai kebutuhan. Contoh:

```bash
npm install react-router-dom
npm install axios
```

## 🛠️ Konfigurasi Proxy (Opsional)

Jika kamu memakai backend lokal (misal port 3000), tambahkan di vite.config.js:

```js
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
```

## 📤 Build untuk Production

Untuk membuat versi produksi dari aplikasi:

```bash
npm run build
```

Hasil build ada di folder /dist.

## 🧠 Tips Pengembangan

- Gunakan VS Code sebagai editor utama
- Tambahkan React DevTools di browser untuk debugging lebih mudah
- Inisialisasi Git dan tambahkan .gitignore:

```bash
git init
```

Contoh isi .gitignore:

```gitignore
node_modules
dist
.env
```

## 🧪 (Opsional) Prettier & Eslint

Untuk merapikan kode, tambahkan:

```bash
npm install --save-dev prettier eslint
```

Contoh script di package.json:

```json
"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"format": "prettier --write ."
}
```

## 🧯 Troubleshooting

### ❗ Port already in use

Jika port default 5173 sudah dipakai, ubah di vite.config.js:

```js
server: {
  port: 3001,
}
```

## 🔗 Dokumentasi Resmi

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/docs/intro)
- [Prettier](https://prettier.io/docs/en/index.html)
- [ESLint](https://eslint.org/docs/latest/)

## 🎉 Penutup

🚀 Sekarang kamu siap membangun aplikasi React dengan kecepatan tinggi menggunakan Vite!
Selamat berkarya dan ngoding! 😎
