const signupSection = document.getElementById('sign-up');
const form = signupSection.querySelector('form');
const email = form.querySelector('input');
const errorMessage = form.querySelector('span');

const successSection = document.getElementById('success');
const dismissButton = successSection.querySelector('button');
const validEmail = successSection.querySelector('span');


email.addEventListener('input', () => {
  if (email.validity.valid) {
    errorMessage.textContent = '';
    email.classList.remove('error');
  } else {
    showError();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (!email.validity.valid) {
    showError();
  } else {
    signupSection.classList.add('hidden');
    successSection.classList.add('visible');
    validEmail.textContent = `${email.value}`;
  }
});

const showError = () => {
  if (email.validity.valueMissing || email.validity.typeMismatch) {
    errorMessage.textContent = 'Valid email required';
    email.classList.add('error');
  }
}

dismissButton.addEventListener('click', () => {
  successSection.classList.remove('visible');
  signupSection.classList.remove('hidden');
  email.value = '';
});