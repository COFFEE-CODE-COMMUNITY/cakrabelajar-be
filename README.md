# Boilerplate Express JS (Functional Programming) - Bahasa Jakarta

## Fitur

- Express JS gaya functional programming, best practice
- Struktur modular: route, middleware, controller, service, model, utils
- Helmet buat keamanan
- Morgan buat logging
- Error handling udah siap

## Cara Pakai

1. Install dulu dependensi:
   ```bash
   npm install
   ```
2. Bikin file `.env` (bisa copy dari `.env.example` kalo ada)
3. Jalanin mode development:
   ```bash
   npm run dev
   ```
4. Kalo mau production:
   ```bash
   npm start
   ```

## Struktur Folder

- `src/app.js` — Factory function buat bikin app Express
- `src/server.js` — Entry point server
- `src/routes/` — Kumpulan route (endpoint)
- `src/controllers/` — Logic buat handle request/response
- `src/services/` — Logic bisnis, proses data
- `src/models/` — Data model (misal: user, produk, dll)
- `src/middlewares/` — Middleware (error handler, auth, dsb)
- `src/utils/` — Fungsi-fungsi bantu (helper)

## Contoh Endpoint User

- `GET    /api/users` — List user
- `GET    /api/users/:id` — Detail user
- `POST   /api/users` — Tambah user (body: `{ "name": "...", "password": "..." }`)
- `PUT    /api/users/:id` — Update user
- `DELETE /api/users/:id` — Hapus user

---

## Penjelasan Struktur README

- **Fitur**: Ngasih tau keunggulan/fitur utama project ini.
- **Cara Pakai**: Step by step biar gampang mulaiin project-nya.
- **Struktur Folder**: Biar gampang paham file/folder fungsinya buat apa aja.
- **Contoh Endpoint User**: Biar langsung tau cara akses API-nya.
- **Penjelasan Struktur README**: Ngasih tau bagian-bagian README ini isinya apa aja.
