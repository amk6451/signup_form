const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phonenumber = document.getElementById("phonenumber");
const password = document.getElementById("password");
const confirm = document.getElementById('confirm');
const submitButton = document.getElementById("submitButton");


const firstError = document.getElementById("firstError");
const lastError = document.getElementById("lastError");
const emailError = document.getElementById("emailError");
const phonenumberError = document.getElementById("phonenumberError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById('confirmError');

const form = document.getElementById('form');


firstname.addEventListener("keyup", function (event) {
  if (firstname.value === '') {
    firstError.textContent = '*Please type in your first name.';
    firstError.classList.add('invalid');
    
  } else {
    firstError.textContent = '';
    firstError.classList.remove('invalid');
  }
}); 

lastname.addEventListener("keyup", function (event) {
  if (lastname.value === '') {
    lastError.textContent = '*Please type in your last name.';
    lastError.classList.add('invalid');
  } else {
    lastError.textContent = '';
    lastError.classList.remove('invalid');
  }
}); 

email.addEventListener("input", (event) => {
  const emailPattern = /^.+@.+$/;;

  if (!event.target.value.match(emailPattern)) {
    emailError.textContent = "*Please enter a valid email";
    emailError.classList.add('invalid');
  } else {
    emailError.textContent = "";
    emailError.classList.remove('invalid');
  }
});

phonenumber.addEventListener("input", (event) =>{
  const phonenumberPattern = /^(\d{3}[-\s]?){2}\d{4}$/;
  if(!event.target.value.match(phonenumberPattern)){
    phonenumberError.textContent = "*Please enter a valid phone number";
    phonenumberError.classList.add('invalid');
  }
  else {
    phonenumberError.textContent = "";
    phonenumberError.classList.remove('invalid');
  };
});

password.addEventListener("keydown", (event) => {
  if (password.validity.typeMismatch) {
    passwordError.textContent = "Please enter in a valid Email. Example: abc@email.com";
  }
}); 

form.addEventListener('submit', function(event) {
  const errorCheck = document.querySelectorAll(".invalid");
  for (const item of errorCheck) { 
      if (item.classList !== null) {
          event.preventDefault();
      }
  }
});