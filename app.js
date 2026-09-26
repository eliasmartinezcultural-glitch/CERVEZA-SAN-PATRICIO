const contactNumber = ""; // Cargar aquí el WhatsApp real cuando lo confirme el productor.
document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
  links.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const contactButton = document.getElementById("contactButton");
contactButton.addEventListener("click", () => {
  if (!contactNumber) {
    contactButton.textContent = "Falta configurar el WhatsApp";
    setTimeout(() => contactButton.textContent = "Configurar contacto", 2200);
    return;
  }
  window.open("https://wa.me/" + contactNumber.replace(/\D/g, ""), "_blank", "noopener");
});
