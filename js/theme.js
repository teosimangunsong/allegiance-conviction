const btn=document.getElementById("themeToggle");

btn.onclick=()=>{
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};
