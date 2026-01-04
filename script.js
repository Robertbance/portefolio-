/* COMPÉTENCES */
const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 70 },
    { name: "JavaScript", level: 20 },
    { name: "Python", level: 65 },
    { name: "Flask / Django", level: 25 },
    { name: "Machine Learning", level: 50 },
    { name: "Figma UI/UX", level: 75 }
];

const container = document.getElementById("skills-container");

skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill";

    div.innerHTML = `
        <div class="skill-name">${skill.name} — ${skill.level}%</div>
        <div class="progress-bar">
            <div class="progress"></div>
        </div>
    `;

    container.appendChild(div);
});

window.addEventListener("load", () => {
    document.querySelectorAll(".progress").forEach((bar, i) => {
        bar.style.width = skills[i].level + "%";
    });
});

/* MODE CLAIR / SOMBRE */
const toggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});
