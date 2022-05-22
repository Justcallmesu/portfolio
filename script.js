// Hamburger Icon
const hamburger = document.querySelector(".button");
const navigation = document.querySelector(".nav-links");
function navbar() {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("height-animation");
}

hamburger.addEventListener("click", navbar);

navigation.addEventListener("click", navbar);

// Adaptability Navigation
let navbarLinkActive;
const navlinks = document.querySelectorAll("nav .nav-links ul li a");

// Element Variable
const home = document.getElementById("home");
const about = document.getElementById("about");

function removeClass(element) {
    if (navbarLinkActive) {
        const temp = navbarLinkActive?.getAttribute("href").split("#")[1];
        if (!(temp === element)) {
            console.log("hello");
            navbarLinkActive.classList.remove("active");
        }
    }
}

function addClass(target) {
    navlinks.forEach((el) => {
        const link = el.getAttribute("href").split("#")[1];

        if (link === target.id) {
            if (navbarLinkActive) {
                removeClass(link);
            }

            el.classList.add("active");
            navbarLinkActive = el;
            return;
        }
    })
}

document.addEventListener("scroll", function () {
    const clientLocation = document.querySelector("html").scrollTop;
    if (clientLocation >= home.offsetTop && clientLocation <= about.offsetTop - 200) {
        addClass(home);
    } else if (clientLocation > about.offsetTop - 100) {
        addClass(about);
    }


})

