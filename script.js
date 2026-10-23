const root = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");
const shareBtn = document.getElementById("share-btn");
const toast = document.getElementById("toast");

// Tema: usa preferência salva ou a do sistema
const saved = localStorage.getItem("devlinks-theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
setTheme(saved || (prefersLight ? "light" : "dark"));

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("devlinks-theme", theme);
}

themeBtn.addEventListener("click", () => {
  setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

// Copiar link da página
shareBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link copiado!");
  } catch {
    showToast("Não foi possível copiar 😕");
  }
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}
