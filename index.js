let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

let cursor_1 = document.querySelector(".cursor_1");
let cursor_2 = document.querySelector(".cursor_2");

window.onmousemove = (e) => {
  cursor_1.style.top = e.pageY + "px";
  cursor_1.style.left = e.pageX + "px";

  cursor_2.style.top = e.pageY + "px";
  cursor_2.style.left = e.pageX + "px";
};

document.querySelectorAll("a").forEach((links) => {
  links.onmouseenter = () => {
    cursor_1.classList.add("active");
    cursor_2.classList.add("active");
  };
  links.onmouseleave = () => {
    cursor_1.classList.remove("active");
    cursor_2.classList.remove("active");
  };
});
