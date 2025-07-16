document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href').replace('#', '');
    const allSections = document.querySelectorAll('.page-section');

    allSections.forEach(section => section.classList.add('d-none'));

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.remove('d-none');
      window.history.pushState(null, '', `#${targetId}`);
    }
  });
});


if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
  // Hide all sections
  document.querySelectorAll('.page-section').forEach(s => s.classList.add('d-none'));

  // Show home section
  const home = document.getElementById('home');
  if (home) home.classList.remove('d-none');

  // Scroll to top immediately
  window.scrollTo(0, 0);

  // Reset URL to #home cleanly
  history.replaceState(null, '', '#home');
  home.style.visibility = 'visible';
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', e => {
    link.blur();  // Remove focus to get rid of the glow
  });
});

// home.style.visibility = 'visible';

// 0000000000000000000000000000000000000000000000000000000000
//Mobile navbar starts from here

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("hamburgerToggle");
  const menuOverlay = document.getElementById("mobileMenuOverlay");
  const closeBtn = document.getElementById("closeMobileMenu");

  if (toggleBtn && menuOverlay && closeBtn) {
    toggleBtn.addEventListener("click", () => {
      menuOverlay.classList.add("show");
      document.documentElement.classList.add("nav-open"); // <html>
      document.body.classList.add("nav-open");            // <body>
    });

    closeBtn.addEventListener("click", () => {
      menuOverlay.classList.remove("show");
      document.documentElement.classList.remove("nav-open");
      document.body.classList.remove("nav-open");
    });

    document.querySelectorAll(".mobile-nav .nav-link").forEach(link => {
      link.addEventListener("click", () => {
        menuOverlay.classList.remove("show");
        document.documentElement.classList.remove("nav-open");
        document.body.classList.remove("nav-open");
      });
    });
  }
});

// Hide and seek




