const whatsappNumber="918767441456";
const message="Tum dono ka schedule dekh ke lag raha hai PM se meeting arrange karna bhi easier hoga 😂 Jab free ho jao toh is gareeb dost ko bhi appointment de dena.";
const excuses=["“Sorry, I was busy.”","“I saw your message but forgot to reply.” 😭","“Brooo, notifications are off.” 💀","“I was going to reply yesterday.” 😂","“Life got hectic.” — Classic.","“I thought I already replied.” 🤡","“Will reply in 5 minutes.” — 3 business days later..."];
const toast=document.getElementById("toast");
function showToast(t){toast.textContent=t;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2200)}
document.getElementById("copy").onclick=async()=>{try{await navigator.clipboard.writeText(message);showToast("Copied! Now go bother them professionally 😂")}catch{showToast("Copy failed — select it manually 😭")}};
document.getElementById("wa").onclick=()=>{document.getElementById("attempts").textContent=+document.getElementById("attempts").textContent+1;window.open("https://wa.me/"+whatsappNumber+"?text="+encodeURIComponent(message),"_blank")};
document.querySelectorAll(".reaction").forEach(b=>b.onclick=()=>{const n=b.querySelector("small");n.textContent=+n.textContent+1;b.classList.add("active");setTimeout(()=>b.classList.remove("active"),350)});
let i=0;document.getElementById("generate").onclick=()=>{i=(i+1)%excuses.length;document.getElementById("excuse").textContent=excuses[i]};
document.getElementById("year").textContent=new Date().getFullYear();
