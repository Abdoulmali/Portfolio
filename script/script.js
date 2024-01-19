const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

function toggleNavbar(){
  if(!hamburger.classList.contains('close')){
    navbar.classList.add('open');
    hamburger.classList.add('close');
  }else{
    navbar.classList.remove('open')
    hamburger.classList.remove('close')
  }
}

hamburger.addEventListener('click',toggleNavbar);