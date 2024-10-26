let menu = document.querySelector(".menu");
let wrapper = document.querySelector(".wrapper");

let nav = document.querySelector("nav");

let navItems = document.querySelector(".nav-items");
let close = document.querySelector(".close");

menu.addEventListener("click", () => {
  nav.style.height = "100vh";
  menu.style.display = "none";
  close.style.display = "initial";
});

close.addEventListener("click", () => {
  nav.style.height = "10vh";
  menu.style.display = "initial";
  close.style.display = "none";
});
