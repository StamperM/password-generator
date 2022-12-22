
var generateBtn = document.querySelector("#generate");
var passwordLength = prompt("Please select a password length between 8 and 128");
var passwordType = prompt("Would you like to use lowercase, uppercase, and special characters?");
var passwordRetry = prompt("You did not select a number between 8 and 128 please try again")
return passwordRetry
}else {
    return passwordType;
function passwordRequirements(){
  var passwordLength = prompt("Please select a password length between 8 and 128");
  if (passwordLength > 128 && passwordLength < 8) {
    return  passwordRetry;
  } else {
    return passwordType;
  }
   if (passwordType = null){
    return 
   }
     
   function createPasswordNumbers(passwordNumber) {
    var results =''
    var passwordNumber = '0123456789'
    for (var i = 0; i <length; i++)
    results += characters.charAt(math.floor(Math.random());
   } 
   function createPasswordType(passwordType){
    var results =''
    var withTypes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%&abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i <length; i++)
    results += characters.charAt(math.floor(Math.random());
  }
}
function generatePassword(){
console.log("you clicked me");
passwordRequirements()

  }

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
