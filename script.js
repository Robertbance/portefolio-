/* ==============================
   COMPÉTENCES ET NIVEAUX
   ============================== */
const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 70 },
    { name: "JavaScript", level: 60 },
    { name: "Python", level: 85 },
    { name: "Flask / Django", level: 75 },
    { name: "Machine Learning", level: 65 }
];

/* Conteneur HTML */
const container = document.getElementById("skills-container");

/* Création des barres */
skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill";

    div.innerHTML = `
        <strong>${skill.name} — ${skill.level}%</strong>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
    `;

    container.appendChild(div);
});

/* Animation au chargement */
window.addEventListener("load", () => {
    document.querySelectorAll(".progress").forEach((bar, i) => {
        bar.style.width = skills[i].level + "%";
    });
});

/* MODE CLAIR / SOMBRE */
const toggle = document.getElementById("theme-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
});
/* Initialisation du thème */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add("dark");
}