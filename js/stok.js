// Mengambil elemen HTML
const tabelBahanAjar = document.getElementById("tabelBahanAjar");
const inputCari = document.getElementById("inputCari");

// Fungsi untuk menampilkan data bahan ajar
function tampilkanBahanAjar(data) {
  // Mengosongkan isi tabel
  tabelBahanAjar.innerHTML = "";

  // Melakukan perulangan data
  data.forEach(function (bahan) {
    // Membuat baris tabel
    const baris = document.createElement("tr");

    // Mengisi baris tabel
    baris.innerHTML = `
            <td>
                <img
                    src="${bahan.cover}"
                    alt="${bahan.namaBarang}"
                    width="80"
                >
            </td>

            <td>${bahan.kodeLokasi}</td>

            <td>${bahan.kodeBarang}</td>

            <td>${bahan.namaBarang}</td>

            <td>${bahan.jenisBarang}</td>

            <td>${bahan.edisi}</td>

            <td>${bahan.stok}</td>
        `;

    // Menambahkan baris ke tabel
    tabelBahanAjar.appendChild(baris);
  });
}

// Menampilkan semua data ketika halaman pertama dibuka
tampilkanBahanAjar(dataBahanAjar);

// Menjalankan pencarian ketika user mengetik
inputCari.addEventListener("input", function () {
  // Mengambil teks pencarian
  const kataKunci = inputCari.value.toLowerCase();

  // Menyaring data bahan ajar
  const hasilPencarian = dataBahanAjar.filter(function (bahan) {
    return (
      bahan.namaBarang.toLowerCase().includes(kataKunci) ||
      bahan.kodeBarang.toLowerCase().includes(kataKunci)
    );
  });

  // Menampilkan hasil pencarian
  tampilkanBahanAjar(hasilPencarian);
});

// Mengambil elemen form
const coverBaru = document.getElementById("coverBaru");
const kodeLokasiBaru = document.getElementById("kodeLokasiBaru");
const kodeBarangBaru = document.getElementById("kodeBarangBaru");
const namaBarangBaru = document.getElementById("namaBarangBaru");
const jenisBarangBaru = document.getElementById("jenisBarangBaru");
const edisiBaru = document.getElementById("edisiBaru");
const stokBaru = document.getElementById("stokBaru");

const btnTambahStok = document.getElementById("btnTambahStok");

// Tombol tambah bahan ajar
btnTambahStok.addEventListener("click", function () {
  const cover = coverBaru.value.trim();
  const kodeLokasi = kodeLokasiBaru.value.trim();
  const kodeBarang = kodeBarangBaru.value.trim();
  const namaBarang = namaBarangBaru.value.trim();
  const jenisBarang = jenisBarangBaru.value.trim();
  const edisi = edisiBaru.value.trim();
  const stok = Number(stokBaru.value);

  // Validasi semua data
  if (
    cover === "" ||
    kodeLokasi === "" ||
    kodeBarang === "" ||
    namaBarang === "" ||
    jenisBarang === "" ||
    edisi === "" ||
    stok <= 0
  ) {
    alert("Semua data bahan ajar harus diisi dengan benar.");
    return;
  }

  // Mengecek kode barang
  const barangSudahAda = dataBahanAjar.some(function (bahan) {
    return bahan.kodeBarang.toLowerCase() === kodeBarang.toLowerCase();
  });

  if (barangSudahAda) {
    alert("Kode barang sudah tersedia.");
    return;
  }

  // Membuat data bahan ajar baru
  const bahanBaru = {
    kodeLokasi: kodeLokasi,
    kodeBarang: kodeBarang,
    namaBarang: namaBarang,
    jenisBarang: jenisBarang,
    edisi: edisi,
    stok: stok,
    cover: cover,
  };

  // Menambahkan ke data bahan ajar
  dataBahanAjar.push(bahanBaru);

  // Menampilkan ulang tabel
  tampilkanBahanAjar(dataBahanAjar);

  // Mengosongkan form
  coverBaru.value = "";
  kodeLokasiBaru.value = "";
  kodeBarangBaru.value = "";
  namaBarangBaru.value = "";
  jenisBarangBaru.value = "";
  edisiBaru.value = "";
  stokBaru.value = "";

  alert("Bahan ajar berhasil ditambahkan.");
});
