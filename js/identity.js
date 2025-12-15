const list = document.getElementById("studentList");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const popupName = document.getElementById("popupName");
const popupDetail = document.getElementById("popupDetail");

function render(data){
  list.innerHTML="";
  data.forEach(s=>{
    const div=document.createElement("div");
    div.className="student";
    div.innerHTML=`<img src="${s.foto}"><p>${s.absen}. ${s.nama}</p>`;
    div.onclick=()=>show(s);
    list.appendChild(div);
  });
}

function show(s){
  popup.style.display="flex";
  popupImg.src=s.foto;
  popupName.innerText=s.namaLengkap;

  popupDetail.innerHTML=`
    Lahir: ${s.lahir}<br>
    Asal: ${s.asal}<br>
    Hobi: ${s.hobi}<br>
    Instagram: ${s.igUser ? "@"+s.igUser : "-"}
  `;
}

document.getElementById("close").onclick=()=>popup.style.display="none";

document.getElementById("search").oninput=e=>{
  const q=e.target.value.toLowerCase();
  render(students.filter(s =>
    s.nama.toLowerCase().includes(q) ||
    s.asal.toLowerCase().includes(q) ||
    s.absen.toString().includes(q)
  ));
};

render(students);
