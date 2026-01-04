const skills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 70 },
    { name: "JavaScript", level: 60 },
    { name: "Python", level: 85 },
    { name: "Flask / Django", level: 75 },
    { name: "Machine Learning", level: 65 }
];

const container = document.getElementById("skills-container");

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

window.addEventListener("load", () => {
    document.querySelectorAll(".progress").forEach((bar, i) => {
        bar.style.width = skills[i].level + "%";
    });
});

/* Theme */
const toggle = document.getElementById("theme-toggle");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
});

/* Mobile menu */
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});
