// script.js

// Raketenstart-Animation
document.addEventListener("DOMContentLoaded", function() {
    let rocket = document.createElement("div");
    rocket.className = "rocket";
    document.body.appendChild(rocket);
    setTimeout(() => rocket.remove(), 3000); // Entfernt die Rakete nach 3 Sekunden
});

// Sternenhimmel-Animation
const starContainer = document.createElement("div");
starContainer.className = "stars";
document.body.appendChild(starContainer);

for (let i = 0; i < 100; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    starContainer.appendChild(star);
}
