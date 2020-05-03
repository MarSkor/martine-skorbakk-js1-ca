const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const answer = document.querySelector("#answer");
const answerError = document.querySelector("#answerError");
let answerHasError = false;

const email = document.querySelector("#email");
const invalidEmail = document.querySelector("#invalidEmailError");
let emailHasError = false;

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
let addressHasError = false;

const submitMessage = document.querySelector("#submit-message");

form.addEventListener("submit", formValidation);

function formValidation() {
  event.preventDefault();

  //name = required
  const nameValue = name.value;
  if (verifyLength(nameValue, 1) === true) {
    nameError.style.display = "none";
    nameHasError = false;
  } else {
    nameError.style.display = "block";
    nameHasError = true;
  }

  //answer = must have a value with a minimum length of 10
  const answerValue = answer.value;
  if (verifyLength(answerValue, 10) === true) {
    answerError.style.display = "none";
    answerHasError = false;
  } else {
    answerError.style.display = "block";
    answerHasError = true;
  }

  //email = must have a value and be formatted like an email address
  const emailValue = email.value;
  if (verifyEmail(emailValue)) {
    invalidEmail.style.display = "none";
    emailHasError = false;
  } else {
    invalidEmail.style.display = "block";
    emailHasError = true;
  }

  // address = must have a value with a minimum length of 15
  const addressValue = address.value;

  if (verifyLength(addressValue, 15) === true) {
    addressError.style.display = "none";
    addressHasError = false;
  } else {
    addressError.style.display = "block";
    addressHasError = true;
  }

  //message to display if all inputs are error free
  if (
    (nameHasError === true,
    addressHasError === true,
    emailHasError === true,
    answerHasError === true)
  ) {
    submitMessage.style.display = "none";
  } else {
    submitMessage.style.display = "block";
  }
}

function verifyLength(value, lengthCheck) {
  const valueIsTrimmed = value.trim();

  if (valueIsTrimmed.length >= lengthCheck) {
    return true;
  } else {
    return false;
  }
}

// verify if email is valid
function verifyEmail(email) {
  const regEx = /\S+@\S+\.\S+/;

  if (regEx.test(email)) {
    return true;
  } else {
    return false;
  }
}
