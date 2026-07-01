function setLogin(nama, email) {
    localStorage.setItem("namaPengguna", nama);
    localStorage.setItem("emailPengguna", email);
    localStorage.setItem("sudahLogin", "ya");
}

function cekAkun(user, pass) {
    const akunTersimpan = localStorage.getItem("daftarAkun");
    if (!akunTersimpan) return false;
    
    const daftar = JSON.parse(akunTersimpan);
    return daftar.find(a => 
        (a.nama === user || a.email === user) && a.sandi === pass
    );
}

function cekSudahLogin() {
    return localStorage.getItem("sudahLogin") === "ya";
}

function keluarAkun() {
    localStorage.removeItem("namaPengguna");
    localStorage.removeItem("emailPengguna");
    localStorage.removeItem("sudahLogin");
    window.location.href = "login.html";
}
