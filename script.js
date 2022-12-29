var generateBtn = document.querySelector("#generate");

// Prompt user for password length, length has to be 8-128.
// 

function getPasswordLengthFromUser() {
  var howManyNumbers = prompt(
    "Please select a password length between 8 and 128"
  );

  if (howManyNumbers < 8 || howManyNumbers > 128) {
    return getPasswordLengthFromUser();
  } else {
    return howManyNumbers;
  }
}

function getPasswordStyleFromUser() {
  var passwordType = confirm("Would you like your password to include Uppercase,lowercase and special characters?")
  if (passwordType === false){
    return false;
    } else {
  return true;
    } 
  }

function createPasswordNumbers(passwordLength) {
  var results = "";
  var passwordNumber = "0123456789";
  var lengthOfPassword = passwordNumber.length;
  for (var i = 1; i < passwordLength ; i++){
    results += passwordNumber.charAt(Math.floor(Math.random()*lengthOfPassword));
  }return results;
}
function createPasswordType(passwordLength){
  var results = "";
  var withTypes =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%&abcdefghijklmnopqrstuvwxyz";
    var typeLength = withTypes.length;
  for (var i = 0; i < passwordLength; i++){
    results += withTypes.charAt(Math.floor(Math.random()*typeLength));
  }
    return results;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = getPasswordLengthFromUser();

   var passwordType = getPasswordStyleFromUser();
 
  if (passwordType === false) {
    return  createPasswordNumbers(passwordLength);
    
  }
  else {
    
    return  createPasswordType(passwordLength);
  }

 
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)