const resumeBtn = document.querySelector("#resume-btn");

resumeBtn.addEventListener("click", () => {
  window.open("https://www.google.com");
});

const menuHamburger = document.querySelector("#menu-hamburger");
menuHamburger.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
  body.classList.toggle("scroll-none");
  menuHamburger.style.top = "2%";
});

function closeNav() {
  const nav = document.querySelector("nav");
  nav.classList.remove("active");
  body.classList.remove("scroll-none");
}

const body = document.body;
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up")
  }
  if (currentScroll <= 140)sticky.addClass('scroll-up')

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
  }

  lastScroll = currentScroll;
})
