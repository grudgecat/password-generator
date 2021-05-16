//when user clicks Generate Password button, 
//prompt user for passwd length, 8-128 chars
//store reply in `passwdlen` variable
//prompt user for character sets to include in password:
//  include lower case?
//  include upper case?
//  include numbers?
//  include special characters?
//VALIDATE at least one of the 4 sets was selected.
//GENERATE PASSWORD using array built of characters selected up to length provided.
//DISPLAY password to console or screen

//SET CONSTANTS AND GLOBAL VARIABLES
var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!","@","#","$","%","^","&","*","(",")",".","?","+","-","_","=",";",":","<",">","~","{","}"];
var passwdCharSet = [];
var password = "";
var passwdlen = 0;
var getRandom = 0;
var reply = "z";

console.log(alphaLower);
console.log(alphaUpper);
console.log(numbers);
console.log(specialChars);
console.log(password);
console.log(passwdlen);

//Prompt user for how long the password should be, btwn 8-128 chars
while (passwdlen <= 8 || passwdlen > 128) {
  passwdlen = prompt("Please enter a length for your password between 8-128 characters: ");
  console.log(passwdlen);
}

var charsets = {
  uc: true,
  lc: true,
  sc: true,
  num: true,
  numOfSets: 4
};

console.log(charsets.uc);
console.log(charsets.lc);
console.log(charsets.sc);
console.log(charsets.num);
console.log(charsets.numOfSets);

//prompt user - use upper case?
while ((reply !== "y") && (reply !== "n")) {
reply = prompt("Do you want to use Upper Case Letters? y or n")
}
console.log(reply);
if (reply === 'n') {
  charsets.uc = false;
  charsets.numOfSets = charsets.numOfSets - 1;
  // charsets.numOfSets -=;
}
else {
  passwdCharSet.push(...alphaUpper);
}

console.log(charsets.uc);
console.log(charsets.numOfSets);
console.log(passwdCharSet);

//prompt user - use lower case?
reply = "z";
while ((reply !== "y") && (reply !== "n")) {
  reply = prompt("Do you want to use Lower Case Letters? y or n")
  }
  console.log(reply);
  if (reply === 'n') {
    charsets.lc = false;
    charsets.numOfSets = charsets.numOfSets - 1;
    // charsets.numOfSets -=;
  }
  else {
    passwdCharSet.push(...alphaLower);
  }

console.log(charsets.lc);
console.log(charsets.numOfSets);
console.log(passwdCharSet);

//prompt user - use special chars?
reply = "z";
while ((reply !== "y") && (reply !== "n")) {
  reply = prompt("Do you want to use Special Characters? y or n")
  }
  console.log(reply);
  if (reply === 'n') {
    charsets.sc = false;
    charsets.numOfSets = charsets.numOfSets - 1;
    // charsets.numOfSets -=;
  }
  else {
    passwdCharSet.push(...specialChars);
  }

console.log(charsets.sc);
console.log(charsets.numOfSets);
console.log(passwdCharSet);

//prompt user - use numbers?
reply = "z";
while ((reply !== "y") && (reply !== "n")) {
  reply = prompt("Do you want to use Numbers? y or n")
  }
  console.log(reply);
  if (reply === 'n') {
    charsets.num = false;
    charsets.numOfSets = charsets.numOfSets - 1;
    // charsets.numOfSets -=;
  }
  else {
    passwdCharSet.push(...numbers);
  }

console.log(charsets.num);
console.log(charsets.numOfSets);
console.log(passwdCharSet);

console.log(passwdCharSet.length);

if (charsets.numOfSets === 0) {
  alert("You have not selected any character sets, please try again.");
}
else {
   //generate password
  //display password
}

var i;
for(i = 0; i < passwdlen; i++) {
  getRandom = Math.floor((Math.random() * passwdCharSet.length));
  // console.log(passwdCharSet[getRandom]);
  password = password + passwdCharSet[getRandom];
  // console.log(passwdCharSet.length);
  // console.log(getRandom);
}

console.log(password);




// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
