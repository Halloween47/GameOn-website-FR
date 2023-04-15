
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const crossModal = document.querySelector(".close");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const errorFirst = document.querySelector(".error-first");
const errorLast = document.querySelector(".error-last");
const emailValue = document.querySelector("#email");
const quantity = document.querySelector("#quantity");
const checkboxes = document.querySelectorAll(".checkbox-input");
const buttonSubmit = document.querySelector(".btn-submit");

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

function closeModal() {
  modalbg.style.display = "none";
}

const checkFirstName = () => {
  const valueFirst = firstName.value.trim();
  if (valueFirst.length > 2 && valueFirst !== '') {
    console.log("FIRST cest bon tu peux passer");
    firstName.style.border =  "10px solid green";
    errorFirst.style.display = "none";
    return true;
  }
  else {
    console.log("FIRST pas bon tu peux pas passer");
    firstName.style.border =  "3px solid red";
    errorFirst.style.color = "red";
    errorFirst.style.display = "block";
  }
}
const checkLastName = () => {
  const valueLast = lastName.value.trim();
  if (valueLast.length > 2 && valueLast !== '') {
    console.log("LAST cest bon tu peux passer");
    lastName.style.border =  "10px solid green";
    errorLast.style.display = "none";
    return true;
  }
  else {
    console.log("LAST pas bon tu peux pas passer");
    lastName.style.border =  "3px solid red";
    errorLast.style.color = "red";
    errorLast.style.display = "block";
  }
}

function isEmailValid(email){
  var emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
  return emailReg.test(email);
}
const checkEmail = () => {
  const email = emailValue.value;
  if(isEmailValid(email)){
    console.log("Email valide");
    return true;
  } else {
    console.log("Email invalide");
  }
}

const checkQuantity = () => {
  const quantityValue = quantity.value;
  if (isNaN(quantityValue) || quantityValue === "") {
    console.log("Ceci n'est pas un nombre");
    return false;
  }
  else {
    console.log("Ceci est UN nombre !");
    return true;
  }
}

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
    console.log("NICKEL Au moins une checkbox est cochée");
    return true;
  } else {
    console.log("Aucune checkbox n'est cochée");
  }
}

const formValidate = () => {
  if (checkFirstName()&&checkLastName()&&checkEmail()&&checkQuantity()&&checkCheckbox()) {
    // alert("Validation OK !");
    alert(buttonSubmit.value);
  }
  else {
    alert("Il y a un probleme quelque part NON");
  }
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

crossModal.addEventListener("click", closeModal);

buttonSubmit.addEventListener("click", formValidate);