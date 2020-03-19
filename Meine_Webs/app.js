const navAnimation = ()=> {
  const hamburger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
  //Burger Animation
  hamburger.classList.toggle('toggle');
  });
};

const app = () => {
  navAnimation();
};

app();
