// Array hewan & deskripsi
const hewanList = [
  {
    nama: "Singa",
    gambar: "image/singa.jpg",
    deskripsi: "Ini adalah singa, raja hutan.",
  },
  {
    nama: "Panda",
    gambar: "image/panda.jpg",
    deskripsi: "Panda sangat lucu dan suka bambu.",
  },
  {
    nama: "Gajah",
    gambar: "image/gajah.jpg",
    deskripsi: "Gajah adalah hewan darat terbesar.",
  },
  {
    nama: "Kucing",
    gambar: "image/cat.jpg",
    deskripsi: "Kucing adalah hewan peliharaan favorit.",
  },
];

let index = 0;

// Fungsi ganti hewan
function gantiHewan() {
  index = (index + 1) % hewanList.length;
  document.getElementById("gambarHewan").src = hewanList[index].gambar;
  document.getElementById("deskripsiHewan").textContent = hewanList[index].deskripsi;
}

// Fungsi sapaan
function sapaPengguna() {
  const nama = document.getElementById("namaInput").value;
  if (nama.trim() === "") {
    alert("Silakan isi namamu dulu ya!");
  } else {
    document.getElementById("sapaan").textContent = `Halo, ${nama}! Senang kamu mampir.`;
  }
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
