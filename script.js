var generateBtn = document.querySelector("#generate");

// Prompt user for password length, length has to be 8-128.
// 

function getPasswordLengthFromUser() {
  var howManyNumbers = prompt(
    "Please select a password length between 8 and 128"
  );
  console.log(howManyNumbers);
  if (howManyNumbers < 8 || howManyNumbers > 128) {
    return getPasswordLengthFromUser();
  } else {
    return howManyNumbers;
  }
}

function getPasswordStyleFromUser() {
  var passwordType = prompt("Would you like your password to include Uppercase,lowercase and special characters?")
  if (passwordType = null){
    return;
    } else{
  return passwordType;
    } 
  }



function createPasswordNumbers(passwordLength) {
  var results = "";
  var passwordNumber = "0123456789";
  for (var i = 1; i < passwordLength ; i++)
    results += passwordNumber.charAt(Math.floor(Math.random()*passwordLength));
  return results;
}
function createPasswordType(passwordLength, passwordType) {
  var results = "";
  var withTypes =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%&abcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < passwordLength; i++)
    results += characters.charAt(Math.floor(Math.random()));
    return results;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  console.log("you clicked me");
  var passwordLength = getPasswordLengthFromUser();
  createPasswordNumbers(passwordLength);
  getPasswordStyleFromUser();

  return createPasswordNumbers(passwordLength);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
