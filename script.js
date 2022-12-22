
var generateBtn = document.querySelector("#generate");

var passwordType = prompt("Would you like to use lowercase, uppercase, and special characters?");
var passwordLength = prompt("Please select a password length between 8 and 128");
var passwordLength = Number(howLongOfPassword);

function passwordLengthRequirements(){
  if (passwordLength < 8 || passwordLength >128){
  return passwordLength;
} else {
  return passwordType;
}
 
 
  // if (passwordLength > 128 && passwordLength < 8) {
  //   return  var passwordRetry = y 
  // } else {
  //   return 

  // }
   if (passwordType = null){
    return 
   }
     
   function createPasswordNumbers(passwordNumber) {
    var results =''
    var passwordNumber = '0123456789'
    for (var i = 0; i < passwordLength; i++)
    results += characters.charAt(math.floor(Math.random());
   } 
   function createPasswordType(passwordType){
    var results =''
    var withTypes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%&abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < passwordLength; i++)
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
