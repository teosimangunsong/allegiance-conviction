const list = document.getElementById("studentList");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const popupName = document.getElementById("popupName");
const popupDetail = document.getElementById("popupDetail");
const closeBtn = document.getElementById("close");
const absenBadge = document.querySelector(".absen-badge");
const searchInput = document.getElementById("search");

/* ===== RENDER LIST SISWA ===== */
function render(data) {
  list.innerHTML = "";

  data.forEach(s => {
    const div = document.createElement("div");
    div.className = "student";

    div.innerHTML = `
      <div class="student-img">
        <img src="${s.foto}" alt="${s.nama}">
      </div>
      <p class="student-name">${s.nama}</p>
      <div class="absen-badge card-badge">${s.absen}</div>
    `;

    div.addEventListener("click", () => showPopup(s));
    list.appendChild(div);
  });
}

/* ===== TAMPILKAN POPUP ===== */
function showPopup(s) {
  popup.style.display = "flex";

  popupImg.src = s.foto;
  popupName.textContent = s.namaLengkap;

  popupDetail.innerHTML = `
    <div>Lahir: ${s.lahir}</div>
    <div>Asal: ${s.asal}</div>
    <div>Hobi: ${s.hobi || "-"}</div>
    <div>Instagram: ${s.igUser ? "@" + s.igUser : "-"}</div>
  `;

  /* badge nomor absen */
  if (absenBadge) {
    absenBadge.textContent = s.absen;
  }
}

/* ===== TUTUP POPUP ===== */
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

/* klik area gelap juga nutup */
popup.addEventListener("click", e => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

/* ===== SEARCH ===== */
searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();

  render(
    students.filter(s =>
      s.nama.toLowerCase().includes(q) ||
      s.namaLengkap.toLowerCase().includes(q) ||
      s.asal.toLowerCase().includes(q) ||
      s.absen.toString().includes(q)
    )
  );
});

/* ===== INIT ===== */
render(students);
