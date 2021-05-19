//SET GLOBAL VARIABLES
var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var alphaLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!","@","#","$","%","^","&","*","(",")",".","?","+","-","_","=",";",":","<",">","~","{","}"];
var passwdCharSet = [];
var password = "";
var passwdlen = 0;
var getRandom = 0;
var reply = "z";
var charsets = {
  uc: true,
  lc: true,
  sc: true,
  num: true,
  numOfSets: 4
};

  //Prompt user for how long the password should be, btwn 8-128 chars
  while ((passwdlen < 8 || passwdlen > 128) || isNaN(passwdlen)) {
    passwdlen = prompt("Please enter a length for your password between 8-128 characters: ");
  }

  //prompt user - uppercase?
  reply = "z";
    while ((reply !== "y") && (reply !== "n")) {
      reply = prompt("Do you want to use Upper Case Letters? y or n");
      if ((reply !== "y") && (reply !== "n")) {
        alert("Please enter only 'y' or 'n' in the reply box.");
      }
    }
    if (reply === 'n') {
      charsets.uc = false;
      charsets.numOfSets = charsets.numOfSets - 1;
      // charsets.numOfSets --;
    }
    else {
      passwdCharSet.push(...alphaUpper);
    }

  //VERIFY VARIABLE VALUES
  console.log(charsets.uc);
  console.log(charsets.numOfSets);
  console.log(passwdCharSet);

  //prompt user - use lower case?
  reply = "z";
  while ((reply !== "y") && (reply !== "n")) {
    reply = prompt("Do you want to use Lower Case Letters? y or n");
    if ((reply !== "y") && (reply !== "n")) {
      alert("Please enter only 'y' or 'n' in the reply box.");
    }
  }
    if (reply === 'n') {
      charsets.lc = false;
      charsets.numOfSets = charsets.numOfSets - 1;
      // charsets.numOfSets --;
    }
    else {
      passwdCharSet.push(...alphaLower);
    }
  

  //VERIFY VARIABLE VALUES
  console.log(charsets.uc);
  console.log(charsets.numOfSets);
  console.log(passwdCharSet);

  //prompt user - use special chars?
  reply = "z";
  while ((reply !== "y") && (reply !== "n")) {
    reply = prompt("Do you want to use Special Characters? y or n");
    if ((reply !== "y") && (reply !== "n")) {
      alert("Please enter only 'y' or 'n' in the reply box.");
    }
  }
    console.log(reply);
    if (reply === 'n') {
      charsets.sc = false;
      charsets.numOfSets = charsets.numOfSets - 1;
      // charsets.numOfSets --;
    }
    else {
      passwdCharSet.push(...specialChars);
    }
  

  //VERIFY VARIABLE VALUES
  console.log(charsets.uc);
  console.log(charsets.numOfSets);
  console.log(passwdCharSet);

  //prompt user - use numbers?
  reply = "z";
  while ((reply !== "y") && (reply !== "n")) {
    reply = prompt("Do you want to use Numbers? y or n");
    if ((reply !== "y") && (reply !== "n")) {
      alert("Please enter only 'y' or 'n' in the reply box.");
    }
  }
    if (reply === 'n') {
      charsets.num = false;
      charsets.numOfSets = charsets.numOfSets - 1;
      // charsets.numOfSets --;
    }
    else {
      passwdCharSet.push(...numbers);
    }

  //VERIFY VARIABLE VALUES
  console.log(charsets.uc);
  console.log(charsets.numOfSets);
  console.log(passwdCharSet);

//CODE TO GENERATE PASSWORD STRING
function generatePassword() {
  password = "";
  var i;
  for(i = 0; i < passwdlen; i++) {
    getRandom = Math.floor((Math.random() * passwdCharSet.length));
    password = password + passwdCharSet[getRandom];
  }
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  if (charsets.numOfSets === 0) {
    //no char sets were selected, unable to create password string
    alert("You have not selected any character sets, please refresh page and try again.");
  }
  else {
     //CALL generate password to create and display password
     var password = generatePassword();
     var passwordText = document.querySelector("#password");
     passwordText.value = password;
  }
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
