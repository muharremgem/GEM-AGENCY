/*Intro animation*/
const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add("appear");
    }, (idx + 1) * 90);
  });

  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove("appear");
        span.classList.add("fade");
      }, (idx + 1) * 80);
    });
  }, 1500);

  setTimeout(() => {
    intro.style.top = "-100vh";
  }, 2000);
});

/*Show menu*/
const showMenu = (toggleId, navID) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navID);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show_menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*Active and remove menu*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*This is for removing menu on click on mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show_menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*Auto write text*/

var app = document.getElementById("autoWrite");

var typewriter = new Typewriter(app, {
  strings: ["Full Stack Developer", "Web Design ", "React Developer"],
  loop: true,
  autoStart: true,
});

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  // reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home_title", {});
sr.reveal(".button", { delay: 100 });
sr.reveal(".home_img", { delay: 100 });
sr.reveal(".home_social-icon", { interval: 100 });

/*SCROLL ABOUT*/
sr.reveal(".about_img", {});
sr.reveal(".about_subtitle", { delay: 100 });
sr.reveal(".about_text", { delay: 100 });

/*SCROLL SKILLS*/
sr.reveal(".skills_subtitle", {});
sr.reveal(".skills_text", {});
sr.reveal(".skills_data", { interval: 100 });
sr.reveal(".skills_img", { delay: 100 });

/*SCROLL WORK*/
sr.reveal(".work_img", { interval: 100 });

/*SCROLL CONTACT*/
sr.reveal(".contact_input", { interval: 100 });

/*Toggle dark mode*/
const toggleDarkMode = document.getElementById("toggle");

toggleDarkMode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("head").classList.toggle("dark");
});
document.body.classList.toggle("dark");
document.getElementById("head").classList.toggle("dark");

/*Particles.js*/
particlesJS.load("particles-js", "assets/particles.json");

///********* Sound keyboard  *************/

// ContactForm

// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceID = "service_y4ldjqo";
//   const templateID = "template_8t19a6n";

//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//       alert("Your message sent successfully!!");
//     })
//     .catch((err) => console.log(err));
// }

function sendMail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || message == "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  var params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_y4ldjqo";
  const templateID = "template_8t19a6n";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));

  return false;
}

function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
