//const navSlide = ()=>{
//  const burger = document.querySelector(".burger");
//  const nav = document.querySelector(".nav-links");
//  const navLinks = document.querySelectorAll('.nav-links li');
  //Toggle links
//  burger.addEventListener("click", ()=>{
    //Toggle links
//    nav.classList.toggle("nav-active");
    //Animate Links
//    navLinks.forEach((link, index) => {
      //link.style.animation = `navLinkFade 0.5s ease forward ${index / 7}s`;
      //console.log(index);
//      if(link.style.animation){
//        link.style.animation = '';
//      } else{
//        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//      }
      
//    });

    //Burger Animation
//    burger.classList.toggle('toggle');
//  });
  //Animate Links
  
//}

//navSlide();

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

navAnimation();

