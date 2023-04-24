
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

const globalForm = document.querySelector("form");
const formData = document.querySelectorAll(".formData");

// ELEMENTS Formulaire MODAL1
const crossModal = document.querySelector(".close");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const emailValue = document.querySelector("#email");
const birthdayValue = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const checkboxes = document.querySelectorAll(".checkbox-input");

const buttonSubmit = document.querySelector(".btn-submit");

// MODAL Confirmation
const modalConfirm = document.querySelector(".confirm");
const btnFermer = document.querySelector("#fermer");

// ZONE des messages d'erreurs
const errorFirst = document.querySelector(".error-first");
const errorLast = document.querySelector(".error-last");
const errorEmail = document.querySelector(".error-email");
const errorBirthday = document.querySelector(".error-birthday");
const errorQuantity = document.querySelector(".error-quantity");
const errorCheckbox = document.querySelector(".error-checkbox");
const errorTerm = document.getElementById("required");
// const errors = document.querySelector(".errors");

const checkboxTerm = document.getElementById("checkbox1");


function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}
// close modal confirm
function closeConfirm() {
  // modalConfirm.style.display = "none";
  location.reload();
}
// CHECK Firstname
const checkFirstName = () => {
  const valueFirst = firstName.value.trim();
  if (valueFirst.length > 2 && valueFirst !== '') {
    console.log("OK FIRST cest bon tu peux passer");
    firstName.style.border =  "10px solid green";
    errorFirst.style.display = "none";
    return true;
  }
  else {
    console.log("NON FIRST pas bon tu peux pas passer");
    firstName.style.border =  "3px solid red";
    errorFirst.style.color = "red";
    errorFirst.style.display = "block";
    return false;
  }
}
// CHECK lastsname
const checkLastName = () => {
  const valueLast = lastName.value.trim();
  if (valueLast.length > 2 && valueLast !== '') {
    console.log("OK LAST cest bon tu peux passer");
    lastName.style.border =  "10px solid green";
    errorLast.style.display = "none";
    return true;
  }
  else {
    console.log("NON LAST pas bon tu peux pas passer");
    lastName.style.border =  "3px solid red";
    errorLast.style.color = "red";
    errorLast.style.display = "block";
  }
}
// CHECK mail
function isEmailValid(email){
  var emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
  return emailReg.test(email);
}
const checkEmail = () => {
  const email = emailValue.value;
  if(isEmailValid(email)){
    console.log("OK Email valide");
    
    emailValue.style.border =  "10px solid green";
    errorEmail.style.display = "none";
    
    return true;
  } else {
    console.log("NON : Email invalide");
    
    emailValue.style.border =  "3px solid red";
    errorEmail.style.color = "red";
    errorEmail.style.display = "block";
  }
}
// CHECK birthday
const isBirthdayValid = (dateInput) => {
  var birthdayValue = new Date(dateInput);
  if (isNaN(birthdayValue.getTime())) {
    console.log('NON lettre non accepté !');
    return false;
  }
  var today = new Date();
  if (birthdayValue.getTime() >= today.getTime()) {
    
    console.log("NON Date de naissance INVALIDE : 'tu n\'es pas john connor'");
    return false;
  }
  
  return true;
}

const checkBirthday = () => {
  const birthday = birthdayValue.value;
  if(isBirthdayValid(birthday)){
    console.log("OK Birthday valide");
    
    birthdayValue.style.border =  "10px solid green";
    errorBirthday.style.display = "none";
    
    return true;
  } else {
    console.log("NON birthday invalide");
    
    birthdayValue.style.border =  "3px solid red";
    errorBirthday.style.color = "red";
    errorBirthday.style.display = "block";
  }
}
// CHECK quantity
const checkQuantity = () => {
  const quantityValue = quantity.value;
  if (isNaN(quantityValue) || quantityValue === "") {
    console.log("NON Ceci n'est pas un nombre");
    quantity.style.border =  "3px solid red";
    errorQuantity.style.color = "red";
    errorQuantity.style.display = "block";
    return false;
    
  }
  else {
    console.log("OK Ceci est UN nombre !");
    quantity.style.border =  "3px solid green";
    errorQuantity.style.display = "none";
    return true;
  }
}
// CHECK checkbox city
const checkCheckbox = () => {
  const checkboxes = document.querySelectorAll(".checkbox-input");
  var isChecked = false;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].type == "radio" && checkboxes[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (isChecked) {
    console.log("OK NICKEL Au moins une checkbox est cochée");
    errorCheckbox.style.display = "none";
    return true;
  } else {
    console.log("NON Aucune checkbox n'est cochée");
    // checkboxes.style.border =  "3px solid red";
    errorCheckbox.style.color = "red";
    errorCheckbox.style.display = "block";
  }
}
// CHECK Terms
const checkTerm = () => {
  if (!checkboxTerm.checked) {
    console.log("NON les termes de son pas cocher ");
    alert("Vous devez avoir lu et accepté les conditions d'utilisation.");
    errorTerm.style.color= 'red';
    return false;
  }
  else {
    console.log('OK pour les conditions');
    return true;
  }
}
// VALIDATE form
const formValidate = () => {
  if (checkFirstName()&&checkLastName()&&checkEmail()&&checkBirthday()&&checkQuantity()&&checkCheckbox()&&checkTerm()) {
    // alert("Validation OK !");
    alert(buttonSubmit.value);
    modalbg.style.display = "none";
    modalConfirm.style.display = "block";
  }
  else {
    // alert("Votre formulaire n'est pas valide !");
    return false;
  }
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch close modal event
crossModal.addEventListener("click", closeModal);
// launch validate form event
buttonSubmit.addEventListener("click", formValidate);

globalForm.addEventListener("submit", function(event) {
  event.preventDefault();
});
// launch close modal confirm event
btnFermer.addEventListener("click", closeConfirm);