const cursorDot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  // On utilise translate pour de meilleures performances
  // Le -5 permet de centrer le point (la moitié de sa largeur/hauteur)
  cursorDot.style.transform = `translate(${posX - 5}px, ${posY - 5}px)`;
});
document.addEventListener("mouseout", () => {
  cursorDot.style.display = "none";
});

document.addEventListener("mouseover", () => {
  cursorDot.style.display = "block";
});
