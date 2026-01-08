const heroSectionEl = document.getElementById("hero");
const headerEl = document.getElementById("header");
const menuBtnEl = document.getElementById("menu-btn");
const mobileNavEl = document.getElementById("mobile-nav");

const Observer = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    headerEl.classList.add("sticky", "top-0", "z-50", "bg-white", "border-b");
  } else {
    headerEl.classList.remove("sticky", "top-0", "z-50", "bg-white");
  }
});
Observer.observe(heroSectionEl);

// detect scrolling for give header sticky
let lastScrollTop = 0;

window.addEventListener(
  "scroll",
  function () {
    if (!mobileNavEl.classList.contains("hidden")) {
      mobileNavEl.classList.add("hidden");
      toggleMenuBtnIcon();
    }
    // Get the current vertical scroll position
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      // Scrolling Down
      headerEl.classList.add("sticky", "top-0", "z-50", "bg-white");
      // Example action: Hide a fixed header
    } else if (st < lastScrollTop) {
      // Scrolling Up
      headerEl.classList.remove("sticky", "top-0", "z-50", "bg-white");
      // Example action: Show a fixed header
    }

    // Update the last scroll position for the next event
    // Use Math.max(0, st) for mobile/negative scrolling issues
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
// toggle menu
menuBtnEl.addEventListener("click", (e) => {
  mobileNavEl.classList.toggle("hidden");
  toggleMenuBtnIcon();
});
mobileNavEl.addEventListener("click", () => {
  mobileNavEl.classList.add("hidden");
  toggleMenuBtnIcon();
});

// toggle menu btn icon

function toggleMenuBtnIcon() {
  if (mobileNavEl.classList.contains("hidden")) {
    menuBtnEl.innerHTML = "<i class='bx  bxs-menu' style='color:#1e1e1e'></i>";
  } else {
    menuBtnEl.innerHTML = "<i class='bx  bxs-x' style='color:#1e1e1e'></i>";
  }
}
