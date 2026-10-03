// Mengambil elemen tabel monitoring
const tabelMonitoring = document.getElementById("tabelMonitoring");

// Mengambil elemen tabel rekap
const tabelRekap = document.getElementById("tabelRekap");

// Mengambil elemen ringkasan stok
const ringkasanStok = document.getElementById("ringkasanStok");

// ========================================
// MONITORING PROGRESS DO
// ========================================

// Mengambil semua data tracking
const daftarTracking = Object.values(dataTracking);

// Melakukan perulangan data tracking
daftarTracking.forEach(function (data) {
  // Membuat baris tabel
  const baris = document.createElement("tr");

  // Mengisi data ke dalam baris
  baris.innerHTML = `
        <td>${data.nomorDO}</td>
        <td>${data.nama}</td>
        <td>${data.status}</td>
        <td>${data.ekspedisi}</td>
        <td>${data.tanggalKirim}</td>
    `;

  // Menambahkan baris ke tabel
  tabelMonitoring.appendChild(baris);
});

// ========================================
// REKAP BAHAN AJAR
// ========================================

// Menghitung jumlah jenis bahan ajar
const jumlahBahanAjar = dataBahanAjar.length;

// Menghitung total seluruh stok
const totalStok = dataBahanAjar.reduce(function (total, bahan) {
  return total + bahan.stok;
}, 0);

// Menampilkan ringkasan
ringkasanStok.innerHTML = `
    <p>
        <strong>Jumlah Bahan Ajar:</strong>
        ${jumlahBahanAjar}
    </p>

    <p>
        <strong>Total Stok:</strong>
        ${totalStok}
    </p>
`;

// Menampilkan data bahan ajar
dataBahanAjar.forEach(function (bahan) {
  // Membuat baris tabel
  const baris = document.createElement("tr");

  // Mengisi data
  baris.innerHTML = `
        <td>${bahan.kodeBarang}</td>
        <td>${bahan.namaBarang}</td>
        <td>${bahan.jenisBarang}</td>
        <td>${bahan.edisi}</td>
        <td>${bahan.stok}</td>
    `;

  // Menambahkan baris
  tabelRekap.appendChild(baris);
});
