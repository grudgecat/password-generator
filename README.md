# TITLE: PASSWORD GENERATOR

## Project Title: password-generator
Purpose: This project was created to explore vanilla JavaScript. New skills learned included creation and linking of script files, variables, functions, arrays, JavaScript objects and methods. \
The project is a working password generator which allows the user to select password criteria and length between 8-128 characters to return a strong, randomized password.

Creation date: May 2021
Collaborators: Sheri Elgin

## Screen Cap
![screen cap of Password Generator](./assets/screencap.png )

## Project Links
GitHub Source Code: https://github.com/grudgecat/password-generator
Site URL/Pages link: https://grudgecat.github.io/password-generator/

 
## Expected Behavior 
_Pseudocode/Expected bevhavior:_ \
When user CLICKS Generate Password button, \
PROMPT user for passwd length, 8-128 chars, \
VALIDATE reply, once reply is between 8-128, then STORE reply in `passwdlen` variable, \
PROMPT user for character sets to include in password: 
 * include lower case?
 * include upper case?
 * include numbers?
 * include special characters? 
STORE replies in `charsets` object, \
IF reply is NO, do not include, then set `charsets` value to false & decrement counter, \
VALIDATE at least one of the 4 sets was selected, \
IF counter reaches zero, display alert error to user, unable to generate password and end. \
ELSE generate character set array, concat all arrays where charset include values are true into `passwordCharSet` array. \
GENERATE PASSWORD using array built of characters selected up to length provided. \
DISPLAY password to screen. 

## Notes
