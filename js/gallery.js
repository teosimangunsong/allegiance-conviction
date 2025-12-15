const imgs=document.querySelectorAll(".gallery-img");
const box=document.getElementById("lightbox");
const img=document.getElementById("lightboxImg");
const counter=document.getElementById("lightboxCounter");

let i=0;

imgs.forEach((el,idx)=>{
  el.onclick=()=>{
    i=idx;
    box.style.display="flex";
    update();
  };
});

function update(){
  img.src=imgs[i].src;
  counter.innerText=`${i+1} / ${imgs.length}`;
}

document.getElementById("closeLightbox").onclick=()=>box.style.display="none";
