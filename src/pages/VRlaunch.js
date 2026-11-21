/* Georgia Tech Dorm Launch Page */
import "../styles/launch.css";
const EXPERIENCE_URL = ""; // Paste VR tour URL here

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector("#dorm-launch-css")) {
    const css = document.createElement("link");
    css.id = "dorm-launch-css";
    css.rel = "stylesheet";
    css.href = "../styles/launch.css";
    document.head.appendChild(css);
  }

  const menu = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-main-nav]");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menu.setAttribute("aria-expanded", String(open));
    });
  }

  // Launch the dorm VR experience
  const launch = document.querySelector(
    "[data-launch-experience]"
  );

  if (launch) {
    launch.addEventListener("click", () => {
      if (EXPERIENCE_URL.trim()) {
        window.open(
          EXPERIENCE_URL,
          "_blank",
          "noopener,noreferrer"
        );
      } else {
        alert(
          "Add your 360° dorm tour URL to script.js first!"
        );
      }
    });
  }
});
