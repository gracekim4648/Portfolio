'user stric';

// make navbar transparent when it's on top

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
  // console.log(event.target.dataset.link);
});

//Handle click on 'contact me' button on home

const homeContactMe = document.querySelector('.home_contact');
homeContactMe.addEventListener('click', () => {
  scrollIntoView('#contact');
});

// Home fading to transparent as scrolling down

const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
  console.log(1 - window.scrollY / homeHeight);
});

function scrollIntoView(selector) {
  const scrollTo2 = document.querySelector(selector);
  scrollTo2.scrollIntoView({ behavior: 'smooth' });
}
