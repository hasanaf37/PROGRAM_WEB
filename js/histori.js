// Mengambil elemen tabel
const tabelHistori = document.getElementById("tabelHistori");

// Mengambil seluruh data tracking
const daftarHistori = Object.values(dataTracking);

// Menampilkan data histori
daftarHistori.forEach(function (data) {
  // Membuat baris tabel
  const baris = document.createElement("tr");

  // Mengisi data ke dalam tabel
  baris.innerHTML = `
        <td>${data.nomorDO}</td>

        <td>${data.nama}</td>

        <td>${data.paket}</td>

        <td>${data.ekspedisi}</td>

        <td>${data.tanggalKirim}</td>

        <td>${data.total}</td>

        <td>${data.status}</td>
    `;

  // Menambahkan baris ke tabel
  tabelHistori.appendChild(baris);
});
