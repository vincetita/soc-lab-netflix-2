document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active-link"));
      link.classList.add("active-link");
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active-link",
            link.getAttribute("href") === `#${id}`
          );
        });
      });
    },
    {
      threshold: 0.35,
      rootMargin: "-10% 0px -45% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));

  const scrollers = document.querySelectorAll(".scroller");
  scrollers.forEach((scroller) => {
    scroller.addEventListener("wheel", (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        scroller.scrollLeft += event.deltaY;
      }
    }, { passive: false });
  });
});