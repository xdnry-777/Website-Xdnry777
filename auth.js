// Sistem Autentikasi & Menu Xdnry777
let isLoggedIn = localStorage.getItem('userLogin') === 'true';
let userName = localStorage.getItem('userNama') || '';
let userEmail = localStorage.getItem('userEmail') || '';

// Cek Akses Halaman
function cekAkses() {
    const halaman = window.location.pathname.split('/').pop();
    const halamanBebas = ['', 'index.html', 'login.html', 'daftar.html', 'bantuan.html', 'syarat.html'];
    if (!isLoggedIn && !halamanBebas.includes(halaman)) {
        alert('⚠️ Silakan Login Dulu Sebelum Berbelanja!');
        window.location.href = 'login.html';
    }
}

// Menu Samping
function bukaMenu() {
    document.getElementById('menuSamping').classList.remove('-translate-x-full');
    document.getElementById('lapisanTutup').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}
function tutupMenu() {
    document.getElementById('menuSamping').classList.add('-translate-x-full');
    document.getElementById('lapisanTutup').classList.add('hidden');
    document.body.style.overflow = '';
}

// Simpan Status Login
function setLogin(nama, email) {
    localStorage.setItem('userLogin', 'true');
    localStorage.setItem('userNama', nama);
    localStorage.setItem('userEmail', email);
    isLoggedIn = true;
    userName = nama;
    updateTampilan();
}

// Logout
function setLogout() {
    localStorage.removeItem('userLogin');
    localStorage.removeItem('userNama');
    localStorage.removeItem('userEmail');
    isLoggedIn = false;
    tutupMenu();
    window.location.href = 'index.html';
}

// Cek Akun Manual
function cekAkun(username, password) {
    const daftarAkun = JSON.parse(localStorage.getItem('daftarAkun') || '[]');
    return daftarAkun.find(a => (a.username === username || a.email === username) && a.password === password);
}

// Update Tampilan User
function updateTampilan() {
    const areaTombol = document.querySelector('.area-user');
    const menuUser = document.querySelector('.menu-user');
    if (!areaTombol || !menuUser) return;

    if (isLoggedIn) {
        areaTombol.innerHTML = `<div class="flex items-center gap-2"><span class="text-sm">👋 ${userName.split(' ')[0]}</span><button onclick="setLogout()" class="bg-red-600 px-3 py-1 rounded text-sm">Keluar</button></div>`;
        menuUser.innerHTML = `<div class="p-3 border-b border-gray-700"><p class="font-bold">${userName}</p><p class="text-sm text-gray-400">${userEmail}</p></div>`;
    } else {
        areaTombol.innerHTML = `<button onclick="window.location.href='login.html'" class="bg-ungu-utama px-4 py-2 rounded-lg">Masuk</button>`;
        menuUser.innerHTML = `<button onclick="window.location.href='login.html'" class="w-full text-left p-3 bg-ungu-utama rounded-lg font-bold">🔑 Masuk Akun</button>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cekAkses();
    updateTampilan();
});
