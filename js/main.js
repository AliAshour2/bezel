var navbarCollapse = document.getElementById("navbarNavAltMarkup");

// Check if the show class is present
if (navbarCollapse.classList.contains("show")) {
  // Add the bg-white class to the navbar-nav
  document.querySelector(".navbar-nav").classList.add("bg-white");
}

window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  let navIcon = document.getElementById("navbar-brand");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    navIcon.src = "assets/logo-dark.png"; // Fixed the image path
  } else {
    nav.classList.remove("scrolled");
    navIcon.src = "assets/logo-light.png";
  }
});

// SETUP ANIMATION FOR TYPYING EFFICT
var typed = new Typed("#typing", {
  strings: ["apps", "websites", "software"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var logoImage = document.querySelector("#navbar-brand img");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");

      logoImage.src = "assets/logo-dark.png";
    } else {
      navbar.classList.remove("scrolled");

      logoImage.src = "assets/logo-light.png";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init();

  // Get the carousel element
  var myCarousel = document.getElementById("carouselExampleIndicators");

  // Add an event listener for the 'slid.bs.carousel' event
  myCarousel.addEventListener("slid.bs.carousel", function () {
    // Trigger AOS refresh after the carousel slide transition is complete
    AOS.refresh();
  });
});
