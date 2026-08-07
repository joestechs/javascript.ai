// Theme Management
const initTheme = () => {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeIcon(theme);
};

const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon(next);
};

const updateThemeIcon = (theme) => {
  const btn = document.querySelector(".theme-toggle");
  if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
};

// Mobile Menu
const initMobileMenu = () => {
  const btn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".mobile-nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    nav.classList.toggle("open");
    btn.textContent = nav.classList.contains("open") ? "✕" : "☰";
  });
};

// Copy Code Buttons
const initCopyButtons = () => {
  document.querySelectorAll("pre").forEach((pre) => {
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener("click", async () => {
      const code = pre.querySelector("code")?.innerText || pre.innerText;
      await navigator.clipboard.writeText(code);
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 2000);
    });
    pre.appendChild(btn);
  });
};

// Interview Q&A Accordion
const initQA = () => {
  document.querySelectorAll(".qa-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".qa-item");
      const isOpen = item.classList.contains("open");
      document
        .querySelectorAll(".qa-item")
        .forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
};

// Highlight Active Sidebar Link
const initSidebar = () => {
  const links = document.querySelectorAll(".sidebar-list a");
  const current = location.pathname.split("/").pop() || "index.html";
  links.forEach((link) => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initCopyButtons();
  initQA();
  initSidebar();

  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });
});
