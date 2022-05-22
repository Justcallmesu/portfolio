// Hamburger Icon
const hamburger = document.querySelector(".button");
const navigation = document.querySelector(".nav-links");
let navbarLinkActive;
function getLinks() {
    navbarLinkActive = location.href.split("#")[1];
    console.log(navbarLinkActive);
}

function navbar() {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("height-animation");
    setTimeout(getLinks, 100);
}

hamburger.addEventListener("click", navbar);

navigation.addEventListener("click", navbar);