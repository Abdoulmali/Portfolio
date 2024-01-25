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


const form = document.querySelector('form');

const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', checkForm);
function checkForm(event) {
  event.preventDefault();

  const isEmpty = Array.form(form.elements).some(field => field.value.trim() == '');
  if (isEmpty) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return false;
  }
  form.submit();
} 