// assets/js/config.js

// 1. Variabel Global URL Backend
// Kalau nanti di-hosting, tinggal ganti baris ini aja!
//const API_BASE_URL = "http://localhost:8080/api";
const API_BASE_URL = "https://backend-sigaji-production.up.railway.app/api"
// 2. Fungsi Global Format Rupiah (Biar gak nulis ulang terus)
function formatRupiah(angka) {
    return "Rp " + (angka || 0).toLocaleString("id-ID");
}

// 3. Fungsi Global Format Tanggal
function formatTanggal(tanggal) {
    if (!tanggal) return "-";
    const d = new Date(tanggal);
    return d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}