// Hamburger Icon
const nav = {
    hamburger: document.querySelector(".button"),
    navigation: document.querySelector(".nav-links")
}

function navbar() {
    nav.hamburger.classList.toggle("active");
    nav.navigation.classList.toggle("height-animation");
}

nav.hamburger.addEventListener("click", navbar);
nav.navigation.addEventListener("click", navbar);


// Adaptability Navigation
const navlinks = document.querySelectorAll("nav .nav-links ul li a");
let navbarLinkActive;

// Element Object
const section = {
    home: document.getElementById("home"),
    about: document.getElementById("about"),
    projects: document.getElementById("projects"),
    contact: document.getElementById("contact")
}


function removeClass(element) {
    if (navbarLinkActive) {
        const temp = navbarLinkActive?.getAttribute("href").split("#")[1];

        // in case you wondering what the uses of ? in code above
        // the ? symbol usage is if this properties or method is available run it.
        // the ? symbol is used too to pass some error like there is case where the element doesnt have this method
        // becouse it is either undefined or null then this will help you pass it

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
    if (clientLocation >= section.home.offsetTop && clientLocation <= section.about.offsetTop - 200) {
        addClass(home);
    } else if (clientLocation > section.about.offsetTop - 100 && clientLocation < section.projects.offsetTop - 300) {
        addClass(about);
    } else if (clientLocation > section.projects.offsetTop - 300) {
        addClass(projects);
    }
})
addClass(home);


// Skills Function
const elements = {
    icons: document.getElementsByClassName("skills-icon")[0],
    details: document.querySelectorAll(".skills .details > div"),
    container: document.querySelector(".skills .details")
}
let activated;

function deleteText() { // function to text if there is element has dis-flex class
    setTimeout(() => {
        activated = document.getElementsByClassName("dis-flex")[0];
        if (activated) {
            document.querySelector(".details .heading-content").innerText = "";
        } else {
            document.querySelector(".details .heading-content").innerText = "Click icon below for detailed information";
        }
    }, 100);
}

function removeClassList(element) { // function to delete element class that passed by
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

function notification() { // Function to know if the element is scrollable
    if (elements.container.scrollHeight > elements.container.clientHeight) {
        document.querySelector(".skills .notification").classList.add("visibility");
    } else {
        document.querySelector(".skills .notification").classList.remove("visibility");
    }
}

function classAdd(element) { // function to add class to element that passed by
    element.classList.add("dis-flex");
    setTimeout(() => {
        element.classList.add("opacity");
    }, 100);
    deleteText();
    notification();
}

elements.icons.addEventListener("click", (event) => {
    elements.details.forEach((el) => {
        if (event.target.getAttribute("skills") === el.classList[0]) {
            removeClassList(el);
            return;
        }
    })
})