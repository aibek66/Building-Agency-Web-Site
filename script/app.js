

// Navbar menu animation
const menuIcon = document.querySelector('.menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');

const NavbarMenuHandler = () => {
  navbarMenu.classList.toggle('active');
  const body = document.querySelector('body');
  body.classList.toggle('fixed');
};

menuIcon.addEventListener('click', NavbarMenuHandler);

// navigation navbar menu
const anchors = document.querySelector('header').querySelectorAll('a[href*="#"]');
console.log(anchors);

for(let anchor of anchors){
  anchor.addEventListener('click', (event) => {
    NavbarMenuHandler();
    event.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
        behavior: "smooth",
        block: 'start'
    });
  });
};

// Slider in Clients Section
let slideIndex = 0;
const indicators = document.querySelectorAll('.indicator');


function showSlide(index){
  const comments = document.querySelectorAll('.client-comment');

  for (let comment of comments){
    comment.style.display = 'none';
  }

  comments[index].style.display = 'block';
  
}

showSlide(slideIndex);

for(let indicator of indicators){
  indicator.addEventListener('click', function(){
    showSlide(slideIndex = this.id);
  })
}