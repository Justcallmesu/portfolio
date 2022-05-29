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
        addClass(section.home);
    } else if (clientLocation > section.about.offsetTop - 100 && clientLocation < section.projects.offsetTop - 300) {
        addClass(section.about);
    } else if (clientLocation > section.projects.offsetTop - 300 && clientLocation < section.contact.offsetTop - 300) {
        addClass(section.projects);
    } else if (clientLocation > section.contact.offsetTop - 300) {
        addClass(section.contact)
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

// Javascript Validation
const formElements = {
    input: document.querySelectorAll("#contact .input"),
    submit: document.getElementById("submit"),
    errorList: document.querySelector("#contact .error ul"),
    success: document.querySelector("#contact .success"),
}

// Array To store Error
const error = [];
let errorElements;

// Regex
const regex = {
    fullname: /^[a-zA-Z\s]*$/i,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i
}

const node = {
    list: null,
    paragraph: null,
    text: null
}

function removeElement(clear) {
    errorElements.forEach((el) => {
        el.remove();
    });
    if (clear) {
        formElements.errorList.parentNode.classList.remove("dis-block");
    }
}

function createNode(el) {
    node.paragraph = document.createElement("p");
    node.list = document.createElement("li");
    node.text = document.createTextNode(el);

    node.paragraph.appendChild(node.text);
    node.list.appendChild(node.paragraph);

    node.list.classList.add("errorView")
    formElements.errorList.appendChild(node.list);
}

function emptyForm(el) {
    if (el.getAttribute("name") === "fullname") {
        error.push("Are you nameless ?");
    } else if (el.getAttribute("name") === "email") {
        error.push("but.. but... we need your email");
    } else {
        error.push("ah yes secret message is the empty message");
    }
}

function validate(el) {
    if (el.getAttribute("name") === "fullname") {
        if (!regex.fullname.test(el.value)) {
            error.push("What kind of name is that are you a robot ?")
        }
    } else if (el.getAttribute("name") === "email") {
        if (!regex.email.test(el.value)) {
            error.push("To be honest that email isnt valid");
        }
    }
}

function successNotification() {
    formElements.success.classList.add("dis-block");
    formElements.input.forEach((el) => {
        el.value = "";
    })
    setTimeout(() => formElements.success.classList.remove("dis-block"), 5000);
}

function createElement(error) {
    if (errorElements) {
        removeElement();
    }

    if (typeof error === "object") {
        error.forEach((el) => {
            createNode(el);
        })
    } else {
        createNode(error);
    }
    formElements.errorList.parentNode.classList.add("dis-block");
}


function checkError() {
    errorElements = document.querySelectorAll(".errorView");
    if (errorElements.length < 2) {
        errorElements.forEach((el, index) => {
            if (!(el.innerText === error[index])) {
                createElement(error[index]);
                return;
            }
        })
    }
    createElement(error);
}

function sendEmail() {
    errorElements = document.querySelectorAll(".errorView");
    const data = {
        from: formElements.input[0].value,
        email: formElements.input[1].value,
        body: formElements.input[2].value
    }
    if (errorElements) {
        removeElement(true);
    }
    Email.send({
        SecureToken: "737676e0-8430-4825-b15c-26258f2cb31b",
        To: 'winatardisuwanto@gmail.com',
        From: `winatardisuwanto@gmail.com`,
        Subject: "Someone send you email from your Portofolio !",
        Body: `Email : ${data.email} <br/>
        Dear Su, ${data.body}`
    }).then((message) => {
        message === "OK" ? successNotification() : createElement(message)
    });
}


function validation(event) {
    event.preventDefault();
    event.stopPropagation();

    if (error.length) {
        error.length = 0;
    }
    formElements.input.forEach((el) => {
        if (!el.value) {
            emptyForm(el)
            return;
        }
        if (el.value) {
            validate(el);
            return;
        }
    });
    if (error.length) {
        checkError();
        return;
    }
    sendEmail();
};

formElements.submit.addEventListener("click", validation)