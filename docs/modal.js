

// == DOM Elements "Listes Modal" ==
// Modal "SIGNUP"
const modalSignup = document.querySelector(".bground");
const modalSignupCross = document.querySelector(".close");
// // MODAL Confirmation
const modalConfirm = document.querySelector(".confirm");
const btnFermer = document.querySelector("#fermer");

// == DOM Elements "form" ==
const form = document.querySelector("form");

const firstName = document.querySelector("#first");
const firstError = document.querySelector('#first-error');

const lastName = document.querySelector("#last");
const lastError = document.querySelector('#last-error');

const emailName = document.querySelector("#email");
const emailError = document.querySelector('.email-error');

const birthdate = document.querySelector("#birthdate");
const birthdayError = document.querySelector('#birthday-error');

const quantity = document.querySelector("#quantity");
const quantityError = document.querySelector('#quantity-error');

const checkboxTerm = document.getElementById("checkbox1");

const textControl = document.querySelectorAll(".text-control");


// Bouton "je m'inscris"
const btnSignup = document.querySelectorAll(".modal-btn");
const btnSignupSubmit = document.querySelector(".btn-submit");



// ==== Listes "FONCTIONS" ====
// ============================

// Fonctions "gestion responsive"
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Fonctions "lancement de la Modal"
function launchModal() {
  modalSignup.style.display = "block";
}
// Focntions "fermeture de la Modal"
function closeModal() {
  modalSignup.style.display = "none";
}
// Fonction "fermeture de la modal de confirmation"
function closeConfirm() {
  // modalConfirm.style.display = "none";
  location.reload();
}
function isFormatNameValid(formatNom){
  var nameRegex = new RegExp(/^[a-zA-ZÀ-ÿ]+([ '-][a-zA-ZÀ-ÿ]+)*$/i);

  return nameRegex.test(formatNom);
}
// Fonction ' verification "FIRSTNAME" '
function isFirstnameValid() {
  // const textControl = document.querySelectorAll(".text-control");
  const firstNameValue = firstName.value.trim();
  if (firstNameValue === "" || firstNameValue.length < 2 || !isFormatNameValid(firstNameValue)) {
    // Le champ est vide ou la longueur est inférieure à 3 caractères
    firstError.textContent = "Le champ ne peut pas être vide et doit être supérieure ou égale à 2 caractères !";
  firstError.className = "errors";
  firstName.classList.add("inputBorderColor");
  return false;
} else {
  firstError.textContent = "Prénom Ok";
  firstError.className = "none";
  
  firstName.classList.remove("inputBorderColor");
    return true;
  }
}
// Fonction ' verification "LASTNAME" '
function isLastnameValid() {
  const lastNameValue = lastName.value.trim();
  if (lastNameValue === "" || lastNameValue.length < 2 || !isFormatNameValid(lastNameValue)) {
    // Le champ est vide ou la longueur est inférieure à 3 caractères
    lastError.textContent = "Le champ ne peut pas être vide et doit être supérieure ou égale à 2 caractères !";
  lastError.className = "errors";
  lastName.classList.add("inputBorderColor");
  return false;
} else {
  lastError.textContent = "Nom Ok";
  lastError.className = "none";
  lastName.classList.remove("inputBorderColor");
    return true;
  }
}
// Fonction "véricfication 'regex Email'"
function isFormatEmailValid(email){
  var emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
  return emailReg.test(email);
}
// Fonction "verification 'EMAIL' "
function isEmailValid() {
  const email = emailName.value;
  if(isFormatEmailValid(email)) {
    // console.log("OK Email valide");
    emailError.textContent = "Email VALIDE !";

    emailName.classList.remove("inputBorderColor");

    emailError.className = "none";
    return true;
  } else {
    // console.log("NON : Email invalide");
    emailError.textContent = "Format Email INVALIDE !";
    emailError.className = "errors";
    emailName.classList.add("inputBorderColor");
    return false;
  }
}
// Fonction "verification 'BIRTHDAY' "
function isBirthdayValid() {
  // console.log('test birthday');
  
  const dateInput = birthdate.value;
  var birthdayValue = new Date(dateInput);
  
  // Verification si la date n'est pas situé dans le futur
  var today = new Date();
  if (birthdayValue.getTime() >= today.getTime()) {
    // console.log("NON Date de naissance INVALIDE : 'tu n\'es pas john connor'");
    birthdayError.textContent = "Tu n\'es pas john connor";
    birthdayError.className = "errors";
    return false;
  }
  // Verification si la valeur est bien un nombre
  if (isNaN(birthdayValue.getTime())) {
    // console.log('NON lettre non accepté !');
    birthdayError.textContent = "Lettre non accepté !";
    birthdayError.className = "errors";
    birthdate.classList.add("inputBorderColor");
    
    return false;
  }
  birthdayError.textContent = "accepté !";
  birthdayError.className = "none";
  birthdate.classList.remove("inputBorderColor");
  
  return true;
}
// Fonction "verification 'QUANTITY' "
function isQuantityValid() {
  // console.log("test Quantity");
  
  const quantityValue = quantity.value;
  if (isNaN(quantityValue) || quantityValue === "") {
    // console.log("NON Ceci n'est pas un nombre");
    quantityError.textContent = "Doit être un chiffre !";
    quantityError.className = "errors";
    quantity.classList.add("inputBorderColor");
    
    return false;
    
  }
  else {
    // console.log("OK  quantité VALIDE !");
    quantityError.textContent = "OK quantité VALIDE";
    quantityError.className = "none";
    quantity.classList.remove("inputBorderColor");
    return true;
  }
}
// Fonction "verification 'RADIO' "
function isRadioValid() {
  // console.log("test RADIO");
  const radios = document.querySelectorAll(".checkbox-input");
  const radiosError = document.querySelector('#checkbox-error');
  
  var isChecked = false;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type == "radio" && radios[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (isChecked) {
    // console.log("OK NICKEL Au moins une checkbox est cochée");
    radiosError.textContent = "";
    // errorCheckbox.style.display = "none";
    radiosError.className = "none";
    return true;
  } else {
    // console.log("NON Aucune checkbox n'est cochée");
    radiosError.textContent = "Vous devez choisir une option.";
    radiosError.className = "errors";

    // checkboxes.style.border =  "3px solid red";
    // errorCheckbox.style.color = "red";
    // errorCheckbox.style.display = "block";
  }
}
// Fonction "verification 'des conditions d'utilisation' "
function isTermsValid() {
  // console.log("Test TERMS");
  if (!checkboxTerm.checked) {
    // console.log("NON les termes de son pas cocher ");
    alert("Vous devez avoir lu et accepté les conditions d'utilisation.");
    // errorTerm.style.color= 'red';
    return false;
  }
  else {
    // console.log('OK pour les conditions');
    return true;
  }
}
// Fonction "verification si 'Formulaire valide' "
function isFormValid() {
  isFirstnameValid();
  isLastnameValid();
  isEmailValid();
  isBirthdayValid();
  isQuantityValid();
  isRadioValid();
  isTermsValid();

  if (isFirstnameValid()&&
  isLastnameValid()&&
  isEmailValid()&&
  isBirthdayValid()&&
  isQuantityValid()&&
  isRadioValid()&&
  isTermsValid()) {
    // console.log("Formulaire valide");
    // alert("Formulaire valide");
    return true;
  } else {
    // console.log("Formulaire invalide");
    return false;
  }
}

// ==== Listes "EVENTS" ====
// ============================

// Event "Lancement de la modal "SIGNUP"
btnSignup.forEach((btn) => btn.addEventListener("click", launchModal));
// Event "Fermeture de la modal "SIGNUP"
modalSignupCross.addEventListener("click", closeModal);
// Event "Fermeture de la modal "CONFIRMATION"
modalConfirm.addEventListener("click", closeConfirm);
// Event "soumission Formulaire"
form.addEventListener("submit", function(event) {
  // Empêcher la soumission par défaut du formulaire
  event.preventDefault();

  

  // isFormValid();
  if (isFormValid()) {
    // form.submit();
    modalSignup.style.display = "none";
    modalConfirm.style.display = "block";
  }
});