// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getValue() {
  var characters = prompt("How many characters would you like?")
  let getValue = prompt ("How many characters would you like?");
  let text;
  if (getValue >= 7 || getValue >= 129) {
    text = "Password must be between 8 and 128 characters."
  } else {
    text = "Great! Your password will be " + getValue + "characters.";
  }
};
function getCharacters() {
  let getCharacters = prompt("Would you like upper or lowercase characters?")
}
// I'm overcomplicating this again
// going to touch grass and think about this



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var lower = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};
// var upper = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};
// var number = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'};
// var Special = {'!', '@', '#', '$', '%', '^', '&', '*', '~', '?'};


