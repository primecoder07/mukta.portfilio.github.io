// DARK MODE
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};

// SCROLL ANIMATION
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// TYPING EFFECT
const text = "Exploring Technology | Creativity | Building Ideas";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}
type();

// IMAGE MODAL
const images = document.querySelectorAll(".gallery img");

const modal = document.createElement("div");
modal.classList.add("modal");
document.body.appendChild(modal);

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modal.innerHTML = `<img src="${img.src}">`;
  });
});

modal.addEventListener("click", () => {
  modal.classList.remove("active");
});
