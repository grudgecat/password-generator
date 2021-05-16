//when user clicks Generate Password button, 
//prompt user for passwd length, 8-128 chars
//store reply in `passwdlen` variable
//prompt user for character sets to include in password:
//  include lower case?
//  include upper case?
//  include numbers?
//  include special characters?
//  VALIDATE at least one of the 4 sets was selected.
//  GENERATE PASSWORD using array built of characters selected up to length provided.
//Display password to console or screen

//SET CONSTANTS AND GLOBAL VARIABLES
const alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialChars = ["!","@","#","$","%","^","&","*","(",")",".","?","+","-","_","=",";",":","<",">","~","{","}"];
var password = [];
var passwdlen = 0;

console.log(alphaLower);
console.log(alphaUpper);
console.log(numbers);
console.log(specialChars);
console.log(password);
console.log(passwdlen);

//Prompt user for how long the password should be, btwn 8-128 chars
passwdlen = prompt("Please enter your name", "Harry Potter");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
