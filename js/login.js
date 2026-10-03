const loginForm = document.getElementById("loginForm");

// =========================
// LOGIN
// =========================

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Email dan password harus diisi.");

    return;
  }

  const user = dataPengguna.find(function (pengguna) {
    return pengguna.email === email && pengguna.password === password;
  });

  if (user) {
    localStorage.setItem("userLogin", JSON.stringify(user));

    alert("Login berhasil. Selamat datang, " + user.nama);

    window.location.href = "dashboard.html";
  } else {
    alert("email/password yang anda masukkan salah");
  }
});

// =========================
// LUPA PASSWORD
// =========================

const btnLupaPassword = document.getElementById("btnLupaPassword");

btnLupaPassword.addEventListener("click", function () {
  const email = prompt("Masukkan email yang terdaftar:");

  if (email === null) {
    return;
  }

  const user = dataPengguna.find(function (pengguna) {
    return pengguna.email === email.trim();
  });

  if (user) {
    alert("Password Anda adalah: " + user.password);
  } else {
    alert("Email tidak ditemukan.");
  }
});

// =========================
// DAFTAR
// =========================

const btnDaftar = document.getElementById("btnDaftar");

btnDaftar.addEventListener("click", function () {
  alert("Fitur pendaftaran pengguna belum tersedia pada data dummy.");
});
