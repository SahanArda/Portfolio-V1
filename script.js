const resumeBtn = document.querySelector("#resume-btn");

resumeBtn.addEventListener("click", () => {
    window.open("https://www.google.com");
});

const menuHamburger = document.querySelector("#menu-hamburger");

menuHamburger.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("active");
});

