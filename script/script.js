const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navbar');

function toggleNav(){
  console.log('click');
  if(!hamburger.classList.contains('active')){
    nav.classList.add('open');
    hamburger.classList.add('active');
  }else{
    nav.classList.remove('open');
    hamburger.classList.remove('active');
  }
}

hamburger.addEventListener('click', toggleNav);


const form = document.querySelector('form');

const submitButton = document.querySelector('button[type="submit"]');

submitButton.addEventListener('click', checkForm);

function checkForm(event) {
  event.preventDefault();
  event.stopPropagation();

  const isEmpty = Array.from(form.elements).some(field => field.value.trim() = '');
  if (isEmpty) {
    alert('Veuillez remplir tous les champs du formulaire.');
    return false;
  }
  form.submit();
} 