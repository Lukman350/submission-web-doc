const navbarToggler = document.getElementById("navbar-btn");
const navbarNav = document.querySelector(".navbar-nav");
const header = document.getElementsByTagName("header");

navbarToggler.addEventListener("click", () => {
  navbarToggler.classList.toggle("active");
  navbarNav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header[0].classList.add("sticky");
  } else {
    header[0].classList.remove("sticky");
  }
});
