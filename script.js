setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "0";
  heart.style.fontSize = "20px";
  heart.style.animation = "floatUp 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}, 500);

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);