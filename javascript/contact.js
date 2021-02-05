//  <input type="radio" id="yes" name="response" value="male"> Please contact me
//  <input type="radio" id="no" name="response" value="female"> I wanted to voice my opinion
//  <br><br>
//  let responseValue = t=yes.checked ? "yes" : "no"
//  function getResponse() {
//  return document.querySelector('input[name="response"]:checked')

//  document.addEventListener("DOMContentLoaded", function() {
//  fields.firstName = document.getElementById('firstName');
//  fields.lastName = document.getElementById('lastName');
//  fields.email = document.getElementById('email');
//  fields.newsletter = document.getElementById('newsletter');
//  fields.question = document.getElementById('question');
// })
// }
// function isNotEmpty(value) {
//  if (value == null || typeof value == 'undefined' ) return false;
//  return (value.length > 0);
// }
// function isNotEmpty(value) {
//  if (value == null || typeof value == 'undefined' ) return false;
//  return (value.length > 0);
// }
// function fieldValidation(field, validationFunction) {
//  if (field == null) return false;

//  let isFieldValid = validationFunction(field.value)
//  if (!isFieldValid) {
//  field.className = 'placeholderRed';
//  } else {
//  field.className = '';
//  }

//  return isFieldValid;
// }
// function isValid() {
//  var valid = true;
 
//  valid &= fieldValidation(fields.firstName, isNotEmpty);
//  valid &= fieldValidation(fields.lastName, isNotEmpty);
//  valid &= fieldValidation(fields.response, isNotEmpty);
//  valid &= fieldValidation(fields.email, isEmail);
//  valid &= fieldValidation(fields.question, isNotEmpty);
//  valid &= arePasswordsEqual();

//  return valid;
// }

// class User {
//  constructor(firstName, lastName, response, email, question) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.response = response;
//  this.email = email;
//  this.question = question;
//  }
// }

// class User {
//  constructor(firstName, lastName, response, email, question) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.response = response;
//  this.email = email;
//  this.question = question;
//  }
// }

 
(function() {
 
    // Create input element for testing
    var input = document.createElement('input');
     
    // Create the supports object
    var supports = {};
     
    supports.autofocus   = 'autofocus' in input;
    supports.required    = 'required' in input;
    supports.placeholder = 'placeholder' in input;
 
    // Fallback for autofocus attribute
    if(!supports.autofocus) {
         
    }
     
    // Fallback for required attribute
    if(!supports.required) {
         
    }
 
    // Fallback for placeholder attribute
    if(!supports.placeholder) {
         
    }
     
    // Change text inside send button on submit
    var send = document.getElementById('contact-submit');
    if(send) {
        send.onclick = function () {
            this.innerHTML = '...Sending';
        }
    }
 
})();