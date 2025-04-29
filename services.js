const sub = document.querySelector(".nav3");
const addd = document.querySelector(".submenu-services");
const rotate = document.querySelector("svg");
const n1 = document.querySelector(".btn");
const n2 = document.querySelector(".header");

const toggle2 = () => {
    n2.classList.toggle("active-nav");
};
n1.addEventListener("click", () => toggle2());

const toggle = () => {
    addd.classList.toggle("active");
    rotate.classList.toggle("rotate");
};

sub.addEventListener("click", () => toggle());

const n4 = document.querySelector(".nav-extra1");

const widthchnage = () => {
    n4.classList.toggle("nav-extra");
};
n4.addEventListener("click", () => widthchnage());