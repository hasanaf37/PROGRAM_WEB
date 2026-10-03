// Mengambil data user yang tersimpan setelah login
const userLogin = localStorage.getItem("userLogin");

// Jika tidak ada user yang login
if (!userLogin) {
  // Kembali ke halaman login
  window.location.href = "login.html";
} else {
  // Mengubah data JSON menjadi object JavaScript
  const user = JSON.parse(userLogin);

  // Mengambil elemen HTML
  const greeting = document.getElementById("greeting");
  const userInfo = document.getElementById("userInfo");

  // Mengambil jam saat ini
  const jam = new Date().getHours();

  // Menentukan sapaan berdasarkan waktu
  let salam;

  if (jam >= 5 && jam < 12) {
    salam = "Selamat pagi";
  } else if (jam >= 12 && jam < 18) {
    salam = "Selamat siang";
  } else {
    salam = "Selamat malam";
  }

  // Menampilkan sapaan dan nama user
  greeting.textContent = salam + ", " + user.nama;

  // Menampilkan role dan lokasi user
  userInfo.textContent = user.role + " - " + user.lokasi;
}
// Mengambil tombol logout
const btnLogout = document.getElementById("btnLogout");

// Menjalankan proses logout
btnLogout.addEventListener("click", function () {
  // Menghapus data user dari localStorage
  localStorage.removeItem("userLogin");

  // Kembali ke halaman login
  window.location.href = "login.html";
});
