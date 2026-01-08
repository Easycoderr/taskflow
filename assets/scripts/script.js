const heroSectionEl = document.getElementById("hero");
const headerEl = document.getElementById("header");

const Observer = new IntersectionObserver(([entry]) => {
  if (!entry.isIntersecting) {
    headerEl.classList.add(
      "sticky",
      "top-0",
      "z-50",
      "bg-white/50",
      "backdrop-blur-sm"
    );
  } else {
    headerEl.classList.remove("sticky", "top-0", "z-50", "bg-white");
  }
});
Observer.observe(heroSectionEl);

// detect scrolling for give header sticky
let lastScrollTop = 0;
const navbar = document.getElementById("header"); // Example: element to hide/show
window.addEventListener(
  "scroll",
  function () {
    // Get the current vertical scroll position
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      // Scrolling Down
      headerEl.classList.add("sticky", "top-0", "z-50", "bg-white");
      // Example action: Hide a fixed header
      // navbar.style.marginTop = '-100px';
    } else if (st < lastScrollTop) {
      // Scrolling Up
      headerEl.classList.remove("sticky", "top-0", "z-50", "bg-white");
      // Example action: Show a fixed header
      // navbar.style.marginTop = '0px';
    }

    // Update the last scroll position for the next event
    // Use Math.max(0, st) for mobile/negative scrolling issues
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
