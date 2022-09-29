// Assignment code here
var generateBtn = document.querySelector("#generate");

// Generate password based on user's selected criteria
function generatePassword() {
  // Local variables
  // Array of characters to generate the password from
  var passwordLength = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = lowercaseChars.toUpperCase();
  var numericChars = "0123456789";
  var specialChrs = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var availableChars = [];
  var password = "";

  // Prompt user for password length (8-128)
  passwordLength = prompt("Please enter a password length: (8-128)", "");

  // Validate input
  if (passwordLength < 129 && passwordLength > 7) {
  // Do nothing
  } else {
    alert("Please input correct password criteria.");
    return;
  }


// Prompt user for character types (lowercase, uppercase, numeric, and/or special characters)
var lowercase = confirm("would you like your password to include lowercase characters?");
var uppercase = confirm("would you like your password to include uppercase characters?");
var numeric = confirm("would you like your password to include numeric characters?");
var special = confirm("would you like your password to include special characters?");


// Build availableChars array and validate input (at least one chosen)
if (lowercase) {
  availableChars += lowercaseChars;
}
if (uppercase) {
  availableChars += uppercaseChars;
}
if (numeric) {
  availableChars += numericChars;
}
if (special) {
  availableChars += specialChrs;
}
if (availableChars == "") {
  alert("Please input correct password criteria.");
  return;
}

console.log(availableChars);


// Generate password and return it
for (var i = 0; i < passwordLength; i++) {
  var randomIdx = Math.floor(Math.random() * availableChars.length);
  password = password.concat(availableChars[randomIdx]);
}

return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);