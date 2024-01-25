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


// script Formulaire //
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
event.preventDefault();

const formData = new FormData(form);

const name = formData.get('name');
const email = formData.get('email');
const message = formData.get('message')

form.requestFullscreen();
})