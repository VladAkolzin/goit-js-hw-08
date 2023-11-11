import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const formKey = 'feedback-form-state';
let clearLocalStorage = true;

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);
function handleInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  const user = {
    email,
    message,
  };
  localStorage.setItem(formKey, JSON.stringify(user));
}
const LSKey = localStorage.getItem(formKey);
if (LSKey) {
  const { email, message } = JSON.parse(LSKey);
  form.elements.email.value = email;
  form.elements.message.value = message;
}
function handleSubmit(event) {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Заповніть усі поля форми');
    clearLocalStorage = false;
  } else {
    const userObj = {
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
    console.log(userObj);
    form.reset();
  }

  if (clearLocalStorage) {
    localStorage.removeItem(formKey);
  }
}
