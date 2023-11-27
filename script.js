// Assignment code here
let generatePassword = function() {
    var haslower = false;
    var hasupper = false;
    var hasNum = false;
    var hasspec = false;
    var len = 0
    let lenCriteria = function(){
        len = Number(prompt("Password Length (Between 8 - 128)?"));
        if (len < 8 || len > 128 || isNaN(len)) {
            alert("Invalid length. Please choose a number between 8 and 128.");
            lenCriteria();
        }
        
    }
    let charCriteria = function() {
        haslower = confirm("Contains Lowercase?");
        hasupper = confirm("Contains Uppercase?");
        hasNum = confirm("Contains Numbers?");
        hasspec = confirm("Contains Special Characters?");
        if (!hasNum && !haslower && !hasspec && !hasupper) {
            alert("Please choose at least one character type!");
            charCriteria()
        }
        var allNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var downLett = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var upLett = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        var allSpec = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
        if (hasupper) {
            passwordChar = passwordChar.concat(upLett);

        }
        if (haslower) {
            passwordChar = passwordChar.concat(downLett);
        }
        if (hasspec) {
            passwordChar = passwordChar.concat(allSpec);
        }
        if (hasNum) {
            passwordChar = passwordChar.concat(allNum);

        }
    }
        
    var passwordChar = [];
    
    
    
    let makePass = function() {
        let password = '';
        for(let i = 0; i < len; i ++) {
            randNum = Math.floor(Math.random() * passwordChar.length)
            password += passwordChar[randNum]
        }

        return password;
    }
    lenCriteria();
    charCriteria();
    return makePass();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
