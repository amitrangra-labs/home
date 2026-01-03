const card = document.getElementById("card");

const maxTilt = 8; // degrees

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * -maxTilt;
  const rotateY = ((x - centerX) / centerX) * maxTilt;

  card.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;

  card.style.boxShadow = `
    ${-rotateY * 2}px ${rotateX * 2}px 30px rgba(0,0,0,0.08),
    0 40px 70px rgba(0,0,0,0.05)
  `;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
  card.style.boxShadow =
    "0 10px 25px rgba(0,0,0,0.08), 0 30px 60px rgba(0,0,0,0.05)";
});
