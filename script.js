// Hamburger Icon
const hamburger = document.querySelector(".button");
const navigation = document.querySelector(".nav-links");
function navbar() {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("height-animation");
}

hamburger?.addEventListener("click", navbar);
navigation?.addEventListener("click", navbar);

// Adaptability Navigation
let navbarLinkActive;
const navlinks = document.querySelectorAll("nav .nav-links ul li a");

// Element Variable
const home = document.getElementById("home");
const about = document.getElementById("about");
const projects = document.getElementById("projects")


function removeClass(element) {
    if (navbarLinkActive) {
        const temp = navbarLinkActive?.getAttribute("href").split("#")[1];
        if (!(temp === element)) {
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
    } else if (clientLocation > projects.offsetTop) {
        addClass(projects);
    }
})

addClass(home);


// Skills Function

const icons = document.getElementsByClassName("skills-icon")[0];
const details = document.querySelectorAll(".skills .details > div");
const container = document.querySelector(".skills .details");
let activated;

function deleteText() {
    setTimeout(() => {
        activated = document.getElementsByClassName("dis-flex")[0];
        if (activated) {
            document.querySelector(".details .heading-content").innerText = "";
        } else {
            document.querySelector(".details .heading-content").innerText = "Click icon below for detailed information";
        }
    }, 100);
}

function removeClassList(element) {
    activated = document.getElementsByClassName("dis-flex")[0];
    if (activated) {
        setTimeout(() => {
            activated.classList.remove("dis-flex");
            classAdd(element);
        }, 100);
        activated.classList.remove("opacity");
        return;
    }
    classAdd(element);
}

function notification() {
    if (container.scrollHeight > container.clientHeight) {
        document.querySelector(".skills .notification").classList.add("visibility");
    } else {
        document.querySelector(".skills .notification").classList.remove("visibility");
    }
}

function classAdd(element) {
    element.classList.add("dis-flex");
    setTimeout(() => {
        element.classList.add("opacity");
    }, 100);
    deleteText();
    notification();
}

icons.addEventListener("click", (event) => {
    details.forEach((el) => {
        if (event.target.getAttribute("skills") === el.classList[0]) {
            removeClassList(el);
        }
    })
})