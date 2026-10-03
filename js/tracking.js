// Mengambil elemen form
const trackingForm = document.getElementById("trackingForm");

// Mengambil tempat untuk menampilkan hasil tracking
const hasilTracking = document.getElementById("hasilTracking");

// Menjalankan proses ketika form dikirim
trackingForm.addEventListener("submit", function (event) {
  // Mencegah halaman reload
  event.preventDefault();

  // Mengambil nomor DO dari input
  const nomorDO = document.getElementById("nomorDO").value.trim();

  // Mencari data berdasarkan nomor DO
  const data = dataTracking[nomorDO];

  // Jika nomor DO tidak ditemukan
  if (!data) {
    hasilTracking.innerHTML = `
            <p>
                Nomor DO tidak ditemukan.
            </p>
        `;

    return;
  }

  // Menampilkan informasi pengiriman
  hasilTracking.innerHTML = `

        <h2>Informasi Pengiriman</h2>

        <p>
            <strong>Nomor DO:</strong>
            ${data.nomorDO}
        </p>

        <p>
            <strong>Nama:</strong>
            ${data.nama}
        </p>

        <p>
            <strong>Status:</strong>

            <span class="status-pengiriman">
            ${data.status}
        </span>
        </p>

        <p>
            <strong>Ekspedisi:</strong>
            ${data.ekspedisi}
        </p>

        <p>
            <strong>Tanggal Kirim:</strong>
            ${data.tanggalKirim}
        </p>

        <p>
            <strong>Paket:</strong>
            ${data.paket}
        </p>

        <p>
            <strong>Total:</strong>
            ${data.total}
        </p>


        <h3>Riwayat Perjalanan</h3>

        <div id="perjalananTracking"></div>

    `;

  // Mengambil elemen perjalanan
  const perjalananTracking = document.getElementById("perjalananTracking");

  // Menampilkan setiap perjalanan
  data.perjalanan.forEach(function (perjalanan) {
    const item = document.createElement("div");

    item.className = "tracking-item";

    item.innerHTML = `
        <div class="tracking-dot"></div>

        <div class="tracking-content">

            <strong>${perjalanan.waktu}</strong>

            <p>
                ${perjalanan.keterangan}
            </p>

        </div>
    `;

    perjalananTracking.appendChild(item);
  });
});
