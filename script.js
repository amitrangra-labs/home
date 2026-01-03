const scene = document.getElementById("scene");
const desk = document.querySelector(".desk");

scene.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * -10;

  desk.style.transform = `
    rotateX(${y}deg)
    rotateY(${x}deg)
  `;
});

scene.addEventListener("mouseleave", () => {
  desk.style.transform = "rotateX(0deg) rotateY(0deg)";
});
